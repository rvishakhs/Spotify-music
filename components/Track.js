import React from 'react'
import { ImHeadphones } from "react-icons/im";

function Track({track, chooseTrack}) {
  return (
    <div className='flex items-center justify-between space-x-20 cursor-default hover:bg-white/10 py-2 px-4 rounded-lg group transition ease-out'>
      <div className='flex items-center'>
        <img 
                src={track.albumurl}
                alt=""
                className='w-12 h-12 object-cover rounded-xl mr-3'
            />
            <div>
                <h4 className='text-white font-sans font-semibold text-xs truncate w-[200px] md:w-[350px] md:text-sm'>{track.tittle}</h4>
                <p className='text-gray-400 text-[13px] font-semibold group-hover:text-white truncate  w-[200px]'>{track.artist}</p>
            </div>
      </div>

      <div className='md:ml-auto flex items-center space-x-2.5'>
        <div className='text-white flex items-center space-x-2 font-bold text-sm'>
            <ImHeadphones className='text-lg' />
            <h4 className="">{track.popularity}</h4>
        </div>

      </div>
       
    </div>
  )
}

export default Track