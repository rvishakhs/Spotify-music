import React, { useEffect } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback';
import { useRecoilState } from 'recoil';
import { playingTrackState, playState } from '../atom/playerAtom';


function Player({accessToken, trackuri}) {

  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

  useEffect(() => {
    if (trackuri) {
      setPlay(true);
    }
  }, [trackuri]);

  if (!accessToken) return null;

  return (
    <SpotifyPlayer
        styles={{
          activeColor: "#fff",
          bgColor: "#181818",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#1cb954",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
          height: "70px",
          sliderTrackColor: "#535353",
          sliderTrackBorderRadius: "4px",
          sliderHandleColor: "#fff",
          errorColor: "#fff",
        }}
        token={accessToken}
        uris={trackuri ? [trackuri] : []}
        callback={(state) => {
          setPlay(state.isPlaying);
        }}
        showSaveIcon
        autoPlay={true}
        magnifySliderOnHover={true}
    />
  )
}

export default Player