const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333);

mongoose.connect('mongodb+srv://admin:admin@cluster0-ykbm6.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
