import React, { useState } from 'react';

export default function Tutor() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hi! I’m your AI Tutor. Ask me anything to begin.' }
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { sender: 'user', text: input }]);

    // Fake AI response for now
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: 'ai', text: `I'm working on it! (You asked: "${input}")` }
      ]);
    }, 600);

    setInput('');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>💡 AI Tutor</h2>
      <div style={{ border: '1px solid #ccc', padding: '1rem', minHeight: '300px', marginBottom: '1rem', backgroundColor: '#fafafa' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: '0.5rem' }}>
            <strong>{msg.sender === 'user' ? 'You' : 'Tutor'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSend()}
        placeholder="Ask a question..."
        style={{ width: '80%', padding: '0.5rem' }}
      />
      <button onClick={handleSend} style={{ padding: '0.5rem 1rem', marginLeft: '1rem' }}>
        Send
      </button>
    </div>
  );
}

