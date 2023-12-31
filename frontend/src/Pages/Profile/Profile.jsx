import React from 'react'
import ProfileUserDetails from '../../Components/ProfileComponents/ProfileUserDetails'
import ReqUserPostPart from '../../Components/ProfileComponents/ReqUserPostPart'
import { Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='px-20'>
      <div >
        <ProfileUserDetails></ProfileUserDetails>
      </div>
      <div>
        <ReqUserPostPart/>
      </div>
      {/* <Outlet/> */}
    </div>
  )
}

export default Profile