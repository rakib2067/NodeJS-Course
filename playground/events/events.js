const EventEmitter = require('events');
const Logger = require('./logger');


let logger = new Logger();
logger.on('messageLogged',(args)=>{
    console.log(`Message Logged by ${args.username}`);
});
logger.log('Hello world', {id: 1, username:'Rakib'});
