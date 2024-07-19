import React from 'react';
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap';
import { ProjectTile } from './projectTile';
import projimg1 from '../assets/img/projimg1.jpeg';
import projimg2 from '../assets/img/projimg2.jpeg';
import projimg3 from '../assets/img/projimg3.jpeg';

export const Projects = () => {
  const projects = [
    {
      title: 'Cleaning Service Mobile App with Admin',
      description: 'A description',
      imgUrl: projimg1,
    },
    {
      title: 'Project 2',
      description: 'A description',
      imgUrl: projimg2,
    },
    {
      title: 'Project 3',
      description: 'A description',
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
                These are the projects I have worked on, some are still under development. Please view them and provide some feedback.
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
