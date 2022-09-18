import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import Poster from './Poster';
import Search from './Search'
import Track from './Track';

function Body({spotifyApi, chooseTrack}) {

    const [search, setSearch ] = useState("");
    const [searchResults, setSearchResults] = useState([])
    const [newRelease, setNewRelease] = useState([])
    const {data: session, status} = useSession()
    const accessToken = session?.accessToken;

    useEffect (() => {
      if(!accessToken) return;
      spotifyApi.setAccessToken(accessToken)
    },[accessToken])


    // Searching for a song 

    useEffect(() => {
      if(!search) return setSearchResults([]);
      if(!accessToken) return;

      spotifyApi.searchTracks(search).then((results) => {
        setSearchResults(
          results.body.tracks.items.map((track) => {
            return {
              id: track.id,
              artist: track.artists[0].name,
              tittle: track.name,
              uri: track.uri,
              albumurl: track.album.images[0].url,
              popularity: track.popularity,
            };
          }) 
          );
      }); 
    }, [search, accessToken]);

    // Geting New releses for startup page



    useEffect(() => {
      if(!accessToken) return;

      spotifyApi.getNewReleases().then((results) => {
        setNewRelease(
          results.body.albums.items.map((track) =>{
            return{
              id: track.id,
              artist: track.artists[0].name,
              tittle: track.name,
              uri: track.uri,
              albumurl: track.images[0].url,
            }
          })
        );
      }); 
    }, [accessToken]);


    
  return (
    <section className="bg-black ml-14 mr-2 py-4 space-y-8 md:max-w-6xl md:ml-24 flex-grow">
        <Search search={search} setSearch={setSearch}/>
        <div className='grid overflow-y-scroll scrollbar-hide h-96 py-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-8'>
          {searchResults.length === 0 ? newRelease.slice(0,4).map((track) => (
            <Poster 
            key={track.id}
            track={track}
            chooseTrack={chooseTrack}
            />
          )) : searchResults.slice(0,4).map((track) => (
            <Poster 
            key={track.id}
            track={track}
            chooseTrack={chooseTrack}
          />
          ))}
        </div>
        <div className='flex gap-x-8 absolute min-w-full md:reative ml-6'>
          {/* Genres */}
          <div className='hidden xl:inline max-w-[270px]'>
            <h2 className='text-white font-bold mb-3 font-serif'>Genres</h2>
              <div className='flex gap-x-2 gap-y-2.5 flex-wrap mb-3'>
                <div className='genre '>Classic</div>
                <div className='genre '>House</div>
                <div className='genre '>Minimal</div>
                <div className='genre '>Hip-hop</div>
                <div className='genre '>Electronic</div>
                <div className='genre '>Chillout</div>
                <div className='genre '>Blues</div>
                <div className='genre '>Country</div>
                <div className='genre '>Techno</div>
              </div>

              <div className='btn '>
                  All Genres
              </div>
          </div>

          {/* Tracks Section */}

          <div>
            <h2 className='text-white font-bold mb-3 font-serif'>{searchResults.length === 0 ? "New Releases" : "Tracks"}</h2>
            <div className='space-y-2 border-2 border-[#262626] rounded-2xl md:p-3 bg-[#0D0D0D] overflow-y-scroll h-auto md:h-96 scrollbar-thin
            scrollbar-thumb-gray-600  hover:scrollbar-thumb-gray-500 w-[420px] md:w-[600px] lg:w-[780px] max-w-[780px] flex-shrink' >
              {searchResults.length === 0 ? newRelease.slice(4,newRelease.length).map((track) => (
                <Track
                key={track.id}
                track={track}
                chooseTrack={chooseTrack}
            />
          )) : searchResults.slice(4,searchResults.length).map((track) => (
            <Track 
            key={track.id}
            track={track}
            chooseTrack={chooseTrack}
          />
          ))}

            </div>

          </div>




        </div>
    </section>

  )
}

export default Body