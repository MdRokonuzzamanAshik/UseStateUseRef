import React from 'react'

export const Container = ({className,children}) => {
  return (
    <div className={` w-[1320px] mx-auto ${className}`}>{children}</div>
  )
}

export default Container