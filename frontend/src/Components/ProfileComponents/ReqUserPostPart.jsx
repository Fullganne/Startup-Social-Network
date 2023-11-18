import React, { useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import { BiBookmark } from 'react-icons/bi'
import ReqUserPostCard from './ReqUserPostCard'
import './ReqUserPostCard.css'
import { Link, Outlet } from 'react-router-dom'
import PostCard from '../Post/post'

const ReqUserPostPart = () => {
    const [activeTab, setActiveTab]=useState("POSTS")
    const tabs=[
        {
            tab:"POSTS",
            icon: <AiOutlineTable></AiOutlineTable>,
            activeTab: "",
            link:"/posts"
        },
        {
            tab:"IMAGES",
            icon:<BiBookmark/>,
            link:"/images"
        },
        {
            tab:"TAGGED",
            icon:<AiOutlineUser></AiOutlineUser>,
            link:""
        }
    ]
  return (
    <div>
        <div className='tab flex space-x-14 border-t relative'>
            {tabs.map((item)=>
                <div  onClick={()=>setActiveTab(item.tab)} className={`${activeTab===item.tab?"border-t border-black":"opacity-60"} flex items-center cursor-pointer py-2 text-md`}>
                    {/* <Link to={item.link}> */}
                    <p>{item.icon}</p>
                    <p className='ml-1'>{item.tab}</p>
                    {/* </Link> */}
                </div>
            )}
        </div>
        {/* <div>
            <div className='flex flex-wrap'>
                {[1,1,1,1,1,1].map((item)=><ReqUserPostCard/>)}
            </div>
        </div> */}
        {/* <Outlet/> */}

       

<div className='w-[50%] mx-auto'>
<PostCard />
<PostCard/>
<PostCard/>
<PostCard/>

</div>

    </div>
  )
}


export default ReqUserPostPart