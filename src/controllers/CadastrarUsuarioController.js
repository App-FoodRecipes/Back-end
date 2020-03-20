const User = require('../models/usuario');

module.exports = {
    store(req, res){

        const { nomeuser , password} = req.body;
        console.log(nomeuser, password)

        const user = User.create({
            nomeuser, 
            password
        })
        return res.json(nomeuser);
    }
}