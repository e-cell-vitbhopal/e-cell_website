import React from 'react'
import { FaRocket } from 'react-icons/fa'
import '../styles/pitchpulse.css'

const WaitingScreen = ({ eventName }) => {
    return (
        <div className="pp-mobile-waiting">
            {/* Pulsing logo */}
            <div className="pp-mobile-waiting-pulse">
                <div className="pp-mobile-waiting-pulse-ring"></div>
                <div className="pp-mobile-waiting-pulse-ring"></div>
                <div className="pp-mobile-waiting-icon">
                    <FaRocket />
                </div>
            </div>

            {/* Text */}
            <h2 className="pp-mobile-waiting-title">PitchPulse</h2>
            {eventName && (
                <p className="pp-mobile-waiting-event">{eventName}</p>
            )}

            <div className="pp-mobile-waiting-status">
                <span>Waiting for the next startup</span>
                <span className="pp-mobile-waiting-dots">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </span>
            </div>
        </div>
    )
}

export default WaitingScreen
