import Image from 'next/image'
import React from 'react'
import vertexai from '../../public/vertexai.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-black w-full py-4 text-center text-white'>    
        <p className='mt-2'>Made with 💚 by CTRL+ALT+DEV</p>
        <div className='text-lg mt-4'>
          Powered by 
          <Image src={vertexai} width={45} className='mx-auto'/></div>
    </div>
  )
}

export default Footer
