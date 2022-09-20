import React from 'react'
import { useRecoilState } from 'recoil'
import { playingTrackState, playState } from '../atom/playerAtom'

function Recentplayed({track, choosetrack}) {


  const [play, setPlay] = useRecoilState(playState)
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState)

  const handleClick = () => {
    choosetrack(track)

    if (track.uri === playingTrack.uri) {
      setPlay = !play
    }
  }
  return (
    <div className='flex items-center space-x-3' onClick={handleClick}>
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