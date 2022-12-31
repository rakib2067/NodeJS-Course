const config = require('config')
const morgan = require('morgan');
const express = require('express');
const server = express();

server.use(express.json());
server.use(morgan('tiny'));

//Configuration
console.log(`Application Name: ${config.get('name')}`)
console.log(`Mail Server: ${config.get('mail.host')}`)
console.log(`Mail Server Password: ${config.get('mail.password')}`)

//Base dir
server.get('/', (req, res) => res.send('Vividly API - To Track all your favourite movies.'));


module.exports = server;