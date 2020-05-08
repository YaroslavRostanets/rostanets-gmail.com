const express = require('express');
const router = express.Router();
const needsController = require('../controllers/needsController');

router.get('/add', needsController.add);
router.get('/:needId', needsController.detail);
router.get('/', needsController.index);

module.exports = router;
