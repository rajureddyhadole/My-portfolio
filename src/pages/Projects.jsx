import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Projects() {
  return (
    <div className='pb-12'>
      <Navbar />
      <div className='flex flex-col items-center p-4 bg-gray-200'>
        <h1 className='mb-4 text-3xl font-semibold'>Skills</h1>
        <ul className='grid grid-cols-3 gap-4'>
          <li className='px-2 py-1 text-center bg-white border-2 rounded border-slate-600'>HTML</li>
          <li className='px-2 py-1 text-center bg-white border-2 rounded border-slate-600'>CSS</li>
          <li className='px-2 py-1 text-center bg-white border-2 rounded border-slate-600'>JavaScript</li>
          <li className='px-2 py-1 text-center bg-white border-2 rounded border-slate-600'>React js</li>
          <li className='px-2 py-1 text-center bg-white border-2 rounded border-slate-600'>Tailwind CSS</li>
        </ul>
      </div>

      <div className='flex flex-col items-center justify-center gap-4 pt-8 bg-gray-200'>
        <h1 className='text-3xl font-semibold'>Projects</h1>

        <div className='grid grid-cols-3 gap-4 px-8 py-2 lg:grid lg:grid-cols-4 lg:gap-4 lg:pb-8'>

          <a href="https://expense-tracker-by-rajureddy.netlify.app/" target='_blank'>  
            <div className='relative text-center w-[200px] h-[300px]'>
              <img className='w-full' src="/images/expense-tracker.png" alt="" />
              <div className='absolute bottom-0 flex items-center justify-center text-white bg-black opacity-80 left-1 right-1 top-44'>
                Expense tracker using React js and Tailwind CSS
              </div>
            </div>
          </a>

          <a href="https://todo-list-by-raju.netlify.app/" target='_blank'>
            <div className='relative text-center w-[200px] h-[300px]'>
              <img className='w-full' src="/images/todoList.png" alt="" />
              <div className='absolute bottom-0 flex items-center justify-center text-white bg-black opacity-80 left-1 right-1 top-44'>
                Todo List using React js and Tailwind CSS
              </div>
            </div>
          </a>

          <a href="https://color-picker-app-by-raju.netlify.app/" target='_blank'>  
            <div className='relative text-center w-[200px] h-[300px]'>
              <img className='object-cover w-full' src="/images/color-picker-app.png" alt="" />
              <div className='absolute bottom-0 left-0 right-0 flex items-center justify-center text-white bg-black opacity-80 top-44'>
                Color Picker app using React js
              </div>
            </div>
          </a>
          
          <a href="https://image-gallery-by-raju.netlify.app/"  target='_blank'>  
            <div className='relative text-center w-[200px] h-[300px]'>
              <img className='object-cover w-full' src="/images/pexels-maxandrey-1366630.jpg" alt="" />
              <div className='absolute bottom-0 left-0 right-0 flex items-center justify-center text-white bg-black opacity-80 top-44'>
                Image Gallery using React js
              </div>
            </div>
          </a>
          
        </div>  
      </div>
      <Footer />
    </div>
  )
}

export default Projects
