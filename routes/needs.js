const express = require('express');
const router = express.Router();
const needsController = require('../controllers/needsController');

router.get('/', needsController.index);

module.exports = router;
