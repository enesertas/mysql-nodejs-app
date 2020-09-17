const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');
router.get('/', controllers.getIndex);

router.post('/add-data', controllers.postAddData);

module.exports = router;