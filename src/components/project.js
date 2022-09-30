import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import "./style/project.css";
import projectlogo from "./images/project-management.png";
import memonmovies from "./images/MemonMovies2.0.png";
import protfolio from "./images/Portfolio _ Raiyan Memon.png";
import peopleapi from "./images/People_API.png";
import laravel from './images/Laravel-project.png';
import awsm from "./images/AWSM_Beauty_Collection.png";
import dicegame from "./images/Dice Game.png";
import drumkit from "./images/Drum Kit.png";
import gymproject from "./images/Gym Project.png";
import moviesapp from "./images/Movies App.png";

const project = () => {

    const $ = window.$;

    useEffect(() => {

        ScrollReveal().reveal('.project-title', {
            duration: 500,
            delay: 200,
            easing: 'ease-in-out',
            distance: '10px',
            scale: 0.85,
            mobile: false
        });
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
                        <h1 className='text-center project-title'> <img className='projectlogo' src={projectlogo} /> Projects</h1>
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
                                <button title='View This Site' className='btn btn-sm btn-outline-light my-3'><a href='https://raiyanmemon.netlify.app'><ion-icon name="eye-outline"></ion-icon> View</a></button>
                                <button title='Code On GitHub' className='btn btn-sm btn-outline-primary'> <a href='https://github.com/Raiyan-Memon/MyPortfolio'><ion-icon name="code-slash-outline"></ion-icon> Code</a></button>
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
                                <button className='btn btn-sm btn-outline-light my-3'> <a href='https://memonmovies2-0.netlify.app'><ion-icon name="eye-outline"></ion-icon> View</a> </button>
                                <button className='btn btn-sm btn-outline-primary'> <a href='https://github.com/Raiyan-Memon/MemonMovies2.0'><ion-icon name="code-slash-outline"></ion-icon> Code </a></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 m-3 d-flex justify-content-center col-12'>
                        <div className='card d-flex flex-row bg-black'>
                            <img class="card-img-top project-img" src={peopleapi} />
                            <div class="overlay projects d-none">
                                <h2 className='text-secondary'>Google People API</h2>
                                <p>Integrated Google People API In Laravel With Google LogIn</p>
                            </div>
                            <div className='d-flex justify-content-center px-4 flex-column align-content-center row'>
                                <button className='btn btn-sm btn-outline-success  onclick-details'>Details</button>
                                {/* <button className='btn btn-sm btn-outline-light my-3'><ion-icon name="eye-outline"></ion-icon> View</button> */}
                                <button className='btn btn-sm btn-outline-primary my-3'> <a href='https://github.com/Raiyan-Memon/Google-People-API'><ion-icon name="code-slash-outline"></ion-icon> Code</a></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 m-3 d-flex justify-content-center col-12'>
                        <div className='card d-flex flex-row bg-black'>
                            <img class="card-img-top project-img" src={laravel} />
                            <div class="overlay projects d-none">
                                <h2 className='text-secondary'>Laravel Internship Project</h2>
                                <p>4 CRUD Operation With UUID, Many To Many Relationship, Authentication With Google And GitHub, Created API And Connected With MySQL Database For Storing All The Data.</p>
                            </div>
                            <div className='d-flex justify-content-center px-4 flex-column align-content-center row'>
                                <button className='btn btn-sm btn-outline-success  onclick-details'>Details</button>
                                {/* <button className='btn btn-sm btn-outline-light my-3'><ion-icon name="eye-outline"></ion-icon> View</button> */}
                                <button className='btn btn-sm btn-outline-primary my-3'> <a href='https://github.com/Raiyan-Memon/Laravel-Project'> <ion-icon name="code-slash-outline"></ion-icon> Code</a></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 m-3 d-flex justify-content-center col-12'>
                        <div className='card d-flex flex-row bg-black'>
                            <img class="card-img-top project-img" src={awsm} />
                            <div class="overlay projects d-none">
                                <h2 className='text-secondary'>AWSM Beauty Collection</h2>
                                <p>This Website Is Purely Created With Bootstrap And Image Optimization For Better Performance.</p>
                            </div>
                            <div className='d-flex justify-content-center px-4 flex-column align-content-center row'>
                                <button className='btn btn-sm btn-outline-success  onclick-details'>Details</button>
                                <button className='btn btn-sm btn-outline-light my-3'> <a href='https://raiyan-memon.github.io/AWSM-Beauty-Collection-website'> <ion-icon name="eye-outline"></ion-icon> View</a></button>
                                <button className='btn btn-sm btn-outline-primary'> <a href='https://github.com/Raiyan-Memon/AWSM-Beauty-Collection-website'> <ion-icon name="code-slash-outline"></ion-icon> Code</a></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 m-3 d-flex justify-content-center col-12'>
                        <div className='card d-flex flex-row bg-black'>
                            <img class="card-img-top project-img" src={dicegame} />
                            <div class="overlay projects d-none">
                                <h2 className='text-secondary'>Dice Game</h2>
                                <p>Created With Pure JavaScript, After Every Click On "Refresh Me" It Generates Random Number and Decides Which Player Wins.</p>
                            </div>
                            <div className='d-flex justify-content-center px-4 flex-column align-content-center row'>
                                <button className='btn btn-sm btn-outline-success  onclick-details'>Details</button>
                                <button className='btn btn-sm btn-outline-light my-3'> <a href='https://raiyan-memon.github.io/Dice%20Game/index.html'> <ion-icon name="eye-outline"></ion-icon> View</a></button>
                                <button className='btn btn-sm btn-outline-primary'> <a href='https://github.com/Raiyan-Memon/Raiyan-Memon.github.io/tree/master/Dice%20Game'> <ion-icon name="code-slash-outline"></ion-icon> Code</a></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 m-3 d-flex justify-content-center col-12'>
                        <div className='card d-flex flex-row bg-black'>
                            <img class="card-img-top project-img" src={drumkit} />
                            <div class="overlay projects d-none">
                                <h2 className='text-secondary'>Drum Kit</h2>
                                <p>Created With Pure JavaScript, After Clicking on the Given Keys It Plays A Different Sounds Of Drums.</p>
                            </div>
                            <div className='d-flex justify-content-center px-4 flex-column align-content-center row'>
                                <button className='btn btn-sm btn-outline-success  onclick-details'>Details</button>
                                <button className='btn btn-sm btn-outline-light my-3'> <a href='https://raiyan-memon.github.io/Drum%20Kit/index.html'> <ion-icon name="eye-outline"></ion-icon> View</a></button>
                                <button className='btn btn-sm btn-outline-primary'> <a href='https://github.com/Raiyan-Memon/Raiyan-Memon.github.io/tree/master/Drum%20Kit'> <ion-icon name="code-slash-outline"></ion-icon> Code</a></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 m-3 d-flex justify-content-center col-12'>
                        <div className='card d-flex flex-row bg-black'>
                            <img class="card-img-top project-img" src={moviesapp} />
                            <div class="overlay projects d-none">
                                <h2 className='text-secondary'>Movies APP</h2>
                                <p>A Single Page Application Created With HTML, CSS, jQuery and Ajax. It Calls An API to Fetch All the Data And It Has A Very Hight Quality Images.</p>
                            </div>
                            <div className='d-flex justify-content-center px-4 flex-column align-content-center row'>
                                <button className='btn btn-sm btn-outline-success  onclick-details'>Details</button>
                                <button className='btn btn-sm btn-outline-light my-3'> <a href='https://raiyan-memon.github.io/Movies%20API%20Integration%20in%20Javascript/index.html'> <ion-icon name="eye-outline"></ion-icon> View</a></button>
                                <button className='btn btn-sm btn-outline-primary'> <a href='https://github.com/Raiyan-Memon/Raiyan-Memon.github.io/tree/master/Movies%20API%20Integration%20in%20Javascript'> <ion-icon name="code-slash-outline"></ion-icon> Code</a></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 m-3 d-flex justify-content-center col-12'>
                        <div className='card d-flex flex-row bg-black'>
                            <img class="card-img-top project-img" src={gymproject} />
                            <div class="overlay projects d-none">
                                <h2 className='text-secondary'>Gym Website</h2>
                                <p>My First Ever Static Single Page Website Created With Pure HMTL and CSS But Its Not Responsive So It Can only Be Viewed On Desktop</p>
                            </div>
                            <div className='d-flex justify-content-center px-4 flex-column align-content-center row'>
                                <button className='btn btn-sm btn-outline-success  onclick-details'>Details</button>
                                <button className='btn btn-sm btn-outline-light my-3'> <a href='https://raiyan-memon.github.io/Gym-Website/Project-gym.html'> <ion-icon name="eye-outline"></ion-icon> View</a></button>
                                <button className='btn btn-sm btn-outline-primary'> <a href='https://github.com/Raiyan-Memon/Raiyan-Memon.github.io/tree/master/Gym-Website'> <ion-icon name="code-slash-outline"></ion-icon> Code</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default project
