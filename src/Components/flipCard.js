import { useEffect, useState } from 'react';
import profile from '../assets/img/profile1.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Main() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState(''); // Letter displayed
  const displayedWd = ["Web Developer", "Flutter Developer","FrontEnd Developer","FullStack Developer"]; // Words to be displayed
  const period = 1000; // Amount of time between each word
  const [delta, setDelta] = useState(300 - Math.random() * 100); // Amount of time between each letter

  // Display a message when the component mounts
  // useEffect(() => {
  //   toast.info('Welcome! Please Rotate the screen For a better view if Using Your Mobile.', {
  //     position: 'top-right'
  //   });
  // }, []);

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
   
   <div className="Container">

  {/* Foreground Card */}
  <div className="book">
    <div className="cover">
    <h6> Tap Here</h6>
      <img className="profileimg" src={profile} alt="Profile" />
      <h3 id="home"><span className="wrap">{text}</span></h3>
      <h5 className="name">Mustafa Mansour</h5>
      <h5 className="thatg">We love that guy!</h5>
    </div>
    <div className="content">
      <h3>Hello There!</h3>
      <p className="para">
        I'm an Information Technology graduate with a background in programming, networking, and system management. Seeking internships and collaborative projects to drive innovation and expand my expertise. Passionate about problem-solving, contributing to fresh ideas, and staying ahead of emerging technologies.
      </p>
    </div>
  </div>
</div>


      {/* ToastContainer should be placed here */}
      <ToastContainer />
      
    </>
  );
}

export default Main;
