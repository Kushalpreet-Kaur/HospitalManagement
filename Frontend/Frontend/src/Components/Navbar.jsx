import React, { useContext, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../main';


const Navbar = () => { 
    const[show , setShow] = useState(false);
    const {isAuthenticated ,setIsAuthenticated} = useContext(Context);
    const navigateTo = useNavigate() 
    const handleLogout = async() =>
    {
        try {
            await axios.get(   "" , {withCredentials: true}   ).then(  res=>{    toast.success(res.data.message); setIsAuthenticated(false);   }      ); // url needed
        } catch (error) {
            toast.error(err.response.data.message);
        }
    }


    const goToLogin = async() =>
    {
        navigateTo("/login") // going to login page 
    }



  return (
    <>
    <nav className='container'>
        <div className='logo'><img src='/logo.png' alt='logo' className='logo-img'/></div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
            <div className="links">
                <Link className='Home' to=   {"/"}   onClick={   ()=> setShow(!show)   }>HOME</Link>
                <Link className='Appointment' to ={"/appointment"} onClick={ ()=> setShow(!show)  }>APPOINTMENT</Link>
                <Link className='AboutUs' to={"/about"} onClick={ ()=> setShow(!show) }>ABOUT US</Link>
                <Link className='ContactUs' to={"/contact"} onClick={ ()=> setShow(!show) }>CONTACT US</Link>
            </div>
            {isAuthenticated ? (<button className='logoutBtn btn' onClick={handleLogout}>LOGOUT</button> )  :  (<button className='loginBtn btn' onClick={goToLogin}>LOGIN</button>)}
        </div>
    </nav>
    </> 
  )
}

export default Navbar