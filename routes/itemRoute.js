const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// get all items
router.get('/', itemController.getAllItems);

// get item by id
router.get('/:id', itemController.getItemById);

// create new item
router.post('/', itemController.createItem);

// update item by id
router.put('/:id', itemController.updateItemById);

// delete item by id
router.delete('/:id', itemController.deleteItemById);

// shows all items in one category
router.get('/:id/items', itemController.showItemsCategory);


module.exports = router;