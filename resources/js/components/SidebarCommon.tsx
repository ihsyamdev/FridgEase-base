import React from 'react'
import { Logo } from './Logo'
import { SignInButton } from './SignInButton'
import { SignUpLink } from './SignUpLink'

export const SidebarCommon = () => {
  return (
    <div className='flex flex-col items-center space-y-4'>
      <Logo />
      <SignInButton />
      <SignUpLink />  
    </div>
  )
}
