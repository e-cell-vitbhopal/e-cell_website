import React, { useState, useEffect } from 'react'
import { supabase } from '../../config/supabaseClient'
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa'
import { playTap, playSuccess } from '../../utils/sound'
import '../../styles/pitchpulse.css'

const SurveyForm = ({ startup, userId, userEmail }) => {
    const [questions, setQuestions] = useState([])
    const [responses, setResponses] = useState({})
    const [loading, setLoading] = useState(true)
    const [submitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    // Default questions if none configured
    const defaultQuestions = [
        { id: 'default_q1', question_text: 'How innovative is the idea?', question_type: 'rating', display_order: 1 },
        { id: 'default_q2', question_text: 'How clear was the presentation?', question_type: 'rating', display_order: 2 },
        { id: 'default_q3', question_text: 'How viable is the business model?', question_type: 'rating', display_order: 3 },
        { id: 'default_q4', question_text: 'Any feedback for the team?', question_type: 'text', display_order: 4 }
    ]

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

            setQuestions(data && data.length > 0 ? data : defaultQuestions)
        } catch (error) {
            console.error('Error fetching questions:', error)
            setQuestions(defaultQuestions)
        } finally {
            setLoading(false)
        }
    }

    const handleRatingSelect = (questionId, rating) => {
        setResponses(prev => ({
            ...prev,
            [questionId]: rating.toString()
        }))
        // Haptic feedback & Sound
        if (navigator.vibrate) navigator.vibrate(10)
        playTap()
    }

    const handleTextChange = (questionId, text) => {
        setResponses(prev => ({
            ...prev,
            [questionId]: text
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)

        // Haptic feedback
        if (navigator.vibrate) navigator.vibrate(50)

        try {
            const realQuestions = questions.filter(q => !q.id.startsWith('default_'))

            if (realQuestions.length > 0) {
                const responsesToInsert = realQuestions
                    .filter(q => responses[q.id])
                    .map(q => ({
                        question_id: q.id,
                        user_id: userId,
                        user_email: userEmail,
                        response_value: responses[q.id]
                    }))

                if (responsesToInsert.length > 0) {
                    const { error } = await supabase
                        .from('survey_responses')
                        .upsert(responsesToInsert, {
                            onConflict: 'question_id,user_id',
                            ignoreDuplicates: false
                        })

                    if (error) throw error
                }
            }

            setSubmitted(true)
            playSuccess()
        } catch (error) {
            console.error('Error submitting survey:', error)
            setSubmitted(true)
        } finally {
            setSubmitting(false)
        }
    }

    if (loading) {
        return (
            <div className="pp-mobile-waiting" style={{ minHeight: '40vh' }}>
                <div className="pp-loading-spinner"></div>
                <p className="pp-mobile-waiting-status">Loading survey...</p>
            </div>
        )
    }

    if (submitted) {
        return (
            <div className="pp-mobile-success">
                <FaCheckCircle className="pp-mobile-success-icon" />
                <h3 className="pp-mobile-success-title">Thank you!</h3>
                <p className="pp-mobile-success-text">
                    Your feedback for <strong>{startup?.name}</strong> has been recorded.
                </p>
            </div>
        )
    }

    return (
        <>
            <div className="pp-mobile-survey-container">
                <form onSubmit={handleSubmit}>
                    {questions.map((question, index) => (
                        <div key={question.id} className="pp-mobile-survey-question">
                            <label className="pp-mobile-survey-question-label">
                                <span className="pp-mobile-survey-question-number">{index + 1}. </span>
                                {question.question_text}
                            </label>

                            {question.question_type === 'rating' ? (
                                <div className="pp-mobile-survey-rating-grid">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                        <button
                                            key={num}
                                            type="button"
                                            className={`pp-mobile-survey-rating-btn ${responses[question.id] === num.toString()
                                                ? 'pp-mobile-survey-rating-btn-selected'
                                                : ''
                                                }`}
                                            onClick={() => handleRatingSelect(question.id, num)}
                                        >
                                            {num}
                                        </button>
                                    ))}
                                </div>
                            ) : question.question_type === 'choice' && question.options ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {(Array.isArray(question.options) ? question.options : []).map((option, optIdx) => (
                                        <button
                                            key={optIdx}
                                            type="button"
                                            className={`pp-btn-mobile pp-btn-mobile-block ${responses[question.id] === option ? 'pp-btn-mobile-primary' : 'pp-btn-mobile-secondary'}`}
                                            onClick={() => handleRatingSelect(question.id, option)}
                                            style={{ justifyContent: 'flex-start', textAlign: 'left' }}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <textarea
                                    className="pp-mobile-textarea"
                                    rows="3"
                                    placeholder="Share your thoughts..."
                                    value={responses[question.id] || ''}
                                    onChange={(e) => handleTextChange(question.id, e.target.value)}
                                />
                            )}
                        </div>
                    ))}
                </form>
            </div>

            {/* Fixed bottom submit button */}
            <div className="pp-mobile-bottom-action">
                <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="pp-btn-mobile pp-btn-mobile-primary pp-btn-mobile-block"
                >
                    <FaPaperPlane />
                    {submitting ? 'Submitting...' : 'Submit Feedback'}
                </button>
            </div>
        </>
    )
}

export default SurveyForm
