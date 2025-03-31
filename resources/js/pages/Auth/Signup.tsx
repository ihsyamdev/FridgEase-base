import React, { useState } from 'react'
import { Template } from '../../components/Template'
import { PrimaryButton } from '../../components/PrimaryButton'

export const SignUp: React.FC = () => {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setpasswordConfirmation] = useState('')

  const handleSignUp = async () => {
    if (!userName || !email || !password) {
      alert('メールアドレスとパスワードを入力してください')
      return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('正しい形式のメールアドレスを入力してください')
      return
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(password)) {
      alert('パスワードは8文字以上で、大文字小文字数字を含む必要があります')
      return
    }
    if (password !== passwordConfirmation) {
      alert('パスワードが一致しません')
      return
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userName, email, password, passwordConfirmation})
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
          アカウント作成
        </h1>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSignUp()
            }}
          >
            <div className='mb-5'>
              <label htmlFor='name'>ユーザー名</label>
              <input
                type='text'
                id='name'
                name='name'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className='w-full border border-gray-300 rounded-lg p-2'
              />
            </div>
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
            <div className='mb-5'>
              <label htmlFor='password'>確認用パスワード</label>
              <input
                type='password'
                id='password_confirmation'
                name='password_confirmation'
                value={passwordConfirmation}
                onChange={(e) => setpasswordConfirmation(e.target.value)}
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
            <PrimaryButton onClick={handleSignUp}>
              ログイン
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Template>
  )
}
