import React from 'react';
import Progress from './Progress';

export default function CEODashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>👨‍💼 CEO Dashboard</h1>
      <p>Welcome back. Here's a live look at the system's progress:</p>
      <Progress />
    </div>
  );
}

