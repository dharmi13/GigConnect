import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";
import "./Register.scss";
const Register = () =>{
    const [gender, setGender] = useState('');
    const [user,setUser] = useState({
        Fname:"",
        Lname:"",
        username:"",
        email:"",
        password:"",
        country:"",
    })
    const navigate = useNavigate();
    const handleChange = (e)=>{
        setUser((prev)=>{
            return{...prev,[e.target.name]:e.target.value};
        });
    } 
    const handleGenderChange = (e) => {
      setGender(e.target.value);
    };
    const tobackend = async (e) =>{
       e.preventDefault();
       try{
         await axios.post("http://localhost:5008/api/register",{
            ...user,gender
         });
         navigate("/")
         console.log(user);
       }
       catch(err){
        console.log(err)
       }
    };
    
    return(
        <div className='main page'>
            <div className='logo'>
                <Link to = "/" className='link'>
                    <span className='text'>GigConnect</span>
                    <span className='dot'>.</span>
                </Link>
            </div>
            <div className='loginbox'>
            <form action="" className='form grid'>
                <span className='textlog'>Sign Up</span>
                <div className='inputdiv'>
                    <label htmlFor='name'>FirstName</label>
                    <input type="text" name="Fname" id ="Fname" placeholder='Enter First Name' onChange={handleChange}/>
                </div>
                <div className='inputdiv'>
                    <label htmlFor='name'>LastName</label>
                    <input type="text"  name="Lname" id ="Lname" placeholder='Enter Last Name' onChange={handleChange}/>
                </div>
                <div className='inputdiv'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" id ="email" placeholder='Enter Email' onChange={handleChange}/>
                </div>
                <div className='inputdiv-uniq'>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === 'male'}
                        onChange={handleGenderChange}
                    />
                    Male
                    </label>
                    <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === 'female'}
                        onChange={handleGenderChange}
                    />
                    Female
                    </label>
                    <label>
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={gender === 'other'}
                        onChange={handleGenderChange}
                    />
                    Other
                    </label>
                </div>
                <div className='inputdiv'>
                    <label htmlFor='country'>Country</label>
                    <input type ="text" name="country" id="country" placeholder='Enter Country' onChange={handleChange}/>
                </div>
                <div className='inputdiv'>
                    <label htmlFor='username'>Username</label>
                    <input type ="text" name="username" id="username" placeholder='Enter Username' onChange={handleChange}/>
                </div>
                <div className='inputdiv'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id ="password" placeholder='Enter Password' onChange={handleChange}/>
                </div>
                <button type='submit' className='btn flex' onClick={tobackend}>
                    <span>Register</span>
                </button>
                <span className='sign'>
                    Have account? <Link to = "/loginuser" className='sgn'>Log In</Link>
                </span>
            </form>
            </div>
        </div>
    );
}

export default Register;