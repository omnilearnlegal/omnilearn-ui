import React, { useState, useEffect } from 'react';

export default function ScoreTracker() {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Placeholder: Replace with actual quiz data in future waves
    setScore(8);   // Example: 8 correct
    setTotal(10);  // Example: 10 total
  }, []);

  const percent = total > 0 ? ((score / total) * 100).toFixed(1) : 0;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📈 Score Tracker</h2>
      <p>Your current score is: <strong>{score} / {total}</strong></p>
      <p>Percentage: <strong>{percent}%</strong></p>
      <p>Status: {percent >= 70 ? '✅ Pass' : '❌ Try Again'}</p>
    </div>
  );
}

