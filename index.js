const express = require('express');
const { sequelize, testConnection } = require('./models/conn');
const categoryRoute = require('./routes/categoryRoute');
const itemRoute = require('./routes/itemRoute');
const { Op } = require('sequelize');
const { Item, Category } = require('./models/associations');


const PORT = 8080;


testConnection();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

// categories route
app.use('/api/categories', categoryRoute);

// items route
app.use('/api/items', itemRoute);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
