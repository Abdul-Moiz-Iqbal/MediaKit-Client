import React from 'react'
import { MediaCard } from './MediaCard'

const MediaKits = () => {
  return (
    <div className='flex '>
        <div className='flex-[0.65] mx-auto mt-14'>
            <div className='text-[20px] font-[600]'>my mediakits</div>
            <div className=''>
                <MediaCard/>
                {/* <div>media Card</div> */}
            </div>
        </div>

    </div>
  )
}

export default MediaKits