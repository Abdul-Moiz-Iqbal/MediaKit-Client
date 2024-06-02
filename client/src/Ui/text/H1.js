import React from 'react'

const H1 = ({ text,style}) => {
  return (
    <div className={` text-secondary text-6xl font-bold ${style}`}>{text}</div>
  )
}

export default H1