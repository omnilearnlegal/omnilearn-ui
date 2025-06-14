import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/study">Study</Link></li>
        <li><Link to="/tutor">Tutor</Link></li>
        <li><Link to="/payments">Payments</Link></li>
      </ul>
    </nav>
  );
}

