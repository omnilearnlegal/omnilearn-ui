import React from 'react';

export default function Checkout() {
  const handleCheckout = () => {
    alert('🔒 Stripe Checkout will be here. Secure & Simple!');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>💳 Subscribe to OmniLearn Premium</h2>
      <p>Get access to all advanced features, AI tutor support, and study boosters.</p>
      <button onClick={handleCheckout} style={{ padding: '0.75rem 1.5rem', marginTop: '1rem' }}>
        Subscribe – $9.99/month
      </button>
    </div>
  );
}

