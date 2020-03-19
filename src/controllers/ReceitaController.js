const Receita = require('../models/receita');

module.exports = {
    store(req, res){

        const { nomeReceita , ingredientes, modoPreparo, infoNutri} = req.body;
        console.log(infoNutri)

        const receita = Receita.create({
            nomeReceita, 
            ingredientes,
            modoPreparo,
            infoNutri
        })

        return res.json(receita);
    }
}