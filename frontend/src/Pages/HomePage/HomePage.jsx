import React from 'react'
import PostCard from '../../Components/Post/post'
import HomeRight from '../../Components/HomeRight/HomeRight'
const HomePage = () => {
  return (
    <div>
      <div className='mt-10 flex w-[100%] justify-center'>
        <div className='w-[70%] px-10 flex justify-center'>
            <div className='space-y-10 w-[60%] mt-10'>
              <PostCard></PostCard>
              <PostCard></PostCard>
              <PostCard></PostCard>
              <PostCard></PostCard>
              <PostCard></PostCard>

            </div>
        </div>
        <div className='w-[30%]'>
            <HomeRight></HomeRight>
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
