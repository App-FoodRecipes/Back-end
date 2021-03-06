const { Schema, model} = require("mongoose");
const bcrypt = require('bcryptjs');


const UserSchema = new Schema({
    nomeuser:{
        type: String,
        required: true,
    },
    password:{
        type:String,
        required: true,
        select: false,
    }
}, {
    timestamps: true,
});

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

module.exports = model('user', UserSchema );