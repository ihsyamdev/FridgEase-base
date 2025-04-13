import React, { useState, useContext } from 'react'
import { AuthContext } from '../../AuthProvider'
import { PrimaryButton } from '../../components/PrimaryButton'
import { Template } from '../../components/Template'
import { useNavigate } from 'react-router-dom'

export const MyProfile: React.FC = () => {
  const authContext = useContext(AuthContext)!
  const navigate = useNavigate()

  return (
    <Template>
      <div className='w-2/4 mx-auto'>
        <h1 className='text-center font-bold text-2xl my-5'>
          登録情報
        </h1>
        <div className='mb-5'>
          <label htmlFor='name'>ユーザー名</label>
          <input
            type='text'
            id='name'
            name='name'
            value={authContext.user?.name}
            disabled
            className='w-full border border-gray-300 rounded-lg p-2'
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='email'>メールアドレス</label>
          <input
            type='email'
            id='email'
            name='email'
            value={authContext.user?.email}
            disabled
            className='w-full border border-gray-300 rounded-lg p-2'
          />
          <PrimaryButton onClick={() => navigate('/change-password')}>
            パスワード変更
          </PrimaryButton>
        </div>
      </div>
    </Template>
  )
}
