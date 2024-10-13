import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className='footer'>
      <hr /> 
      <div className="content">
        <div>
            <img src="/logo.png" alt="Logo" className='footer-logo' />
        </div>
        <div>
            <h4>Quick Links</h4>
            <ul>
                <Link to={"/"}>Home</Link>
                <Link to={"/appointment"}>Appointment</Link>
                <Link to={"/about"}>About us</Link>
                <Link to={"/about"}>Contact us</Link>
            </ul>
        </div>
        </div> 

    </footer>
    </>
  )
}

export default Footer