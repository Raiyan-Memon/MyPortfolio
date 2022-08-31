import React, { useEffect } from "react";
import "./style/header.css";


const header = () => {

  useEffect(() => {
    let mobileview = document.getElementById("mobileview");
    let bar = document.querySelector('i');
    document.getElementById("phone").addEventListener("click", function () {
      mobileview.classList.toggle("responsive");

      if (mobileview.className == "navbar responsive") {
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

      // alert('sadf')
      // console.log(document.querySelector('a').href.includes('home'));
      if (document.getElementById('home').href.includes('home')) {
        document.getElementById('about').classList.remove('active');
        document.getElementById('home').classList.add("active");
      }

      // if (document.getElementById('about').href.includes('about')) {
      //   document.getElementById('about').classList.remove('active');
      //   document.getElementById('about').classList.add("active");
      // }
    })

    document.getElementById('about').addEventListener("click", function () {

      // alert('sadf')
      // console.log(document.querySelector('a').href.includes('home'));
      if (document.getElementById('about').href.includes('aboutme')) {
        document.getElementById('home').classList.remove('active');
        document.getElementById('about').classList.add("active");
      }

      // if (document.getElementById('about').href.includes('about')) {
      //   document.getElementById('about').classList.remove('active');
      //   document.getElementById('about').classList.add("active");
      // }

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
          <li><a className="active" href="#home" id="home">Home</a></li>
          <li><a className="" href="#aboutme" id="about">About</a></li>
          {/* <li><a className="" href="#skills">Skills</a></li>
          <li><a className="" href="#work">Work</a></li>
          <li><a className="" href="#experience">Experience</a></li>
          <li><a className="" href="#contact">Contact</a></li> */}
        </ul>
      </div>
    </div>
  );
};

export default header;
