const LocalStorage = require('../data/LocalStorage');
const MongoStorage = require('../data/MongoStorage');

module.exports = class RestaurantsRepository {
  constructor () {
    if (process.env.DB_HOST && process.env.DB_USER && process.env.DB_PASS) {
      this.storage = new MongoStorage('restaurant');
    } else { this.storage = new LocalStorage('restaurants'); }
  }

  find () {
    return this.storage.find();
  }

  retrieve (id) {
    return this.storage.retrieve(id);
  }

  create (order) {
    return this.storage.create(order);
  }

  update (id, order) {
    return this.storage.update(id, order);
  }

  delete (id) {
    return this.storage.delete(id);
  }
};
