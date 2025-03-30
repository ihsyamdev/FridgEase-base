import React from 'react'
import {Link } from 'react-router-dom'

export const SignUpLink = () => {
  return (
    <div>
      <p className='font-bold text-sm'>
        新規登録の方は
        <Link to='/auth/signup'
          className='text-blue-500 underline hover: cursor-pointer'>
          こちら
        </Link>
      </p>
    </div>
  )
}
