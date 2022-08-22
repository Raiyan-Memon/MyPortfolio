import React from 'react';
import "./style/about.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
// import ZoomReveal from 'react-reveal/Zoom';

import aboutImage from "./images/my-about-image.jpeg";

const about = () => {

    return (
        <div className='about-page'>
            {/* <ZoomReveal top cascade> */}

            <div className='about-head' id='aboutme'>
                <h1 ><ion-icon name="person"></ion-icon> About <span className="about-me">Me</span></h1>
            </div>

            <div className="about-content">
                <div data-aos="fade-down" className="about-image">
                    <img src={aboutImage} width="150px" alt="" />
                </div>

                <div className="about-intro">
                    <div className="nameRole">
                        <h1 data-aos="fade-down">I'm <span className="about-name">Raiyan</span></h1>
                        <p data-aos="fade-down"><b><span className="role">Full Stack Developer</span></b></p>
                    </div>
                    <div data-aos="fade-down" className="about-detail">
                        <p>I am a Full-Stack developer based in India. I am an Computer Science Engineering graduate from LIT. I
                            am
                            very passionate about improving my coding skills & developing web-applications & websites.</p>
                        <p><span className="age">Age:</span> 22</p>
                        <p><span className="phone">Phone:</span> 7227867397</p>
                        <p><span className="email">Email:</span> raiyanmemon7860@gmail.com</p>
                    </div>
                </div>
            </div>
            {/* </ZoomReveal> */}
        </div>
    )
}

export default about
