const log = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');


const Logger = require('./logger');
const logger = new Logger();

//Register listener
logger.on('messageLogged', (args) => {
    console.log('Listener on', args);
});

//Raise event
logger.emit('messageLogged', {id: 1, url: 'http://'});

logger.log('message');

/*
fs.readdir('./', function(err, files) {
    if(err) console.log('Error', err);
    else console.log('Result', files);
});
*/