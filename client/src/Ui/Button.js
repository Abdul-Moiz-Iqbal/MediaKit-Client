import React from 'react'

const Button = ({style, text}) => {
  return (
    <div className={`w-fit py-2 px-7 text-primary border rounded-full border-primary ${style}`}  >{text}</div>
  )
}

export default Button