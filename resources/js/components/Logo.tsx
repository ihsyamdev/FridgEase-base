import React from 'react'
import logo from '../../images/logo_horizontal.png'
import { Link } from 'react-router-dom'

export const Logo: React.FC = () => {
  return (
    <Link to='/'>
      <img className='h-24' src={ logo } alt='logo' />
    </Link>
  )
}
