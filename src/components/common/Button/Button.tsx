import type { ButtonHTMLAttributes, ReactNode } from 'react'

import './Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      className="common-button"
    >
      {children}
    </button>
  )
}

export default Button