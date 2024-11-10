import React from 'react'

export const Button = ({className,btnName}) => {
  return (
    <button className={`${className}`}>{btnName}</button>
  )
}

export default Button