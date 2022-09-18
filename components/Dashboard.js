import React from 'react'
import Body from './Body'
import Sidebar from './Sidebar'
import Player from './Player'
import SpotifyWebApi from 'spotify-web-api-node'
import { useRecoilState } from 'recoil';
import {playingTrackState} from "../atom/playerAtom"
import Rightside from './Rightside';
import { useSession } from 'next-auth/react'

function Dashboard() {

    const {data: session, status} = useSession()
    const accessToken = session?.accessToken;
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
        <Rightside spotifyApi={spotifyApi} chooseTrack={chooseTrack}/>

        <div className='fixed bottom-0 left-0 right-0 z-50gu '>
          <Player accessToken={accessToken} trackuri={playingTrack.uri}/>
        </div>
    </div>
  )
}

export default Dashboard