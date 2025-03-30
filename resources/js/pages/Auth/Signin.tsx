import React, { useState } from 'react'
import { Template } from '../../components/Template'
import { PrimaryButton } from '../../components/PrimaryButton'

export const SignIn: React.FC = () => {
  return (
    <Template>
      <div className='w-3/4 mx-auto'>
        <h1 className='text-center font-bold text-xl my-5'>
          ログイン
        </h1>
        <div>
          <form>
            <table>
              <tr>
                <th>
                  <label htmlFor='email'>メールアドレス</label>
                </th>
                <td>
                  <input type='email' id='email' name='email' />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor='password'>パスワード</label>
                </th>
                <td>
                  <input type='password' id='password' name='password' />
                </td>
              </tr>
            </table>
          </form>
          <PrimaryButton onClick={() => {alert('ログインしました')}}>
            ログイン
          </PrimaryButton>
        </div>
      </div>
    </Template>
  )
}
