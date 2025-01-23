import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from'../assets/img/htmlicon.jpeg';
import css from '../assets/img/css2icon.jpeg';
import js from '../assets/img/jsicon.jpeg';
import flutter from '../assets/img/fluttericon.jpeg';
import firebase from '../assets/img/firebaseicon.jpeg';
import sql from '../assets/img/sql.png';
import csharp from '../assets/img/CSharp.jpeg';
import dotnet from '../assets/img/.net.png';



function AboutMe(){
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
    
    
    return (
    <div className='Container' >
<h1 id="About">About Me</h1>
<br/>
<section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Frameworks, programming languages, and other technologies and platforms I have experience with.<br></br> Still learning more...</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={flutter} alt="Image" />
                                <h5>Flutter</h5>
                            </div>
                            <div className="item">
                                <img src={firebase} alt="Image" />
                                <h5>Firebase</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={dotnet} alt="Image" />
                                <h5>ASP.NET</h5>
                            </div>
                            <div className="item">
                                <img src={csharp} alt="Image" />
                                <h5>C#</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>



</div>
  );
}

export default AboutMe;