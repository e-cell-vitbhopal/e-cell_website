import React, { useState, useEffect } from 'react'
import { supabase } from '../../config/supabaseClient'
import { FaTrophy, FaMedal, FaStar, FaUsers } from 'react-icons/fa'
import '../../styles/pitchpulse.css'

const Leaderboard = ({ eventId, eventName }) => {
    const [rankings, setRankings] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (eventId) {
            fetchRankings()

            const subscription = supabase
                .channel('leaderboard_updates')
                .on('postgres_changes', { event: '*', schema: 'public', table: 'startup_ratings' }, () => {
                    fetchRankings()
                })
                .subscribe()

            return () => supabase.removeChannel(subscription)
        }
    }, [eventId])

    const fetchRankings = async () => {
        try {
            const { data: startups, error: startupError } = await supabase
                .from('startups')
                .select('id, name, description, logo_url')
                .eq('event_id', eventId)

            if (startupError) throw startupError

            const { data: ratings, error: ratingsError } = await supabase
                .from('startup_ratings')
                .select('startup_id, rating')
                .in('startup_id', startups.map(s => s.id))

            if (ratingsError) throw ratingsError

            const startupRatings = startups.map(startup => {
                const startupRatingsData = ratings.filter(r => r.startup_id === startup.id)
                const totalRatings = startupRatingsData.length
                const averageRating = totalRatings > 0
                    ? startupRatingsData.reduce((sum, r) => sum + r.rating, 0) / totalRatings
                    : 0

                return {
                    ...startup,
                    averageRating: Math.round(averageRating * 10) / 10,
                    totalVotes: totalRatings
                }
            })

            startupRatings.sort((a, b) => b.averageRating - a.averageRating)
            setRankings(startupRatings)
        } catch (error) {
            console.error('Error fetching rankings:', error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="pp-mobile-waiting" style={{ minHeight: '50vh' }}>
                <div className="pp-loading-spinner"></div>
                <p className="pp-mobile-waiting-status">Loading results...</p>
            </div>
        )
    }

    const top3 = rankings.slice(0, 3)

    return (
        <div className="pp-mobile-leaderboard">
            {/* Header */}
            <div className="pp-mobile-leaderboard-header">
                <div className="pp-mobile-leaderboard-trophy">🏆</div>
                <h1 className="pp-mobile-leaderboard-title">Final Results</h1>
                {eventName && <p className="pp-mobile-leaderboard-event">{eventName}</p>}
            </div>

            {/* Podium - Top 3 */}
            {top3.length > 0 && (
                <div className="pp-mobile-podium">
                    {/* 2nd Place */}
                    {top3[1] && (
                        <div className="pp-mobile-podium-item pp-mobile-podium-item-2">
                            <div className="pp-mobile-podium-medal">🥈</div>
                            <div className="pp-mobile-podium-name">{top3[1].name}</div>
                            <div className="pp-mobile-podium-score">{top3[1].averageRating.toFixed(1)}</div>
                        </div>
                    )}

                    {/* 1st Place */}
                    {top3[0] && (
                        <div className="pp-mobile-podium-item pp-mobile-podium-item-1">
                            <div className="pp-mobile-podium-medal">🥇</div>
                            <div className="pp-mobile-podium-name">{top3[0].name}</div>
                            <div className="pp-mobile-podium-score">{top3[0].averageRating.toFixed(1)}</div>
                        </div>
                    )}

                    {/* 3rd Place */}
                    {top3[2] && (
                        <div className="pp-mobile-podium-item pp-mobile-podium-item-3">
                            <div className="pp-mobile-podium-medal">🥉</div>
                            <div className="pp-mobile-podium-name">{top3[2].name}</div>
                            <div className="pp-mobile-podium-score">{top3[2].averageRating.toFixed(1)}</div>
                        </div>
                    )}
                </div>
            )}

            {/* Full Rankings List */}
            <div className="pp-mobile-leaderboard-list" style={{ marginTop: '2rem' }}>
                {rankings.map((startup, index) => (
                    <div
                        key={startup.id}
                        className="pp-mobile-leaderboard-item"
                        style={index < 3 ? {
                            borderColor: index === 0 ? 'var(--pp-accent-gold)' :
                                index === 1 ? '#C0C0C0' :
                                    '#CD7F32',
                            background: 'var(--pp-bg-elevated)'
                        } : {}}
                    >
                        <div className="pp-mobile-leaderboard-rank">
                            {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
                        </div>
                        <div className="pp-mobile-leaderboard-info">
                            <div className="pp-mobile-leaderboard-name" style={index < 3 ? { color: 'var(--pp-text-primary)', fontWeight: '700' } : {}}>
                                {startup.name}
                            </div>
                            <div className="pp-mobile-leaderboard-votes">
                                <FaUsers size={12} /> {startup.totalVotes} votes
                            </div>
                        </div>
                        <div className="pp-mobile-leaderboard-score" style={index === 0 ? { color: 'var(--pp-accent-gold)' } : {}}>
                            {startup.averageRating.toFixed(1)}
                        </div>
                    </div>
                ))}
            </div>

            {rankings.length === 0 && (
                <div className="pp-mobile-waiting" style={{ minHeight: '30vh' }}>
                    <p className="pp-mobile-waiting-status">No ratings yet</p>
                </div>
            )}
        </div>
    )
}

export default Leaderboard
