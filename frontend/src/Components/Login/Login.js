import React, { useState , useEffect} from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
// import { redirect } from 'react-router-dom';
// import img_logo from '../Assets/Logo.png';

import logo from '../Assets/logo.png'
import userService from '../../services/userService';

function Login() {
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true); 

    const validationEmail = (email) => {
        const regex = /\S+@\S+\.\S+/.test(email);
        
        return regex;
    }

    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password); 
        const hasLowerCase = /[a-z]/.test(password); 
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

        const isValidLength = password.length >= 6;
      
        return hasUpperCase && hasLowerCase && hasNumber && isValidLength && hasSpecialChar;
    };
    
    // let check;
    const handleLogin=async()=>{
        try{
            if(email&&password){
                const user=await userService.loginUser({email:email,password:password})
                setEmail(''); setPassword('');
                console.log(user);

                localStorage.removeItem('user');

                localStorage.setItem('user',JSON.stringify(user.data));
                alert("Đăng nhập thành công")
                // check=
                navigate('/home')
                // setCheck(true);
                window.location.reload();


                // check=true;
            }else{
                alert("Đăng nhập thất bại")
            }
        }catch(e){
            console.log(e)
            alert("Đăng nhập thất bại")
        }
    }
   
  return (
    <div className='login-container'>
        <div className='box-outline'>
            <div className='box-logo'>
                <img src={logo} className='instaLogoText' alt='Logo'></img>
            </div>

            <div className='input-UserName'>
                <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder="Email" name={email} value={email}></input>
            </div>

            <div className='input-PassUser'>
                  <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder="Mật Khẩu" name='password' value={password}></input>
            </div>

            <div className='box-button-login'>
                    <button onClick={handleLogin} disabled={!(email&&password)}>
                        <a className='button-login'>Đăng nhập</a>
                    </button>
            </div>

            <div className='text-forgotPass'>
                {/* <a className='forgot-pass' href='#'>Quên Mật Khẩu?</a> */}
            </div>
        </div>
            <div className='box-signup'>
                <p>Bạn không có tài Khoản?&nbsp;</p>
                <Link to={"/signup"}>
                    <p>Đăng kí</p>
                </Link>
            </div>
    </div>
  );
};

export default Login;


// import React, { useState , useEffect} from 'react'
// import './Login.css'
// import { Link, useNavigate } from 'react-router-dom';
// // import { redirect } from 'react-router-dom';
// // import img_logo from '../Assets/Logo.png';

// import logo from '../Assets/logo.png'
// import userService from '../../services/userService';

// function Login() {
//     const navigate=useNavigate()
//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState('');
//     const [check, setCheck] = useState(false); 


//     // let check;
//     const handleLogin=async()=>{
//         try{
//             if(email&&password){
//                 const user=await userService.loginUser({email:email,password:password})
//                 setEmail(''); setPassword('');
//                 console.log(user);

//                 localStorage.removeItem('user');

//                 localStorage.setItem('user',JSON.stringify(user.data));
//                 alert("Dang nhap thanh cong")
//                 // check=
//                 navigate('/home')
//                 // setCheck(true);
//           window.location.reload();


//                 // check=true;
//             }else{
//                 alert("Dang nhap that bai")
//             }
//         }catch(e){
//             console.log(e)
//             alert("Dang nhap that bai")
//         }
//     }
   
//   return (
//     <div className='login-container'>
//         <div className='box-outline'>
//             <div className='box-logo'>
//                 <img src={logo} className='instaLogoText' alt='Logo'></img>
//             </div>

//             <div className='input-UserName'>
//                 <input type='text' onChange={(e)=>setEmail(e.target.value)}
//                 placeholder="Số điện thoại, tên người dùng hoặc email">

//                 </input>
//             </div>

//             <div className='input-PassUser'>
//                   <input onChange={(e)=>setPassword(e.target.value)} type='password' className='' placeholder="Mật Khẩu"></input>
//             </div>

//             <div className='box-button-login'>
//                     <button onClick={handleLogin}>
//                         <a className='button-login' >Đăng nhập</a>
//                     </button>
//             </div>

//             <div className='text-forgotPass'>
//                 {/* <a className='forgot-pass' href='#'>Quên Mật Khẩu?</a> */}
//             </div>
//         </div>
//             <div className='box-signup'>
//                 <p>Bạn Không có tài Khoản?&nbsp;</p>
//                 <Link to={"/signup"}>
//                     <p>Đăng kí</p>
//                 </Link>
//             </div>
//     </div>
//   );
// };

// export default Login;