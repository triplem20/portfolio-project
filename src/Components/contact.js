import { Link } from 'react-router-dom';
import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contact= () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hh41c0j', 'template_qd0izyj', form.current, {
        publicKey:'7qAkaYaXqQ32B1M9R',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  

    };



    return(
        <>
        <div className='Container'>
<h1 id="connect">Let's Connect!</h1>

<div class="containerc">
 <form ref={form} onSubmit={sendEmail}>
  <div class="row">
    <div class="col-25">
      <label for="fname">Full Name:</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="from_name" placeholder="Full Name"/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="email">Email:</label>
    </div>
    <div class="col-75">
      <input type="email" id="email" name="from_email" placeholder="Email"/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="subject">Request Description: </label>
    </div>
    <div class="col-75">
      <textarea id="subject" name="description" placeholder="Write something.." ></textarea>
    </div>
  </div>
  <br/>
  <div class="row">
    <input type="submit" value="Send"/>
  </div>
  </form>
</div>
</div>

<nav className='footer-nav'>
            <Link to='/' className="nav-item">Home</Link>
            <Link to='About' className="nav-item">About</Link>
            <Link to='projects' className="nav-item">Projects</Link>
            <Link to='contact' className="nav-item">Contact</Link>
            </nav>
            
            </>
    );
};

