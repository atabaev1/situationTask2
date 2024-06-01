import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

const App = () => (
  <div className="d-flex flex-column min-vh-100">
    <NavigationBar />
    <main className="flex-grow-1">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductList />} /> 
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
