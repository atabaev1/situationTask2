import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './NewsFeed.css'; // Custom CSS file
import { FaCalendarAlt } from 'react-icons/fa'; // Importing an icon

const news = [
  { date: '2024-06-01', content: 'Innovatech VR Pro release date announced!', image: '/img/img1.jpeg' },
  { date: '2024-05-15', content: 'New features of Innovatech VR Pro revealed.', image: '/img/img2.jpeg' },
  { date: '2024-04-20', content: 'Innovatech VR Pro wins innovation award.', image: '/img/img3.jpeg' },
  { date: '2024-03-30', content: 'Pre-orders for Innovatech VR Pro now open.', image: '/img/img4.jpeg' },
  { date: '2024-02-15', content: 'Innovatech VR Pro beta testing begins.', image: '/img/img5.jpeg' },
  { date: '2024-01-10', content: 'Innovatech announces VR Pro development.', image: '/img/img6.jpeg' },
];

const NewsFeed = () => (
  <Container className="news-feed my-5">
    <h2 className="mb-4">Latest News</h2>
    <Row>
      {news.map((item, index) => (
        <Col md={4} className="mb-4" key={index}>
          <Card className="news-card">
            <Card.Img variant="top" src={item.image} alt={`News ${index + 1}`} />
            <Card.Body>
              <Card.Title className="news-date"><FaCalendarAlt /> {item.date}</Card.Title>
              <Card.Text>{item.content}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default NewsFeed;
