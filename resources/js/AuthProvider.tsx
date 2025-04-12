import React, { createContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: number
  name: string
  email: string
}

interface AuthContextType {
  user: User| null
  signUp: (name: string, email: string, password: string, password_confirmation: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType| undefined>(undefined)

interface Props {
  children: ReactNode
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User| null>(null)

  const fetchWithAuth = async (url: string, options: RequestInit) => {
    const token = localStorage.getItem('token')
    if (token) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      }
    }
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response
  }

  const signUp = async(name: string, email: string, password: string, password_confirmation: string) => {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation
      }),
    })
    if (!response.ok) {
      throw new Error('Failed to sign up')
    }
    const data = await response.json()
    localStorage.setItem('token', data.token)
    setUser(data.user)
  }

  const signIn = async(email: string, password: string) => {
    const response = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    if (!response.ok) {
      throw new Error('Failed to sign in')
    }
    const data = await response.json()
    localStorage.setItem('token', data.token)
    setUser(data.user)
  }

  const signOut = async() => {
    await fetchWithAuth('/api/auth/signout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
