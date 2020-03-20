const express = require('express');
const CadastrarReceitaController = require('./controllers/CadastrarReceitaController');
const listaController = require('./controllers/listarController');
const listarReceitaIngredientes = require('./controllers/listarReceitaIngredienteController')
const CadastrarUsuarioController = require('./controllers/CadastrarUsuarioController')

const routes = express.Router();



routes.get('/', (req,res) => {
    return res.send('hello world');
});

routes.post('/Cadastrarreceita', CadastrarReceitaController.store);

routes.get('/listarReceita', listaController.index);

routes.get('/listarReceitaIngredientes',listarReceitaIngredientes.index);

routes.post('/CadastrarUsuario', CadastrarUsuarioController.store);

module.exports = routes;