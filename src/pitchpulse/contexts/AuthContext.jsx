import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase, isValidEmail, signInWithGoogle } from '../config/supabaseClient'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [role, setRole] = useState(null) // 'admin' | 'audience' | null
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Check active session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null)
            if (session?.user) {
                checkUserRole(session.user)
            } else {
                setLoading(false)
            }
        })

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
            if (session?.user) {
                checkUserRole(session.user)
            } else {
                setRole(null)
                setLoading(false)
            }
        })

        return () => subscription.unsubscribe()
    }, [])

    const checkUserRole = async (currentUser) => {
        try {
            // 1. Check if Admin
            // We try to selecting from admins table. 
            // RLS ensures only actual admins can see their own entry (or any entry if policy allows).
            // If we get an error or no data, we assume not admin.
            const { data: adminData, error: adminError } = await supabase
                .from('admins')
                .select('email')
                .eq('email', currentUser.email)
                .maybeSingle()

            if (adminData && !adminError) {
                setRole('admin')
                setLoading(false)
                return
            }

            // 2. Check if Audience (VIT Email)
            if (isValidEmail(currentUser.email)) {
                setRole('audience')
            } else {
                // Logged in but invalid email domain
                setRole('unauthorized')
                await supabase.auth.signOut()
            }
        } catch (error) {
            console.error("Role check failed:", error)
            setRole('guest')
        } finally {
            setLoading(false)
        }
    }

    const loginWithGoogle = async () => {
        return signInWithGoogle()
    }

    const logout = async () => {
        await supabase.auth.signOut()
        setUser(null)
        setRole(null)
        // Redirect to login page
        window.location.href = '/pitchpulse'
    }

    return (
        <AuthContext.Provider value={{ user, role, loading, loginWithGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
