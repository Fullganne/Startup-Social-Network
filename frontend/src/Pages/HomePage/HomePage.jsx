import React from 'react'
import PostCard from '../../Components/Post/post'
const HomePage = () => {
  return (
    <div>
      <div className='mt-10 flex w-[100%] justify-center'>
        <div className='w-[44%] px-10'>
            <div className='space-y-10 w-full mt-10'>
              <PostCard></PostCard>
            </div>
        </div>
        <div className='w-[35%]'>
            homeright
        </div>
      </div>
    </div>
  )
}

export default HomePage
// const Profile = () => {
//   return (
//     <div className='px-20'>
//       <div >
//         <ProfileUserDetails></ProfileUserDetails>
//       </div>
//       <div>
//         <ReqUserPostPart/>
//       </div>
//     </div>
//   )
// }
