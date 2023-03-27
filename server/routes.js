const express = require('express');

const itemController = require('./controllers/itemController');

const router  = express.Router();

router.get('/items', itemController.index);

router.post('/items', itemController.store);

router.patch('/items/:item', itemController.update);

router.delete('/items/item', itemController.destroy);


module.exports = router;