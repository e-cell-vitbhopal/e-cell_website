import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../../config/supabaseClient'
import StartupCard from '../../components/StartupCard'
import SurveyQuestionManager from './SurveyQuestionManager'
import { FaArrowLeft, FaPlus, FaCheck, FaTimes, FaTrash, FaDownload } from 'react-icons/fa'
import '../../styles/pitchpulse.css'

const StartupManager = () => {
    const { eventId } = useParams()
    const navigate = useNavigate()
    const [startups, setStartups] = useState([])
    const [event, setEvent] = useState(null)
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState({ name: '', description: '', logo_url: '', pitch_order: 1 })
    const [currentStartup, setCurrentStartup] = useState(null)
    const [questionManagerStartup, setQuestionManagerStartup] = useState(null)
    const [editStartup, setEditStartup] = useState(null) // For editing startup details

    useEffect(() => {
        fetchData()
        const subscription = supabase
            .channel('public:startups')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'startups', filter: `event_id=eq.${eventId}` }, (payload) => {
                fetchData()
            })
            .subscribe()

        return () => supabase.removeChannel(subscription)
    }, [eventId])

    const fetchData = async () => {
        try {
            const { data: eventData } = await supabase.from('events').select('*').eq('id', eventId).single()
            setEvent(eventData)

            const { data: startupData } = await supabase
                .from('startups')
                .select('*')
                .eq('event_id', eventId)
                .order('pitch_order', { ascending: true })

            setStartups(startupData)

            const active = startupData.find(s => ['pitching', 'questions', 'rating'].includes(s.phase))
            setCurrentStartup(active || null)
        } catch (error) {
            console.error('Error:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleCreateStartup = async (e) => {
        e.preventDefault()
        try {
            await supabase.from('startups').insert([{
                ...formData,
                event_id: eventId,
                phase: 'pending'
            }])
            setShowModal(false)
            setFormData({ name: '', description: '', logo_url: '', pitch_order: startups.length + 1 })
            fetchData()
        } catch (error) {
            console.error(error)
        }
    }

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure?')) {
            await supabase.from('startups').delete().eq('id', id)
            fetchData()
        }
    }

    const handlePhaseChange = async (id, newPhase) => {
        await supabase.from('startups').update({ phase: newPhase }).eq('id', id)
        setStartups(prev => prev.map(s => s.id === id ? { ...s, phase: newPhase } : s))
    }

    const handleEventStatus = async (newStatus) => {
        await supabase.from('events').update({ status: newStatus }).eq('id', eventId)
        setEvent(prev => ({ ...prev, status: newStatus }))
    }

    const handleEditStartup = async (e) => {
        e.preventDefault()
        if (!editStartup) return

        try {
            await supabase.from('startups').update({
                name: editStartup.name,
                description: editStartup.description,
                logo_url: editStartup.logo_url,
                pitch_order: editStartup.pitch_order
            }).eq('id', editStartup.id)

            setEditStartup(null)
            fetchData()
        } catch (error) {
            console.error('Error updating startup:', error)
            alert('Error updating startup: ' + error.message)
        }
    }

    const handleDeleteEvent = async () => {
        const confirmMsg = `Are you sure you want to delete "${event?.name}"?\n\nThis will permanently delete:\n• All startups\n• All survey questions\n• All survey responses\n• All ratings\n\nThis action cannot be undone!`

        if (window.confirm(confirmMsg)) {
            try {
                await supabase.from('events').delete().eq('id', eventId)
                navigate('/pitchpulse/admin/dashboard')
            } catch (error) {
                console.error('Error deleting event:', error)
                alert('Error deleting event: ' + error.message)
            }
        }
    }

    const handleExportData = async () => {
        try {
            // Fetch all startups with their ratings
            const { data: startupsData } = await supabase
                .from('startups')
                .select('*')
                .eq('event_id', eventId)
                .order('pitch_order', { ascending: true })

            // Fetch all ratings
            const { data: ratingsData } = await supabase
                .from('startup_ratings')
                .select('startup_id, user_email, rating, created_at')
                .in('startup_id', startupsData.map(s => s.id))

            // Fetch all survey questions
            const { data: questionsData } = await supabase
                .from('survey_questions')
                .select('*')
                .in('startup_id', startupsData.map(s => s.id))

            // Fetch all survey responses
            const questionIds = questionsData?.map(q => q.id) || []
            const { data: responsesData } = await supabase
                .from('survey_responses')
                .select('question_id, user_email, response_value, created_at')
                .in('question_id', questionIds)

            // Calculate startup rankings
            const rankings = startupsData.map(startup => {
                const startupRatings = ratingsData?.filter(r => r.startup_id === startup.id) || []
                const avgRating = startupRatings.length > 0
                    ? (startupRatings.reduce((sum, r) => sum + r.rating, 0) / startupRatings.length).toFixed(2)
                    : 0
                return {
                    name: startup.name,
                    description: startup.description,
                    avgRating,
                    totalVotes: startupRatings.length
                }
            }).sort((a, b) => b.avgRating - a.avgRating)

            // Create CSV content
            let csv = ''

            // Rankings Sheet
            csv += 'FINAL RANKINGS\n'
            csv += 'Rank,Startup Name,Average Rating,Total Votes,Description\n'
            rankings.forEach((r, i) => {
                csv += `${i + 1},"${r.name}",${r.avgRating},${r.totalVotes},"${r.description || ''}"\n`
            })
            csv += '\n\n'

            // All Ratings Sheet
            csv += 'ALL RATINGS\n'
            csv += 'Startup,User Email,Rating,Submitted At\n'
            ratingsData?.forEach(r => {
                const startup = startupsData.find(s => s.id === r.startup_id)
                csv += `"${startup?.name || ''}",${r.user_email},${r.rating},${r.created_at}\n`
            })
            csv += '\n\n'

            // Survey Responses Sheet
            csv += 'SURVEY RESPONSES\n'
            csv += 'Startup,Question,User Email,Response,Submitted At\n'
            responsesData?.forEach(r => {
                const question = questionsData?.find(q => q.id === r.question_id)
                const startup = startupsData.find(s => s.id === question?.startup_id)
                csv += `"${startup?.name || ''}","${question?.question_text || ''}",${r.user_email},"${r.response_value}",${r.created_at}\n`
            })

            // Download CSV
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
            const link = document.createElement('a')
            link.href = URL.createObjectURL(blob)
            link.download = `${event?.name || 'pitchpulse'}_data_${new Date().toISOString().split('T')[0]}.csv`
            link.click()
        } catch (error) {
            console.error('Error exporting data:', error)
            alert('Error exporting data: ' + error.message)
        }
    }

    const handleExportStartupData = async (startup) => {
        try {
            // Fetch ratings for this startup
            const { data: ratingsData } = await supabase
                .from('startup_ratings')
                .select('user_email, rating, created_at')
                .eq('startup_id', startup.id)

            // Fetch survey questions for this startup
            const { data: questionsData } = await supabase
                .from('survey_questions')
                .select('*')
                .eq('startup_id', startup.id)
                .order('display_order', { ascending: true })

            // Fetch survey responses for this startup's questions
            const questionIds = questionsData?.map(q => q.id) || []
            let responsesData = []
            if (questionIds.length > 0) {
                const { data } = await supabase
                    .from('survey_responses')
                    .select('question_id, user_email, response_value, created_at')
                    .in('question_id', questionIds)
                responsesData = data || []
            }

            // Calculate startup stats
            const avgRating = ratingsData?.length > 0
                ? (ratingsData.reduce((sum, r) => sum + r.rating, 0) / ratingsData.length).toFixed(2)
                : 0
            const totalVotes = ratingsData?.length || 0

            // Create CSV content
            let csv = ''

            // Startup Summary
            csv += 'STARTUP SUMMARY\n'
            csv += 'Name,Description,Average Rating,Total Votes\n'
            csv += `"${startup.name}","${startup.description || ''}",${avgRating},${totalVotes}\n`
            csv += '\n\n'

            // All Ratings
            csv += 'RATINGS\n'
            csv += 'User Email,Rating,Submitted At\n'
            ratingsData?.forEach(r => {
                csv += `${r.user_email},${r.rating},${r.created_at}\n`
            })
            csv += '\n\n'

            // Survey Responses
            csv += 'SURVEY RESPONSES\n'
            csv += 'Question,User Email,Response,Submitted At\n'
            responsesData?.forEach(r => {
                const question = questionsData?.find(q => q.id === r.question_id)
                csv += `"${question?.question_text || ''}",${r.user_email},"${r.response_value}",${r.created_at}\n`
            })

            // Download CSV
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
            const link = document.createElement('a')
            link.href = URL.createObjectURL(blob)
            const sanitizedName = startup.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()
            link.download = `${sanitizedName}_data_${new Date().toISOString().split('T')[0]}.csv`
            link.click()
        } catch (error) {
            console.error('Error exporting startup data:', error)
            alert('Error exporting startup data: ' + error.message)
        }
    }

    if (loading) return <div className="pp-container">Loading...</div>

    return (
        <div className="pp-container">
            <button onClick={() => navigate('/pitchpulse/admin/dashboard')} className="pp-btn pp-btn-secondary" style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <FaArrowLeft /> Back to Dashboard
            </button>

            {/* Event Status Controls */}
            <div className="pp-card" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                    <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Event Status</h3>
                    <p style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>
                        {event?.status === 'draft' && 'Audience cannot see this event yet'}
                        {event?.status === 'active' && '🟢 Audience can join and participate'}
                        {event?.status === 'completed' && 'Event ended - Leaderboard visible'}
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                        onClick={() => handleEventStatus('draft')}
                        className={`pp-btn ${event?.status === 'draft' ? 'pp-btn-primary' : 'pp-btn-secondary'}`}
                        style={{ padding: '0.5rem 1rem' }}
                    >
                        Draft
                    </button>
                    <button
                        onClick={() => handleEventStatus('active')}
                        className={`pp-btn ${event?.status === 'active' ? 'pp-btn-primary' : 'pp-btn-secondary'}`}
                        style={{ padding: '0.5rem 1rem', backgroundColor: event?.status === 'active' ? '#10B981' : undefined }}
                    >
                        Go Live
                    </button>
                    <button
                        onClick={() => handleEventStatus('completed')}
                        className={`pp-btn ${event?.status === 'completed' ? 'pp-btn-primary' : 'pp-btn-secondary'}`}
                        style={{ padding: '0.5rem 1rem' }}
                    >
                        End Event
                    </button>
                    <button
                        onClick={handleDeleteEvent}
                        className="pp-btn pp-btn-danger"
                        style={{ padding: '0.5rem 1rem' }}
                        title="Delete event and all data"
                    >
                        <FaTrash />
                    </button>
                    {event?.status === 'completed' && (
                        <button
                            onClick={handleExportData}
                            className="pp-btn"
                            style={{ padding: '0.5rem 1rem', backgroundColor: '#10B981' }}
                            title="Export all data to CSV"
                        >
                            <FaDownload /> Export Data
                        </button>
                    )}
                </div>
            </div>

            <div className="pp-dashboard-layout">
                {/* Main Content: Startup List */}
                <div className="pp-main-panel">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <div>
                            <h1 className="pp-title">{event?.name}</h1>
                            <p className="pp-subtitle">{new Date(event?.event_date).toLocaleDateString()}</p>
                        </div>
                        <button
                            onClick={() => setShowModal(true)}
                            className="pp-btn pp-btn-primary"
                        >
                            <FaPlus /> Add Startup
                        </button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {startups.map(startup => (
                            <StartupCard
                                key={startup.id}
                                startup={startup}
                                onDelete={handleDelete}
                                onEdit={() => setQuestionManagerStartup(startup)}
                                onEditDetails={(s) => setEditStartup({ ...s })}
                                onPhaseChange={handlePhaseChange}
                                isCurrent={currentStartup?.id === startup.id}
                                eventStatus={event?.status}
                                onDownloadData={handleExportStartupData}
                            />
                        ))}
                        {startups.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '3rem', border: '1px dashed #374151', borderRadius: '12px', color: '#9CA3AF' }}>
                                <p>No startups added yet.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar: Event Stats */}
                <div className="pp-sidebar">
                    {/* Event Status */}
                    <div className="pp-card">
                        <h3 style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '1rem' }}>Event Status</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span style={{ color: '#D1D5DB' }}>Total Startups</span>
                            <span style={{ fontWeight: 'bold' }}>{startups.length}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <span style={{ color: '#D1D5DB' }}>Phase</span>
                            <span className={`pp-badge ${event.status === 'active' ? 'pp-badge-active' : 'pp-badge-draft'}`}>
                                {event.status.toUpperCase()}
                            </span>
                        </div>
                        {event.status === 'draft' && (
                            <button
                                onClick={async () => {
                                    await supabase.from('events').update({ status: 'active' }).eq('id', eventId)
                                    setEvent({ ...event, status: 'active' })
                                }}
                                className="pp-btn"
                                style={{
                                    width: '100%',
                                    backgroundColor: '#059669',
                                    color: 'white',
                                    justifyContent: 'center'
                                }}
                            >
                                <FaCheck /> Go Live
                            </button>
                        )}
                        {event.status === 'active' && (
                            <button
                                onClick={async () => {
                                    await supabase.from('events').update({ status: 'completed' }).eq('id', eventId)
                                    setEvent({ ...event, status: 'completed' })
                                }}
                                className="pp-btn pp-btn-danger"
                                style={{ width: '100%', justifyContent: 'center' }}
                            >
                                <FaTimes /> End Event
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Create Startup Modal */}
            {showModal && (
                <div className="pp-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false) }}>
                    <div className="pp-modal pp-fade-in">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>Add Startup</h2>
                            <button onClick={() => setShowModal(false)} className="pp-btn-icon"><FaTimes /></button>
                        </div>
                        <form onSubmit={handleCreateStartup}>
                            <div className="pp-form-group">
                                <label className="pp-label">Name</label>
                                <input required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="pp-input" />
                            </div>
                            <div className="pp-form-group">
                                <label className="pp-label">Description</label>
                                <textarea value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} className="pp-textarea" rows="3" />
                            </div>
                            <div className="pp-form-group">
                                <label className="pp-label">Logo URL (Optional)</label>
                                <input type="text" value={formData.logo_url} onChange={e => setFormData({ ...formData, logo_url: e.target.value })} className="pp-input" placeholder="https://..." />
                            </div>
                            <div className="pp-form-group">
                                <label className="pp-label">Pitch Order</label>
                                <input type="number" value={formData.pitch_order} onChange={e => setFormData({ ...formData, pitch_order: parseInt(e.target.value) })} className="pp-input" />
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                                <button type="button" onClick={() => setShowModal(false)} className="pp-btn pp-btn-secondary" style={{ flex: 1 }}>Cancel</button>
                                <button type="submit" className="pp-btn pp-btn-primary" style={{ flex: 1 }}>Add Startup</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Survey Question Manager Modal */}
            {questionManagerStartup && (
                <SurveyQuestionManager
                    startup={questionManagerStartup}
                    onClose={() => setQuestionManagerStartup(null)}
                />
            )}

            {/* Edit Startup Modal */}
            {editStartup && (
                <div className="pp-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setEditStartup(null) }}>
                    <div className="pp-modal pp-fade-in">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>Edit Startup</h2>
                            <button onClick={() => setEditStartup(null)} className="pp-btn-icon"><FaTimes /></button>
                        </div>

                        <form onSubmit={handleEditStartup}>
                            <div className="pp-form-group">
                                <label className="pp-label">Startup Name</label>
                                <input
                                    required
                                    type="text"
                                    value={editStartup.name}
                                    onChange={e => setEditStartup({ ...editStartup, name: e.target.value })}
                                    className="pp-input"
                                />
                            </div>
                            <div className="pp-form-group">
                                <label className="pp-label">Description</label>
                                <textarea
                                    value={editStartup.description || ''}
                                    onChange={e => setEditStartup({ ...editStartup, description: e.target.value })}
                                    className="pp-textarea"
                                    rows="3"
                                />
                            </div>
                            <div className="pp-form-group">
                                <label className="pp-label">Logo URL (Optional)</label>
                                <input
                                    type="text"
                                    value={editStartup.logo_url || ''}
                                    onChange={e => setEditStartup({ ...editStartup, logo_url: e.target.value })}
                                    className="pp-input"
                                    placeholder="https://..."
                                />
                            </div>
                            <div className="pp-form-group">
                                <label className="pp-label">Pitch Order</label>
                                <input
                                    type="number"
                                    value={editStartup.pitch_order}
                                    onChange={e => setEditStartup({ ...editStartup, pitch_order: parseInt(e.target.value) })}
                                    className="pp-input"
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                                <button type="button" onClick={() => setEditStartup(null)} className="pp-btn pp-btn-secondary" style={{ flex: 1 }}>Cancel</button>
                                <button type="submit" className="pp-btn pp-btn-primary" style={{ flex: 1 }}>Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default StartupManager
