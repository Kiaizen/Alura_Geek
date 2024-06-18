const path = require('path');
const jsonServer = require('json-server');
const express = require('express');
const app = express();

// Middlewares do json-server
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Usar middlewares do json-server
app.use(middlewares);

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Usar o router do json-server
app.use('/api', router);

// Iniciar o servidor
app.listen(3000, () => {
  console.log('JSON Server is running');
});
