import React, { useState } from 'react'
import ReqUserPostCard from './ReqUserPostCard'

const ImagePost=()=>{
    return(
        <div>
        <div className='flex flex-wrap'>
            {[1,1,1,1,1,1].map((item)=><ReqUserPostCard/>)}
        </div>
    </div>
    )
}
export default ImagePost