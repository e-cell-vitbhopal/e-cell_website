import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { useAuth } from '../../contexts/AuthContext'
import '../../styles/pitchpulse.css'

const AudienceLogin = () => {
    const { loginWithGoogle, loading, user, role } = useAuth()
    const navigate = useNavigate()

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
            <h1 className="pp-mobile-login-logo">PitchPulse</h1>
            <p className="pp-mobile-login-tagline">Rate startups. Shape the future.</p>

            {/* Login Card */}
            <div className="pp-mobile-login-card">
                <button
                    onClick={loginWithGoogle}
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
        </div>
    )
}

export default AudienceLogin
