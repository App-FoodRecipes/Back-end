const express = require('express');
const ReceitaController = require('./controllers/ReceitaController');

const routes = express.Router();



routes.get('/', (req,res) => {
    return res.send('hello world');
});

routes.post('/receita', ReceitaController.store);

module.exports = routes;