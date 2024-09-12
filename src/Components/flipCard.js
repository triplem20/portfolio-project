import { useEffect, useState } from 'react';
import profile from '../assets/img/profile2.jpeg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Main() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState(''); // Letter displayed
  const displayedWd = ["Web Developer", "Flutter Developer"]; // Words to be displayed
  const period = 2000; // Amount of time between each word
  const [delta, setDelta] = useState(300 - Math.random() * 700); // Amount of time between each letter

  // Display a message when the component mounts
  useEffect(() => {
    toast.info('Welcome! Please Rotate the screen if Using Your phone.', {
      position: 'top-right'
    });
  }, []);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]); // Include delta in dependencies to update interval if delta changes

  const tick = () => {
    let i = loopNum % displayedWd.length;
    let fullText = displayedWd[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <>
      <div className='Container'>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="profileimg" src={profile} alt="Profile" />
              <h3 id="home"><span className="wrap">{text}</span></h3>
              <h2 className="name">Mustafa Mansour</h2>
              <h4 className='thatg'>We love that guy!</h4>
            </div>
            <div className="flip-card-back">
              <h4 className="para">An Information Technology graduate with a background in programming, networking, and system management. Seeking internships and collaborative projects to drive innovation and expand my expertise. Passionate about problem-solving, contributing to fresh ideas, and staying ahead of emerging technologies.</h4>
            </div>
          </div>
        </div>
      </div>

      {/* ToastContainer should be placed here */}
      <ToastContainer />
    </>
  );
}

export default Main;
