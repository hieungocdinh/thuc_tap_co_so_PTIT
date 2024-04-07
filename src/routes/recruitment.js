const express = require('express');
const router = express.Router();

const recruitmentController = require('../app/controllers/RecruitmentController');

router.get('/detail', recruitmentController.detail);
router.get('/', recruitmentController.index);

module.exports = router;