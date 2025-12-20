import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../config/supabaseClient'
import { useAuth } from '../../contexts/AuthContext'
import { FaPlus, FaCalendarAlt, FaChevronRight, FaTimes } from 'react-icons/fa'
import { MdEventNote } from "react-icons/md"
import '../../styles/pitchpulse.css'

const AdminDashboard = () => {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [newEvent, setNewEvent] = useState({ name: '', description: '', event_date: '' })
    const navigate = useNavigate()
    const { user, logout } = useAuth()

    useEffect(() => {
        fetchEvents()
    }, [])

    const fetchEvents = async () => {
        try {
            const { data, error } = await supabase
                .from('events')
                .select('*')
                .order('event_date', { ascending: false })

            if (error) throw error
            setEvents(data)
        } catch (error) {
            console.error('Error fetching events:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleCreateEvent = async (e) => {
        e.preventDefault()
        try {
            const { data, error } = await supabase
                .from('events')
                .insert([{
                    name: newEvent.name,
                    description: newEvent.description,
                    event_date: newEvent.event_date,
                    status: 'draft'
                }])
                .select()

            if (error) throw error

            setEvents([data[0], ...events])
            setShowCreateModal(false)
            setNewEvent({ name: '', description: '', event_date: '' })
        } catch (error) {
            alert('Error creating event: ' + error.message)
        }
    }

    return (
        <div className="pp-container">
            {/* Header */}
            <div className="pp-content-wrapper fade-in">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                    <div>
                        <h1 className="pp-title">Admin Dashboard</h1>
                        <p className="pp-subtitle">Manage your startup events and pitches</p>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button
                            onClick={logout}
                            className="pp-btn pp-btn-secondary"
                        >
                            Sign Out
                        </button>
                        <button
                            onClick={() => setShowCreateModal(true)}
                            className="pp-btn pp-btn-primary"
                        >
                            <FaPlus /> Create Event
                        </button>
                    </div>
                </div>

                {/* Events Grid */}
                <div className="pp-grid">
                    {loading ? (
                        <p style={{ color: '#9CA3AF' }}>Loading events...</p>
                    ) : events.length === 0 ? (
                        <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '5rem', border: '1px dashed #374151', borderRadius: '16px', backgroundColor: 'rgba(17, 24, 39, 0.5)' }}>
                            <MdEventNote size={48} color="#4B5563" style={{ marginBottom: '1rem' }} />
                            <p style={{ color: '#9CA3AF', fontSize: '1.25rem', fontWeight: '500' }}>No events found</p>
                            <p style={{ color: '#6B7280', marginTop: '0.5rem' }}>Create your first event to get started</p>
                        </div>
                    ) : (
                        events.map(event => (
                            <div
                                key={event.id}
                                onClick={() => navigate(`/pitchpulse/admin/event/${event.id}`)}
                                className="pp-card"
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                    <span className={`pp-badge ${event.status === 'active' ? 'pp-badge-active' :
                                        event.status === 'completed' ? 'pp-badge-completed' :
                                            'pp-badge-draft'
                                        }`}>
                                        {event.status.toUpperCase()}
                                    </span>
                                    <FaChevronRight color="#4B5563" />
                                </div>

                                <h3 className="pp-card-titleEvent" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'white' }}>{event.name}</h3>
                                <p style={{ color: '#9CA3AF', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: '1.5' }}>{event.description}</p>

                                <div style={{ display: 'flex', alignItems: 'center', color: '#6B7280', fontSize: '0.85rem', paddingTop: '1rem', borderTop: '1px solid #374151' }}>
                                    <FaCalendarAlt style={{ marginRight: '0.5rem' }} />
                                    {new Date(event.event_date).toLocaleDateString(undefined, {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Create Modal */}
            {showCreateModal && (
                <div className="pp-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setShowCreateModal(false) }}>
                    <div className="pp-modal pp-fade-in">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>Create New Event</h2>
                            <button onClick={() => setShowCreateModal(false)} className="pp-btn-icon"><FaTimes /></button>
                        </div>

                        <form onSubmit={handleCreateEvent}>
                            <div className="pp-form-group">
                                <label className="pp-label">Event Name</label>
                                <input
                                    required
                                    type="text"
                                    value={newEvent.name}
                                    onChange={e => setNewEvent({ ...newEvent, name: e.target.value })}
                                    className="pp-input"
                                    placeholder="e.g. PitchPulse 2024"
                                />
                            </div>

                            <div className="pp-form-group">
                                <label className="pp-label">Description</label>
                                <textarea
                                    value={newEvent.description}
                                    onChange={e => setNewEvent({ ...newEvent, description: e.target.value })}
                                    className="pp-textarea"
                                    rows="4"
                                    placeholder="Brief details about the event..."
                                />
                            </div>

                            <div className="pp-form-group">
                                <label className="pp-label">Date & Time</label>
                                <input
                                    required
                                    type="datetime-local"
                                    value={newEvent.event_date}
                                    onChange={e => setNewEvent({ ...newEvent, event_date: e.target.value })}
                                    className="pp-input"
                                    style={{ colorScheme: 'dark' }}
                                />
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                                <button
                                    type="button"
                                    onClick={() => setShowCreateModal(false)}
                                    className="pp-btn pp-btn-secondary"
                                    style={{ flex: 1 }}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="pp-btn pp-btn-primary"
                                    style={{ flex: 1 }}
                                >
                                    Create Event
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdminDashboard
