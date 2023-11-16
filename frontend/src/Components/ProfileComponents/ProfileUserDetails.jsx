import React from 'react'
import {TbSettingsFilled} from "react-icons/tb"

const ProfileUserDetails = () => {
  return (
    <div className='py-10 w-full'>
        <div className='flex items-center'>
            <div className='w-[15%]'>
                <img className='w-32 h-32 rounded-full' src='https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaAJIDucKftY7-i33wKHSqG4m1WYctmHDPrc_LNd2SzuuaZzNXtTM7H3oMbD9VjdBGjsl47owQl_REnpAi7HrpgqiVp4sQ=w1910-h922' alt=''></img>
            </div>
            <div className='space-y-5'>
              <div className='flex space-x-10 items-center'>
                <p>username</p>
                <button>Edit Profile</button>
                <TbSettingsFilled></TbSettingsFilled>
              </div>
              <div className='flex space-x-10'>
                <div>
                  <span className='font-semibold mr-2'>3</span>
                  <span>posts</span>
                </div>
                <div>
                  <span className='font-semibold mr-2'>16</span>
                  <span>followers</span>
                </div>
                <div>
                  <span className='font-semibold mr-2'>24</span>
                  <span>following</span>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileUserDetails