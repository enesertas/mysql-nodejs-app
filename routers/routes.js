const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

router.post('/add-data', controllers.postAddData);

router.post('/delete-data', controllers.postDeleteAll);

router.get('/view-database', controllers.getViewDatas);

router.get('/', controllers.getIndex);

module.exports = router;