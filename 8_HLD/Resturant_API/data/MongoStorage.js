const { EventEmitter } = require('events');
const mongoose = require('mongoose');
const Path = require('path');

module.exports = class MongoStorage extends EventEmitter {
  constructor (entity) {
    super();

    this.entityName = entity.charAt(0).toUpperCase() + entity.slice(1);
    this.Model = require(Path.join(__dirname, `../models/${this.entityName}.model.js`));
    this.connect();
  }

  connect () {
    const connectionUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;
    mongoose
      .connect(connectionUrl)
      .then(() => console.log(`connected to ${this.entityName} collection`))
      .catch(err => console.log(`connection error: ${err}`));
  }

  find () {
    return this.Model.find({});
  }

  retrieve (id) {
    return this.Model.find({ id });
  }

  create (data) {
    const entity = new this.Model(data);
    entity.save();
  }

  delete (id) {
    return this.Model.deleteOne({ id });
  }

  update (id, data) {
    return this.Model.updateOne({ id }, data);
  }
};
