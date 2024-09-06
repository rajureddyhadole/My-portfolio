import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='flex items-center justify-between px-4 py-4'>
      <div className='flex items-center space-x-2'>
        <img src="/src/assets/profile-pic (1).png" className='w-[50px] h-[50px] rounded-full' alt="profile pic" />
        <p className='font-semibold'>HADOLE RAJU</p>
      </div>

      <nav className='flex space-x-8 font-semibold'>
        <Link to='/' className='hover:text-slate-500 active:text-slate-600'>HOME</Link>
        <Link to='/about' className='hover:text-slate-500 active:text-slate-600'>ABOUT</Link>
        <Link to='/projects' className='hover:text-slate-500 active:text-slate-600'>PROJECTS</Link>
        <Link to='/contact' className='hover:text-slate-500 active:text-slate-600'>CONTACT</Link>
      </nav>
    </div>
  )
}

export default Navbar
