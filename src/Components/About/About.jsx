import React from 'react';
import "./About.css";
import about from "../../Assets/About1.png";

const About = () => {
  return (
    <div className='container mt-5'>
      <div className='row mt-5'>
        <div className='col-6'>
            <img className='img-about' src={about} alt="about" />

        </div>
        <div className='col-6 about-sec'>
            <h6 style={{color:"darkorange",fontWeight:"bold",wordSpacing:"2px"}}>About</h6>
            <div >
                <h1 className='about-heading'>Food Is An Important Part Of A Balanced Diet</h1>
                <p className='about-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur quos deleniti, obcaecati, quibusdam cumque adipisci hic voluptates iure nihil amet fuga.</p>
                <p className='about-para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quasi accusantium fuga magnam.</p>
                <button className='about-btn'>Learn More</button>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default About
