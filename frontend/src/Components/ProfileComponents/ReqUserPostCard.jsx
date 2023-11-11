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
                <div className='overlay-text flex justify-between'>
                    <div>
                        <AiFillHeart></AiFillHeart><span>100</span>
                    </div>
                    <div><FaComment/><span>36</span></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReqUserPostCard