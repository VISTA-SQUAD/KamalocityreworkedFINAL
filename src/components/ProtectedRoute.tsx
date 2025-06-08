import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAdmin } from '../hooks/useAdmin'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAdmin, loading } = useAdmin()

  if (loading) {
    return (
      <div className="min-h-screen bg-kamalo-dark flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-kamalo-red"></div>
      </div>
    )
  }

  if (!isAdmin) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}