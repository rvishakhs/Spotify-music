import React, { useState } from 'react'
import { ImHeadphones } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";
import { useRecoilState } from 'recoil';
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { playingTrackState, playState } from '../atom/playerAtom';

function Track({track, chooseTrack}) {

  const [play, setPlay] = useRecoilState(playState)
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState)
  const [hasliked, sethasliked] = useState(false)

  const handleClick = () => {
    chooseTrack(track)

    if (track.uri === playingTrack.uri) {
      setPlay = !play
    }
  }

  return (
    <div className='flex items-center justify-between space-x-20 cursor-default hover:bg-white/10 py-2 px-4 rounded-lg group transition ease-out'>
      <div className='flex items-center'>
        <img 
                src={track.albumurl}
                alt=""
                className='w-12 h-12 object-cover rounded-xl mr-3'
            />
            <div>
                <h4 className='text-white font-sans font-semibold text-xs truncate w-[180px] md:w-[350px] md:text-sm'>{track.tittle}</h4>
                <p className='text-gray-400 text-[13px] font-semibold group-hover:text-white truncate  w-[180px]'>{track.artist}</p>
            </div>
      </div>

      <div className='md:ml-auto flex items-center space-x-2.5'>
        <div className='hidden  text-white md:flex items-center space-x-2 font-bold text-sm'>
            <ImHeadphones className='  text-lg ' />
            <h4 className=" text-lg">{track.popularity}</h4>
        </div>
        <div className='flex items-center rounded-full border-2 border-[#262626] w-[85px] h-10 relative cursor-pointer group-hover:border-white/40'>
          <AiFillHeart className={`text-2xl ml-2 icon ${hasliked ? 'text-[#5CFF39]' : 'text-[#878987]'}`} onClick={(() => sethasliked(!hasliked))} />
          {track.uri === playingTrack.uri && play ? (
              <div className='h-10 w-10 rounded-full border border-[#15883e] flex items-center justify-center absolute -right-0.5 
              bg-[#15883e] icon hover:scale-110'onClick={handleClick}>
                  <BsPauseFill  className='text-xl text-white'/>
              </div>
          ):(<div className='h-10 w-10 rounded-full border border-white/60  flex items-center justify-center absolute -right-0.5 
          hover:bg-[#15883e] hover:border-[#15883e] icon hover:scale-110' onClick={handleClick}>
                  <BsPlayFill className='text-xl text-white ml-[3px]'/>
              </div>
          )}

        </div>
         

      </div>
       
    </div>
  )
}

export default Track