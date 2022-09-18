import React from 'react'

function Recentplayed({track, choosetrack}) {
  return (
    <div className='flex items-center space-x-3'>
        <img
            src={track.albumUrl}
            alt=""
            className='object-cover h-[48px] w-[48px] rounded-full '
        />

        <div>
            <h4 className='truncate w-[160px] text-white/80 font-semibold hover:text-white/100 hover:underline cursor-pointer font-sans'>{track.title}</h4>
            <p className='truncate w-[120px] text-gray-400 font-semibold text-sm'>{track.artist}</p>
        </div>

    </div>
  )
}

export default Recentplayed