import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";

import './my.css';

const My = () => {
  return <>
<div className="container custom-margin">
  {/* <h1 className="my-sa">Happy Valentine's day Sara</h1>
  <h1 className="my-sa">Happy Valentine's day Sara</h1>
  <h1 className="my-sa">Happy Valentine's day Sara</h1>
  <h1 className="my-sa">Happy Valentine's day Sara</h1>
  <h1 className="my-sa">Happy Valentine's day Sara</h1> */}
  <h1 className="my-sa">Happy Valentine's day Sara</h1>


<div className="marginmymar"></div>
  <p><span className='role'><Typewriter
                            options={{
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Happy Valentine's Day Sara ❤️")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("Happy Valentine's Day Sara ❤️")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("Happy Valentine's Day Sara ❤️")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("Happy Valentine's Day Sara ❤️")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .start()
                            }}
                        /></span></p>

<p>Sara❤️ It has been more than 2 years since we started talking and this talk had lead us to the journey where everything is like dream. To be with you and 
  to be a part of your life. I am very grateful to you for been a part of my life. Sara❤️ Because of you I am literally enjoying my life. You know everytime I think of you
  I assume that you are with me and very close to me. 
    </p>
<p>I don't know the perfect way to wish My Valentine(Sara). But I tried to make you happy by wishing you in this way.</p>
<p>May you always stay happy with me. If any mistake where done by me please always tell me and i'll try not to repeat the same. </p>
<p>Sara❤️ I know sometimes I have hurted you in the past. But I promise you that in the present and in future I will always keep you happy and I will always be with you forever. </p>
<p>Truly Yours. Is it necessary to define a name? Still its from the one who loves you so much and you recently touched his name while smiling.
</p>

</div>

</>

};

export default My;