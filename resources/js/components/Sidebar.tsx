import React from 'react'
import { SidebarCommon } from './SidebarCommon'
import { SidebarMenu } from './SidebarMenu'

interface SidebarProps {
  isOpen: boolean
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 py-4 bg-white transition-transform z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/* SidebarCommon */}
        <SidebarCommon />
        <div className='py-2'></div>
        <SidebarMenu />
      </div>
    </div>
  )
}
