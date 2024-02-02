const express = require('express');
const { sequelize, testConnection } = require('./models/conn');
const categoryRoute = require('./routes/categoryRoute');
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


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
