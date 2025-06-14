import React from 'react';

export default function Checkout() {
  const handleCheckout = () => {
    window.location.href = 'https://buy.stripe.com/test_4gw3dV7mWbNq4IAbII'; // Replace with real link later
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>💳 Upgrade to OmniLearn Premium</h2>
      <p>Unlock all study paths, real-time tutor help, and custom progress tracking.</p>
      <button onClick={handleCheckout} style={{ padding: '1rem', fontSize: '1rem' }}>
        Upgrade for $9.99/month
      </button>
    </div>
  );
}

