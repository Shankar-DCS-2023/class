const http = require('http');
const config = require('./config');
const routes = require('./router');

const server = config(http.createServer(routes));

server.start();
