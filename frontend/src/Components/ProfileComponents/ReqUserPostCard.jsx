import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import './ReqUserPostCard.css'

const ReqUserPostCard = () => {
  return (
    <div className='p-1'>
        <div className='post'>
            <img className='cursor-pointer' src="https://lh3.google.com/u/0/d/1yyX1z7f8fuSAvbdv04MrOzh9vhpXW4Vc=w1910-h922-iv1" alt="" />
            <div className='overlay'>
                <div className='overlay-text flex'>
                    <div className='flex space-x-5'>
                        <AiFillHeart></AiFillHeart><span>300</span>
                    </div>
                    <div className='flex space-x-5 ml-10'>
                        <FaComment/><span>36</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReqUserPostCard