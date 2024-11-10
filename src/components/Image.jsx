import React from 'react'

export const Image = ({imgSrc,imgAlt,className}) => {
  return (
    <img src={imgSrc} alt={imgAlt} className={`${className}`} />
  )
}
export default Image