const User = require('../models/usuario');
const bcrypt = require('bcryptjs');

module.exports = {
    async index(req, res){

        const {nomeuser , password } = req.body;

        const user = await User.findOne({ nomeuser }).select('+password');

        if (!user)
            return res.status(400).send({error: 'User not found' });

        if (!await bcrypt.compare(password, user.password))
            return res.status(400).send({error: 'Invalid password'});
        
        res.send ({ user });

}
}