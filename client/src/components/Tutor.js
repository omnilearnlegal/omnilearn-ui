import React, { useState } from 'react';

export default function Tutor() {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: "👋 Hi! I'm OmniAI, your personal tutor. Ask me anything!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const aiResponse = generateAIResponse(input, messages);
      setMessages((prev) => [...prev, { sender: 'ai', text: aiResponse }]);
      setLoading(false);
    }, 800);
  };

  const generateAIResponse = (input, history) => {
    const context = history.map((m) => `${m.sender === 'user' ? 'You' : 'OmniAI'}: ${m.text}`).join('\n');

    // Sample dynamic response logic
    if (input.toLowerCase().includes('photosynthesis')) {
      return "Photosynthesis is how plants convert light into energy using chlorophyll. 🌿";
    } else if (input.toLowerCase().includes('who are you')) {
      return "I'm OmniAI – your friendly tutor! I can help with math, science, exams, and more.";
    } else if (context.toLowerCase().includes('math') && input.toLowerCase().includes('algebra')) {
      return "Let’s dive into algebra! Want help with solving equations or understanding variables?";
    } else {
      return `You said: "${input}". Let me help you explore that further...`;
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>💬 AI Tutor (Session Memory Enabled)</h2>
      <div style={{ border: '1px solid #ccc', padding: '1rem', height: '300px', overflowY: 'scroll', marginBottom: '1rem' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', marginBottom: '0.5rem' }}>
            <strong>{msg.sender === 'user' ? 'You' : 'OmniAI'}:</strong> {msg.text}
          </div>
        ))}
        {loading && <div><em>OmniAI is thinking...</em></div>}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Type your question..."
          onChange={(e) => setInput(e.target.value)}
          style={{ width: '75%', padding: '0.5rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Send</button>
      </form>
    </div>
  );
}

