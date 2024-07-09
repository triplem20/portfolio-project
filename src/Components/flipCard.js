
import { useEffect, useState } from 'react';
import profile from '../assets/img/profile2.jpeg';

function Main(){

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState(''); // Letter displayed
  const displayedWd= ["Frontend Developer", "Flutter Developer"]; //words to be displayed
  const period = 2000; //amount of time between each word
  const [delta, setDelta] = useState(300 - Math.random() * 200); //amount of time between each letter


  useEffect(() => { 
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

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
  }
    return (
   <>
   
   <div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="profileimg" src={profile}></img>
              <h3 id="home" ><span className="wrap">{text}</span></h3>
              <h2 className="name">Mustafa Mansour</h2>
              <h4 className='thatg'>We love that guy!</h4>
            </div>
            <div class="flip-card-back">
              <h4 className="para">An information Technology Graduate seeking a position in a dynamic organization to launch my career and work towards enhancing my set of skills.</h4>
            </div>
          </div>
        </div>
      </div></>

    
    );
}

export default Main;