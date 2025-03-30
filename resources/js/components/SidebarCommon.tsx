import React from 'react'
import { Logo } from './Logo'
import { SignInLinkButton } from './SignInLinkButton'
import { SignUpLink } from './SignUpLink'

export const SidebarCommon = () => {
  return (
    <div className='flex flex-col items-center space-y-4'>
      <Logo />
      <SignInLinkButton />
      <SignUpLink />  
    </div>
  )
}
