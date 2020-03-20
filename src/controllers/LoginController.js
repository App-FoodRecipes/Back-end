const User = require('../models/usuario');
const bcrypt = require('bcryptjs');

module.exports = {
    async store(req, res){

        const { nomeuser , password} = req.body;
        
        const checkuser = await User.findOne({nomeuser: nomeuser});
        const checkpassword = await User.findOne({passwordhash: password})

        //const checkuser = await User.find( { ingredientes: ingredientes }, { nomeReceita: 1, status: 1 } )

        //bcrypt.compareSync(checkpassword, checkuser);

        if (checkuser && checkpassword){
            return res.status(200).send('Logado com sucesso');
        } else {
            return res.status(400).send('Usuario ou senha invalido');
        }  
    }
}