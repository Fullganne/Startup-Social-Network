import { useState, React } from 'react'
import './More.css'

const More = ({isOpen, setCloseMore}) => {
  const handleClose = (e) => {
    if(e.target.id === 'wrapper') setCloseMore();
  }
    return (
        <>
            {isOpen && (
                <div className='' id='wrapper' onClick={handleClose}>
                    <span>More</span>
                </div>
            )}
        </>
  )
}

export default More