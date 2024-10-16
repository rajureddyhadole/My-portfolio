import React from 'react';

const ProjectCard = ({ cardInfo }) => {
  return (
    <div className='overflow-hidden duration-300 border rounded shadow-md hover:scale-105 shadow-black'>
      <a href={cardInfo.href} target='_blank'>
        <div className='relative'>
          <img width="400" height="300" className='object-cover' src={cardInfo.imgSrc} alt="" />
          <div className='flex justify-center font-medium text-neutral-300'>
            {cardInfo.title}
          </div>
          <div className='flex justify-center gap-2'>
            {cardInfo.techs.map((tech, ind) => (
              <span className='font-medium text-neutral-300' key={ind}>{tech}</span>
            ))}
          </div>
        </div>
      </a>
    </div>
  )
}

export default ProjectCard