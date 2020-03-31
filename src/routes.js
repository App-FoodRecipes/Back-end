const express = require('express');
const CadastrarReceitaController = require('./controllers/CadastrarReceitaController');
const listaReceitaController = require('./controllers/listarReceitaController');
const listarReceitaIngredientes = require('./controllers/listarReceitaIngredienteController');
const CadastrarUsuarioController = require('./controllers/CadastrarUsuarioController');
const ListarUsuarioController = require('./controllers/ListarUsuarioController');
const LoginController = require('./controllers/LoginController');

const routes = express.Router();



routes.get('/', (req,res) => {
    return res.send('hello world');
});

routes.post('/Cadastrarreceita', CadastrarReceitaController.store);
console.log('path : CadastrarReceita iniciado');
routes.get('/ListarReceita', listaReceitaController.index);
console.log('path : listarReceita iniciado');
routes.get('/ListarReceitaIngredientes',listarReceitaIngredientes.index);
console.log('path : ListarReceitaIngredientes iniciado');
routes.post('/CadastrarUsuario', CadastrarUsuarioController.store);
console.log('path : CadastrarUsuario iniciado');
routes.get('/ListarUsuario', ListarUsuarioController.index);
console.log('path : ListarUsuario iniciado');

routes.post('/Logar', LoginController.index);
console.log('path : Logar iniciado');

module.exports = routes;