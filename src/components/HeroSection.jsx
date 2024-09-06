import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='flex justify-center items-center h-[570px] bg-gray-200'>
        <div className='text-center w-[70%]'>
        <h1 className='mb-8 text-3xl font-bold md:text-4xl'>HEY, I'M HADOLE RAJU</h1>
        <p className='mb-8 text-[0.9rem] md:text-[1rem] text-gray-600'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        <Link to='/projects'><button className='px-12 py-3 font-semibold bg-yellow-400 rounded hover:bg-yellow-500 active:bg-yellow-400'>PROJECTS</button></Link>
        </div>
    </div>
  )
}

export default HeroSection
