import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {mainu} from './SidebarConfig'
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import CreatPostModal from '../modals/create-post-modal';
import More from '../More/More';

const Sidebar = () => {
  const [activeTab, setActiveTab]=useState("Home");
  const navigate=useNavigate();
  const [isOpenModalPost, setIsOpenModalPost] = useState(false);
  const [isOpenModalMore, setIsOpenModalMore] = useState(false);
  const handleTabClick=(title)=>{
    setActiveTab(title)
    if(title==='Profile'){
      navigate("/user");
    }
    else if(title==='Home')
    {
      navigate("/");
    }else if (title === "Create") {
      setIsOpenModalPost(true);
    }
  };

  return (
    <div className="sticky top-0 h-[100vh]">
      <div className="flex flex-col justify-between h-full px-8">
        <div>
          <div className="pt-10">
            <img className="w-25" src='https://i.imgur.com/zqpwkLQ.png' alt='' />
          </div>
          <div className="mt-10">
              {mainu.map((item)=> (
                <div onClick={()=>handleTabClick(item.title)} className="flex items-center mb-8 cursor-pointer text-lg">
                  {activeTab===item.title? item.iactiveIcon:item.icon}
                  <p className={`${activeTab===item.title?"font-bold":"font-normal"}`}>{item.title}</p>
                </div>
              ))}
          </div>
        </div>
        <CreatPostModal
          isOpen={isOpenModalPost}
          setCloseModal={setIsOpenModalPost}
        />
        <div className="flex relative items-center cursor-pointer" onClick={() => setIsOpenModalMore(true)}>
          <More
            isOpen={isOpenModalMore}
            setCloseMore={setIsOpenModalMore}
          />
          <div className='flex relative items-center py-5 rounded-3xl w-full hover:bg-slate-400/[0.1]'>
            <AiOutlineMenu className='text-3xl mr-5 '/>
            <p className="flex items-center cursor-pointer text-lg">More</p>
          </div>
        </div>
      </div>
    </div>
);
};

export default Sidebar