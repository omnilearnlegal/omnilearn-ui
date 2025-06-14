import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Payments from './components/Payments';

function Home() {
  return <h2>🏠 Welcome to OmniLearn</h2>;
}
function Study() {
  return <h2>📚 Study Module (Coming Soon)</h2>;
}
function Tutor() {
  return <h2>💡 AI Tutor (Coming Soon)</h2>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study" element={<Study />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

