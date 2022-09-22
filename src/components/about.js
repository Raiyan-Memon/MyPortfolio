import React, { useEffect } from 'react';
import "./style/about.css";
import ScrollReveal from 'scrollreveal';
import aboutImage from "./images/my-about-image.jpeg";
import laravel from "./images/laravel.svg";

const about = () => {

    useEffect(() => {
        ScrollReveal().reveal('.about-head', {
            reset: true,
            duration: 500,
            delay: 200,
            easing: 'ease-in-out',
            distance: '10px',
            scale: 0.85,
        });

        ScrollReveal().reveal('.about-image', {
            reset: true,
            duration: 500,
            delay: 200,
            easing: 'ease-in-out',
            distance: '10px',
            scale: 0.85,
        });

        ScrollReveal().reveal('.about-intro', {
            reset: true,
            duration: 500,
            delay: 200,
            easing: 'ease-in-out',
            distance: '10px',
            scale: 0.85,
        });
    })

    return (

        <div className='conatiner-fluid'>
            <div className='about-page'>
                <div className='about-head' id='aboutme'>
                    <h1 ><ion-icon name="person"></ion-icon> About <span className="about-me">Me</span></h1>
                </div>

                <div className="about-content">
                    <div className="about-image">
                        <img src={aboutImage} width="150px" alt="" />
                    </div>

                    <div className="about-intro">
                        <div className="nameRole">
                            <h1>I'm <span className="about-name">Raiyan</span></h1>

                            <p><b><span className="role">Junior Developer</span></b></p>
                        </div>
                        <div className="about-detail">
                            <p>I am a Junior developer based in India. I am an Computer Science Engineering graduate from LIT. I
                                am
                                very passionate about improving my coding skills & developing web-applications & websites.</p>
                            <p><span className="age">Age:</span> 22</p>
                            <p><span className="phone">Phone:</span> 7227867397</p>
                            <p><span className="email">Email:</span> raiyanmemon7860@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>


           


        </div>



    )
}

export default about
