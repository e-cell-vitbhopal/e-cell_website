import React, { useState, useEffect, useCallback } from 'react'
import { supabase } from '../../config/supabaseClient'
import { useAuth } from '../../contexts/AuthContext'
import WaitingScreen from '../../components/WaitingScreen'
import SurveyForm from './SurveyForm'
import RatingForm from './RatingForm'
import Leaderboard from './Leaderboard'
import { FaSignOutAlt, FaRocket, FaMicrophone, FaLightbulb } from 'react-icons/fa'
import '../../styles/pitchpulse.css'

// Tips to show during pitching phase
const PITCH_TIPS = [
    "Take mental notes on what makes this idea unique",
    "Consider the market potential of this startup",
    "Think about how the team presented their vision",
    "Pay attention to how they address the problem",
    "Consider the scalability of their solution"
]

const EventView = () => {
    const { user, logout } = useAuth()
    const [event, setEvent] = useState(null)
    const [currentStartup, setCurrentStartup] = useState(null)
    const [loading, setLoading] = useState(true)
    const [tipIndex, setTipIndex] = useState(0)

    // Rotate tips every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setTipIndex(prev => (prev + 1) % PITCH_TIPS.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    // Fetch active startup for an event
    const findActiveStartupForEvent = useCallback(async (eventId) => {
        if (!eventId) {
            setCurrentStartup(null)
            return
        }

        const { data: startups } = await supabase
            .from('startups')
            .select('*')
            .eq('event_id', eventId)
            .in('phase', ['pitching', 'questions', 'rating'])

        if (startups && startups.length > 0) {
            setCurrentStartup(startups[0])
            // Haptic feedback on phase change
            if (navigator.vibrate) {
                navigator.vibrate([50, 50, 50])
            }
        } else {
            setCurrentStartup(null)
        }
    }, [])

    // Fetch active event on mount
    const fetchActiveEvent = useCallback(async () => {
        try {
            const { data: events } = await supabase
                .from('events')
                .select('*')
                .eq('status', 'active')
                .limit(1)

            if (events && events.length > 0) {
                const activeEvent = events[0]
                setEvent(activeEvent)
                await findActiveStartupForEvent(activeEvent.id)
            } else {
                const { data: completedEvents } = await supabase
                    .from('events')
                    .select('*')
                    .eq('status', 'completed')
                    .order('updated_at', { ascending: false })
                    .limit(1)

                if (completedEvents && completedEvents.length > 0) {
                    setEvent(completedEvents[0])
                } else {
                    setEvent(null)
                }
            }
        } catch (error) {
            console.error('Error fetching event:', error)
        } finally {
            setLoading(false)
        }
    }, [findActiveStartupForEvent])

    useEffect(() => {
        fetchActiveEvent()
    }, [fetchActiveEvent])

    // Subscribe to startup changes
    useEffect(() => {
        if (!event?.id) return

        const channel = supabase
            .channel(`startups-${event.id}`)
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: 'startups',
                    filter: `event_id=eq.${event.id}`
                },
                (payload) => {
                    if (payload.eventType === 'UPDATE') {
                        const newData = payload.new
                        if (['pitching', 'questions', 'rating'].includes(newData.phase)) {
                            setCurrentStartup(newData)
                            if (navigator.vibrate) {
                                navigator.vibrate([50, 50, 50])
                            }
                        } else if (currentStartup?.id === newData.id) {
                            findActiveStartupForEvent(event.id)
                        }
                    }
                }
            )
            .subscribe()

        return () => supabase.removeChannel(channel)
    }, [event?.id, currentStartup?.id, findActiveStartupForEvent])

    // Subscribe to event changes
    useEffect(() => {
        if (!event?.id) return

        const channel = supabase
            .channel(`events-${event.id}`)
            .on(
                'postgres_changes',
                {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'events',
                    filter: `id=eq.${event.id}`
                },
                (payload) => setEvent(payload.new)
            )
            .subscribe()

        return () => supabase.removeChannel(channel)
    }, [event?.id])

    // Loading state
    if (loading) {
        return (
            <div className="pp-audience-container pp-mobile-waiting">
                <div className="pp-mobile-waiting-pulse">
                    <div className="pp-mobile-waiting-icon">
                        <FaRocket />
                    </div>
                </div>
                <p className="pp-mobile-waiting-status">Loading PitchPulse...</p>
            </div>
        )
    }

    // No event found
    if (!event) {
        return (
            <div className="pp-audience-container pp-mobile-waiting">
                <div className="pp-mobile-waiting-pulse">
                    <div className="pp-mobile-waiting-pulse-ring"></div>
                    <div className="pp-mobile-waiting-pulse-ring"></div>
                    <div className="pp-mobile-waiting-icon">
                        <FaRocket />
                    </div>
                </div>
                <h2 className="pp-mobile-waiting-title">No Live Event</h2>
                <p className="pp-mobile-waiting-event">Check back later or contact the organizers</p>
                <button
                    onClick={logout}
                    className="pp-btn-mobile pp-btn-mobile-secondary"
                    style={{ marginTop: '24px' }}
                >
                    <FaSignOutAlt /> Sign Out
                </button>
            </div>
        )
    }

    // Event completed - show leaderboard
    if (event.status === 'completed') {
        return (
            <div className="pp-audience-container">
                {/* Mobile Header */}
                <div className="pp-mobile-header">
                    <div className="pp-mobile-header-brand">
                        <span className="pp-mobile-header-logo">PitchPulse</span>
                    </div>
                    <button onClick={logout} className="pp-btn-mobile pp-btn-mobile-ghost">
                        <FaSignOutAlt size={20} />
                    </button>
                </div>

                <Leaderboard eventId={event.id} eventName={event.name} />
            </div>
        )
    }

    // Active event
    return (
        <div className="pp-audience-container">
            {/* Mobile Header */}
            <div className="pp-mobile-header">
                <div className="pp-mobile-header-brand">
                    <span className="pp-mobile-header-logo">PitchPulse</span>
                    <span className="pp-mobile-header-event">{event.name}</span>
                </div>
                <button onClick={logout} className="pp-btn-mobile pp-btn-mobile-ghost">
                    <FaSignOutAlt size={20} />
                </button>
            </div>

            {/* Main Content */}
            {currentStartup ? (
                <div key={currentStartup.id + currentStartup.phase}>
                    {/* Startup Info */}
                    <div className="pp-mobile-startup-card">
                        <div className="pp-mobile-startup-logo">
                            {currentStartup.logo_url ? (
                                <img src={currentStartup.logo_url} alt={currentStartup.name} />
                            ) : (
                                <FaRocket size={32} />
                            )}
                        </div>
                        <h2 className="pp-mobile-startup-name">{currentStartup.name}</h2>
                        <p className="pp-mobile-startup-description">{currentStartup.description}</p>
                    </div>

                    {/* Phase Badge */}
                    <div className={`pp-mobile-phase-badge pp-mobile-phase-badge-${currentStartup.phase}`}>
                        <span className="pp-mobile-phase-icon">
                            {currentStartup.phase === 'pitching' && '🎤'}
                            {currentStartup.phase === 'questions' && '📝'}
                            {currentStartup.phase === 'rating' && '⭐'}
                        </span>
                        <span className="pp-mobile-phase-label">
                            {currentStartup.phase === 'pitching' && 'Pitching Now'}
                            {currentStartup.phase === 'questions' && 'Feedback Time'}
                            {currentStartup.phase === 'rating' && 'Rate Now'}
                        </span>
                        {currentStartup.phase === 'pitching' && (
                            <span className="pp-mobile-phase-sublabel">Rating will open soon</span>
                        )}
                    </div>

                    {/* Phase-specific Content */}
                    {currentStartup.phase === 'pitching' && (
                        <div className="pp-mobile-tips-card">
                            <div className="pp-mobile-tips-header">
                                <FaLightbulb /> Tip
                            </div>
                            <p className="pp-mobile-tips-text">{PITCH_TIPS[tipIndex]}</p>
                        </div>
                    )}

                    {currentStartup.phase === 'questions' && (
                        <SurveyForm
                            startup={currentStartup}
                            userId={user?.id}
                            userEmail={user?.email}
                        />
                    )}

                    {currentStartup.phase === 'rating' && (
                        <RatingForm startup={currentStartup} />
                    )}
                </div>
            ) : (
                <WaitingScreen eventName={event.name} />
            )}
        </div>
    )
}

export default EventView
