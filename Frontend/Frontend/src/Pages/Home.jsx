import React from 'react';
import Hero from '../Components/Hero';
// import Biography from '../Components/Biography';
import Departments from '../Components/Departments';
import MessageForm from '../Components/MessageForm';
import Video from '../Components/Video';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
      <Hero title={"Welcome to Liberty Medicare Institute | Your Trusted HealthCare"} 
      imageUrl = {"/Doctor.png"}/>
      
     
      
      <Video imageUrl1={"/about-nabh.png"} imageUrl2={"/Ayushman.png"} imageUrl3={"/healthInsurance.png"}/>

      <Departments/>
      {/* <Biography imageUrl={"/7Hospital.avif"} /> */}
      <MessageForm imageUrl={"/Contactus.webp"}/>
      <Footer/>

    </>
  )
};


export default Home;