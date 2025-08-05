import React from 'react'

type ProjectProps  = {
    title: string
    description: string
    image: string
}

const Project = ({ title, description, image}:ProjectProps) => {
  return (
    <div>
      <div className='relative group rounded-xl overflow-hidden shadow-lg'>
        <img src={image} alt={title} className='w-full h-full object-cover transition-transform duration-500'/>

        <div className='absolute inset-0 bg-gradient-to-b from-cyan-400 to-cyan-600 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-center items-center text-center text-white p-4'>
            <h3 className='text-xl font-bold mb-2'>{title}</h3>
            <p className='text-sm mb-4'>{description}</p>
            <div className='bg-white text-cyan-600 p-2 rounded-full'>
                <svg></svg>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Project
