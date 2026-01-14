import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full absolute inset-0 top-0 left-0 z-10 py-6 px-10 bg-transparent'>
      <div className='flex items-start justify-between'>
        <div><h1>Logo</h1></div>


        <div><h1 className='text-xl text-[#CEAF79] font-bold'>LumoArt</h1></div>


        <div className='flex flex-col gap-1'>
            <div className='px-2 text-sm text-center text-[#CEAF79] rounded-full bg-zinc/40 backdrop-blur-3xl'>Home</div>
            <div className='px-2 text-sm text-center text-[#CEAF79] rounded-full bg-zinc/40 backdrop-blur-3xl'>Contact</div>
            <div className='px-2 text-sm text-center text-[#CEAF79] rounded-full bg-zinc/40 backdrop-blur-3xl'>About</div>
            <div className='px-2 text-sm text-center text-[#CEAF79] rounded-full bg-zinc/40 backdrop-blur-3xl'>Settings</div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
