import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../../config/supabaseClient'
import { FaArrowLeft, FaStar, FaUsers, FaChartBar, FaDownload, FaRocket, FaImage } from 'react-icons/fa'
import '../../styles/pitchpulse.css'

const StartupResults = () => {
    const { startupId } = useParams()
    const navigate = useNavigate()
    const [startup, setStartup] = useState(null)
    const [event, setEvent] = useState(null)
    const [ratings, setRatings] = useState([])
    const [questions, setQuestions] = useState([])
    const [responses, setResponses] = useState([])
    const [loading, setLoading] = useState(true)
    const infographicsRef = useRef(null)

    useEffect(() => {
        fetchData()
    }, [startupId])

    const fetchData = async () => {
        try {
            // Fetch startup data
            const { data: startupData, error: startupError } = await supabase
                .from('startups')
                .select('*')
                .eq('id', startupId)
                .single()

            if (startupError) throw startupError
            setStartup(startupData)

            // Fetch event data
            const { data: eventData } = await supabase
                .from('events')
                .select('*')
                .eq('id', startupData.event_id)
                .single()
            setEvent(eventData)

            // Fetch ratings
            const { data: ratingsData } = await supabase
                .from('startup_ratings')
                .select('*')
                .eq('startup_id', startupId)
            setRatings(ratingsData || [])

            // Fetch survey questions
            const { data: questionsData } = await supabase
                .from('survey_questions')
                .select('*')
                .eq('startup_id', startupId)
                .order('display_order', { ascending: true })
            setQuestions(questionsData || [])

            // Fetch survey responses
            if (questionsData && questionsData.length > 0) {
                const questionIds = questionsData.map(q => q.id)
                const { data: responsesData } = await supabase
                    .from('survey_responses')
                    .select('*')
                    .in('question_id', questionIds)
                setResponses(responsesData || [])
            }
        } catch (error) {
            console.error('Error fetching data:', error)
        } finally {
            setLoading(false)
        }
    }

    // Calculate statistics
    const averageRating = ratings.length > 0
        ? (ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length).toFixed(1)
        : 0

    // Rating distribution (1-10 scale)
    const ratingDistribution = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(rating => ({
        rating,
        count: ratings.filter(r => r.rating === rating).length
    }))
    const maxRatingCount = Math.max(...ratingDistribution.map(r => r.count), 1)

    // Survey response aggregation
    const getQuestionStats = (questionId) => {
        const questionResponses = responses.filter(r => r.question_id === questionId)
        const question = questions.find(q => q.id === questionId)

        if (question?.question_type === 'rating') {
            const avg = questionResponses.length > 0
                ? (questionResponses.reduce((sum, r) => sum + parseFloat(r.response_value), 0) / questionResponses.length).toFixed(1)
                : 0
            return { type: 'rating', average: avg, count: questionResponses.length }
        }

        // For text/choice responses, group by value
        const grouped = {}
        questionResponses.forEach(r => {
            grouped[r.response_value] = (grouped[r.response_value] || 0) + 1
        })
        return { type: 'grouped', data: grouped, count: questionResponses.length }
    }

    const handleExportData = async () => {
        let csv = ''

        // Startup Summary
        csv += 'STARTUP SUMMARY\n'
        csv += 'Name,Description,Average Rating,Total Votes\n'
        csv += `"${startup.name}","${startup.description || ''}",${averageRating},${ratings.length}\n`
        csv += '\n\n'

        // Rating Distribution
        csv += 'RATING DISTRIBUTION\n'
        csv += 'Rating,Count\n'
        ratingDistribution.forEach(r => {
            csv += `${r.rating},${r.count}\n`
        })
        csv += '\n\n'

        // All Ratings
        csv += 'INDIVIDUAL RATINGS\n'
        csv += 'User Email,Rating,Submitted At\n'
        ratings.forEach(r => {
            csv += `${r.user_email},${r.rating},${r.created_at}\n`
        })
        csv += '\n\n'

        // Survey Responses
        csv += 'SURVEY RESPONSES\n'
        csv += 'Question,User Email,Response,Submitted At\n'
        responses.forEach(r => {
            const question = questions.find(q => q.id === r.question_id)
            csv += `"${question?.question_text || ''}",${r.user_email},"${r.response_value}",${r.created_at}\n`
        })

        // Download
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        const sanitizedName = startup.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()
        link.download = `${sanitizedName}_results_${new Date().toISOString().split('T')[0]}.csv`
        link.click()
    }

    const handleDownloadInfographics = async () => {
        if (!infographicsRef.current) return

        try {
            // Dynamic import of html2canvas
            const html2canvasModule = await import('html2canvas')
            const html2canvas = html2canvasModule.default

            const canvas = await html2canvas(infographicsRef.current, {
                backgroundColor: '#080216',
                scale: 2,
                useCORS: true,
                logging: false
            })

            const link = document.createElement('a')
            link.href = canvas.toDataURL('image/png')
            const sanitizedName = startup.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()
            link.download = `${sanitizedName}_infographic_${new Date().toISOString().split('T')[0]}.png`
            link.click()
        } catch (error) {
            console.error('Error generating infographic:', error)
            alert('Error generating infographic. Please try again.')
        }
    }

    if (loading) {
        return (
            <div className="pp-container pp-loading-container">
                <div className="pp-loading-spinner"></div>
                <p className="pp-loading-text">Loading results...</p>
            </div>
        )
    }

    if (!startup) {
        return (
            <div className="pp-container">
                <p style={{ color: '#9CA3AF' }}>Startup not found.</p>
            </div>
        )
    }

    return (
        <div className="pp-container">
            {/* Navigation */}
            <button
                onClick={() => navigate(`/pitchpulse/admin/event/${event?.id}`)}
                className="pp-btn pp-btn-secondary"
                style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
                <FaArrowLeft /> Back to Event
            </button>

            {/* Page Header */}
            <div className="pp-results-header">
                <div className="pp-results-logo">
                    {startup.logo_url ? (
                        <img src={startup.logo_url} alt={startup.name} />
                    ) : (
                        <FaRocket size={32} color="#9CA3AF" />
                    )}
                </div>
                <h1 className="pp-results-title">{startup.name}</h1>
                <p className="pp-results-subtitle">{startup.description}</p>
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button onClick={handleExportData} className="pp-btn" style={{ backgroundColor: '#10B981' }}>
                        <FaDownload /> Export CSV
                    </button>
                    <button onClick={handleDownloadInfographics} className="pp-btn" style={{ backgroundColor: '#8B5CF6' }}>
                        <FaImage /> Download Image
                    </button>
                </div>
            </div>

            {/* Infographics Content - wrapped for screenshot */}
            <div ref={infographicsRef} style={{ backgroundColor: 'var(--pp-bg-base)', padding: '1rem' }}>

                {/* Stats Cards */}
                <div className="pp-results-stats">
                    <div className="pp-results-stat-card">
                        <div className="pp-results-stat-icon" style={{ backgroundColor: 'var(--pp-accent-gold-soft)' }}>
                            <FaStar color="var(--pp-accent-gold)" size={24} />
                        </div>
                        <div className="pp-results-stat-value">{averageRating}</div>
                        <div className="pp-results-stat-label">Average Rating</div>
                    </div>
                    <div className="pp-results-stat-card">
                        <div className="pp-results-stat-icon" style={{ backgroundColor: 'var(--pp-accent-cyan-soft)' }}>
                            <FaUsers color="var(--pp-accent-cyan)" size={24} />
                        </div>
                        <div className="pp-results-stat-value">{ratings.length}</div>
                        <div className="pp-results-stat-label">Total Votes</div>
                    </div>
                    <div className="pp-results-stat-card">
                        <div className="pp-results-stat-icon" style={{ backgroundColor: 'var(--pp-accent-violet-soft)' }}>
                            <FaChartBar color="var(--pp-accent-violet)" size={24} />
                        </div>
                        <div className="pp-results-stat-value">{responses.length}</div>
                        <div className="pp-results-stat-label">Survey Responses</div>
                    </div>
                </div>

                {/* Rating Distribution Chart */}
                <div className="pp-results-section">
                    <h2 className="pp-results-section-title">Rating Distribution</h2>
                    <div className="pp-results-chart-card">
                        {ratingDistribution.map(item => (
                            <div key={item.rating} className="pp-results-bar-row">
                                <div className="pp-results-bar-label">
                                    {item.rating}
                                </div>
                                <div className="pp-results-bar-container">
                                    <div
                                        className="pp-results-bar-fill"
                                        style={{
                                            width: `${(item.count / maxRatingCount) * 100}%`,
                                            backgroundColor: item.rating >= 7 ? 'var(--pp-accent-emerald)' :
                                                item.rating >= 4 ? 'var(--pp-accent-gold)' : 'var(--pp-accent-red)'
                                        }}
                                    ></div>
                                </div>
                                <div className="pp-results-bar-count">{item.count}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Survey Responses */}
                {questions.length > 0 && (
                    <div className="pp-results-section">
                        <h2 className="pp-results-section-title">Survey Responses</h2>
                        <div className="pp-results-questions-grid">
                            {questions.map(question => {
                                const stats = getQuestionStats(question.id)
                                return (
                                    <div key={question.id} className="pp-results-question-card">
                                        <h3 className="pp-results-question-text">{question.question_text}</h3>
                                        <div className="pp-results-question-meta">
                                            {stats.count} response{stats.count !== 1 ? 's' : ''}
                                        </div>

                                        {stats.type === 'rating' ? (
                                            <div className="pp-results-question-rating">
                                                <span className="pp-results-question-rating-value">{stats.average}</span>
                                                <FaStar color="var(--pp-accent-gold)" size={20} />
                                                <span className="pp-results-question-rating-label">avg rating</span>
                                            </div>
                                        ) : (
                                            <div className="pp-results-question-responses">
                                                {Object.entries(stats.data || {}).slice(0, 5).map(([value, count]) => (
                                                    <div key={value} className="pp-results-response-item">
                                                        <span className="pp-results-response-value">"{value}"</span>
                                                        <span className="pp-results-response-count">×{count}</span>
                                                    </div>
                                                ))}
                                                {Object.keys(stats.data || {}).length > 5 && (
                                                    <div className="pp-results-response-more">
                                                        +{Object.keys(stats.data).length - 5} more responses
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}

                {/* No Data Message */}
                {ratings.length === 0 && questions.length === 0 && (
                    <div className="pp-results-empty">
                        <FaChartBar size={48} color="#6B7280" />
                        <p>No data available yet</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default StartupResults

