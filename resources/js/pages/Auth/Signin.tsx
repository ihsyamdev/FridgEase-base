import React, { useState } from 'react'
import { Template } from '../../components/Template'
import { PrimaryButton } from '../../components/PrimaryButton'

export const SignIn: React.FC = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = async () => {
    if (!email || !password) {
      alert('メールアドレスとパスワードを入力してください')
      return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('正しい形式のメールアドレスを入力してください')
      return
    }

    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password})
      })

      if (response.ok) {
        const data = await response.json()
        sessionStorage.setItem('token', data.token)        
      } else {
        console.error(response)
        sessionStorage.removeItem('token')
      }
    } catch(error) {
      console.error(error)
      sessionStorage.removeItem('token')
    }
  }

  return (
    <Template>
      <div className='w-2/4 mx-auto'>
        <h1 className='text-center font-bold text-2xl my-5'>
          ログイン
        </h1>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSignIn()
            }}
          >
            <div className='mb-5'>
              <label htmlFor='email'>メールアドレス</label>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full border border-gray-300 rounded-lg p-2'
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='password'>パスワード</label>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full border border-gray-300 rounded-lg p-2'
              />
            </div>
          </form>
          <div className='text-right'>
            <a
              href='/auth/password/reset'
              className='text-blue-500 underline hover: cursor-pointer'
            >
              パスワードを忘れた方はこちら
            </a>
          </div>
          <div className='justify-center flex mt-10'>
            <PrimaryButton onClick={handleSignIn}>
              ログイン
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Template>
  )
}
