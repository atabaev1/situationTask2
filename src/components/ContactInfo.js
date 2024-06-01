import React from 'react';
import { Container } from 'react-bootstrap';
import './ContactInfo.css'; 

const ContactInfo = () => (
  <Container className="contact-info my-5">
    <h2>Contact Us</h2>
    <p>Email: <a href="mailto:atabaevzaman7@.com">support@innovatech.com</a></p>
    <p>Phone: <a href="tel:+99655409666">+996-554-096-666</a></p>
    <p>Address: 123 Tech Street, Innovation City</p>
  </Container>
);

export default ContactInfo;
