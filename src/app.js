const express = require('express');
const db = require ('./database/index');

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('Conexão com o banco feita com sucesso')
});

const app = express();

//rotas
const index = require('./routes/index');
const products = require('./routes/productRoutes');

app.use(express.json());

app.use('/', index);
app.use('/products', products);

module.exports = app;