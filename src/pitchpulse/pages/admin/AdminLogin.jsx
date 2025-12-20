import React, { useState } from 'react'
import { supabase } from '../../config/supabaseClient'
import { useNavigate } from 'react-router-dom'
import '../../styles/pitchpulse.css'

const AdminLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })
            if (error) throw error
            navigate('/pitchpulse/admin/dashboard')
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="pp-login-wrapper">
            <div className="pp-login-card pp-fade-in">
                <h2 className="pp-card-titleEvent" style={{ fontSize: '2rem', marginBottom: '2rem', color: '#FBBF24' }}>Admin Portal</h2>

                {error && (
                    <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid #EF4444', color: '#EF4444', padding: '0.75rem', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} style={{ textAlign: 'left' }}>
                    <div className="pp-form-group">
                        <label className="pp-label">Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pp-input"
                            placeholder="admin@ecell.com"
                        />
                    </div>
                    <div className="pp-form-group">
                        <label className="pp-label">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pp-input"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="pp-btn pp-btn-primary"
                        style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}
                    >
                        {loading ? 'Authenticating...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin
