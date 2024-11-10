import React from 'react'

export const Badge = ({className,badgeName}) => {
  return (
    <div className={`bg-emerald-400 text-purple-700 font-bold p-3 ${className}`}>{badgeName}</div>
  )
}

export default Badge