import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Payments from './components/Payments';
import Progress from './components/Progress';
import CEODashboard from './components/CEODashboard';
import ScoreTracker from './components/ScoreTracker';


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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study" element={<Study />} />
        <Route path="/tutor" element={<Tutor />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/ceo" element={<CEODashboard />} />
        <Route path="/scores" element={<ScoreTracker />} />
      </Routes>
    </Router>
  );
}

export default App;

