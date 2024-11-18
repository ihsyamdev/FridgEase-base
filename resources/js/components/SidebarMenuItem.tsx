import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

interface MenuItemProps {
  to: string
  label: string
  icon?: React.ReactNode
}

export const SidebarMenuItem: React.FC<MenuItemProps> = ({ to, label, icon }) => {
  return (
    <li>
      <Router>
        <Link to={ to }>
          { icon && <span>{ icon }</span>}
          { label }
        </Link>
      </Router>
    </li>
  )
}
