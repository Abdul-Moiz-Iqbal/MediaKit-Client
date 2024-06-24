import React from 'react'

const P = ({children ,styles,text=''}) => {
  return (
    <div className={`text-lg font-[400] text-[#767676] ${styles}`}> {text}{children}</div>
  )
}

export default P