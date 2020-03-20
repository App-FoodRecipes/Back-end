const User = require('../models/usuario');
const bcrypt = require('bcryptjs');

module.exports = {
    async store(req, res){

        const { nomeuser , password} = req.body;
        
        const userExists = await User.findOne({nomeuser: nomeuser});

        if (userExists){
            return res.json("Usuario já cadastrado");
        } else {

        var passwordhash = await bcrypt.hashSync(password, 8);

        const user = User.create({
            nomeuser, 
            passwordhash
        })
        return res.status(200).send('usuario adicionado com sucesso');
        }  
    }
}