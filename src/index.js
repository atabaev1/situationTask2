import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Create the root element
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render the app using createRoot
root.render(
  <Router>
    <App />
  </Router>
);
