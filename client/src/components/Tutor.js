import React, { useState } from 'react';

export default function Tutor() {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! I’m your AI Tutor. What would you like to learn today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    const aiResponse = { sender: 'ai', text: simulateAIResponse(input) };

    setMessages([...messages, userMessage, aiResponse]);
    setInput('');
  };

  const simulateAIResponse = (text) => {
    // Simulated AI response
    if (text.toLowerCase().includes('photosynthesis')) {
      return "Photosynthesis is the process by which plants convert sunlight into energy. 🌱";
    } else if (text.toLowerCase().includes('help')) {
      return "Sure! Ask me anything about math, science, history, or test prep.";
    } else {
      return `Interesting! Let me explain: "${text}" is a great topic. Here’s what I know...`;
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>💡 AI Tutor</h2>
      <div style={{ border: '1px solid #ccc', padding: '1rem', height: '300px', overflowY: 'scroll', marginBottom: '1rem' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <strong>{msg.sender === 'user' ? 'You' : 'OmniAI'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Ask me anything..."
          onChange={(e) => setInput(e.target.value)}
          style={{ width: '80%', padding: '0.5rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Send</button>
      </form>
    </div>
  );
}

