import React, { useContext, useEffect, useState } from 'react'
import SuggestionCard from './SuggestionCard'
import { UserContext } from '../../Context/UserContext'

const HomeRight = () => {
  const { userData } = useContext(UserContext);
  const [user, setUser] = useState(userData);

  useEffect(() => {
    // Update user state when userData changes
    setUser(userData);
  }, [userData]);

  console.log("right :", user);
  return (
    <div className='w-[75%]'>
      <div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <div>
              <img className='w-14 h-14 rounded-full' src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg" alt="" />
            </div>
            <div className='ml-3'>
              <p className='text-lg font-sans font-semibold'>{user?.username}</p>
              {/* <p className='text-lg opacity-70'>{userData?.username}</p> */}
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