import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div className='px-[10%] py-5 pt-10 bg-blackish'>
      <div className='flex text-accent items-center gap-3 justify-between'>
      {/* <Link href="/"><Image src={logo} width={75}/></Link> */}
      <div>
        <h1 className='font-black leading-5 text-[2rem]'>TaxEase</h1>
        <p className='text-lg '>Your personal tax coach 💸🏛️</p>
      </div>
      
      {/* <div className='flex justify-between gap-8 text-lg'>
        <h1>Home</h1>
        <h1>What's TaxEase?</h1>
        <h1>Solution</h1>
      </div> */}
    </div>
    </div>
  )
}

export default Navbar
