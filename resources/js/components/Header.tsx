import React, { useState } from 'react'
import { Logo } from './Logo'
import { AccountButton } from './AccountButton'

interface HeaderProps {
  toggleSidebar: () => void
  isSidebarOpen: boolean
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarOpen }) => {

  return (
    <header className='flex justify-between items-center bg-gray-300'>

      {/* Hamburger Button */}
      <div className='pl-4'>
        <button
          className='flex flex-col items-center justify-between w-8 h-6 focus:outline-none'
          onClick={ toggleSidebar }
        >
          <span
            className={`block h-1 w-8 bg-black transition-transform origin-center ${
              isSidebarOpen ? 'rotate-45 translate-y-2.5' : 'bg-black'
            }`}>
          </span>
          <span
            className={`block h-1 w-8 bg-black transition-opacity ${
              isSidebarOpen ? 'opacity-0' : 'bg-black'
            }`}>
          </span>
          <span
            className={`block h-1 w-8 bg-black transition-transform origin-center ${
              isSidebarOpen ? '-rotate-45 -translate-y-2.5' : 'bg-black'
            }`}>
          </span>
        </button>
      </div>

      <Logo />
      <div className='pr-4'>
        <AccountButton />
      </div>
    </header>
  )
}
