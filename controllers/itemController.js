const Item = require('../models/itemModel');

//GET all items

exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.findAll();
        res.json(items);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// get item by id
exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findByPk(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// create a new item
exports.createItem = async (req, res) => {
    try {
        const { name, price, description, categoryid } = req.body;

        // Validate required fields
        if (!name || !price || !description || !categoryid) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Additional validation if needed (e.g., check if price is a valid number)

        const item = await Item.create({ name, price, description, categoryid });
        res.status(201).json(item);
    } catch (error) {
        console.error(error.message);

        if (error.name === 'SequelizeValidationError') {
            // Handle validation errors
            return res.status(400).json({ message: 'Validation error', errors: error.errors });
        }

        res.status(500).json({ message: 'Server Error' });
    }
};


// update item by id
exports.updateItemById = async (req, res) => {
    try {
        const item = await Item.findByPk(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        const { name, price, description, categoryid } = req.body;
        await item.update({ name, price, description, categoryid });
        res.json(item);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
}

// delete item by id
exports.deleteItemById = async (req, res) => {
    try {
        const item = await Item.findByPk(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        await item.destroy();
        res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};