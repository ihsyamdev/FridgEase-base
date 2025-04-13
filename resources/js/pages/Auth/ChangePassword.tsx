import React, { useState, useContext } from 'react'
import { Template } from '../../components/Template'
import { PrimaryButton } from '../../components/PrimaryButton'
import { AuthContext } from '../../AuthProvider'

export const ChangePassword: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('')
  const authContext = useContext(AuthContext)
  const { changePassword } = authContext!

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword) {
      alert('現在のパスワードと新しいパスワードを入力してください')
      return
    }
    if (newPassword !== newPasswordConfirmation) {
      alert('新しいパスワードが一致しません')
      return
    }
    if (changePassword) {
      await changePassword(currentPassword, newPassword, newPasswordConfirmation)
      alert('パスワードが変更されました')
    } else {
      alert('パスワード変更機能が利用できません')
    }
  }

  return (
    <Template>
      <div>
        <h1>
          パスワード変更
        </h1>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleChangePassword()
            }}
          >
            <div>
              <label htmlFor='currentPassword'>現在のパスワード</label>
              <input
                type='password'
                id='currentPassword'
                name='currentPassword'
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className='w-full border border-gray-300 rounded-lg p-2'
              />
              <label htmlFor='newPassword'>新しいパスワード</label>
              <input
                type='password'
                id='newPassword'
                name='newPassword'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className='w-full border border-gray-300 rounded-lg p-2'
              />
              <label htmlFor='newPassword'>新しいパスワード(再入力)</label>
              <input
                type='password'
                id='newPasswordConfirmation'
                name='newPasswordConfirmation'
                value={newPasswordConfirmation}
                onChange={(e) => setNewPasswordConfirmation(e.target.value)}
                className='w-full border border-gray-300 rounded-lg p-2'
              />
            </div>
            <div className='justify-center flex mt-10'>
              <PrimaryButton onClick={handleChangePassword}>
                パスワード変更
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </Template>
  )
}
