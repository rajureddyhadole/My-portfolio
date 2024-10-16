import React from 'react';

const ProjectCard = ({ cardInfo }) => {
  return (
    <div className='w-full mx-2 my-4 md:w-1/2'>
      <a href={cardInfo.href} target='_blank'>
        <div className='relative group'>
          <img className='object-cover w-full' src={cardInfo.imgSrc} alt="" />
          <div className='text-neutral-300'>
            {cardInfo.title}
          </div>
          <div>
            {cardInfo.techs.map((tech, ind) => (
              <span className='text-neutral-300' key={ind}>{tech}</span>
            ))}
          </div>
        </div>
      </a>
    </div>
  )
}

export default ProjectCard