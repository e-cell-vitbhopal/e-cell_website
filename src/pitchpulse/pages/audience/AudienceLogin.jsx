import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { useAuth } from '../../contexts/AuthContext'
import ecellLogo from '../../../assets/logo.svg'
import { initAudio } from '../../utils/sound'
import '../../styles/pitchpulse.css'

const AudienceLogin = () => {
    const { loginWithGoogle, loading, user, role } = useAuth()
    const navigate = useNavigate()

    const handleLoginClick = async () => {
        initAudio() // Unlock audio context on user interaction
        await loginWithGoogle()
    }

    useEffect(() => {
        if (!loading && user) {
            if (role === 'admin') {
                navigate('/pitchpulse/admin/dashboard')
            } else {
                navigate('/pitchpulse/event/active')
            }
        }
    }, [user, role, loading, navigate])
    return (
        <div className="pp-audience-container pp-mobile-login">
            {/* Logo & Tagline */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
                <img src={ecellLogo} alt="E-Cell VIT Bhopal" style={{ height: '60px', width: 'auto', marginBottom: '0.5rem' }} />
                <p style={{ fontSize: '0.875rem', color: 'var(--pp-text-muted)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>PRESENTS</p>
                <h1 className="pp-mobile-login-logo" style={{ marginBottom: '0' }}>PitchPulse</h1>
            </div>
            <p className="pp-mobile-login-tagline">Rate startups. Shape the future.</p>

            <div className="pp-mobile-login-card">
                <button
                    onClick={handleLoginClick}
                    disabled={loading}
                    className="pp-mobile-login-google"
                >
                    <FcGoogle size={24} />
                    {loading ? 'Connecting...' : 'Continue with VIT Email'}
                </button>

                <p className="pp-mobile-login-hint">
                    Restricted to @vitbhopal.ac.in accounts
                </p>
            </div>

            {/* Footer */}
            <div className="pp-mobile-login-footer">
                Powered by E-Cell VIT Bhopal
            </div>
        </div >
    )
}

export default AudienceLogin
