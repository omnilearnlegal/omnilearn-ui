import React, { useState } from 'react';

export default function Tutor() {
  const [conversation, setConversation] = useState([
    { role: 'ai', content: "👋 Hi, I’m OmniAI. Ask me anything, and I’ll walk you through it!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessageToAI = async (userInput) => {
    // Simulate sending to AI API — Replace this with fetch() for real OpenAI call later
    const context = conversation.map(msg => `${msg.role === 'user' ? 'User' : 'OmniAI'}: ${msg.content}`).join('\n');
    
    // Simulated reasoning
    let reply = '';
    if (userInput.toLowerCase().includes('mitochondria')) {
      reply = "The mitochondria is the powerhouse of the cell. 🧬 Want to go deeper into how it produces ATP?";
    } else if (context.toLowerCase().includes('calculus') && userInput.toLowerCase().includes('derivative')) {
      reply = "A derivative measures how a function changes as its input changes. Need help with rules like product or chain rule?";
    } else {
      reply = `Let me think... based on our conversation so far, here's what I can say about "${userInput}"...`;
    }

    return new Promise(resolve => setTimeout(() => resolve(reply), 1000));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newUserMessage = { role: 'user', content: input };
    setConversation(prev => [...prev, newUserMessage]);
    setInput('');
    setLoading(true);

    const aiResponse = await sendMessageToAI(input);
    const newAIMessage = { role: 'ai', content: aiResponse };

    setConversation(prev => [...prev, newAIMessage]);
    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>💡 AI Tutor – Long-Term Memory Ready</h2>
      <div style={{ border: '1px solid #ccc', padding: '1rem', height: '300px', overflowY: 'auto', marginBottom: '1rem' }}>
        {conversation.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.role === 'user' ? 'right' : 'left', marginBottom: '0.5rem' }}>
            <strong>{msg.role === 'user' ? 'You' : 'OmniAI'}:</strong> {msg.content}
          </div>
        ))}
        {loading && <em>OmniAI is thinking...</em>}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
          style={{ width: '75%', padding: '0.5rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Send</button>
      </form>
    </div>
  );
}

