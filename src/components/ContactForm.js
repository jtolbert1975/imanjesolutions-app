import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Button } from 'react-bootstrap';
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef();
  const [messageFilled, setMessageFilled] = useState(false);
  const handleMessageChange = (e) => {
    setMessageFilled(e.target.value.trim().length > 0);
  }



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_enb97sj',     // from EmailJS dashboard
      'service_enb97sj',    // your email template
      form.current,
      '6XA_f8KR96zPsHuJP'      // your EmailJS public key
    ).then(
      (result) => {
        console.log('Email sent:', result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.error('Email error:', error.text);
        alert('Failed to send message.');
      }
    );
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" required />
     </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" required />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" name="message"
         rows={5} placeholder="Your Message" required 
         onChange={handleMessageChange} 
          style={{
          backgroundColor: messageFilled ? '#e6f7ff' : '#021126',
          transition: 'background-color 0.3s ease',
        }}

         />
      </Form.Group>

      <Button type="submit" className='submit-button' disabled={!messageFilled}>Send</Button>
    </Form>
  );
};

export default ContactForm;