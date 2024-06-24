import React from 'react'
import Header from '../component/CreateMediaKit.js/Header'
import MediaKits from '../component/CreateMediaKit.js/MediaKits'

const CreateMediaKit = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-[#f2f9f9] '>
        <Header/>
        <MediaKits/>
    </div>
  )
}

export default CreateMediaKit