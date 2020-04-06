const express = require('express');
const ReceitaController = require('./controllers/ReceitaController');
const listarReceitaIngredientes = require('./controllers/listarReceitaIngredienteController');
const UsuarioController = require('./controllers/UsuarioController');
const LoginController = require('./controllers/LoginController');

const routes = express.Router();



routes.get('/', (req,res) => {
    return res.send('hello world');
});

routes.post('/Receita', ReceitaController.store);
routes.get('/Receita', ReceitaController.index);

routes.get('/ListarReceitaIngredientes',listarReceitaIngredientes.index);

routes.post('/Usuario', UsuarioController.store);
routes.get('/Usuario', UsuarioController.index);

routes.post('/Logar', LoginController.index);

module.exports = routes;