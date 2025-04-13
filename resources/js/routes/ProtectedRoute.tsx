import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const auth = useContext(AuthContext)

  if (!auth?.user) {
    return <Navigate to='/signin' replace />
  }
  return children
}
