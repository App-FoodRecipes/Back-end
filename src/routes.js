const express = require('express');
const ReceitaController = require('./controllers/ReceitaController');
const listaController = require('./controllers/listarController');

const routes = express.Router();



routes.get('/', (req,res) => {
    return res.send('hello world');
});

routes.post('/receita', ReceitaController.store);

routes.get('/listarReceita', listaController.index);

module.exports = routes;