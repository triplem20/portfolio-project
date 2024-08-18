import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    console.log(form.current); // Log form data
    
    emailjs.sendForm('service_q2n4ogx', 'template_qd0izyj', form.current, 'GHD603Z-lPDtcT2Qp')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          toast.success('Your Request has been sent successfully!', {
            position: 'top-right'
          });
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('There was an error sending your Request. Please try again.', {
            position: 'top-right'
          });
        }
      );
  };
  

  return (
    <>
      <div className='Container'>
        <h1 id="connect">Let's Connect!</h1>

        <div className="containerc">
          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Full Name:</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="fname"
                  name="from_name"
                  placeholder="Full Name"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="email">Email:</label>
              </div>
              <div className="col-75">
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="subject">Request Description:</label>
              </div>
              <div className="col-75">
                <textarea
                  id="subject"
                  name="description"
                  placeholder="Write something..."
                  required
                ></textarea>
              </div>
            </div>
            <br />
            <div className="row">
              <button type="submit">Send</button>
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

      <ToastContainer />
    </>
  );
};
