import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='flex items-center justify-between px-4 py-4 md:px-4 md:py-4'>
      <div className='flex items-center space-x-4'>
        <img src="/src/assets/profile-pic (1).png" className='w-[40px] h-[40px] rounded-full border-gray-300 border-2' alt="profile pic" />
        <p className='font-semibold'>HADOLE RAJU</p>
      </div>

      <nav className='hidden font-semibold md:flex md:gap-8'>
        <Link to='/' className='hover:text-slate-500 active:text-slate-600'>HOME</Link>
        <Link to='/about' className='hover:text-slate-500 active:text-slate-600'>ABOUT</Link>
        <Link to='/projects' className='hover:text-slate-500 active:text-slate-600'>PROJECTS</Link>
        <Link to='/contact' className='hover:text-slate-500 active:text-slate-600'>CONTACT</Link>
      </nav>

      <div className='md:hidden'>
      <i class="fa-solid fa-burger"></i>
      </div>
    </div>
  )
}

export default Navbar
