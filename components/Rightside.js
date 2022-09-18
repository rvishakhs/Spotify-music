import React, { useEffect, useState } from 'react'
import { HiOutlineShieldCheck } from "react-icons/hi";
import { BiBell } from "react-icons/bi";
import { MdOutlineSettings} from "react-icons/md";
import Dropdown from './Dropdown';
import { IoGrid } from "react-icons/io5";
import { useSession } from 'next-auth/react';
import Recentplayed from './Recentplayed';

function Rightside({spotifyApi, chooseTrack}) {

    const {data: session, status} = useSession()
    const accessToken = session?.accessToken;
    const [recentlyPlayed, setRecentlyPlayed] = useState([])


    useEffect(() => {
        if(!accessToken) return;
  
        spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 }).then((res) => {
            setRecentlyPlayed(
              res.body.items.map(({ track }) => {
                return {
                  id: track.id,
                  artist: track.artists[0].name,
                  title: track.name,
                  uri: track.uri,
                  albumUrl: track.album.images[0].url,
                };
              })
            );
          });
        }, [accessToken]);
      
  
    //   spotifyApi.getMyRecentlyPlayedTracks({limit:20}).then((results) => {
    //     setRecentlyPlayed(results);
    //   }); 
    // }, [accessToken]);

    console.log(recentlyPlayed);


  return (
    <section className='pt-4 space-y-8 pr-4 pl-0'>
        <div className='flex items-center space-x-2 justify-between'>
            {/* Icons */}
            <div className=' hidden md:flex lg:items-center border-2 space-x-2 border-[#262626] rounded-full h-12 py-3 px-4 '>

                 <HiOutlineShieldCheck className='text-[#ccc] text-xl' />
                   <MdOutlineSettings className='text-[#ccc] text-xl'/>
                 <BiBell className='text-[#ccc] text-xl'/>


            </div>
            {/* Profile */}
            <Dropdown />
        </div>

        <div className=' bg-[#0d0d0d] border-2 border-[#262626] p-3 rounded-xl space-y-4'>
            <div className='flex items-center justify-between'>
                <h4 className='text-white font-semibold text-sm'>Recently Played</h4>
                <IoGrid className='text-[#686868] h-6 text-xl'/>
            </div>

            <div className='space-y-4 overflow-y-scroll scrollbar-thin  overflow-x-hidden h-[250px] md:h-[320px] lg:h-[460px]'>
                {recentlyPlayed.map((track,index) => (
                    <Recentplayed
                        key={index} 
                        track={track} 
                        choosetrack={chooseTrack}
                    />
                ))}

            </div>
            <button className='btn cursor-pointer'>view all</button>
        </div>

    </section>
  )
}

export default Rightside