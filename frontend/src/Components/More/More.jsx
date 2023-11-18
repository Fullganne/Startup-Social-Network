import React, { useRef, useEffect } from 'react';
import './More.css';

const More = ({ isOpen, setCloseMore }) => {
  const modalRef = useRef(null);

  const handleCloseModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setCloseMore();
    }
  };

  const handleLogout = () => {
    // Xử lý đăng xuất (xóa thông tin đăng nhập, v.v.)
    window.location.href = '/login'; 
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleCloseModal);

    return () => {
      document.removeEventListener('mousedown', handleCloseModal);
    };
  }, []); 

  return (
    <>
      {isOpen && (
        <div className='more' id='wrapper' ref={modalRef}>
          <button className='more-option-container pl-7'><img width="18" height="18" src="https://img.icons8.com/external-yogi-aprelliyanto-glyph-yogi-aprelliyanto/32/1A1A1A/external-setting-essential-element-yogi-aprelliyanto-glyph-yogi-aprelliyanto.png" alt="external-setting-essential-element-yogi-aprelliyanto-glyph-yogi-aprelliyanto"/><span className='pl-3'>Settings</span></button>
          <button className='more-option-container pl-7' onClick={handleLogout}><span>Log out</span></button>
        </div>
      )}
    </>
  );
};

export default More;