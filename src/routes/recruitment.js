const express = require('express');
const router = express.Router();

const recruitmentController = require('../app/controllers/RecruitmentController');

router.use('/detail', recruitmentController.detail);
router.use('/', recruitmentController.index);

module.exports = router;