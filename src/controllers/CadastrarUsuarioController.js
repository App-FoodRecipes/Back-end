const User = require('../models/usuario');
const bcrypt = require('bcryptjs');

module.exports = {
    async store(req, res){

        const { nomeuser , password} = req.body;
        
        var passwordhash = await bcrypt.hashSync(password, 8);

        const user = User.create({
            nomeuser, 
            passwordhash
        })
        return res.status(200).send('usuario adicionado com sucesso');
    }
}