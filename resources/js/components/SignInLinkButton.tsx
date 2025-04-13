import React from 'react'

export const SignInLinkButton = () => {
  return (
    <div>
      <button
        className='h-8 w-24 font-bold bg-gray-600 text-white rounded-lg hover:bg-gray-500'
        onClick={() => {
          window.location.href = '/signin'
        }}
      >
        Sign In
      </button>
    </div>
  )

}
