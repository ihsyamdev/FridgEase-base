import React from 'react'

interface AlertButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
}

export const AlertButton: React.FC<AlertButtonProps> = ({
  size = 'medium',
  children
}) => {
  const sizeClass = () => {
    switch (size) {
      case 'small':
        return 'px-2 py-1 text-sm'
      case 'medium':
        return 'px-4 py-2'
      case 'large':
        return 'px-6 py-3 text-lg'
    }
  }
  return (
    <button
      // sizeに応じてクラスを変更
      className={`text-white bg-red-500 rounded hover:bg-red-600 ${sizeClass()}`}
    >
      { children }
    </button>
  )
}
