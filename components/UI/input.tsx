import React from 'react'
import cx from 'classnames'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  variant?: 'primary' | 'secondary'
  className?: string
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ name, label, variant = 'primary', className = '', ...props }, ref) => {
    return (
      <input
        placeholder={label}
        name={name}
        className={cx(
          'rounded-md border outline-none px-4 py-2 w-full focus:ring-2 focus:ring-blue-500',
          {
            'bg-white text-black': variant === 'primary',
            'bg-white text-blue-500': variant === 'secondary'
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'
export default Input
