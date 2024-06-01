import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './ProductPage.css';

const ProductPage = () => (
  <div className="product-hero">
    <Container className="text-center text-white">
      <Row className="align-items-center">
        <Col md={6}>
        </Col>
        <Col md={6}>
          <h2>Innovatech VR Pro</h2>
          <p className="lead">Experience state-of-the-art virtual reality like never before. The Innovatech VR Pro offers unparalleled immersion and performance.</p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ProductPage;



