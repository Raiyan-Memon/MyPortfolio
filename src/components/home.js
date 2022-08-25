import React, { useEffect } from 'react';
import Typewriter from "typewriter-effect";
import myImage from './images/Raiyan.png';
import myResume from './resume/resume.pdf';
import ScrollReveal from 'scrollreveal';
import "./style/home.css"
// import ScrollReveal from "https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"

const home = () => {

    useEffect(() => {
        ScrollReveal().reveal('.mydetails, .myimage', {
            reset: true,
            duration: 500,
            delay: 200,
            easing: 'ease-in',
            distance: '10px',
            scale: 0.85,
        });
    })


    return (
        <div className='home-page'>
            <div className='mydetails'>
                <h2>Hello There, </h2>
                <h2>I'm <span className='myname'>Raiyan Memon, </span></h2>
                <p>I am a <span className='role'><Typewriter
                    options={{
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Full Stack Developer")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("Frontend Developer")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("Backend Developer")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("Web Developer")
                            .pauseFor(2000)
                            .deleteAll()
                            .start()
                    }}
                /></span></p>
            </div>
            <img src={myImage} className="myimage" alt="logo" />
            <div className='mydetails'>
                <div className='logo'>
                    <ul>
                        <a href='https://www.linkedin.com/in/raiyan-memon/' target='_blank' rel="noopener noreferrer"><li className="social-logo" ><span title="LinkedIn"><ion-icon name="logo-linkedin"></ion-icon></span></li></a>
                        <a href='https://github.com/Raiyan-Memon' target='_blank' rel="noopener noreferrer"><li className="social-logo"><span title="Github"><ion-icon name="logo-github"></ion-icon></span></li></a>
                        <a href='//www.google.com' target='_blank' rel="noopener noreferrer"><li className="social-logo"><span title="Gitlab"><ion-icon name="logo-gitlab"></ion-icon></span></li></a>
                        <a href='//https://www.instagram.com/raiyan_memon' target='_blank' rel="noopener noreferrer"><li className="social-logo"><span title="Instagram"><ion-icon name="logo-instagram"></ion-icon></span></li></a>
                    </ul>
                </div>
                <div class="resume">
                    <a class="myresume" title='View Resume' target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/1LewSXTQYL-sh5qu7xeDieYtQpTAzpvtG?usp=sharing">Resume</a><a title='Download Resume' download="Raiyan's Resume" href={myResume}><ion-icon class="social-logo" name="cloud-download-outline"></ion-icon></a>
                </div>
            </div>

            <div className='scroll'>
                <ul>
                    <li><a className='aboutmetext' href='#aboutme'>About Me</a></li>
                    <li><ion-icon name="chevron-down-outline"></ion-icon></li>
                </ul>
            </div>
        </div>


    )


}


export default home
