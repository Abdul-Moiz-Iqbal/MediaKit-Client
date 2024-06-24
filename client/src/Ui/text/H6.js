import React from 'react'

const h6 = ({children,text='',styles}) => {
  return (
    <div className={`text-lg font-[500] ${styles}`}>{text}{children}</div>
  )
}

export default h6