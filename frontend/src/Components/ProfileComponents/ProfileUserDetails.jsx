import React from 'react'
import {TbSettingsFilled} from "react-icons/tb"

const ProfileUserDetails = () => {
  return (
    <div className='py-10 w-full'>
        <div className='flex items-center'>
            <div className='w-[15%]'>
                <img className='w-32 h-32 rounded-full' src='https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/377458717_1358335628453856_4763046862183671841_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2uXEJBRvQzwAX84ZfMN&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDFx_3rsN5gQHtPrHDz_nzJMiAEZv0RZrpbmiM-JT83rg&oe=654573FD' alt=''></img>
            </div>
            <div className='space-y-5'>
              <div className='flex space-x-10 items-center'>
                <p>username</p>
                <button>Edit Profile</button>
                <TbSettingsFilled></TbSettingsFilled>
              </div>
              <div className='flex space-x-10'>
                <div>
                  <span className=' mr-2'>3</span>
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