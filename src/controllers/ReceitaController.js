const Receita = require('../models/receita');

module.exports = {
    store(req, res){

        const { nomeReceita , ingredientes, modoPreparo} = req.body;
        console.log(ingredientes)
        const receita = Receita.create({
            nomeReceita, 
            ingredientes,
            modoPreparo
        })

        return res.json(receita);
    }
}