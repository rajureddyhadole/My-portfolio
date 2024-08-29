import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-col h-[570px] items-center justify-center gap-8 p-4 bg-gray-200'>
        <h1 className='text-3xl font-semibold'>Contact</h1>
        <input className='h-8 px-2 rounded w-[400px]' type="text" placeholder='Name...' />
        <input className='h-8 px-2 rounded w-[400px]' type="email" placeholder='Email...'/>
        <textarea rows='8' className='px-2 rounded w-[400px]' placeholder='Feedback...'></textarea>
        <button className='px-8 py-2 bg-yellow-400 rounded hover:bg-yellow-500 active:bg-yellow-400'>Submit</button>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
