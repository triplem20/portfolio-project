import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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
  {/* Lottie background */}
  <div className="lottie-bg">
    <DotLottieReact
      src="https://lottie.host/427a0981-9f0f-4546-b56c-6c67fed077d5/qUU1khDe3l.lottie"
      loop
      autoplay
    />
  </div>

  {/* Form content */}
  <form ref={form} onSubmit={sendEmail}>
    <div className="row">
      <div className="col-25">
      
      </div>
      <div className="col-75">
        <input
          type="text"
          id="fname"
          name="from_name"
          placeholder="Enter Full Name"
          required
        />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
       
      </div>
      <div className="col-75">
        <input
          type="email"
          id="email"
          name="from_email"
          placeholder="Enter Email"
          required
        />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
       
      </div>
      <div className="col-75">
        <textarea
          id="subject"
          name="description"
          placeholder="Request Description..."
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

    

      <ToastContainer />
      
    </>
  );
};
