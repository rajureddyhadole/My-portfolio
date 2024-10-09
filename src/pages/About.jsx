import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
  return (
    <div className=''>
      <Navbar />
      <div className='flex flex-col items-center justify-center p-4 h-[80%] bg-gray-200'>
        <h1 className='text-3xl font-semibold md:text-4xl'>About Me</h1>
        <p className='mt-8 w-[70%] text-[0.9rem] md:text-[1rem] text-gray-700'>Hi there! I'm Raju reddy, a recent graduate with a degree in Information Technology from St. Peters Engineering College. Eager to apply my academic knowledge and skills to a dynamic professional environment, I'm seeking opportunities to contribute to innovative projects and collaborate with talented teams.

          I'm particularly interested in Web Development and have a passion for Front-end Development.

          I'm excited to leverage my enthusiasm, problem-solving skills, and dedication to drive positive outcomes in a challenging and rewarding role. Let's connect to discuss how my skills and passion can benefit your team.</p>
        <a className='px-8 py-3 mt-8 font-medium font-semibold bg-yellow-400 rounded text-md hover:bg-yellow-500 active:bg-yellow-400' href='images/My Resume.pdf' download="Raju's resume">Resume Download</a>
      </div>
      <Footer />
    </div>
  )
}

export default About
