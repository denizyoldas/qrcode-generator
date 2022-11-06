import React from 'react'
import cx from 'classnames'

interface Props {
  variant?: 'primary' | 'secondary'
  className?: string
  size?: 'small' | 'medium' | 'large'
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  children: React.ReactNode
}

const Button: React.FC<Props> = ({
  variant = 'primary',
  className = '',
  type,
  size = 'medium',
  onClick,
  children
}) => {
  return (
    <button
      className={cx(
        'rounded-md',
        {
          'px-4 py-2': size === 'medium',
          'px-3 py-1': size === 'small',
          'px-6 py-3': size === 'large',
          'bg-blue-500 text-white': variant === 'primary',
          'bg-white text-blue-500': variant === 'secondary'
        },
        className
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
