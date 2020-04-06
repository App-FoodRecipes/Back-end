const Receita = require('../models/receita');

module.exports = {
    async index(req, res) {
        
        const listaReceitas = await Receita.find();
        return res.json(listaReceitas);
    },
    async store(req, res){

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
};