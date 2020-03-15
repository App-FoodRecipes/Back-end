const express = require ('express');
const mongoose = require ('mongoose');

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0-efgsc.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, () => {
    console.log('Banco de Dados conectado');
});

app.use(express.json());




app.get('/', (req,res) => {
    return res.send('helo world');
});

app.listen(3333);