const express = require('express');
const router = express.Router();

const menuController = require('../app/controllers/MenuController');

router.use('/', menuController.index);

module.exports = router;