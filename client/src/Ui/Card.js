import React from 'react'

const Card = ({children,styles}) => {
  return (
    <div className={`w-fit px-5 py-5 bg-white  rounded-xl shadow-lg ${styles}`}>{children}</div>
  )
}

export default Card