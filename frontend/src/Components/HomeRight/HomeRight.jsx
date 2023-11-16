import React from 'react'
import SuggestionCard from './SuggestionCard'

const HomeRight = () => {
  return (
    <div className=''>
      <div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <div>
              <img className='w-16 h-16 rounded-full' src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg" alt="" />
            </div>
            <div className='ml-3'>
              <p className='text-lg font-sans font-semibold'>annd_1408</p>
              <p className='text-lg opacity-70'>Nguyễn Ân</p>
            </div>
          </div>
          <p className='text-cyan-500 font-semibold'>Switch</p>
        </div>
      </div>
      <div className='space-y-5 mt-10'>
        <p className='text-xl font-semibold opacity-50'>Suggested for you</p>
        {[1,1,1,1,1].map((item)=>(
          <SuggestionCard/>
        ))}
      </div>
    </div>
  )
}

export default HomeRight