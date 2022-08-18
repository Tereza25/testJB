const express = require('express');
const db = require ('./database/index');

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('Conexão com o banco feita com sucesso')
});

const app = express();

module.exports = app;