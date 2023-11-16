import React, { useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import { BiBookmark } from 'react-icons/bi'
import ReqUserPostCard from './ReqUserPostCard'
import './ReqUserPostCard.css'

const ReqUserPostPart = () => {
    const [activeTab, setActiveTab]=useState("POSTS")
    const tabs=[
        {
            tab:"POSTS",
            icon: <AiOutlineTable></AiOutlineTable>,
            activeTab: ""
        },
        {
            tab:"SAVED",
            icon:<BiBookmark/>
        },
        {
            tab:"TAGGED",
            icon:<AiOutlineUser></AiOutlineUser>
        }
    ]
  return (
    <div>
        <div className='tab flex space-x-14 border-t relative'>
            {tabs.map((item)=>
                <div onClick={()=>setActiveTab(item.tab)} className={`${activeTab===item.tab?"border-t border-black":"opacity-60"} flex items-center cursor-pointer py-2 text-md`}>
                    <p>{item.icon}</p>
                    <p className='ml-1'>{item.tab}</p>
                </div>
            )}
        </div>
        <div>
            <div className='flex flex-wrap'>
                {[1,1,1,1,1,1].map((item)=><ReqUserPostCard/>)}
            </div>
        </div>
    </div>
  )
}


export default ReqUserPostPart