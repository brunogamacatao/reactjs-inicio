'use strict';

// Constantes
const PORTA_DO_CLIENTE  = 3000;
const PORTA_DO_SERVIDOR = 9000;

// Dependências
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./config/webpack.dev');

// Configuração do webpack 
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(PORTA_DO_CLIENTE, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`Listening on http://localhost:${PORTA_DO_CLIENTE}`);
});

// Iniciando o servidor
const express = require('express');

var app = express();

// Futuramente poderão ser adicionadas novas rotas e camadas no middleware
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(PORTA_DO_SERVIDOR, function() {
  console.log(`Servidor Rest ouvindo na porta ${PORTA_DO_SERVIDOR}`);
  console.log(`URL base Rest http://localhost:${PORTA_DO_SERVIDOR}`);
});
