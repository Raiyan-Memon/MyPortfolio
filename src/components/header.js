import React, { useEffect } from "react";
import "./style/header.css";

const header = () => {

  useEffect(() => {
    let mobileview = document.getElementById("mobileview");
    // let body = document.querySelector('body');
    let bar = document.querySelector('i');
    // console.log(bar.className);

    document.getElementById("phone").addEventListener("click", function () {

      // if (mobileview.className === "navbar") {
      //   mobileview.classList.remove("navbar");
      //   mobileview.classList.add("responsive");
      //   body.classList.add('body-hidden');

      //   if (bar.className === "fa fa-bars") {
      //     bar.classList.remove("fa-bars");
      //     bar.classList.add("fa-close");
      //   }

      // } else if (mobileview.className === "responsive") {
      //   mobileview.classList.remove("responsive");
      //   mobileview.classList.add("navbar");
      //   body.classList.remove('body-hidden');

      //   if (bar.className === "fa fa-close") {
      //     bar.classList.remove("fa-close");
      //     bar.classList.add("fa-bars");
      //   }

      // }
      // bar.classList.toggle("fa-close")
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
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutme">About</a></li>
          <li>Skills</li>
          <li>Work</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default header;
