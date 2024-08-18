import { Link } from 'react-router-dom';
import React from 'react';
import insta from '../assets/img/instaicon.jpeg';
import git from '../assets/img/githubicon.jpeg';
import linkd from'../assets/img/linkedinicon.jpeg';
import CV from '../assets/cv1.pdf';

    let myDate = new Date();
    let hours= myDate.getHours();
    let message;

    if (hours < 12)
        message =  "Morning";
    else if (hours >= 12 && hours <= 17)
        message = "Afternoon";
    else if (hours >= 17 && hours <= 24)
       message = "Evening";
    
   


function NavBar(){

    return(
       <>
       <h1 className='message'>Good {message}! </h1>
       <h5>Please Rotate Screen If Using Phone</h5>
       <nav>
            <Link to='/' className="nav-item">Home</Link>
            <Link to='About' className="nav-item">About</Link>
            <Link to='projects' className="nav-item">Projects</Link>
            <Link to='contact' className="nav-item">Contact</Link>
            
            <span className="navbar-text">
            <button className='cv'><a  href={CV} download="cv">Download CV</a></button>
            <div className="social-icon">
                <a href="https://www.instagram.com/mustaaafaaa_/"><img src={insta} alt="" /></a>
                <a href="https://github.com/triplem20"><img src={git} alt="" /></a>
                <a href="https://www.linkedin.com/in/mustafa-mansuor-73ab952b1/"><img src={linkd} alt="" /></a>
                
              </div>
              </span>
        </nav>
       
        
        </>
    );
}


export default NavBar;