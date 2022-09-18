import React from 'react'
import Body from './Body'
import Sidebar from './Sidebar'
import SpotifyWebApi from 'spotify-web-api-node'
import { useRecoilState } from 'recoil';
import {playingTrackState} from "../atom/playerAtom"

function Dashboard() {

  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState)

  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID
  })

  const chooseTrack = (track)=> {
    setPlayingTrack(track)
  }

  return (
    <div className='flex min-h-screen min-w-max'>
        <Sidebar />
        <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack}/>
    </div>
  )
}

export default Dashboard