import React from 'react'

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
  onClick?: () => void 
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  size = 'medium',
  children,
  onClick
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
      className={`text-white bg-blue-500 rounded hover:bg-blue-600 ${sizeClass()}`}
      onClick={onClick}
    >
      { children }
    </button>
  )
}
