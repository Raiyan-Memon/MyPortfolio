import React, { useEffect } from 'react';
import Typewriter from "typewriter-effect";
import myImage from './images/Raiyan.png';
import myResume from './resume/resume.pdf';
import ScrollReveal from 'scrollreveal';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import "./style/home.css"

const home = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);

    useEffect(() => {
        ScrollReveal().reveal('.left', {
            reset: true,
            duration: 500,
            easing: 'ease-in-out',
            distance: '100px',
            origin: "left",
            scale: 0.85,
        });
    })

    useEffect(() => {
        ScrollReveal().reveal('.myimage', {
            reset: true,
            duration: 500,
            easing: 'ease-in-out',
            scale: 0.85,
        });
    })

    useEffect(() => {
        ScrollReveal().reveal('.right', {
            reset: true,
            duration: 500,
            // delay: 500,
            easing: 'ease-in-out',
            distance: '100px',
            origin: "right",
            scale: 0.85,
        });
    })

    return (
        <>

            <div className='container-fluid'>
                {/* <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        // background: {
                        //     color: {
                        //         value: "#0d47a1",
                        //     },
                        // },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                // push: {
                                //     quantity: 4,
                                // },
                                // repulse: {
                                //     distance: 200,
                                //     duration: 0.4,
                                // },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                directions: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 3,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 30,
                            },
                            opacity: {
                                value: 0.1,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        // detectRetina: true,
                    }}
                /> */}
                <div className='home-page' id='my-profile'>
                    <div className='mydetails left'>
                        <h2>Hello There, </h2>
                        <h2>I'm <span className='myname'>Raiyan Memon, </span></h2>
                        <p>I am a <span className='role'><Typewriter
                            options={{
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Junior Developer")
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
                    <div className='mydetails right'>
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
            </div>
        </>
    )


}


export default home
