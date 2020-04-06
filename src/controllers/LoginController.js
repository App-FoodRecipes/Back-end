const User = require('../models/usuario');

module.exports = {
    async index(req, res){

        const { nomeuser , password} = req.body;
        
        const checkuser = await User.find({
            "nomeuser" : nomeuser
        },{
            "password": 1
        }
        );
        console.log({checkuser});
        if (password == checkuser){
            console.log("logado com sucesso")
        }
            return res.status(401).send('senha errada');
            


        //const verificar = bcrypt.compare(checkuser, password, function(err, res) {
            // res === true
        //});

        /** if (verificar){
            console.log(checkuser);
            return res.status(200).send('senha retornada');
        }else{
            return res.status(401).send('senha errada');
        }
    }**/
}
}