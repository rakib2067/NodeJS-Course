const express = require('express');
const server = express();

server.use(express.json());

//Base dir
server.get('/', (req, res) => res.send('Vividly API - To Track all your favourite movies.'))


module.exports = server;