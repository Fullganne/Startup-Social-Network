import "./signUp.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BsFacebook } from "react-icons/bs";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
// import img_logo from '../Assets/Logo.png';
import logo from "../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import userService from "../../services/userService";
import uuid4 from "uuid4";
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    // const handleSignup= async ()=>{
    //     try{
    //         // if()
    //         if(username&&password&&email){
    //             const newUser=await userService.signupUser({id:uuid4(),username:username,email:email,password:password})

    //             setEmail(''); setPassword(''); setUsername('');
    //             console.log(newUser);

    //             if(newUser?.data?.message){

    //             }else{
    //                 alert("Tao tai khoan thanh cong")
    //                 navigate('/')
    //             }
    //         }else{
    //             alert("Ban chua dien day du thong tin")
    //         }
    //     }catch(e){
    //         console.log(e.response.data);
    //         alert(e.response.data)
    //     }
    // }

    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(
            password
        );

        const isValidLength = password.length >= 6;

        return (
            hasUpperCase &&
            hasLowerCase &&
            hasNumber &&
            isValidLength &&
            hasSpecialChar
        );
    };

    const handleSignup = async () => {
        try {
            const validationErrors = {};

            if (!username.trim()) {
                validationErrors.username = "Username không được để trống!";
            }
            if (!email.trim()) {
                validationErrors.email = "Email không được để trống!";
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                validationErrors.email = "Email không hợp lệ!";
            }
            if (!password.trim()) {
                validationErrors.password = "Password không được để trống!";
            } else if (!validatePassword(password)) {
                validationErrors.password =
                    "Password cần ít nhất 6 kí tự, chữ hoa, thường và kí tự đặc biệt!";
            }

            if (Object.keys(validationErrors).length === 0) {
                const newUser = await userService.signupUser({
                    id: uuid4(),
                    username: username,
                    email: email,
                    password: password,
                    avatar: "http://res.cloudinary.com/da0ikowpn/image/upload/v1700813395/dvbvfdvgivwokdx3ub4p.jpg",
                });

                setEmail("");
                setPassword("");
                setUsername("");
                console.log(newUser);

                if (newUser?.data?.message) {
                    // Handle message if needed
                } else {
                    alert("Tạo tài khoản thành công");
                    navigate("/");
                }
            } else {
                setErrors(validationErrors);
            }
        } catch (e) {
            console.log(e.response.data);
            alert(e.response.data);
        }
    };

    return (
        <div className="body">
            <div className="container">
                <div className="header">
                    <img src={logo} alt="Logo" style={{ width: "175px" }} />
                    <div>
                        {" "}
                        <label>
                            Đăng ký để xem ảnh và video từ bạn bè.
                        </label>{" "}
                    </div>
                    <div class="">
                        <button
                            class=""
                            type="submit"
                            tabindex="0"
                            style={{ border: "none" }}
                        >
                            {" "}
                            <BsFacebook /> Đăng nhập bằng Facebook
                        </button>
                    </div>
                    <div className="total-underline">
                        <div className="underline"></div>
                        <div className="" style={{ margin: "0 18px 18px " }}>
                            {" "}
                            HOẶC{" "}
                        </div>
                        <div className="underline"></div>
                    </div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Nhập Email"
                        />
                    </div>
                    <div className="flex w-[80%] m-auto px-5">
                        {errors.email && (
                            <span className="error text-red-500">
                                {errors.email}
                            </span>
                        )}
                    </div>
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            placeholder="Nhập Username"
                        />
                    </div>
                    <div className="flex w-[80%] m-auto px-5">
                        {errors.username && (
                            <span className="error text-red-500">
                                {errors.username}
                            </span>
                        )}
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Nhập Password"
                        />
                    </div>
                    <div className="flex w-[80%] m-auto px-5">
                        {errors.password && (
                            <span className="error text-red-500 text-left">
                                {errors.password}
                            </span>
                        )}
                    </div>
                </div>
                <div
                    style={{
                        textAlign: "center",
                        width: "80%",
                        margin: "auto",
                        paddingTop: "30px",
                    }}
                >
                    {" "}
                    <span>
                        Những người dùng dịch vụ của chúng tôi có thể đã tải
                        thông tin liên hệ của bạn lên Instagram.{" "}
                        <a href="#">Tìm hiểu thêm</a>
                    </span>
                </div>
                <div
                    style={{
                        textAlign: "center",
                        width: "80%",
                        margin: "auto",
                        paddingTop: "30px",
                    }}
                >
                    <span>
                        Bằng cách đăng ký, bạn đồng ý với{" "}
                        <a href="#">Điều khoản</a>,
                        <a href="#"> Chính sách quyền riêng tư</a> và{" "}
                        <a href="#">Chính sách cookie</a> của chúng tôi.
                    </span>
                </div>
                <div className="submit-container">
                    <button onClick={handleSignup} className="submit">
                        Đăng ký
                    </button>
                </div>
            </div>
            <div className="container">
                <div className="outline">
                    <label>Đã có tài khoản?&nbsp;</label>
                    <Link to={"/login"}>
                        <label>Đăng nhập</label>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

// import './signUp.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import {BsFacebook} from 'react-icons/bs'
// import user_icon from '../Assets/person.png';
// import email_icon from '../Assets/email.png';
// import password_icon from '../Assets/password.png';
// // import img_logo from '../Assets/Logo.png';
// import logo from '../Assets/logo.png'
// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import userService from '../../services/userService';
// import uuid4 from "uuid4"
// const SignUp=()=>{

//     const [email,setEmail]=useState("");
//     const [username,setUsername]=useState("");
//     const [password,setPassword]=useState("");

//     const navigate=useNavigate();

//     const handleSignup= async ()=>{
//         try{
//             // if()
//             if(username&&password&&email){
//                 const newUser=await userService.signupUser({id:uuid4(),username:username,email:email,password:password})

//                 setEmail(''); setPassword(''); setUsername('');
//                 console.log(newUser);

//                 if(newUser?.data?.message){

//                 }else{
//                     alert("Tao tai khoan thanh cong")
//                     navigate('/')
//                 }
//             }else{
//                 alert("Ban chua dien day du thong tin")
//             }
//         }catch(e){
//             console.log(e.response.data);
//             alert(e.response.data)
//         }
//     }

//     return(
//     <div className='body'>
//         <div className='container'>
//             <div className='header'>
//                 <img src={logo} alt='Logo' style={{width:'175px'}}/>
//                 <div> <label>Đăng ký để xem ảnh và video từ bạn bè.</label> </div>
//                 <div class=""><button  class="" type="submit" tabindex="0" style={{border:'none'} } > <BsFacebook/> Đăng nhập bằng Facebook</button></div>
//                 <div className='total-underline'>
//                     <div className='underline'></div>
//                     <div className='' style={{margin:"0 18px 18px "}}>  HOẶC  </div>
//                     <div className='underline'></div>
//                 </div>
//             </div>
//             <div className='inputs'>
//                 <div className='input'>
//                     <img src={email_icon} alt=''/>
//                     <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Nhập Email'/>
//                 </div>
//                 {/* <div className='input'>
//                     <img src={user_icon} alt=''/>
//                     <input type='fullname' placeholder='Nhập tên đầy đủ'/>
//                 </div> */}
//                 <div className='input'>
//                     <img src={user_icon} alt=''/>
//                     <input value={username} onChange={(e)=>setUsername(e.target.value)} type='text' placeholder='Nhập Username'/>
//                 </div>
//                 <div className='input'>
//                     <img src={password_icon} alt=''/>
//                     <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Nhập Password'/>
//                 </div>
//             </div>
//             <div style={{textAlign:"center", width:"80%",margin:"auto",paddingTop:"30px"}}> <span>Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Instagram. <a href='#'>Tìm hiểu thêm</a></span></div>
//             <div style={{textAlign:"center", width:"80%",margin:"auto",paddingTop:"30px"}}><span>Bằng cách đăng ký, bạn đồng ý với <a href='#'>Điều khoản</a>,<a href='#'> Chính sách quyền riêng tư</a> và <a href='#'>Chính sách cookie</a> của chúng tôi.</span></div>
//             <div className='submit-container'>
//                 <button onClick={handleSignup} className='submit'>Đăng ký</button>
//             </div>
//         </div>
//         <div className='container'>
//             <div className='outline'>
//                 <label>Đã có tài khoản?&nbsp;</label>
//                 <Link to={"/login"}>
//                     <label>Đăng nhập</label>
//                 </Link>
//             </div>
//         </div>
//     </div>
//     );
// }

// export default SignUp;
