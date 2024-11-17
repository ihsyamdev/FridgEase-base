import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export const SignUpLink = () => {
  return (
    <div>
      <p className='font-bold text-sm'>
        新規登録の方は
        <Router>
          <Link to='/signup'
            className='text-blue-500 underline hover: cursor-pointer'>
            こちら
          </Link>
        </Router>
      </p>
    </div>
  )
}
