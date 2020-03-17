const express = require('express');
const ReceitaController = require('./controllers/ReceitaController');
const listaController = require('./controllers/listarController');
const listarReceitaIngredientes = require('./controllers/listarReceitaIngredienteController')

const routes = express.Router();



routes.get('/', (req,res) => {
    return res.send('hello world');
});

routes.post('/receita', ReceitaController.store);

routes.get('/listarReceita', listaController.index);

routes.get('/listarReceitaIngredientes',listarReceitaIngredientes.index);

module.exports = routes;