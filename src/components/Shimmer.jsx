import React from 'react'

const Shimmer = () => {

  const arrayLen = Array(16).fill('')

  return (
    <div className='max-w-[1200px] mx-auto p-5'>
    <div className='w-full  border-gray-400 h-[200px] rounded-2xl my-5  bg-gray-100 animate-pulse'></div>
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  '>
      
    {arrayLen.map((_,index)=>(
      <div className=" h-[220px] rounded-2xl w-full bg-gray-100" key={index}>
      
      </div>
    ))}
    </div>
    </div>
  )
}

export default Shimmer