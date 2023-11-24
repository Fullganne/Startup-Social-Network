import React, { useContext } from 'react'
import {TbSettingsFilled} from "react-icons/tb"
import { UserContext } from '../../Context/UserContext'
import EditProfileModal from "../modals/edit-profile-modal"
import { useDisclosure } from '@chakra-ui/react'

const ProfileUserDetails = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
 
  const {userData, handleFetchUsers}=useContext(UserContext);
  return (
    <div className='py-10 w-full'>
        <div className='flex items-center'>
            <div className='w-[15%]'>
                <img className='w-32 h-32 rounded-full' src='https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaAJIDucKftY7-i33wKHSqG4m1WYctmHDPrc_LNd2SzuuaZzNXtTM7H3oMbD9VjdBGjsl47owQl_REnpAi7HrpgqiVp4sQ=w1910-h922' alt=''></img>
            </div>
            <div className='space-y-5'>
              <div className='flex space-x-10 items-center'>
                <p>{userData?.username}</p>
                <button onClick={onOpen}>Edit Profile</button>
                <TbSettingsFilled></TbSettingsFilled>
              </div>
              <div className='flex space-x-10'>
                <div>
                  <span className='font-semibold mr-2'>{userData?.number_post}</span>
                  <span>posts</span>
                </div>
                <div>
                  <span className='font-semibold mr-2'>{userData?.number_following}</span>
                  <span>following</span>
                </div>
                <div>
                  <span className='font-semibold mr-2'>{userData?.number_followed}</span>
                  <span>followed</span>
                </div>
              </div>
            </div>
        </div>
        <EditProfileModal isOpen={isOpen} onClose={onClose}/>
    </div>
  )
}

export default ProfileUserDetails