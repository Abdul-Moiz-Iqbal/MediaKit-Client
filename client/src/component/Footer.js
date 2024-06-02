import React from 'react'
import logo from '../resources/brand/MediakitsLogo.png'
const Footer = () => {
  return (
    <div className='py-24 '>
        <div className='mx-auto w-[80%]'>
            <img src={logo}/>
            <h1 className='mt-8 text-5xl font-extrabold'>Land the brain deals you deserve with <span className='text-primary'>MediaKits</span></h1>
            <h1 className='mt-5 text-center text-lg font-light'>Wow brands with your custom media kit, complete with transparent, accurate data. <span className='text-balance font-semibold'>Free forever.</span></h1>
            <div className='mt-8 flex justify-center gap-5'>
                <input placeholder='john@gmail.com' className='w-[25%] p-3 rounded-md border-2 border-black placeholder:text-black'/>
                <button className='px-4 rounded-md text-white font-medium bg-primary'>Build my free MediaKit</button>
            </div>
            <h1 className='mt-8 text-sm text-center'>Connect with brands. Updated in real time. Free forever.</h1>
        </div>
    </div>
  )
}

export default Footer