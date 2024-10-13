import React from 'react'

const Hero = ({title,imageUrl}) => {
  return (
    <div className='hero container'>
        {/* <img src={imageUrl1} className='hero-img' /> */}
        <div className="banner">
            <h1>{title}</h1>
            <p>
            "Empowering healthcare through innovation, our hospital management website seamlessly connects patients, providers, and administrators, ensuring efficient, high-quality care for every individual."
            </p>
        </div>
        <div className="banner">
            <img src={imageUrl} alt='hero' className='animated-image' />
            {/* <span>
                <img src="/Vector.png" alt="vector" />
            </span> */}
        </div>


    </div>
  )
}

export default Hero