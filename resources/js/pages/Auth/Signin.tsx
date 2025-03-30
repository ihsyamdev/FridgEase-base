import React, { useState } from 'react'
import { Template } from '../../components/Template'
import { PrimaryButton } from '../../components/PrimaryButton'

export const SignIn: React.FC = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = async () => {
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
            <table className='w-full'>
              <tr>
                <th
                  className='text-right py-5'
                >
                  <label
                    className='mr-5'
                    htmlFor='email'
                  >
                    メールアドレス
                  </label>
                </th>
                <td>
                  <input 
                    className='border border-gray-300 rounded w-full py-1 my-2'
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <th className='text-right py-5'>
                  <label
                    className='mr-5'
                    htmlFor='password'
                  >
                    パスワード
                  </label>
                </th>
                <td>
                  <input
                    className='border border-gray-300 rounded w-full py-1 my-2'
                    type='password'
                    id='password'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </td>
              </tr>
            </table>
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
