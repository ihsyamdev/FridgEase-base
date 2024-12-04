import React from 'react'
import { Link } from 'react-router-dom'

interface MenuItemProps {
  to: string
  label: string
  icon?: React.ReactNode
}

export const SidebarMenuItem: React.FC<MenuItemProps> = ({ to, label, icon }) => {
  return (
    // <li>
      <Link to={ to }>
        { icon && <span>{ icon }</span>}
        { label }
      </Link>
    // </li>
  )
}
