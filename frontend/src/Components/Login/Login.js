

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
//     const [isButtonDisabled, setIsButtonDisabled] = useState(true); 

//     const validationEmail = (email) => {
//         const regex = /\S+@\S+\.\S+/.test(email);
        
//         return regex;
//     }

//     const validatePassword = (password) => {
//         const hasUpperCase = /[A-Z]/.test(password); 
//         const hasLowerCase = /[a-z]/.test(password); 
//         const hasNumber = /\d/.test(password);
//         const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

//         const isValidLength = password.length >= 6;
      
//         return hasUpperCase && hasLowerCase && hasNumber && isValidLength && hasSpecialChar;
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'email') {
//           setEmail(value);
//         } else if (name === 'password') {
//           setPassword(value);
//         }

//         setIsButtonDisabled(!(validationEmail(email)&&validatePassword(password)));
//     }
    
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
//                 navigate('/router')
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
//                 placeholder="Số điện thoại, tên người dùng hoặc email" value={email}>

//                 </input>
//             </div>

//             <div className='input-PassUser'>
//                   <input onChange={(e)=>setPassword(e.target.value)} type='password' className='' placeholder="Mật Khẩu" value={password}></input>
//             </div>

//             <div className='box-button-login'>
//                     <button onClick={handleLogin} disabled={isButtonDisabled}>
//                         <a className='button-login'>Đăng nhập</a>
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


import React, { useState , useEffect} from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
// import { redirect } from 'react-router-dom';
// import img_logo from '../Assets/Logo.png';

import logo from '../Assets/logo.png'
import userService from '../../services/userService';
import { useDisclosure } from '@chakra-ui/react';
import ModalResetPassword from './modalResetPassword';

function Login() {
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState('');
    const [check, setCheck] = useState(false); 

    const { isOpen, onOpen, onClose } = useDisclosure()

    // let check;
    const handleLogin=async()=>{
        try{
            if(email&&password){
                const user=await userService.loginUser({email:email,password:password})
                setEmail(''); setPassword('');
                console.log(user);

                localStorage.removeItem('user');

                localStorage.setItem('user',JSON.stringify(user.data));
                alert("Dang nhap thanh cong")
                // check=
                navigate('/home')
                // setCheck(true);
          window.location.reload();


                // check=true;
            }else{
                alert("Dang nhap that bai")
            }
        }catch(e){
            console.log(e)
            alert("Dang nhap that bai")
        }
    }
    const handleOpenModel=()=>{
        onOpen()
    };
  return (
    <div className='login-container'>
        <div className='box-outline'>
            <div className='box-logo'>
                <img src={logo} className='instaLogoText' alt='Logo'></img>
            </div>

            <div className='input-UserName'>
                <input type='text' onChange={(e)=>setEmail(e.target.value)}
                placeholder="Số điện thoại, tên người dùng hoặc email">

                </input>
            </div>

            <div className='input-PassUser'>
                  <input onChange={(e)=>setPassword(e.target.value)} type='password' className='' placeholder="Mật Khẩu"></input>
            </div>

            <div className='box-button-login'>
                    <button onClick={handleLogin}>
                        <a className='button-login' >Đăng nhập</a>
                    </button>
            </div>

            <br/>
            <div className='text-forgotPass' onClick={handleOpenModel}>
    Quên Mật Khẩu?
</div>

        </div>
            <div className='box-signup'>
                <p>Bạn Không có tài Khoản?&nbsp;</p>
                <Link to={"/signup"}>
                    <p>Đăng kí</p>
                </Link>
            </div>
            {/* {used==="user"?<ModelUser handleUpdatePost={handleUpdatePost} handleDeletePost={handleDeletePost} isOpen={isOpen} onClose={onClose}/>:<ModelGuess isOpen={isOpen} onClose={onClose}/>} */}
{<ModalResetPassword isOpen={isOpen} onClose={onClose}/>}
    </div>
  );
};

export default Login;



