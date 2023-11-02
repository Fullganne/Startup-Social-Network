import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import HomePage from '../HomePage/HomePage'
import Profile from '../Profile/Profile'
const Router = () => {
  return (
    <div>
        <div className="flex">
            <div className='w-[16.25%] border border-l-slate-500'>
                <Sidebar/>
            </div>
            <div className='w-full'>
                <Routes>
                    <Route path='/home' element={<HomePage/>}></Route>
                    <Route path='/user' element={<Profile/>}></Route>
                </Routes>
            </div>
        </div>
    </div>
  );
};

export default Router