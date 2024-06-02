import Image from 'next/image'
import React from 'react'
import githublogo from '../../public/githublogo.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-black w-full py-8 text-center text-white'>
        <Link href="https://github.com/VishalTheHuman/TaxEase.AI-Vertex-AI-Agent"><Image src={githublogo} width={45} className='mx-auto'/></Link>
        <p className='mt-2'>Made with 💚 by CTRL+ALT+DEV</p>
    </div>
  )
}

export default Footer
