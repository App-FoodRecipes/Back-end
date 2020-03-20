const Usuario = require('../models/usuario');

module.exports = {
    async index(req, res) {
        
        const listaUsuario = await Usuario.find();
        return res.json(listaUsuario);
    }
};