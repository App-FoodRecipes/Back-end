const User = require('../models/usuario');
const bcrypt = require('bcryptjs');

module.exports = {
    async store(req, res){

        const { nomeuser , password} = req.body;
        try {
        const userExists = await User.findOne({nomeuser: nomeuser});

        if (userExists){
            return res.json("Usuario já cadastrado");
        } else {
            
            const user = User.create({
                nomeuser, 
                password
            })
            return res.status(200).send('usuario adicionado com sucesso');
        } 
        }catch (err) {
            return res.status(400).send({ error: 'Registration failed' });
        }  
    },
    async index(req, res) {
        
        const listaUsuario = await User.find();
        return res.json(listaUsuario);
    }
}