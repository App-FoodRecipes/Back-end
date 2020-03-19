const Receita = require('../models/receita');

module.exports = {
    async index(req, res) {

        const { ingredientes } = req.body;
         
        // caso queira filtrar apenas o nome da receita usar essa consulta
        //const listaReceitas = await Receita.find( { ingredientes: ingredientes }, { nomeReceita: 1, status: 1 } )
        const listaReceitas = await Receita.find( { ingredientes: ingredientes } )
        return res.json(listaReceitas);
    }
};