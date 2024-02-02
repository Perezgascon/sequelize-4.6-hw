const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// get all categories
router.get('/', categoryController.getAllCategories);


module.exports = router;