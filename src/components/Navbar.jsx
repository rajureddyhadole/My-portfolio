import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className='sticky top-0 z-10 flex items-center justify-between p-3 border-b text-neutral-400 backdrop-blur-xl border-b-neutral-800 lg:px-8 sm:px-4'>
        <div className='flex items-center space-x-4'>
          <img src="/src/assets/profile-pic (1).png" className='w-[40px] h-[40px] rounded-full border-gray-300 border-2' alt="profile pic" />
          <p className='font-semibold'>HADOLE RAJU</p>
        </div>

        <button className='sm:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (<svg className=' fill-neutral-400' height='32' width='32' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>) : <svg className='fill-neutral-400' height='32' width='32' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>}
        </button>
        {isMenuOpen && (
          <div className='fixed  sm:hidden right-0 flex flex-col top-16 pt-4 w-[300px] h-[91vh] bg-black/95 gap-4'>
            <Link to='/' className='w-full py-2 pl-8 font-semibold tracking-wid hover:text-slate-100 active:text-slate-300'>HOME</Link>
            <Link to='/about' className='w-full py-2 pl-8 font-semibold tracking-wid hover:text-slate-100 active:text-slate-300'>ABOUT</Link>
            <Link to='/projects' className='w-full py-2 pl-8 font-semibold tracking-wid hover:text-slate-100 active:text-slate-300'>PROJECTS</Link>
            <Link to='/contact' className='w-full py-2 pl-8 font-semibold tracking-wid hover:text-slate-100 active:text-slate-300'>CONTACT</Link>
          </div>
        )}
        <nav className='items-center justify-center hidden gap-4 font-semibold sm:flex'>
          <Link to='/' className='tracking-wide duration-75 border-blue-400 hover:text-slate-100 hover:border-b-[3px] active:text-slate-300'>HOME</Link>
          <Link to='/about' className='tracking-wide duration-75 border-blue-400 hover:text-slate-100 hover:border-b-[3px] active:text-slate-300'>ABOUT</Link>
          <Link to='/projects' className='tracking-wide duration-75 border-blue-400 hover:text-slate-100 hover:border-b-[3px] active:text-slate-300'>PROJECTS</Link>
          <Link to='/contact' className='tracking-wide duration-75 border-blue-400 hover:text-slate-100 hover:border-b-[3px] active:text-slate-300'>CONTACT</Link>
        </nav>
      </div>
    </>
  )
}

export default Navbar
