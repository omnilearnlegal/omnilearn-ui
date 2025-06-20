const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const studyGuideRouter = require('./routes/studyGuideRouter');
const aiTutorRouter = require('./routes/aiTutorRouter'); // Optional if using qaTutor.js route

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/study-guide', studyGuideRouter);
app.use('/api/ai-tutor', aiTutorRouter); // Optional, based on qaTutor.js

// Health Check
app.get('/', (req, res) => {
  res.send('✅ OmniLearn AI backend is live!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🧠 AI Tutor backend running on http://localhost:${PORT}`);
});

