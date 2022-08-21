import React from 'react';
import ZoomReveal from 'react-reveal/Zoom';
import Typewriter from "typewriter-effect";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import myImage from './images/Raiyan.png';
import myResume from './resume/resume.pdf';
import "./style/home.css"

const home = () => {

    function mail() {
        alert('Mail to : raiyanmemon7860@gmail.com');
    }

    function phone() {
        alert("Call to : 7227867397");
    }

    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(FadeIn(), Move(), Sticky());

    return (

        <div className='home-page'>
            <ZoomReveal top cascade>
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
                            {/* <a href='javascript:void(0)' target='_blank' rel="noopener noreferrer"><li className="social-logo" onClick={mail}><span title="Mail To : raiyanmemon7860@gmail.com"><ion-icon name="mail-open-outline"></ion-icon></span></li></a>
                            <a href='javascript:void(0)' target='_blank' rel="noopener noreferrer"><li className="social-logo" onClick={phone}><span title="Phone : 7227867397"><ion-icon name="call-outline"></ion-icon></span></li></a> */}
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
            </ZoomReveal>
        </div>


    )
}

export default home
