const express = require('express');
const router = express.Router();

// ✨ Route to generate a study guide
router.post('/api/study-guide', async (req, res) => {
  const { topic } = req.body;

  if (!topic) {
    return res.status(400).json({ error: 'Missing topic in request.' });
  }

  try {
    // Simulate AI response (replace with real AI logic)
    const studyGuide = {
      topic,
      sections: [
        { title: 'Overview', content: `This is an overview of ${topic}.` },
        { title: 'Key Terms', content: 'List of important terms and definitions.' },
        { title: 'Summary', content: 'This is a concise summary of the topic.' },
      ],
    };

    res.json({ guide: studyGuide });
  } catch (error) {
    console.error('❌ Error generating study guide:', error);
    res.status(500).json({ error: 'Failed to generate study guide' });
  }
});

module.exports = router;

