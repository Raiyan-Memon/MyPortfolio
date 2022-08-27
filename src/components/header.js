import React, { useEffect } from "react";
import "./style/header.css";

const header = () => {
  useEffect(() => {
    // let mobileview = document.getElementById("mobileview");
    // console.log(mobileview.className);
    // document.getElementById("phone").addEventListener("click", function () {


    //     mobileview.className == "navbar" ? (mobileview.classList.remove("navbar");
    //     mobileview.classList.add("responsive"); : mobileview.classList.remove("navbar");
    //     mobileview.classList.add("responsive");


    //     if(mobileview.className !=="responsive") {
    //         mobileview.classList.remove("responsive");
    //         mobileview.classList.add("navbar");
    //     }

    //   if (mobileview.className === "navbar") {
    //       mobileview.classList.remove("navbar");
    //       mobileview.classList.add("responsive");
    //   }
    
    // });
  });

  return (
    <div className="navbar" id="mobileview">
      <div className="top-logo">Raiyan Memon</div>

      <div className="mobile" id="phone">
        <ul>
          <li>click</li>
        </ul>
      </div>

      <div className="list">
        <ul>
          <li>Home</li>
          <li>About</li>
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
