import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import profilePic from "../assets/profile-pic.webp";

function HeroSection() {
  return (
    <div className='flex w-full items-center justify-center h-[79vh]'>
      <div className='flex flex-col items-center justify-center w-[90%] sm:w-[70%]'>
        <img width="200" height="200" className='mb-10 rounded-full shadow-lg shadow-black/85' src={profilePic} alt="profile-pic" />
        <h1 className='mb-10 text-3xl font-bold sm:text-4xl text-neutral-300 md:text-5xl'>
          Hii,I'm
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-800'>
            <Typewriter
              words={[" Hadole Raju", " A Developer"]}
              loop={3}
              typeSpeed={100}
              deleteSpeed={100}
              cursor
              cursorStyle="_"
              delaySpeed={4000} />
          </span></h1>
        <p className='mb-10 text-base font-medium text-center text-neutral-600 sm:text-lg'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        <Link to='/projects'><button className='px-12 py-3 font-semibold rounded-full text-neutral-900 bg-gradient-to-r from-orange-600 to-orange-800'>PROJECTS</button></Link>
      </div>
    </div>
  )
}

export default HeroSection
