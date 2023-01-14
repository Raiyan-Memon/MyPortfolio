import React, { useEffect } from "react";
import "./style/header.css";


const header = () => {

  useEffect(() => {

    const $ = window.$;

    let mobileview = document.getElementById("mobileview");
    let bar = document.querySelector('i');
    document.getElementById("phone").addEventListener("click", function () {
      mobileview.classList.toggle("responsive");

      if (mobileview.className === "navbar responsive") {
        bar.classList.remove("fa-bars");
        bar.classList.add("fa-close");
      }
      else {
        bar.classList.remove("fa-close");
        bar.classList.add("fa-bars");
      }
    });
    document.getElementById("lists").addEventListener("click", function () {
      mobileview.classList.remove("responsive");
      bar.classList.remove("fa-close");
      bar.classList.add("fa-bars");
    })

    document.getElementById('home').addEventListener("click", function () {
      $('.head-list').removeClass('active');


      // alert('sadf')
      // console.log(document.querySelector('a').href.includes('home'));
      if (document.getElementById('home').href.includes('my-profile')) {
        document.getElementById('about').classList.remove('active');
        document.getElementById('technicalskill').classList.remove('active');
        document.getElementById('home').classList.add("active");
      }

      // if (document.getElementById('about').href.includes('about')) {
      //   document.getElementById('about').classList.remove('active');
      //   document.getElementById('about').classList.add("active");
      // }
    })

    document.getElementById('about').addEventListener("click", function () {
      $('.head-list').removeClass('active');

      if (document.getElementById('about').href.includes('aboutme')) {
        document.getElementById('home').classList.remove('active');
        document.getElementById('technicalskill').classList.remove('active');
        document.getElementById('about').classList.add("active");
      }
    })

    document.getElementById('technicalskill').addEventListener("click", function () {
      $('.head-list').removeClass('active');

      if (document.getElementById('technicalskill').href.includes('technicalskill')) {
        document.getElementById('home').classList.remove('active');
        document.getElementById('about').classList.remove("active");
        document.getElementById('technicalskill').classList.add('active');
      }
    })

    $('#project').on('click', function () {
      $('.head-list').removeClass('active');
      $(this).toggleClass('active');
    })

  })

  return (
    <div className="navbar" id="mobileview">

      <div className="top-logo">Raiyan Memon</div>

      <div className="mobile" id="phone">
        <ul>
          <li><i class="fa fa-bars"></i></li>
        </ul>
      </div>

      <div className="list" id="lists">
        <ul>
          <li><a title="links" className="head-list active" href="#my-profile" id="home">Home</a></li>
          <li><a title="links" className="head-list" href="#aboutme" id="about">About</a></li>
          <li><a title="links" className="head-list" href="#technicalskills" id="technicalskill">Skills</a></li>
          <li><a title="links" className="head-list" href="#projects" id="project">Projects</a></li>
          <li><a title="links" className="head-list" href="https://raiyan-memon.github.io/Detailed-website/index.html" id="project">Detailed Resume</a></li>
          {/* <li><a title="links" className="" href="#work">Work</a></li>
          <li><a title="links" className="" href="#experience">Experience</a></li>
          <li><a title="links" className="" href="#contact">Contact</a></li> */}
        </ul>
      </div>
    </div>
  );
};

export default header;
