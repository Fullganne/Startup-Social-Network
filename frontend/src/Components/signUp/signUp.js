import './signUp.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {BsFacebook} from 'react-icons/bs'
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import img_logo from '../Assets/Logo.png';
import { Link } from 'react-router-dom';
const SignUp=()=>{
    
    return(
    <div className='body'>
        <div className='container'>
            <div className='header'>
                <img src={img_logo} alt='Logo' style={{width:'175px'}}/>
                <div> <label>Đăng ký để xem ảnh và video từ bạn bè.</label> </div>
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
        <div className='container'>
            <div className='outline'>
                <label>Đã có tài khoản?&nbsp;</label>
                <Link to={"/login"}>
                    <label>Đăng nhập</label>
                </Link>
            </div>
        </div>
    </div>
    );
}

export default SignUp;
