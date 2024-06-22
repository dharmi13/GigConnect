import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./Login.scss";
const Login = () =>{

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const newRequest = axios.create({
        baseURL: "http://localhost:5008/api/",
        withCredentials: true,
      });
    const handlesubmit = async (e)=>{
        e.preventDefault();
        try{   
            const res = await newRequest.post("http://localhost:5008/api/login",
            {username:username,password:password,});
            localStorage.setItem("currentUser",JSON.stringify(res.data));
            navigate("/")
            console.log(res);
        }catch(err){
            console.log(err);
        }
    }
    return(
        <div className='main page'>
            <div className='logo'>
                <Link to = "/" className='link'>
                    <span className='text'>GigConnect</span>
                    <span className='dot'>.</span>
                </Link>
            </div>
            <div className='loginbox'>
            <form action="" className='form grid'  onSubmit = {handlesubmit}>
                <span className='textlog'>Log In</span>
                <div className='inputdiv'>
                    <label htmlFor='username'>Username</label>
                    <input type ="text" id="username" name="username" placeholder='Enter Username' onChange = {(e)=>setUsername(e.target.value)}/>
                </div>  
                <div className='inputdiv'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" id ="password" name = "password" placeholder='Enter Password'onChange = {(e)=>setPassword(e.target.value)}/>
                </div>
                <button type='submit' className='btn flex'>
                    <span>Login</span>
                </button>
                
            </form>
                <span className='sign'>
                    Don't have account? <Link to = "/registeruser" className='sgn'>Sign Up</Link>
                </span>
            </div>
        </div>
    );
}

export default Login;