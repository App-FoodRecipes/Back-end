const { Schema, model} = require("mongoose");

const ReceitaSchema = new Schema({
    nomeReceita:{
        type: String,
        required: true,
    },
    ingredientes: [{
        type: Array,
        required: true,
    }],
    modoPreparo:{
        type:String,
        required: true,
    }
}, {
    timestamps: true,
});

module.exports = model('receita', ReceitaSchema);