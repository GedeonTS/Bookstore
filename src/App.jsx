import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import contactImage from './images/contact.png';

function App() {
  return (
    <section className="main-container">
      <nav className="navbar">
        <h1>Bookstore CMS</h1>
        <Link to="/" className="home-menu">BOOKS</Link>
        <Link to="Categories" className="categories-menu">CATEGORIES</Link>
        <img className="image-contact" src={contactImage} alt="contact" />
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </section>
  );
}

export default App;
