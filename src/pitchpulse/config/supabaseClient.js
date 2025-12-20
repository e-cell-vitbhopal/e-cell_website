import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing Supabase environment variables. Please check your .env file.")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const ALLOWED_DOMAIN = '@vitbhopal.ac.in'

export const isValidEmail = (email) => {
    return email?.toLowerCase().endsWith(ALLOWED_DOMAIN)
}

// Google OAuth login
export const signInWithGoogle = async () => {
    // Get the current window location to construct the redirect URL
    // This will work dynamically for both localhost and Vercel deployments
    const redirectUrl = `${window.location.origin}/pitchpulse/auth/callback`

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: redirectUrl,
            queryParams: {
                hd: 'vitbhopal.ac.in', // Hint: show only VIT accounts
                access_type: 'offline', // Request refresh token
                prompt: 'consent',
            }
        }
    })
    return { data, error }
}
