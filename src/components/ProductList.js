import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


import './ProductList.css'; 
const products = [
    {
      id: 1,
      name: 'Innovatech VR Pro',
      description: 'State-of-the-art virtual reality headset',
      price: 299.99,
      imageUrl: '/img/img1.jpg',
    },
    {
        id: 2,
        name: 'Innovatech VR Pro',
        description: 'State-of-the-art virtual reality headset',
        price: 299.99,
        imageUrl: '/img/prod1.jpeg',
      },
      {
        id: 3,
        name: 'Innovatech VR Pro',
        description: 'State-of-the-art virtual reality headset',
        price: 299.99,
        imageUrl: '/img/prod2.jpeg',
      },
      {
        id: 4,
        name: 'Innovatech VR Pro',
        description: 'State-of-the-art virtual reality headset',
        price: 299.99,
        imageUrl: '/img/img1.jpg',
      },
  ];

  const ProductList = () => (
    <Container className="product-list my-5">
      <h2 className="mb-4">Our Products</h2>
      <Row>
        {products.map(product => (
          <Col md={4} key={product.id} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="mt-auto"><strong>{product.price}</strong></Card.Text>
                <Button variant="primary" className="mt-2">Pre-Order</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );

export default ProductList;
