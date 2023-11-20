import React from 'react'
import SearchCard from '../../Components/search/search'
const SearchPage = () => {
  return (
    <div>
      <div className='flex  w-[100%] justify-self-center'>
        <div className='w-[20%] px-10 flex justify-center'>
        </div>
        <div className='w-[60%] justify-center items-center'>
            <SearchCard/>
        </div>
        <div className='w-[20%]'>
        </div>
      </div>
    </div>
  )
}

export default SearchPage