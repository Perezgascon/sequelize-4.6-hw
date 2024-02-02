const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// get all items
router.get('/', itemController.getAllItems);

// get item by id
router.get('/:id', itemController.getItemById);




module.exports = router;