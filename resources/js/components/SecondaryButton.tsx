import React from 'react'

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
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
      className={`text-blue-500 border border-blue-500 bg-gray-200 rounded hover:bg-gray-300 ${sizeClass()}`}
    >
      { children }
    </button>
  )
}
