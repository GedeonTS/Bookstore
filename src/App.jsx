import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="Categories">Categories</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
