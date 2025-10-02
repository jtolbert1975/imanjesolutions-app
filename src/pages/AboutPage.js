//AboutPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';    
import './AboutPage.css';

function AboutPage() {

    return (
        <Container className="about-container">
            <Helmet>
                <title>About Us - Imanje Solutions</title>
                <meta name="description" content="Learn more about Imanje Solutions, our mission, vision, and team." />
            </Helmet>
            <Row className="my-4">  
                <Col md={6}>
                    <h1>About Us</h1>
                    <p> 
                        Imanje Solutions is a leading IT solutions provider dedicated to delivering innovative and efficient technology services to businesses of all sizes. Our mission is to empower organizations through cutting-edge technology, enabling them to achieve their goals and stay ahead in a competitive market.
                    </p>
                    <p>
                        Our vision is to be the most trusted partner for IT solutions, known for our commitment to excellence, customer satisfaction, and continuous improvement. We believe in building long-term relationships with our clients by understanding their unique needs and providing tailored solutions that drive success.
                    </p>
                    <p>
                        At Imanje Solutions, we value integrity, innovation, and collaboration. Our team of experienced professionals is passionate about technology and dedicated to delivering high-quality services that exceed our clients' expectations.
                    </p>
                    <p>
                        Join us on our journey to transform businesses through technology and make a positive impact in the communities we serve.
                    </p>
                </Col>
                <Col md={6} className='d-flex justify-content-center'>
                    <div className='image-wrapper'>
                        <img src="/images/team.jpeg" alt="Our Team" className="team-image" />
                    </div>
                </Col>
            </Row>
            <Row className="my-4">
                <Col></Col>
                <Col className="text-center">
                    <a href="/contact" className="contact-button">Contact Us</a>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default AboutPage;
