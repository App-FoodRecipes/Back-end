const { Schema, model} = require("mongoose");


const UserSchema = new Schema({
    nomeuser:{
        type: String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    }
}, {
    timestamps: true,
});

module.exports = model('user', UserSchema );