const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // secure
});

app.post('/api/ai-tutor', async (req, res) => {
  const { question } = req.body;

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: question }],
    });

    res.json({ response: chatCompletion.choices[0].message.content });
  } catch (error) {
    console.error('❌ Error:', error.message);
    res.status(500).json({ error: 'Something went wrong with the AI Tutor' });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🧠 AI Tutor backend running on http://localhost:${PORT}`));

