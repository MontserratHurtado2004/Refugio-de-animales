import React from 'react';
import '../src/app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/login';
import Register from '../src/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
