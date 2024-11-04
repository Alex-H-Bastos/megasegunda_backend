console.log("ahaha");

const express = require('express');
const app = express();

//app.Method('rota/caminho', (req, res) => {})
app.get('/users', (req, res) => {
    res.send('Rota para retornar usuarios');
});

const Port = 3000;

app.listen(Port, () => {
    console.log(`servidor web na porta ${Port}`);
});