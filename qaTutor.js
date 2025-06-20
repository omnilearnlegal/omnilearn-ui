const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/ai-tutor', async (req, res) => {
  const { question } = req.body;

  try {
    console.log('📩 Incoming question:', question);

    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: question }],
    });

    const reply = chatCompletion.choices[0].message.content;
    res.json({ answer: reply });
  } catch (error) {
    console.error('❌ AI error:', error);
    res.status(500).json({ error: 'AI response failed' });
  }
});

app.listen(5001, () => {
  console.log('🧠 AI Tutor backend running on http://localhost:5001');
});

