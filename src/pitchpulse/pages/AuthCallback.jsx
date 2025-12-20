import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { FaShieldAlt } from 'react-icons/fa'
import '../styles/pitchpulse.css'

const AuthCallback = () => {
    const navigate = useNavigate()
    const { user, role, loading } = useAuth()

    useEffect(() => {
        if (!loading) {
            if (user && role === 'audience') {
                navigate('/pitchpulse/event/active')
            } else if (user && role === 'admin') {
                navigate('/pitchpulse/admin/dashboard')
            } else if (role === 'unauthorized') {
                navigate('/pitchpulse?error=unauthorized')
            } else if (!user) {
                // Still waiting or failed
            }
        }
    }, [user, role, loading, navigate])

    return (
        <div className="pp-audience-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <div className="pp-mobile-waiting">
                {/* Security/Verification Pulse Animation */}
                <div className="pp-mobile-waiting-pulse">
                    <div className="pp-mobile-waiting-pulse-ring" style={{ borderColor: 'var(--pp-accent-emerald)' }}></div>
                    <div className="pp-mobile-waiting-pulse-ring" style={{ borderColor: 'var(--pp-accent-emerald)', animationDelay: '1s' }}></div>
                    <div className="pp-mobile-waiting-icon" style={{
                        color: 'var(--pp-accent-emerald)',
                        borderColor: 'var(--pp-accent-emerald)',
                        background: 'var(--pp-accent-emerald-soft)'
                    }}>
                        <FaShieldAlt />
                    </div>
                </div>

                <h2 className="pp-mobile-waiting-title" style={{ marginTop: '2rem' }}>Verifying</h2>

                <div className="pp-mobile-waiting-status">
                    <span>Securely checking credentials</span>
                    <span className="pp-mobile-waiting-dots">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AuthCallback
