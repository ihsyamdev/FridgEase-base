import React, { useState, useContext } from 'react'
import { AuthContext } from '../../AuthProvider'

export const MyProfile: React.FC = () => {
  const authContext = useContext(AuthContext)!

  return (
    <div>
      <label>username</label>
      <input
        type='text'
        id='name'
        name='name'
        value={authContext.user?.name + 'ゆーざー' || ''}
        className='w-full border border-gray-300 rounded-lg p-2' />

    </div>
  )
}
