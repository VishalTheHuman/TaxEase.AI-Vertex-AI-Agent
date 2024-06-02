import React from 'react'
import logo from "../../public/logo.jpg"
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='flex text-primary justify-center items-center gap-1'>
      <Link href="/"><Image src={logo} width={75}/></Link>
      <div>
        <h1 className='font-black leading-10 text-[3rem]'>TaxEase.AI</h1>
        <p className='text-xl ml-2'>Your personal tax coach 💸🏛️</p>
      </div>
    </div>
  )
}

export default Logo
