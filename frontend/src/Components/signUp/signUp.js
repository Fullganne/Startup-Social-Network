import './signUp.css';
import Button from 'react-bootstrap/Button';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaBeer, FontAwesomeIcon } from 'react-icons/fa';
import {BsFacebook} from 'react-icons/bs'
import {useState} from 'react';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import img_logo from '../Assets/logo.png';
const SinUp=()=>{
    
    return(
    <div className='container'>
        <div className='header'>
            <img src={img_logo} style={{width:'175px',height:'50px'}}/>
            <div> <label>Đăng ký để xem ảnh và video2 từ bạn bè.</label> </div>
            <div class=""><button  class="" type="submit" tabindex="0" style={{border:'none'} } > <BsFacebook/> Đăng nhập bằng Facebook</button></div>
            <div className='total-underline'>
                <div className='underline'></div>
                <div className='' style={{margin:"0 18px 18px "}}>  HOẶC  </div>
                <div className='underline'></div>
            </div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={email_icon} alt=''/>
                <input type='email' placeholder='Nhập Email'/>
            </div>
            <div className='input'>
                <img src={user_icon} alt=''/>
                <input type='fullname' placeholder='Nhập tên đầy đủ'/>
            </div>
            <div className='input'>
                <img src={user_icon} alt=''/>
                <input type='name' placeholder='Nhập tên'/>
            </div>
            <div className='input'>
                <img src={password_icon} alt=''/>
                <input type='password' placeholder='Nhập mật khẩu'/>
            </div>
        </div>
        <div style={{textAlign:"center", width:"80%",margin:"auto",paddingTop:"30px"}}> <span>Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Instagram. <a href='#'>Tìm hiểu thêm</a></span></div>
        <div style={{textAlign:"center", width:"80%",margin:"auto",paddingTop:"30px"}}><span>Bằng cách đăng ký, bạn đồng ý với <a href='#'>Điều khoản</a>,<a href='#'> Chính sách quyền riêng tư</a> và <a href='#'>Chính sách cookie</a> của chúng tôi.</span></div>
        <div className='submit-container'>
            <button className='submit'>Đăng ký</button>
        </div>
    </div>

    );
}

export default SinUp;
