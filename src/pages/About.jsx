import React from 'react'
import Footer from '../components/Footer'

function About() {
  return (
    <div className='flex flex-col justify-between h-[90vh]'>
      <div className='flex flex-col items-center justify-center gap-8 md:mt-10 lg:mt-20'>
        <h1 className='mt-8 text-4xl font-semibold sm:text-5xl text-neutral-300'>About me</h1>
        <p className='w-[80%] font-normal sm:w-[70%] lg:w-[60%] mt-4 sm:text-lg text-neutral-700'>Hi there! I'm Raju reddy, a recent graduate with a degree in Information Technology from St. Peters Engineering College. Eager to apply my academic knowledge and skills to a dynamic professional environment, I'm seeking opportunities to contribute to innovative projects and collaborate with talented teams.
          I'm particularly interested in Web Development and have a passion for Front-end Development.
          I'm excited to leverage my enthusiasm, problem-solving skills, and dedication to drive positive outcomes in a challenging and rewarding role. Let's connect to discuss how my skills and passion can benefit your team.</p>
        <a className='px-12 py-3 mt-4 text-lg font-semibold rounded-full bg-gradient-to-r from-orange-600 to-orange-800 text-neutral-900' href='images/My Resume.pdf' download="Raju's resume">Resume</a>
      </div>
      <Footer />
    </div>
  )
}

export default About
