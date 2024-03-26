const express = require('express');
const router = express.Router();

const feedbackController = require('../app/controllers/FeedbackController');

router.use('/', feedbackController.index);

module.exports = router;