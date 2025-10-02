//ContactUsPage.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import './ContactUsPage.css';
import ContactForm from '../components/ContactForm';

function ContactUsPage() {
  return (
    <div className="contact-page-wrapper">
    <Container className="contact-container">
      <Helmet>
        <title>Contact Us - Imanje Solutions</title>
        <meta name="description" content="Get in touch with Imanje Solutions for your IT needs." />
      </Helmet>
      <Row>
        <Col>
          <h1>Contact Us</h1>
          <div className="mb-4">
            <p>If you have any questions or would like to discuss how we can make your business visible and paid, please feel free to reach out to us. We're here to help!</p>
            <p><strong>Phone:</strong> <a href="tel:+14702612528">+1 (470) 261-2528</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@imanjesolutions.com">info@imanjesolutions.com</a></p>
          </div>
          <div className="mb-4">
            <h2>Send Us a Message</h2>
          </div>
          <div className="form-container mb-4">
             <ContactForm />
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default ContactUsPage;
