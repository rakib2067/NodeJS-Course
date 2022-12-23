const EventEmitter = require('events');

var loggerUrl = "http://mylogger.io/log";

class Logger extends EventEmitter{
    log(message, args) {
        //Send Post request to logger
        console.log(message)
    
        //raise event
        this.emit('messageLogged', args);
    }    
}

module.exports = Logger;