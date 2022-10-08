import React from 'react'
import './style/contact.css';
import contactlogo from './images/contact.png';

const contact = () => {

    const $ = window.$;

    function myfun(e) {
        e.preventDefault();
    }

    return (
        <div>
            <div className='container-fluid bg-info'>
                <div className='row '>
                    <div className='col-md-12 my-4' id='contact'>
                        <h1 className='text-center text-black'> <img className='contactlogo' src={contactlogo} alt="Image Not found" /> Get In <span className="contact-me">Touch</span></h1>
                    </div>
                </div>
                <div className='container'>
                    <div className='row text-center'>
                        <form name="contact" method="POST" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact" />
                            <p>
                                <label>Your Name: <input type="text" className='form-control' name="name" /></label>
                            </p>
                            <p>
                                <label>Your Email: <input type="email" className='form-control' name="email" /></label>
                            </p>
                            <p>
                                <label>Message: <textarea className='form-control' name="message"></textarea></label>
                            </p>
                            <p>
                                <button className='submitme' onClick={myfun} type="submit">Send</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default contact
