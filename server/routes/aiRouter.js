const express = require('express');
const router = express.Router();
router.post('/generate', (req, res) => res.send('AI Response'));
module.exports = router;