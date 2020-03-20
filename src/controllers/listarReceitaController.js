const Receita = require('../models/receita');

module.exports = {
    async index(req, res) {
        
        const listaReceitas = await Receita.find();
        return res.json(listaReceitas);
    }
};