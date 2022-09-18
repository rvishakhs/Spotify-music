import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback';


function Player({accessToken, trackuri}) {
  return (
    <SpotifyPlayer
        token={accessToken}
        uris={trackuri}
    />
  )
}

export default Player