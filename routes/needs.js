const express = require('express');
const router = express.Router();
const needsController = require('../controllers/needsController');

router.get('/:needId', needsController.detail);
router.get('/', needsController.index);
router.get('/add', needsController.add);

module.exports = router;
