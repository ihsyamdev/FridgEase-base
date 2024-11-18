import React from 'react'
import logo from '../../images/logo_horizontal.png'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export const Logo: React.FC = () => {
  return (
    <Router>
      <Link to='/'>
        <img className='h-24' src={ logo } alt='logo' />
      </Link>
    </Router>
  )
}
