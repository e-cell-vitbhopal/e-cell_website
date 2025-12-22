import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import AudienceLogin from './pages/audience/AudienceLogin'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import StartupManager from './pages/admin/StartupManager'
import StartupResults from './pages/admin/StartupResults'
import EventView from './pages/audience/EventView'
import AuthCallback from './pages/AuthCallback'

const PitchPulseRoutes = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route index element={<AudienceLogin />} />
                <Route path="auth/callback" element={<AuthCallback />} />
                <Route path="event/active" element={<EventView />} />
                <Route path="admin" element={<AdminLogin />} />
                <Route path="admin/dashboard" element={<AdminDashboard />} />
                <Route path="admin/event/:eventId" element={<StartupManager />} />
                <Route path="admin/startup/:startupId/results" element={<StartupResults />} />
                <Route path="*" element={<Navigate to="" replace />} />
            </Routes>
        </AuthProvider>
    )
}

export default PitchPulseRoutes
