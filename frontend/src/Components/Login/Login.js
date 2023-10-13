import React from 'react'
import instagram from '../../assets/Instagram-Logo.png'
import './Login.css'




function Login() {
  return (
    <div className='login-container'>
        <div className='box-outline'>
            <div className='box-logo'>
                <img src={instagram} className='instaLogoText'></img>
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
                <button className='button-login'>
                    Đăng nhập
                </button>
            </div>

            <div className='text-forgotPass'>
                <p> <a className='forgot-pass' href=''>Quên Mật Khẩu?</a></p>
            </div>
        </div>

        <div className='box-signup'>
            <p>Bạn Không có tài Khoản? <a className='button-signup' href=''>Đăng Kí</a></p>
            
        </div>

    </div>
  );
};

export default Login;