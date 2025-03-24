import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import insta from '../assets/img/instaicon.jpeg';
import git from '../assets/img/githubicon.jpeg';
import linkd from '../assets/img/linkedinicon.jpeg';
import CV from '../assets/MustafaMansuorcv.pdf';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const hours = new Date().getHours();
        if (hours < 12) setMessage('Morning');
        else if (hours >= 12 && hours <= 17) setMessage('Afternoon');
        else setMessage('Evening');
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='containerbar'>
            <h1 className='message'>Good {message}!</h1>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>

            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <ul className="nav-list">
                    <li><Link to='/' className="nav-item" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to='/About' className="nav-item" onClick={toggleMenu}>About Me</Link></li>
                    <li><Link to='/projects' className="nav-item" onClick={toggleMenu}>Projects</Link></li>
                    <li><Link to='/contact' className="nav-item" onClick={toggleMenu}>Contact</Link></li>

                    <li className="nav-right">
                        <button className='cv'>
                            <a href={CV} download="MustafaMansuor_CV">Download CV</a>
                        </button>
                        <div className="social-icon">
                            <a href="https://www.instagram.com/mustaaafaaa_/" target="_blank" rel="noopener noreferrer">
                                <img src={insta} alt="Instagram" />
                            </a>
                            <a href="https://github.com/triplem20" target="_blank" rel="noopener noreferrer">
                                <img src={git} alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/mustafa-mansuor-73ab952b1/" target="_blank" rel="noopener noreferrer">
                                <img src={linkd} alt="LinkedIn" />
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
