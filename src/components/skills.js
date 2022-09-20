import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import "./style/skills.css"
import laravel from "./images/laravel.svg";
import reactjs from "./images/reactjs.svg";
import js from "./images/js.png";
import jQuery from "./images/jQuery.png";
import bootstrap from "./images/bootstrap.png";
import php from "./images/php.png";
import mySql from "./images/mysql.png";
import html from "./images/html.png";
import css from "./images/css-3.png";
import git from "./images/merge.png";
import github from "./images/github.png";
import gitlab from "./images/gitlab.png";
import netlify from "./images/netlify.svg";
import tailwindcss from "./images/tailwindcss.svg";
import vscode from "./images/vscode.svg";


const skills = () => {

    useEffect(() => {
        // ScrollReveal().reveal('.skill-list', {
        //     reset: true,
        //     duration: 500,
        //     delay: 200,
        //     easing: 'ease-in-out',
        //     distance: '10px',
        //     scale: 0.85,
        // });

        ScrollReveal().reveal('#technicalskills', {
            reset: true,
            duration: 500,
            delay: 200,
            easing: 'ease-in-out',
            distance: '10px',
            scale: 0.85,
        });

        ScrollReveal().reveal('.skills-list', {
            reset: true,
            duration: 500,
            delay: 200,
            easing: 'ease-in-out',
            distance: '10px',
            scale: 0.85,
        });
    })


    return (
        <>
            <div className='container-fluid bg-black'>
                <div className='row text-center'>
                    <div className='col-md-12 my-4' id='technicalskills'>
                        <h1>Technical <span className="about-name">Skills</span></h1>
                    </div>
                </div>
                <div className='container  skill-list'>
                    <div className='row text-bg-dark  text-center'>
                        <div className='col-md-2 skills-list mb-3 d-flex  justify-content-around flex-column shadow   col-6 '>
                            <img data-toggle="modal" data-target="#exampleModal" src={laravel} class="card-img-top p-5" alt="Image Not Found" />
                            <div data-toggle="modal" data-target="#exampleModal" class="cdy bg-gray ">
                                <h3 class="card-title p-3">Laravel </h3>
                            </div>
                        </div>
                        <div className='col-md-2 skills-list mb-3 d-flex justify-content-around flex-column col-6 shadow'>
                            <img data-toggle="modal" data-target="#exampleModal" src={reactjs} class="card-img-top p-5" alt="Image Not Found" />
                            <div data-toggle="modal" data-target="#exampleModal" class="bg-gray ">
                                <h3 class="card-title p-3">React JS </h3>
                            </div>
                        </div>
                        <div className='col-md-2 skills-list mb-3  d-flex justify-content-around flex-column  col-6 shadow '>
                            <img data-toggle="modal" data-target="#exampleModal" src={jQuery} class="card-img-top p-5 bg-dark" alt="Image Not Found" />
                            <div data-toggle="modal" data-target="#exampleModal" class="bg-gray ">
                                <h3 class="card-title p-3">jQuery</h3>
                            </div>
                        </div>
                        <div className='col-md-2 skills-list mb-3  d-flex justify-content-around flex-column  col-6 shadow '>
                            <img data-toggle="modal" data-target="#exampleModal" src={bootstrap} class="card-img-top p-5 bg-dark" alt="Image Not Found" />
                            <div data-toggle="modal" data-target="#exampleModal" class="bg-gray ">
                                <h3 class="card-title p-3">Bootstrap</h3>
                            </div>
                        </div>
                        <div className='col-md-2 skills-list mb-3  d-flex justify-content-around flex-column  col-6 shadow '>
                            <img data-toggle="modal" data-target="#exampleModal" src={php} class="card-img-top p-5 bg-dark" alt="Image Not Found" />
                            <div data-toggle="modal" data-target="#exampleModal" class="bg-gray ">
                                <h3 class="card-title p-3">PHP</h3>
                            </div>
                        </div>
                        <div className='col-md-2 skills-list mb-3  d-flex justify-content-around flex-column  col-6 shadow '>
                            <img data-toggle="modal" data-target="#exampleModal" src={mySql} class="card-img-top p-5 bg-dark" alt="Image Not Found" />
                            <div data-toggle="modal" data-target="#exampleModal" class="bg-gray ">
                                <h3 class="card-title p-3">MySQL</h3>
                            </div>
                        </div>
                        <div className='col-md-2 skills-list mb-3  d-flex justify-content-around flex-column  col-6 shadow '>
                            <img data-toggle="modal" data-target="#exampleModal" src={js} class="card-img-top p-5 bg-dark" alt="Image Not Found" />
                            <div data-toggle="modal" data-target="#exampleModal" class="bg-gray ">
                                <h3 class="card-title p-3">JavaScript</h3>
                            </div>
                        </div>
                        <div className='col-md-2 skills-list mb-3  d-flex justify-content-around flex-column  col-6 shadow '>
                            <img data-toggle="modal" data-target="#exampleModal" src={html} class="card-img-top p-5 bg-dark" alt="Image Not Found" />
                            <div data-toggle="modal" data-target="#exampleModal" class="bg-gray ">
                                <h3 class="card-title p-3">HTML5</h3>
                            </div>
                        </div>
                        <div className='col-md-2 skills-list mb-3  d-flex justify-content-around flex-column  col-6 shadow '>
                            <img data-toggle="modal" data-target="#exampleModal" src={css} class="card-img-top p-5 bg-dark" alt="Image Not Found" />
                            <div data-toggle="modal" data-target="#exampleModal" class="bg-gray ">
                                <h3 class="card-title p-3">CSS3</h3>
                            </div>
                        </div>
                        <div className='col-md-2 skills-list mb-3  d-flex justify-content-around flex-column  col-6 shadow '>
                            <img data-toggle="modal" data-target="#exampleModal" src={git} class="card-img-top p-5 bg-dark" alt="Image Not Found" />
                            <div data-toggle="modal" data-target="#exampleModal" class="bg-gray ">
                                <h3 class="card-title p-3">GIT</h3>
                            </div>
                        </div>
                        <div className='col-md-2 skills-list mb-3  d-flex justify-content-around flex-column  col-6 shadow '>
                            <img data-toggle="modal" data-target="#exampleModal" src={github} class="card-img-top p-5 bg-dark" alt="Image Not Found" />
                            <div data-toggle="modal" data-target="#exampleModal" class="bg-gray ">
                                <h3 class="card-title p-3">GitHub</h3>
                            </div>
                        </div>
                        <div className='col-md-2 skills-list mb-3  d-flex justify-content-around flex-column  col-6 shadow '>
                            <img data-toggle="modal" data-target="#exampleModal" src={gitlab} class="card-img-top p-5 bg-dark" alt="Image Not Found" />
                            <div data-toggle="modal" data-target="#exampleModal" class="bg-gray ">
                                <h3 class="card-title p-3">GitLab</h3>
                            </div>
                        </div>
                        <div className='col-md-2 skills-list mb-3  d-flex justify-content-around flex-column  col-6 shadow '>
                            <img data-toggle="modal" data-target="#exampleModal" src={netlify} class="card-img-top p-5 bg-dark" alt="Image Not Found" />
                            <div data-toggle="modal" data-target="#exampleModal" class="bg-gray ">
                                <h3 class="card-title p-3">Netlify</h3>
                            </div>
                        </div>
                        <div className='col-md-2 skills-list mb-3  d-flex justify-content-around flex-column  col-6 shadow '>
                            <img data-toggle="modal" data-target="#exampleModal" src={tailwindcss} class="card-img-top p-5 bg-dark" alt="Image Not Found" />
                            <div data-toggle="modal" data-target="#exampleModal" class="bg-gray ">
                                <h3 class="card-title p-3">TailwindCSS</h3>
                            </div>
                        </div>
                        <div className='col-md-2 skills-list mb-3  d-flex justify-content-around flex-column  col-6 shadow '>
                            <img data-toggle="modal" data-target="#exampleModal" src={vscode} class="card-img-top p-5 bg-dark" alt="Image Not Found" />
                            <div data-toggle="modal" data-target="#exampleModal" class="bg-gray ">
                                <h3 class="card-title p-3">VSCode</h3>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <div className='container-fluid'>
                <h1 className='text-center py-3 bg-black'>Projects</h1>
<p>dfdfd</p>
            </div>

        </>
    )
}

export default skills
