const Receita = require('../models/receita');

module.exports = {
    async index(req, res) {

        const { ingredientes } = req.body;

        const listaReceitas = await Receita.find( { ingredientes: { $all: ingredientes } } )
        return res.json(listaReceitas);
    }
};