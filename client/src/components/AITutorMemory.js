import React, { useState, useEffect } from 'react';

export default function AITutorMemory() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('tutorMemory');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');

  const sendMessage = () => {
    const newMessage = { role: 'user', text: input };
    const updated = [...messages, newMessage];
    setMessages(updated);
    localStorage.setItem('tutorMemory', JSON.stringify(updated));
    setInput('');
  };

  useEffect(() => {
    // Simulate AI reply
    if (messages.length && messages[messages.length - 1].role === 'user') {
      const last = messages[messages.length - 1].text;
      const reply = { role: 'ai', text: `I heard you say: "${last}"` };
      const updated = [...messages, reply];
      setTimeout(() => {
        setMessages(updated);
        localStorage.setItem('tutorMemory', JSON.stringify(updated));
      }, 800);
    }
    // eslint-disable-next-line
  }, [messages]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🧠 AI Tutor with Memory</h2>
      <div style={{ marginBottom: '1rem' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: '0.5rem' }}>
            <strong>{msg.role === 'user' ? 'You' : 'Omni'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '0.5rem', marginRight: '1rem', width: '60%' }}
      />
      <button onClick={sendMessage} style={{ padding: '0.5rem 1rem' }}>
        Send
      </button>
    </div>
  );
}

