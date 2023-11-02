import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import './ReqUserPostCard.css'

const ReqUserPostCard = () => {
  return (
    <div className='p-1'>
        <div className='post w-60 h-60'>
            <img className='cursor-pointer' src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/377458717_1358335628453856_4763046862183671841_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2uXEJBRvQzwAX84ZfMN&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDFx_3rsN5gQHtPrHDz_nzJMiAEZv0RZrpbmiM-JT83rg&oe=654573FD" alt="" />
            <div className='overlay'>
                <div className='overlay-text flex justify-between'>
                    <div>
                        <AiFillHeart></AiFillHeart> <span>100</span>
                    </div>
                    <div><FaComment/><span>36</span></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReqUserPostCard