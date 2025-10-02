//PortfolioPage.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';  
import './PortfolioPage.css';      

function PortfolioPage() {
  const projects = [
    {   
      title: 'Grown In Da City',
      description: 'Mobile App currently in development.',
      image: '../images/grown_in_da-city.webp',
    },
    {
      title: 'She So Dope',
      description: 'Logo Design for She So Dope entertainment management company.',
      image: '../images/she-so-dope-logo.webp',
    },
    {
      title: 'Tech Care',
      description: 'Patient care dashboard, web app for healthcare providers.',
      image: '../images/tech-care-screenshot.webp',
    },
  ];

  return (
    <Container>
      <Helmet>
        <title>Portfolio - Imanje Solutions</title>
        <meta name="description" content="Explore our portfolio of projects." />
      </Helmet>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4}>
            <Card>
              <Card.Img  src={project.image} className="design-img" />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PortfolioPage;
