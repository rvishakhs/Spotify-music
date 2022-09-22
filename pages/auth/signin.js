import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { getProviders, signIn, useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import Loader from '../../components/Loader'

function Signin({providers}) {

    const {data : session } = useSession()
    const router = useRouter()
    useEffect(() => {
      if(session){
        router.push('/')
      }
    }, [session])
    
    if(session) return <Loader />

  return (
    <div className='h-screen bg-black flex flex-col items-center pt-36 space-y-8'>
       <Head>
        <title>Login - Spotify </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://rebrand.ly/af77f9" />
      </Head>

        <Image
            src="https://rebrand.ly/af77f9"
            height={300}
            width={300}
            objectFit="contain"
            className="animate-pulse "
        />

    {Object.values(providers).map((provider)=> (
        <div key={provider.name} className='mt-3'>
            <button className="text-white py-4 px-6 rounded-full bg-[#1db954] transition duration-300 ease-out border border-transparent uppercase font-bold text-xs md:text-base tracking-wider hover:scale-105 hover:bg-[#0db146]"
             onClick={() => signIn(provider.id)}>Login with {provider.name}</button>
        </div>
    ))}

    </div>
  )
}

export default Signin

export async function getServerSideProps() {
    const providers = await getProviders();
    return{
        props:{providers}
    };
}
