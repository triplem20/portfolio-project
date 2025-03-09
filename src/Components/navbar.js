import { Link } from 'react-router-dom';
import React from 'react';
import insta from '../assets/img/instaicon.jpeg';
import git from '../assets/img/githubicon.jpeg';
import linkd from'../assets/img/linkedinicon.jpeg';
import CV from '../assets/Mustafacv.pdf';

    let myDate = new Date();
    let hours= myDate.getHours();
    let message;

    if (hours < 12)
        message =  "Morning";
    else if (hours >= 12 && hours <= 17)
        message = "Afternoon";
    else if (hours >= 17 && hours <= 24)
       message = "Evening";
    
   

    function NavBar() {
        return (
            <div className='Containerbar'>
                <h1 className='message'>Good {message}!</h1>
                <nav>
                    <ul className="nav-list">
                        <li><Link to='/' className="nav-item">Home</Link></li>
                        <li><Link to='/About' className="nav-item">About Me</Link></li>
                        <li><Link to='/projects' className="nav-item">Projects</Link></li>
                        <li><Link to='/contact' className="nav-item">Contact</Link></li>
                       
                        <li className="nav-right">
                            <button className='cv'><a href={CV} download="cv">Download CV</a></button>
                            <div className="social-icon">
                                <a href="https://www.instagram.com/mustaaafaaa_/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="Instagram" /></a>
                                <a href="https://github.com/triplem20" target="_blank" rel="noopener noreferrer"><img src={git} alt="GitHub" /></a>
                                <a href="https://www.linkedin.com/in/mustafa-mansuor-73ab952b1/" target="_blank" rel="noopener noreferrer"><img src={linkd} alt="LinkedIn" /></a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }


export default NavBar;