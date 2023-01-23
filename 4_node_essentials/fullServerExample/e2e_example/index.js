const dotenv = require('dotenv');
const Path = require('path');
const http = require('http');

const config = require('./config');
const routes = require('./router');

dotenv.config({ path: Path.join(__dirname, './.env') });

(config(http.createServer(routes))).start();
