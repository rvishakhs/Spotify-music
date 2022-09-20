import Image from 'next/image'
import React from 'react'

function Loader() {
  return (
<div className='h-screen bg-black flex flex-col items-center pt-36 space-y-8'>

        <Image
            src="https://rebrand.ly/af77f9"
            height={300}
            width={300}
            objectFit="contain"
            className="animate-pulse "
        />

<h4 className='text-white/80 font-semibold font-sans '>Loading Please Wait......</h4>

    </div>
  )
}

export default Loader