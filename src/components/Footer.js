import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; 
const Footer = () => (
  <footer className="footer bg-dark text-white py-4 mt-auto">
    <Container>
      <Row>
        <Col className="text-center">
          <p>&copy; 2024 Innovatech. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
