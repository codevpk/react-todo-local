import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthContext } from 'contexts/AuthContext'

export default function PrivateRoute({ Component }) {
    const { isAuth } = useAuthContext()
    const location = useLocation()

    if (!isAuth)
        return <Navigate to="/auth/login" state={{ from: location.pathname }} replace />

    return (
        <Component />
    )
}
