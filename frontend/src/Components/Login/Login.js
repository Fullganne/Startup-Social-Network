import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import img_logo from '../Assets/Logo.png';



function Login() {
  return (
    <div className='login-container'>
        <div className='box-outline'>
            <div className='box-logo'>
                <img src={img_logo} className='instaLogoText' alt='Logo'></img>
            </div>

            <div className='input-UserName'>
                <input type='text'
                placeholder="Số điện thoại, tên người dùng hoặc email">

                </input>
            </div>

            <div className='input-PassUser'>
                  <input type='password' className='' placeholder="Mật Khẩu"></input>
            </div>

            <div className='box-button-login'>
                <Link to={"/home"}>
                    <button className='button-login' >
                        Đăng nhập
                    </button>
                </Link>
            </div>

            <div className='text-forgotPass'>
                {/* <a className='forgot-pass' href='#'>Quên Mật Khẩu?</a> */}
            </div>
        </div>
            <div className='box-signup'>
                <p>Bạn Không có tài Khoản?&nbsp;</p>
                <Link to={"/signup"}>
                    <p>Đăng kí</p>
                </Link>
            </div>
    </div>
  );
};

export default Login;