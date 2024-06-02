import Image from 'next/image'
import React from 'react'
import vertexai from '../../public/vertexai.png'
import githublogo from '../../public/githublogo.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-black w-full py-4 text-center text-white'>    
    {/* <Link href="https://github.com/VishalTheHuman/TaxEase.AI-Vertex-AI-Agent">
    <Image src={githublogo} width={35} className='mx-auto'/>
    </Link> */}
        <p className='mt-2'>Made with 💚 by CTRL+ALT+DEV</p>
        <div className='text-md mt-2 flex items-center justify-center'>
          Powered by 
          <Image src={vertexai} width={45} /></div>
    </div>
  )
}

export default Footer
