//SerivcesDetails.js
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import './ServicesDetails.css';
import '../animations/ImageTransition.css';
import useImageSlideIn from '../animations/useImageSlideIn';



function ServicesDetails() {
   const headerHeight = document.querySelector('.App-header')?.offsetHeight || 0; 
   useEffect(() => {
       setTimeout(() => {
           window.scrollTo({ top: 0, behavior: 'auto' });
       }, 50); // adjust delay if needed
   }, []);
   
    const { id } = useParams();
    const loaded = useImageSlideIn();

    const serviceDetails = {
        0: {
            title: 'Web Development',
            description: 'Imanje Solutions crafts fast, accessible websites with clean code, intuitive design, and scalable architecture. We blend technical excellence with user-centered strategy to build web experiences that perform beautifully, connect authentically, and grow with your business.',
            image: '../images/web-development.webp',
        },
        1: {
            title: 'Mobile App Development',
            description: 'Imanje Solutions builds intuitive, scalable mobile apps tailored to your business goals. We blend elegant design with robust functionality to deliver seamless user experiences across platforms—empowering growth, engagement, and long-term success.',
            image: '../images/mobile-app-development.webp',
        },
        2: {
            title: 'UI/UX Design',
            description: 'Imanje Solutions designs intuitive, emotionally resonant interfaces that help businesses connect with customers, build trust, and grow. Every layout is crafted for clarity, accessibility, and conversion—so your site feels as good as it looks.',
            image: '../images/ui-ux-design.webp',
        },
        3: {
            title: 'Search Engine Optimization (SEO)',
            description: 'Imanje Solutions offers ethical, user-centered SEO that boosts visibility, enhances accessibility, and drives meaningful engagement. We optimize structure, speed, and content to empower users and elevate brands—without gimmicks or shortcuts.',
            image: '../images/seo.webp',
        },
        4: {
            title: 'Digital Marketing',
            description: 'Imanje Solutions delivers thoughtful digital marketing that blends SEO, design, and storytelling to build trust and drive engagement. Every campaign is crafted with clarity, emotional resonance, and a deep understanding of what truly connects with your audience.',
            image: '../images/digital-marketing.webp',
        },
    };

    const service = serviceDetails[id];

    if (!service) {
        return (
            <Container>
                <h1>Service Not Found</h1>
                <p>The service you are looking for does not exist.</p>
                <Link to="/services" className="btn btn-primary">
                    Back to Services
                </Link>
            </Container>
        );
    }

    return (
        <Container className="services-details-container">
            <Helmet>
                <title>Service Details - Imanje Solutions</title>
                <meta name="description" content={`Details about service ${id}`} />
            </Helmet>
            <Row className="gy-4 align-items-flex-start">
                <Col xs={12} md={6}>
                    <div className="detail-image-wrapper">
                        <img
                            src={serviceDetails[id].image}
                            alt={service.title}
                            className={`img-fluid ${loaded ? 'slide-in' : ''}`}
                    />
                </div>
                </Col>
                <Col xs={12} md={6} className="detail-text">
                    <h1>{serviceDetails[id].title}</h1>
                    <p>{serviceDetails[id].description}</p>
                    <div className="details-button-wrapper">
                        <a className="cta-button" href="tel:+14702612528">Let's Build Something Great</a>
                        <Link to="/services" className="btn btn-primary">
                            Back to Services
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ServicesDetails;
