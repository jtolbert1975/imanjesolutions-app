//ServicesPage.js
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

function ServicesPage() {
    const services = [
        {
            title: 'Web Development',
            description: 'Building responsive and modern websites.',
            image: '/images/web-development.webp',
        },
        {
            title: 'Mobile App Development',
            description: 'Creating mobile applications for iOS and Android.',
            image: '/images/mobile-app-development.webp',
        },
        {
            title: 'UI/UX Design',
            description: 'Designing user-friendly interfaces and experiences.',
            image: '/images/ui-ux-design.webp',
        },
         {
            title: 'Search Engine Optimization (SEO)',
            description: 'Improving website visibility and ranking on search engines.',
            image: '/images/seo.webp',
        },
         {
            title: 'Digital Marketing',
            description: 'Promoting products and services through digital channels.',
            image: '/images/digital-marketing.webp',
        }
    ];

    return (
        <Container className='services-container'>
            <Helmet>
                <title>Services - Imanje Solutions</title>
                <meta name="description" content="Explore our services offered at Imanje Solutions." />
            </Helmet>
            <Row>
                {services.map((service, index) => (
                    <Col key={index} md={4}>
                        <Card>
                            <div className="image-wrapper">
                             <Card.Img variant="top" src={service.image} alt={service.title} />
                            </div>
                            <Card.Body>                                
                                <Card.Title>{service.title}</Card.Title>
                                <Card.Text>{service.description}</Card.Text>
                                <div className="button-wrapper">
                                <Link to={`/servicesdetails/${index}`} className="learn-more-button"
                                aria-label={`Learn more about ${service.title}`}>
                                    Learn More
                                </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ServicesPage;
