import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './OrderForm.css'; 

const OrderForm = () => {
  const [form, setForm] = useState({ name: '', email: '', quantity: 1 });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email is invalid';
    if (form.quantity < 1) newErrors.quantity = 'Quantity must be at least 1';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      
      console.log('Form submitted:', form);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <Container className="order-form-container">
      <h2 className="mb-4">Pre-Order Innovatech VR Pro</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            isInvalid={!!errors.quantity}
          />
          <Form.Control.Feedback type="invalid">{errors.quantity}</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">Pre-Order</Button>
      </Form>
    </Container>
  );
};

export default OrderForm;
