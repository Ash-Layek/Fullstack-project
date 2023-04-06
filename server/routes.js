const express = require('express');

const itemController = require('./controllers/itemController');

const categoryController = require ('./controllers/categoryController');

const router  = express.Router();

router.get('/items', itemController.index);

router.post('/items', itemController.store);

router.patch('/items/:item', itemController.update);

router.delete('/items/item', itemController.destroy);

router.get('/categories', categoryController.index);

router.post('/categories', categoryController.store);

router.delete('/categories/category', categoryController.destroy);


module.exports = router;