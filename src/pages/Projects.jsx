import React from 'react'
import Footer from '../components/Footer'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import projectCardInfo from '../assets/constants';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <div className=''>
      <div className='flex flex-col justify-center'>
        <div className='flex flex-col items-center p-4'>
          <h1 className='mt-10 mb-8 text-4xl font-semibold text-neutral-300 md:text-5xl'>Skills</h1>

          <ul className='grid grid-cols-2 gap-6 md:grid-cols-3'>
            <li className='flex items-center gap-4 text-lg font-medium hover:text-slate-100 text-neutral-300'><FaHtml5 className='text-3xl' /> HTML</li>
            <li className='flex items-center gap-4 text-lg font-medium hover:text-slate-100 text-neutral-300'><FaCss3 className='text-3xl' /> CSS</li>
            <li className='flex items-center gap-4 text-lg font-medium hover:text-slate-100 text-neutral-300'><IoLogoJavascript className='text-3xl' /> JavaScript</li>
            <li className='flex items-center gap-4 text-lg font-medium hover:text-slate-100 text-neutral-300'><FaReact className='text-3xl text-white' /> React Js</li>
            <li className='flex items-center gap-4 text-lg font-medium hover:text-slate-100 text-neutral-300'><RiTailwindCssFill className='text-3xl' /> Tailwind CSS</li>
          </ul>
        </div>

        <div className='flex flex-col items-center justify-center gap-4 pt-8 pb-8'>
          <h1 className='text-4xl font-semibold text-neutral-300 md:text-5xl'>Projects</h1>
          <div className='flex'>
            {projectCardInfo.map((item, index) => (
              <ProjectCard key={index} cardInfo={item} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Projects
