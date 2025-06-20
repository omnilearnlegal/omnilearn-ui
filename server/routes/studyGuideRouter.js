const express = require('express');
const router = express.Router();

// ✅ Study guide generator endpoint
router.post('/generate-study-guide', (req, res) => {
  const { subject, topics, difficulty } = req.body;

  if (!subject || !topics || !Array.isArray(topics)) {
    return res.status(400).json({ error: 'Missing or invalid study guide parameters.' });
  }

  const guide = {
    title: `📘 Study Guide: ${subject}`,
    difficulty: difficulty || 'Intermediate',
    topics: topics.map((topic, index) => ({
      id: index + 1,
      title: topic,
      content: `🧠 Key Concepts for ${topic}:\n- [Insert AI-generated notes here]`
    }))
  };

  res.json(guide);
});

module.exports = router;

