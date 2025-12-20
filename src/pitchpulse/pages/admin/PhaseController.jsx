import React from 'react'
import { FaPlay, FaQuestion, FaStar, FaArchive } from 'react-icons/fa'
import { MdTimer } from 'react-icons/md'
import '../../styles/pitchpulse.css'

const PhaseController = ({ startup, onPhaseChange }) => {
    if (!startup) return null

    const phases = [
        { id: 'pending', label: 'Pending', icon: <MdTimer />, description: 'Waiting to start' },
        { id: 'pitching', label: 'Start Pitch', icon: <FaPlay />, description: 'Startup is presenting' },
        { id: 'questions', label: 'Open Survey', icon: <FaQuestion />, description: 'Collect feedback' },
        { id: 'rating', label: 'Start Rating', icon: <FaStar />, description: 'Rate 1-10' },
        { id: 'archived', label: 'Archive', icon: <FaArchive />, description: 'Pitch completed' }
    ]

    const getCurrentIndex = () => phases.findIndex(p => p.id === startup.phase)
    const currentIndex = getCurrentIndex()
    const nextPhase = phases[currentIndex + 1]

    const getPhaseColor = (id) => {
        switch (id) {
            case 'pitching': return '#3B82F6'
            case 'questions': return '#A855F7'
            case 'rating': return '#F59E0B'
            case 'archived': return '#10B981'
            default: return '#6B7280'
        }
    }

    const getPhaseEmoji = (id) => {
        switch (id) {
            case 'pending': return '⏳'
            case 'pitching': return '🎤'
            case 'questions': return '📝'
            case 'rating': return '⭐'
            case 'archived': return '✅'
            default: return ''
        }
    }

    return (
        <div className="pp-card pp-phase-controller">
            <h3 className="pp-phase-controller-title">Live Control</h3>

            {/* Current Startup Info */}
            <div className="pp-phase-current-startup">
                <div className="pp-phase-startup-name">{startup.name}</div>
                <div className="pp-phase-current-phase">
                    <span className="pp-phase-emoji">{getPhaseEmoji(startup.phase)}</span>
                    <span className="pp-phase-text">{startup.phase.toUpperCase()}</span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="pp-phase-progress">
                {phases.map((phase, index) => (
                    <div
                        key={phase.id}
                        className={`pp-phase-step ${index <= currentIndex ? 'pp-phase-step-completed' : ''} ${index === currentIndex ? 'pp-phase-step-current' : ''}`}
                    >
                        <div
                            className="pp-phase-step-dot"
                            style={{ backgroundColor: index <= currentIndex ? getPhaseColor(startup.phase) : '#374151' }}
                        />
                        {index < phases.length - 1 && (
                            <div
                                className="pp-phase-step-line"
                                style={{ backgroundColor: index < currentIndex ? getPhaseColor(startup.phase) : '#374151' }}
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Next Action Button */}
            <div className="pp-phase-actions">
                {nextPhase ? (
                    <button
                        onClick={() => onPhaseChange(startup.id, nextPhase.id)}
                        className="pp-btn pp-phase-next-btn"
                        style={{ backgroundColor: getPhaseColor(nextPhase.id) }}
                    >
                        {nextPhase.icon}
                        <span>{nextPhase.label}</span>
                    </button>
                ) : (
                    <div className="pp-phase-completed">
                        <span className="pp-phase-completed-icon">✓</span>
                        <span>Pitch Cycle Complete</span>
                    </div>
                )}

                {nextPhase && (
                    <p className="pp-phase-next-hint">{nextPhase.description}</p>
                )}
            </div>

            {/* Manual Override */}
            <div className="pp-phase-override">
                <p className="pp-phase-override-label">Manual Override</p>
                <div className="pp-phase-override-buttons">
                    {phases.map(p => (
                        <button
                            key={p.id}
                            onClick={() => onPhaseChange(startup.id, p.id)}
                            disabled={p.id === startup.phase}
                            className={`pp-phase-override-btn ${p.id === startup.phase ? 'pp-phase-override-btn-active' : ''}`}
                            title={p.description}
                        >
                            {p.id}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PhaseController
