const env = require('dotenv').config().parsed;
const config = require('config');
const express = require('express');
const mongoose = require('mongoose');

const controller = require('./controllers/idea.ctrl');

module.exports = class Server {
  constructor (options = {}) {
    this.app = express();
    this.router = express.Router();
    this.config = { ...config, ...options };
    this.setup();
  }

  setup () {
    this.setHeaders();
    this.setRouter();
  }

  setRouter () {
    this.router.get('/idea/:id', controller.retrieve);
    this.router.get('/idea', controller.list);
    this.router.post('/idea', controller.create);
    this.router.put('/idea/:id', controller.update);
    this.router.delete('/idea/:id', controller.delete);
  }

  setHeaders () {
    this.app.use(
      (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept');
        res.set('Content-Type', 'application/json');
        next();
      });
  }

  listen () {
    const port = env.PORT || this.config.port;
    this.app.listen(port, () => console.log(`listening on port ${port}`));
  }

  async connectStorage () {
    try {
      await mongoose.connect(env.dbUrl || config.db.url, { useNewUrlParser: true });
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError (e) {
    console.log(e);
  }

  async start () {
    await this.connectStorage();
    await this.listen();
  }
};
