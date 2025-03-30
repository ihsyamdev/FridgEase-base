import React, { useState, useEffect } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

interface TemplateProps {
  children?: React.ReactNode
}

export const Template: React.FC<TemplateProps> = ({ children }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  // Escキーでサイドバーを閉じる
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && isSidebarOpen) {
        setIsSidebarOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isSidebarOpen])

  return (
    <div className='relative'>
      <Header toggleSidebar={ toggleSidebar } isSidebarOpen={ isSidebarOpen} />
      <Sidebar isOpen={ isSidebarOpen } />
      { isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black opacity-50 z-30'
          onClick={ toggleSidebar }
        ></div>
      )}
      <main className={`transition-transform ${ isSidebarOpen ? '': '' }`}>
        { children}
      </main>
    </div>
  )
}
