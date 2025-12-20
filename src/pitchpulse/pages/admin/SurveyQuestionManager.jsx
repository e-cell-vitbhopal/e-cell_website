import React, { useState, useEffect } from 'react'
import { supabase } from '../../config/supabaseClient'
import { FaPlus, FaTrash, FaTimes } from 'react-icons/fa'
import '../../styles/pitchpulse.css'

const SurveyQuestionManager = ({ startup, onClose }) => {
    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [newQuestion, setNewQuestion] = useState({
        question_text: '',
        question_type: 'rating',
        options: ['']  // For MCQ options
    })

    useEffect(() => {
        if (startup?.id) {
            fetchQuestions()
        }
    }, [startup?.id])

    const fetchQuestions = async () => {
        try {
            const { data, error } = await supabase
                .from('survey_questions')
                .select('*')
                .eq('startup_id', startup.id)
                .order('display_order', { ascending: true })

            if (error) throw error
            setQuestions(data || [])
        } catch (error) {
            console.error('Error fetching questions:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleAddQuestion = async () => {
        if (!newQuestion.question_text.trim()) return

        // For choice type, filter out empty options
        const optionsToSave = newQuestion.question_type === 'choice'
            ? newQuestion.options.filter(o => o.trim() !== '')
            : null

        if (newQuestion.question_type === 'choice' && (!optionsToSave || optionsToSave.length < 2)) {
            alert('Please add at least 2 options for MCQ')
            return
        }

        setSaving(true)
        try {
            const { data, error } = await supabase
                .from('survey_questions')
                .insert([{
                    startup_id: startup.id,
                    question_text: newQuestion.question_text,
                    question_type: newQuestion.question_type,
                    options: optionsToSave,
                    display_order: questions.length + 1
                }])
                .select()

            if (error) throw error

            setQuestions([...questions, data[0]])
            setNewQuestion({ question_text: '', question_type: 'rating', options: [''] })
        } catch (error) {
            console.error('Error adding question:', error)
            alert('Error adding question: ' + error.message)
        } finally {
            setSaving(false)
        }
    }

    const handleDeleteQuestion = async (questionId) => {
        if (!window.confirm('Delete this question?')) return

        try {
            const { error } = await supabase
                .from('survey_questions')
                .delete()
                .eq('id', questionId)

            if (error) throw error

            setQuestions(questions.filter(q => q.id !== questionId))
        } catch (error) {
            console.error('Error deleting question:', error)
        }
    }

    const handleUpdateQuestion = async (questionId, updates) => {
        try {
            const { error } = await supabase
                .from('survey_questions')
                .update(updates)
                .eq('id', questionId)

            if (error) throw error

            setQuestions(questions.map(q =>
                q.id === questionId ? { ...q, ...updates } : q
            ))
        } catch (error) {
            console.error('Error updating question:', error)
        }
    }

    // Handle new question MCQ option changes
    const handleNewOptionChange = (index, value) => {
        const updatedOptions = [...newQuestion.options]
        updatedOptions[index] = value
        setNewQuestion({ ...newQuestion, options: updatedOptions })
    }

    const addNewOption = () => {
        setNewQuestion({ ...newQuestion, options: [...newQuestion.options, ''] })
    }

    const removeNewOption = (index) => {
        const updatedOptions = newQuestion.options.filter((_, i) => i !== index)
        setNewQuestion({ ...newQuestion, options: updatedOptions })
    }

    const getTypeLabel = (type) => {
        switch (type) {
            case 'rating': return 'Rating (1-10)'
            case 'choice': return 'MCQ'
            case 'text': return 'Text'
            default: return type
        }
    }

    if (loading) {
        return (
            <div className="pp-modal-overlay">
                <div className="pp-modal pp-fade-in">
                    <div className="pp-loading-spinner" style={{ margin: '2rem auto' }}></div>
                </div>
            </div>
        )
    }

    return (
        <div className="pp-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
            <div className="pp-modal pp-fade-in" style={{ maxWidth: '600px', maxHeight: '85vh', overflow: 'auto' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '0.25rem' }}>
                            Survey Questions
                        </h2>
                        <p style={{ color: '#9CA3AF', fontSize: '0.9rem' }}>
                            for {startup.name}
                        </p>
                    </div>
                    <button onClick={onClose} className="pp-btn-icon"><FaTimes /></button>
                </div>

                {/* Existing Questions */}
                <div style={{ marginBottom: '1.5rem' }}>
                    {questions.length === 0 ? (
                        <div style={{
                            textAlign: 'center',
                            padding: '2rem',
                            border: '1px dashed #374151',
                            borderRadius: '8px',
                            color: '#6B7280'
                        }}>
                            <p>No questions added yet.</p>
                            <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
                                Add questions below for audience feedback.
                            </p>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {questions.map((question, index) => (
                                <div
                                    key={question.id}
                                    style={{
                                        padding: '1rem',
                                        background: '#1F2937',
                                        borderRadius: '8px',
                                        border: '1px solid #374151'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.5rem' }}>
                                        <span style={{ color: '#6B7280', fontSize: '0.9rem', fontWeight: 'bold', minWidth: '24px' }}>
                                            {index + 1}.
                                        </span>
                                        <div style={{ flex: 1 }}>
                                            <p style={{ color: 'white', marginBottom: '0.5rem' }}>{question.question_text}</p>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <span className="pp-badge pp-badge-draft">{getTypeLabel(question.question_type)}</span>
                                                {question.question_type === 'choice' && question.options && (
                                                    <span style={{ color: '#6B7280', fontSize: '0.8rem' }}>
                                                        {question.options.length} options
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleDeleteQuestion(question.id)}
                                            className="pp-btn-icon"
                                            style={{ color: '#EF4444' }}
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                    {question.question_type === 'choice' && question.options && (
                                        <div style={{ marginLeft: '32px', marginTop: '0.5rem' }}>
                                            {question.options.map((opt, i) => (
                                                <div key={i} style={{ color: '#9CA3AF', fontSize: '0.85rem', padding: '0.25rem 0' }}>
                                                    • {opt}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Add New Question */}
                <div style={{
                    padding: '1rem',
                    background: 'rgba(251, 191, 36, 0.1)',
                    borderRadius: '8px',
                    border: '1px solid #78350F'
                }}>
                    <h4 style={{ color: '#FBBF24', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        Add New Question
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <input
                            type="text"
                            value={newQuestion.question_text}
                            onChange={(e) => setNewQuestion({ ...newQuestion, question_text: e.target.value })}
                            className="pp-input"
                            placeholder="Enter your question..."
                        />

                        <select
                            value={newQuestion.question_type}
                            onChange={(e) => setNewQuestion({ ...newQuestion, question_type: e.target.value })}
                            className="pp-input"
                        >
                            <option value="rating">Rating (1-10)</option>
                            <option value="choice">MCQ (Multiple Choice)</option>
                            <option value="text">Text Response</option>
                        </select>

                        {/* MCQ Options Input */}
                        {newQuestion.question_type === 'choice' && (
                            <div style={{ background: '#1F2937', padding: '1rem', borderRadius: '8px', border: '1px solid #374151' }}>
                                <p style={{ color: '#9CA3AF', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                                    Add options (minimum 2):
                                </p>
                                {newQuestion.options.map((option, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                        <input
                                            type="text"
                                            value={option}
                                            onChange={(e) => handleNewOptionChange(idx, e.target.value)}
                                            className="pp-input"
                                            placeholder={`Option ${idx + 1}`}
                                            style={{ flex: 1 }}
                                        />
                                        {newQuestion.options.length > 1 && (
                                            <button
                                                onClick={() => removeNewOption(idx)}
                                                className="pp-btn-icon"
                                                style={{ color: '#EF4444' }}
                                            >
                                                <FaTimes />
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <button
                                    onClick={addNewOption}
                                    className="pp-btn pp-btn-secondary"
                                    style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                                >
                                    <FaPlus /> Add Option
                                </button>
                            </div>
                        )}

                        <button
                            onClick={handleAddQuestion}
                            disabled={saving || !newQuestion.question_text.trim()}
                            className="pp-btn pp-btn-primary"
                            style={{ alignSelf: 'flex-start' }}
                        >
                            <FaPlus /> Add Question
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
                    <button onClick={onClose} className="pp-btn pp-btn-secondary">
                        Done
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SurveyQuestionManager
