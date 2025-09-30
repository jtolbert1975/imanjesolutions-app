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
        },
        {
            title: 'Mobile App Development',
            description: 'Creating mobile applications for iOS and Android.',
        },
        {
            title: 'UI/UX Design',
            description: 'Designing user-friendly interfaces and experiences.',
        },
         {
            title: 'Search Engine Optimization (SEO)',
            description: 'Improving website visibility and ranking on search engines.',
        },
         {
            title: 'Digital Marketing',
            description: 'Promoting products and services through digital channels.',
        }
    ];

    return (
        <Container>
            <Helmet>
                <title>Services - Imanje Solutions</title>
                <meta name="description" content="Explore our services offered at Imanje Solutions." />
            </Helmet>
            <Row>
                {services.map((service, index) => (
                    <Col key={index} md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{service.title}</Card.Title>
                                <Card.Text>{service.description}</Card.Text>
                                <Link to={`/servicesdetails/${index}`} className="btn btn-primary">
                                    Learn More
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ServicesPage;
