import React, { useState, useEffect, useCallback } from 'react'
import { supabase } from '../../config/supabaseClient'
import { useAuth } from '../../contexts/AuthContext'
import { FaStar, FaCheckCircle, FaRegStar } from 'react-icons/fa'
import '../../styles/pitchpulse.css'

const RatingForm = ({ startup, onRatingSubmitted }) => {
    const { user } = useAuth()
    const [selectedRating, setSelectedRating] = useState(5)
    const [hoverRating, setHoverRating] = useState(0)
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [existingRating, setExistingRating] = useState(null)
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024)

    useEffect(() => {
        checkExistingRating()
    }, [startup?.id, user?.id])

    // Listen for window resize to toggle between desktop/mobile UI
    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const checkExistingRating = async () => {
        if (!startup?.id || !user?.id) return

        const { data } = await supabase
            .from('startup_ratings')
            .select('rating')
            .eq('startup_id', startup.id)
            .eq('user_id', user.id)
            .maybeSingle()

        if (data) {
            setExistingRating(data.rating)
            setSubmitted(true)
        }
    }

    const handleSubmit = async () => {
        if (loading || !user) return

        setLoading(true)

        // Haptic feedback
        if (navigator.vibrate) {
            navigator.vibrate(50)
        }

        try {
            const { error } = await supabase
                .from('startup_ratings')
                .insert([{
                    startup_id: startup.id,
                    user_id: user.id,
                    user_email: user.email,
                    rating: selectedRating
                }])

            if (error) throw error

            setSubmitted(true)
            setExistingRating(selectedRating)
            if (onRatingSubmitted) onRatingSubmitted(selectedRating)
        } catch (error) {
            console.error('Error submitting rating:', error)
            if (error.code === '23505') {
                setSubmitted(true)
            }
        } finally {
            setLoading(false)
        }
    }

    const getRatingLabel = useCallback((rating) => {
        if (rating <= 2) return 'Needs Work'
        if (rating <= 4) return 'Fair'
        if (rating <= 6) return 'Good'
        if (rating <= 8) return 'Great!'
        return 'Outstanding!'
    }, [])

    const handleSliderChange = (e) => {
        const value = parseInt(e.target.value, 10)
        setSelectedRating(value)

        // Light haptic on change
        if (navigator.vibrate) {
            navigator.vibrate(10)
        }
    }

    const handleStarClick = (rating) => {
        setSelectedRating(rating)
        if (navigator.vibrate) {
            navigator.vibrate(10)
        }
    }

    // Submitted state
    if (submitted) {
        return (
            <div className="pp-mobile-success">
                <FaCheckCircle className="pp-mobile-success-icon" />
                <h3 className="pp-mobile-success-title">Rating Submitted!</h3>
                <p className="pp-mobile-success-text">
                    You rated <strong>{startup?.name}</strong>
                </p>
                <div className="pp-mobile-success-score">
                    <span className="pp-mobile-success-score-value">{existingRating}</span>
                    <span className="pp-mobile-success-score-max">/10</span>
                </div>
            </div>
        )
    }

    const displayRating = hoverRating || selectedRating

    return (
        <>
            <div className="pp-mobile-rating-container">
                <h2 className="pp-mobile-rating-title">
                    Rate this startup
                </h2>

                {/* Large rating display */}
                <div className="pp-mobile-rating-display">
                    <div>
                        <span className="pp-mobile-rating-value">{displayRating}</span>
                        <span className="pp-mobile-rating-value-max">/10</span>
                    </div>
                    <p className="pp-mobile-rating-label">{getRatingLabel(displayRating)}</p>
                </div>

                {/* Desktop: Star Rating */}
                {isDesktop ? (
                    <div className="pp-desktop-star-rating">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                            <button
                                key={star}
                                type="button"
                                className={`pp-desktop-star-btn ${star <= displayRating ? 'pp-desktop-star-filled' : ''}`}
                                onClick={() => handleStarClick(star)}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                            >
                                {star <= displayRating ? <FaStar /> : <FaRegStar />}
                            </button>
                        ))}
                    </div>
                ) : (
                    /* Mobile: Slider */
                    <div className="pp-mobile-slider-wrapper">
                        <input
                            type="range"
                            min="1"
                            max="10"
                            value={selectedRating}
                            onChange={handleSliderChange}
                            className="pp-mobile-slider"
                        />
                        <div className="pp-mobile-slider-labels">
                            <span>1 - Poor</span>
                            <span>5</span>
                            <span>10 - Amazing</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Fixed bottom submit button */}
            <div className="pp-mobile-bottom-action">
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="pp-btn-mobile pp-btn-mobile-primary pp-btn-mobile-block"
                >
                    <FaStar />
                    {loading ? 'Submitting...' : 'Submit Rating'}
                </button>
            </div>
        </>
    )
}

export default RatingForm
