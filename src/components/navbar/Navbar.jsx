import React, { useEffect } from 'react';
import { Link, useLocation,useNavigate } from "react-router-dom";
import axios from 'axios';
import {useState} from 'react';
import './Navbar.scss';

const Navbar = () => {
    const [active,setActive] = useState(false);
    const [open,setOpen] = useState(false);
    const {pathname} = useLocation();
    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }
    useEffect(()=>{
        window.addEventListener("scroll",isActive);
        return ()=>{
            window.removeEventListener("scroll",isActive);
        }
    },[]);

    const currentuser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();
  const newRequest = axios.create({
    baseURL: "http://localhost:5008/api/",
    withCredentials: true,
  });
  const handlelogout = async () => {
    try {
      await newRequest.post("http://localhost:5008/api/logout");
      localStorage.setItem("currentUser", null);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
    return (
        <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
            <div className='container'>
                <div className='logo'>
                <Link to = "/" className='link'>
                    <span className='text'>GigConnect</span>
                    <span className='dot'>.</span>
                </Link>
                </div>
                <div className='links'>
                    <Link to ="/discussion" className='discuss'>Community</Link>
                    <span>Find Work</span>
                    <span>Hire</span>
                    {
                        currentuser ? (
                            <div className="user" onClick={()=>setOpen(!open)}>
                                <img src="/image.png" />
                                <span>{currentuser?.username}</span>
                                {open && (<div className='options'>
                                    <Link to ="/" className='link' onClick = {handlelogout}>Logout</Link>
                                </div>)}
                            </div>
                        ):(
                          <>
                          <Link to='/loginuser' className='login'>Login</Link>
                          <Link to='/registeruser' className='login'><button>Sign Up</button></Link>
                          </>
                        )
                    }
                </div>
            </div>
            {(active || pathname !== "/") && (
            <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
        </div>
    )
}

export default Navbar
