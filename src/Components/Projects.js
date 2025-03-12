import React, { useRef } from 'react';
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'; // Ensure to include this for carousel styles
import projimg1 from '../assets/img/logo1.jpg';
import projimg2 from '../assets/img/weather_logo.png';
import projimg3 from '../assets/img/destiny_logo.png';
import proj4 from '../assets/img/football_quiz.png';
import proj5 from'../assets/img/chatty_logo.png';
import proj6 from '../assets/img/checkmate_logo.png';
import proj7 from '../assets/img/notes.png';
import proj8 from '../assets/img/ttp.png';
import proj9 from '../assets/img/search_engine.png';
import proj10 from '../assets/img/activityfinder.png';
import proj11 from '../assets/img/SIA.png';

export const Projects = () => {
  const primarySectionRef = useRef(null);
  const secondarySectionRef = useRef(null);
  const otherSectionRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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

  const primaryProjects = [
    {
      title: 'Cleaning Service Mobile App with Admin',
      description: 'A web application module, which enables you to manage services by adding, updating, and deleting those services. And other features such as accepting and rejecting customers requests coming from the mobile application. And integrated with a mobile Application module.',
      imgUrl: projimg1,
    },
    {
      title: 'SIA SMS',
      description: 'SIA Student Management System (SMS) is a comprehensive platform designed to streamline school administration and enhance the learning experience. It includes an Admin Panel for managing student and teacher registrations, class details, school events, and exam results, with automated account creation for new users. The Teacher Panel allows teachers to add notes and assignments for their assigned subjects, view school events, and submit student exam results. The Student Panel enables students to access subjects, study materials, school events, class timetables, and exam results. Secure authentication and role-based access control ensure data security and user-specific access.',
      imgUrl: proj11,
    },
    {
      title: 'Activity Finder',
      description: 'a web application module in which users locations are defined, and then nearby activities are fetched with the help of an API, and routes for the selected activity is also given. Activities are also filtered in two ways and one of the filtering is defined according to the users mood. Another feature is users can create an activity on their own.',
      imgUrl: proj10,
    },
    
  ];

  const secondaryProjects = [
    {
      title: 'The Unknown Adventure',
      description: 'Story-based game which provides the user with multiple story options, and each continues according to the choices made by the user.',
      imgUrl: projimg3,
    },
    {
      title: 'The Football Quiz',
      description: 'A football-based quiz game which includes multiple true or false questions of different categories.',
      imgUrl: proj4,
    },
    {
      title: 'Chatty',
      description: 'A messaging mobile application module integerated with firebase database, in which users register and create accounts to chat with other users online.',
       imgUrl: proj5,
    },
    {
      title: 'CheckMate',
      description: 'A todo mobile application module in which users can add delete and update their tasks status.',
       imgUrl: proj6,
    },
    {
      title: 'Sky Watch',
      description: 'A weather forecast application module that gives the user the temperature and other weather details at their current location, and also at a selected city or location.',
      imgUrl: projimg2,
    },

  ];
  const otherProjects = [
    {
      title: 'Notes App',
      description: 'a simple web aplication module that takes user text and converts it to speech, in which the user has multiple available voices',
      imgUrl: proj7,
    },
    {
      title: 'Text To Speech',
      description:'A simple web application module which user can use to add notes, delete notes and update their notes.',
      imgUrl: proj8,
    },
    {
      title: 'Image World',
     description:'A simple web application module that consists of a image search engine, which user can type some text and get images related to their input.',
      imgUrl: proj9,
    },
 

  ];

  
  return (
    <div className='Container'>
      <section className='project' id='project'>
        <Container>
          <Row>
            <Col xs={12}>
              <h1 className='ptitle'>Projects</h1>
              <p>
                These are the projects I have worked on, some are still under development. Please view them on my Github account and provide some feedback.
              </p>
            </Col>
          </Row>
          <Tab.Container
            id='projects-tabs'
            defaultActiveKey='first'
            onSelect={(selectedKey) => {
              if (selectedKey === 'first') scrollToSection(primarySectionRef);
              if (selectedKey === 'second') scrollToSection(secondarySectionRef);
              if (selectedKey === 'third') scrollToSection(otherSectionRef);
            }}
          >
            <Nav variant='pills' className='nav-pills mb-5 justify-content-center'>
              <Nav.Item>
                <Nav.Link eventKey='first'>Primary Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='second'>Secondary Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='third'>Other Projects</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey='first'>
                <div ref={primarySectionRef}>
                  <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                    {primaryProjects.map((project, index) => (
                      <div key={index} className="flip-card-proj">
                        <div className="flip-card-inner-proj">
                          <div className="flip-card-front-proj">
                            <img className="projimg" src={project.imgUrl} alt={project.title} />
                            <h4 className="projecttle">{project.title}</h4>
                          </div>
                          <div className="flip-card-back-proj">
                            <h4 className="projdes">{project.description}</h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey='second'>
                  <br></br>
                  <br></br>
                  <br></br>
                  <p>
                  These projects are ongoing or experimental works, exploring new ideas and technologies. While still in development, they highlight creative approaches and evolving solutions.
                   </p>
                <div ref={secondarySectionRef}>
                  <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                    {secondaryProjects.map((project, index) => (
                      <div key={index} className="flip-card-proj">
                        <div className="flip-card-inner-proj">
                          <div className="flip-card-front-proj">
                            <img className="projimg" src={project.imgUrl} alt={project.title} />
                            <h5 className="projecttle">{project.title}</h5>
                          </div>
                          <div className="flip-card-back-proj">
                            <h4 className="projdes">{project.description}</h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey='third'>
                
                  <br></br>
                  <br></br>
                  <br></br>
                  <div ref={otherSectionRef}>
                  <p>
                    Here you can find a collection of various other projects that do not fit into the primary categories but are still worth mentioning. Some might be side projects, experiments, or older works.
                  </p>
                  <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                    {otherProjects.map((project, index) => (
                      <div key={index} className="flip-card-proj">
                        <div className="flip-card-inner-proj">
                          <div className="flip-card-front-proj">
                            <img className="projimg" src={project.imgUrl} alt={project.title} />
                            <p className="projecttle">{project.title}</p>
                          </div>
                          <div className="flip-card-back-proj">
                            <h4 className="projdes">{project.description}</h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </section>
    </div>
  );
};
