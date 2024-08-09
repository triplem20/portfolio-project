import React from 'react';
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap';
import { ProjectTile } from './projectTile';
import projimg1 from '../assets/img/logo1.jpg';
import projimg2 from '../assets/img/weather_logo.png';
import projimg3 from '../assets/img/destiny_logo.png';

export const Projects = () => {
  const projects = [
    {
      title: 'Cleaning Service Mobile App with Admin',
      description: '  A web application module, which enables you to manage services by adding, updating, and deleting those services. And other features such as accepting and rejecting customers requests coming from the mobile application. And integrated with a mobile Application module. ',
      imgUrl: projimg1,
    },
    {
      title: 'Sky Watch',
      description: '  A weather forecast application module that gives the user the temprature and other weather details at their current location, and also at a selected city or location.  ',
      imgUrl: projimg2,
    },
    {
      title: 'The Unkown',
      description: '  Story-based game which provides the user with nultiple story options.  ',
      imgUrl: projimg3,
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
          <Tab.Container id='projects-tabs' defaultActiveKey='first'>
            <Nav variant='pills' className='nav-pills mb-5 justify-content-center'>
              <Nav.Item>
                <Nav.Link eventKey='first'>Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='second'>Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='third'>Tab 3</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey='first'>
                {projects.map((project, index) => (
                  <ProjectTile
                    key={index}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.imgUrl}
                  />
                ))}
              </Tab.Pane>
              {/* You can add more Tab.Pane components here for other tabs */}
            </Tab.Content>
          </Tab.Container>
        </Container>
      </section>
    </div>
  );
};
