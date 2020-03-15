const express = require ('express');

const app = express();

app.get('/', (req,res) => {
    return res.send('helo world');
});

app.listen(3333);