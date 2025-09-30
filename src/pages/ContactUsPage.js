//ContactUsPage.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import './ContactUsPage.css';
import ContactForm from '../components/ContactForm';

function ContactUsPage() {
  return (
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

          {/* <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-button">
              Submit
            </Button>
          </Form> */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUsPage;
