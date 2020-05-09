require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

app.use(express.json());

app.use(routes);


//var swaggerUi = require('swagger-ui-express'),
//    swaggerDocument = require('./swagger.json');

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//app.use('/api/v1', routes);

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port);

mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, () => {
    console.log('Banco de Dados conectado');
});
