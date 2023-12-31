import React, { useState } from 'react'
import './post.css'
import { Link } from 'react-router-dom';
import {BsThreeDots,BsBookmarkFill,BsBookmark, BsEmojiSmile} from 'react-icons/bs'
import { AiFillHeart , AiOutlineHeart} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {RiSendPlaneLine} from 'react-icons/ri'
import ModelGuess from './guess';
import { useDisclosure } from '@chakra-ui/react'
import ModelUser from './userModel';

const PostCard=()=>{
    const[isPostLiked,setIsPostLiked]=useState(false);
    const[isSaved,setIsSaved]=useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleSavePost=()=>{
        setIsSaved(!isSaved);
    };
    let used="guess";
    const handleOpenModel=()=>{
        onOpen()
    };
    const handlePostLiked=()=>{
        setIsPostLiked(!isPostLiked);
    };
    
    return(
        <div>
            <div className='border rounded-md w-full mt-20'>
                <div className='flex justify-between items-center w-full py-4 px-5'>
                    <div className='flex items-center'>
                        <img className='h-12 w-12 rounded-full'
                         src="https://cdn.pixabay.com/photo/2023/10/27/12/13/vineyard-8345243_1280.jpg"
                         alt='' 
                         />
                         <div className='pl-2' >
                            <p className='font-semibold text-sm'>User name</p>
                            <p className='font-thin text-sm' >location </p>
                         </div>
                    </div>


                    <div className='dropdown'>
                    <BsThreeDots className='dots'/>
                    <div  className='dropdown-content'>
                       {<button className='bg-black text-white buttony-1 px-4 rounded-md curson-pointer'>Delete</button>}
                    </div>
                    <div className='asss'>
                     <BsThreeDots className='dots' onClick={handleOpenModel}/>

                    </div>
                </div>
                <div className='w-full'>
                    <img className='w-full' src='https://cdn.pixabay.com/photo/2023/10/28/18/02/songbird-8348139_640.png' alt=''/>
                </div>
                <div className='flex justify-between items-center w-full py-4 px-5'>
                    <div className='flex items-center space-x-2 '>
                        {isPostLiked? <AiFillHeart className='text-xl hover:opacity-50 cursor-pointer text-red-500' onClick={handlePostLiked}/>:<AiOutlineHeart className='text-xl hover:opacity-50 cursor-pointer' onClick={handlePostLiked}/>}
                        {<FaRegComment className='text-xl hover:opacity-50 cursor-pointer'/>}
                        {<RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'/>}
                    </div>
                    <div>
                        {isSaved? <BsBookmarkFill onClick={handleSavePost} className='text-xl hover:opacity-50 cursor-pointer'/>: <BsBookmark onClick={handleSavePost} className='text-xl hover:opacity-50 cursor-pointer'/>}
                    </div>
                </div>
                <div className='w-full py-2 px-5'>
                    <p>10 like</p>
                    {/* <p className='opacity-50 py-2 cursor-pointer'>view all 10 comment</p> */}
                </div>
                 {/* <div className='border border-top w-full'>
                    <div className='flex w-full justify-between items-center px-5'>
                        <input className='commentInput' type="text" placeholder='Thêm bình luận...' />
                        <BsEmojiSmile/>
                    </div>
                </div>  */} {/*Comment nếu có */}
            </div>
            {used==="user"?<ModelUser isOpen={isOpen} onClose={onClose}/>:<ModelGuess isOpen={isOpen} onClose={onClose}/>}
        </div>
        
    )
}
export default PostCard;