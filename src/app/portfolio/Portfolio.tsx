import React from 'react'
import ProjectData from '../components/ProjectData';
import Project from '../components/Project';

const Portfolio = () => {
  return (
    <div>
      <div className='text-center portfolio text-white pt-8 pb-16'>
      <p className='font-semibold'>Latest</p>
      <h1 className='text-3xl font-extrabold'>Projects</h1>
      <div className='mt-14 w-9/10 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {ProjectData.map((project, index) => (
          <Project 
          key={index}
          title={project.title}
          description={project.description}
          image={project.image} 
          />
        ))}
      </div>
      </div>
    </div>
  )
}

export default Portfolio;
