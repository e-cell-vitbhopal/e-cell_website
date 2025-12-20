import React from 'react'
import { FaTrash, FaClipboardList, FaEdit, FaRocket, FaClock, FaPlayCircle, FaQuestionCircle, FaStar, FaArchive } from 'react-icons/fa'
import '../styles/pitchpulse.css'

const StartupCard = ({ startup, onDelete, onEdit, onEditDetails, onPhaseChange, isCurrent }) => {

    const getPhaseIcon = (phase) => {
        switch (phase) {
            case 'pitching': return <FaPlayCircle />
            case 'questions': return <FaQuestionCircle />
            case 'rating': return <FaStar />
            case 'archived': return <FaArchive />
            default: return <FaClock />
        }
    }

    const getPhaseColor = (phase) => {
        switch (phase) {
            case 'pitching': return '#3B82F6'
            case 'questions': return '#A855F7'
            case 'rating': return '#F59E0B'
            case 'archived': return '#10B981'
            default: return '#6B7280'
        }
    }

    const phases = ['pending', 'pitching', 'questions', 'rating', 'archived']

    const handlePhaseClick = (newPhase) => {
        if (onPhaseChange && newPhase !== startup.phase) {
            onPhaseChange(startup.id, newPhase)
        }
    }

    return (
        <div className={`pp-card ${isCurrent ? 'pp-card-current' : ''}`} style={isCurrent ? { borderColor: '#FBBF24', boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)' } : {}}>
            <div className="pp-card-header">
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    {/* Logo */}
                    <div style={{ width: '60px', height: '60px', background: '#1F2937', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #374151' }}>
                        {startup.logo_url ? (
                            <img src={startup.logo_url} alt={startup.name} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} />
                        ) : (
                            <FaRocket size={24} color="#9CA3AF" />
                        )}
                    </div>

                    {/* Info */}
                    <div>
                        <h3 className="pp-card-title" style={isCurrent ? { color: '#FBBF24' } : {}}>{startup.name}</h3>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            <span className="pp-badge pp-badge-completed">Order: {startup.pitch_order}</span>
                            <span
                                className={`pp-badge ${['pitching', 'questions', 'rating'].includes(startup.phase) ? 'pp-badge-active' : 'pp-badge-draft'}`}
                                style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                            >
                                {getPhaseIcon(startup.phase)} {startup.phase.toUpperCase()}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {onEditDetails && (
                        <button onClick={() => onEditDetails(startup)} className="pp-btn-icon" title="Edit Details" style={{ color: '#3B82F6' }}>
                            <FaEdit size={16} />
                        </button>
                    )}
                    <button onClick={() => onEdit(startup)} className="pp-btn-icon" title="Survey Questions" style={{ color: '#A855F7' }}>
                        <FaClipboardList size={16} />
                    </button>
                    <button onClick={() => onDelete(startup.id)} className="pp-btn-icon" title="Delete" style={{ color: '#EF4444' }}>
                        <FaTrash size={16} />
                    </button>
                </div>
            </div>

            <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: '1.5', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', marginBottom: '1rem' }}>
                {startup.description}
            </p>

            {/* Phase Control Buttons */}
            {onPhaseChange && (
                <div className="pp-startup-phase-controls">
                    {phases.map(phase => (
                        <button
                            key={phase}
                            onClick={() => handlePhaseClick(phase)}
                            disabled={phase === startup.phase}
                            className={`pp-startup-phase-btn ${phase === startup.phase ? 'pp-startup-phase-btn-active' : ''}`}
                            style={phase === startup.phase ? {
                                backgroundColor: getPhaseColor(phase),
                                borderColor: getPhaseColor(phase),
                                color: 'white'
                            } : {}}
                            title={`Set to ${phase}`}
                        >
                            {phase === 'pending' && '⏳'}
                            {phase === 'pitching' && '🎤'}
                            {phase === 'questions' && '📝'}
                            {phase === 'rating' && '⭐'}
                            {phase === 'archived' && '✅'}
                            <span>{phase}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default StartupCard
