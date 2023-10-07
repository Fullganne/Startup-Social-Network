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

        </div>
    );
}

export default Login;
