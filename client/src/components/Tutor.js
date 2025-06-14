import React, { useState } from 'react';

export default function Tutor() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'You', text: input }];
    setMessages(newMessages);

    // Simulated AI response
    setTimeout(() => {
      const response = {
        sender: 'OmniLearn AI',
        text: `Let me help you with "${input}"... (Real AI coming soon!)`
      };
      setMessages([...newMessages, response]);
    }, 600);

    setInput('');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>💡 AI Tutor</h2>
      <div style={{ border: '1px solid #ccc', padding: '1rem', height: '200px', overflowY: 'auto', marginBottom: '1rem' }}>
        {messages.map((msg, i) => (
          <p key={i}><strong>{msg.sender}:</strong> {msg.text}</p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        placeholder="Ask a question..."
        style={{ width: '70%', padding: '0.5rem' }}
      />
      <button onClick={handleSend} style={{ marginLeft: '0.5rem', padding: '0.5rem 1rem' }}>Send</button>
    </div>
  );
}

