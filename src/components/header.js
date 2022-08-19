import React from 'react'
import "./style/header.css"

const header = () => {
    return (
        <div class="navbar">
            <div class="top-logo">
                Raiyan Memon
            </div>

            <div className='submenu'>
                <ul class="list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Experience</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default header
