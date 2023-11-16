import React from 'react'

const SuggestionCard = () => {
  return (
    <div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <div>
              <img className='ml-2 w-14 h-14 rounded-full' src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg" alt="" />
            </div>
            <div className='ml-3'>
              <p className='text-lg font-semibold'>username</p>
              <p className='text-base opacity-70'>Suggested for you</p>
            </div>
          </div>
          <p className='text-cyan-500 font-semibold'>Follow</p>
        </div>
    </div>
  )
}

export default SuggestionCard