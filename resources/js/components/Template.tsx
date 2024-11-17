import React, { useState } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

interface TemplateProps {
  children: React.ReactNode
}

export const Template: React.FC<TemplateProps> = ({ children }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div>
      <Header toggleSidebar={ toggleSidebar } isSidebarOpen={ isSidebarOpen} />
      <Sidebar isOpen={ isSidebarOpen } />
      <main>
        { children}
      </main>
    </div>
  )
}
