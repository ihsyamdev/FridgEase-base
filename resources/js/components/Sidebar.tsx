import React, { useState, useEffect } from 'react'
import { SidebarCommon } from './SidebarCommon'
import { SidebarMenu } from './SidebarMenu'

export const Sidebar: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(true)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Escキーでサイドバーを閉じる
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <div>
      {/* Hamburger Button */}
      <button
        className='fixed top-4 left-4 z-50 flex flex-col items-center justify-between w-8 h-6 focus:outline-none'
        onClick={ toggleMenu }
      >
        <span
          className={`block h-1 w-8 bg-black transition-transform origin-center ${
            isOpen ? 'rotate-45 translate-y-2.5 bg-white' : 'bg-black'
          }`}>
        </span>
        <span
          className={`block h-1 w-8 bg-black transition-opacity ${
            isOpen ? 'opacity-0 bg-white' : 'bg-black'
          }`}>
        </span>
        <span
          className={`block h-1 w-8 bg-black transition-transform origin-center ${
            isOpen ? '-rotate-45 -translate-y-2.5 bg-white' : 'bg-black'
          }`}>
        </span>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white transition-transform z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/* SidebarCommon */}
        <SidebarCommon />
        <div className='py-2'></div>
        <SidebarMenu />
      </div>
      {/* Overlay */}
      { isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-30'
          onClick={ toggleMenu }
        ></div>
      )}
    </div>
  )
}
