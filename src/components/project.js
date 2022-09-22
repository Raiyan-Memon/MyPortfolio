import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import "./style/project.css";
import projectlogo from "./images/project-management.png";
import memonmovies from "./images/MemonMovies2.0.png";
import protfolio from "./images/Portfolio _ Raiyan Memon.png";
import peopleapi from "./images/People_API.png";

const project = () => {

    const $ = window.$;
    useEffect(() => {
        ScrollReveal().reveal('.card ', {
            reset: true,
            duration: 500,
            delay: 300,
            easing: 'ease-in-out',
            distance: '10px',
            scale: 0.85,
        });

        // ScrollReveal().reveal('#technicalskills', {
        //     reset: true,
        //     duration: 500,
        //     delay: 200,
        //     easing: 'ease-in-out',
        //     distance: '10px',
        //     scale: 0.85,
        // });

        // ScrollReveal().reveal('.skills-list', {
        //     reset: true,
        //     duration: 500,
        //     delay: 200,
        //     easing: 'ease-in-out',
        //     distance: '10px',
        //     mobile: false,
        //     scale: 0.85,
        //     viewFactor: 0.1,
        // });
    })


    $(function () {
        $('.onclick-details').on('click', function () {
            $(this).parent().siblings('.projects').toggleClass('d-none');
            $(this).toggleClass('btn-outline-danger');
            if ($(this).text() == "Details") {
                $(this).text("X");
            } else {
                $(this).text("Details");
            }
        })
    })

    return (
        <>
            <div className='container-fluid'>
                <div className='row bg-black'>
                    <div className='col-md-12 my-4' id='projects'>
                        <h1 className='text-center'> <img className='projectlogo' src={projectlogo} /> Projects</h1>
                    </div>
                </div>

                <div className='row pt-3 text-center d-flex justify-content-center project-background'>
                    <div className='col-md-5 m-3 d-flex justify-content-center col-12'>
                        <div className='card d-flex flex-row bg-black'>
                            <img class="card-img-top project-img" src={protfolio} />
                            <div class="overlay projects d-none">
                                <h2 className='text-secondary'>My Protfolio</h2>
                                <p>In Process Of Making ReactJs Protfolio Websilte with Different Components, jQuery, Bootstrap and Custom CSS.</p>
                            </div>
                            <div className='d-flex justify-content-center px-4 flex-column align-content-center row'>
                                <button title='Details' className='btn btn-sm btn-outline-success  onclick-details'>Details</button>
                               <button title='View This Site' className='btn btn-sm btn-outline-light my-3'><ion-icon name="eye-outline"></ion-icon><a href='https://raiyanmemon.netlify.app'> View</a></button>
                                <button title='Code On GitHub' className='btn btn-sm btn-outline-primary'><ion-icon name="code-slash-outline"></ion-icon> Code</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 m-3 d-flex justify-content-center col-12'>
                        <div className='card d-flex flex-row bg-black'>
                            <img class="card-img-top project-img" src={memonmovies} />
                            <div class="overlay projects d-none">
                                <h2 className='text-secondary'>Memon Movies</h2>
                                <p>Built With Pure HTML, CSS, JavaScript, Bootstrap, jQuery And Ajax. TMBD API Was Called In Order To Fetch All The Movies And Webseries.</p>
                            </div>
                            <div className='d-flex justify-content-center px-4 flex-column align-content-center row'>
                                <button className='btn btn-sm btn-outline-success  onclick-details'>Details</button>
                                <button className='btn btn-sm btn-outline-light my-3'><ion-icon name="eye-outline"></ion-icon> View</button>
                                <button className='btn btn-sm btn-outline-primary'><ion-icon name="code-slash-outline"></ion-icon> Code</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 m-3 d-flex justify-content-center col-12'>
                        <div className='card d-flex flex-row bg-black'>
                            <img class="card-img-top project-img" src={peopleapi} />
                            <div class="overlay projects d-none">
                                <h2 className='text-secondary'>Google People API</h2>
                                <p>Integrated Google People API in Laravel With Google LogIn</p>
                            </div>
                            <div className='d-flex justify-content-center px-4 flex-column align-content-center row'>
                                <button className='btn btn-sm btn-outline-success  onclick-details'>Details</button>
                                {/* <button className='btn btn-sm btn-outline-light my-3'><ion-icon name="eye-outline"></ion-icon> View</button> */}
                                <button className='btn btn-sm btn-outline-primary my-3'><ion-icon name="code-slash-outline"></ion-icon> Code</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 m-3 d-flex justify-content-center col-12'>
                        <div className='card d-flex flex-row bg-black'>
                            <img class="card-img-top project-img" src={memonmovies} />
                            <div class="overlay projects d-none">
                                <h2 className='text-secondary'>Memon Movies</h2>
                                <p>Built With Pure HTML, CSS, JavaScript, Bootstrap, jQuery And Ajax. TMBD API Was Called In Order To Fetch All The Movies And Webseries.</p>
                            </div>
                            <div className='d-flex justify-content-center px-4 flex-column align-content-center row'>
                                <button className='btn btn-sm btn-outline-success  onclick-details'>Details</button>
                                <button className='btn btn-sm btn-outline-light my-3'><ion-icon name="eye-outline"></ion-icon> View</button>
                                <button className='btn btn-sm btn-outline-primary'><ion-icon name="code-slash-outline"></ion-icon> Code</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default project
