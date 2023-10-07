import './Login.css';
import {useState} from 'react';
const Login=()=>{
    const [name,setName]=useState("");
    const [gmail,setGmail] = useState("");
    
    const change=(e)=>{
        setName(e.target.value);
        console.log(name);
    }
    return(
        <div>
            <input className='abc' onChange={change}></input>
            <input></input>

        </div>
    );
}

export default Login;
