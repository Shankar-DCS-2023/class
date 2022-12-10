const RestaurantsRepository = require('../repositories/Restaurants.repository');
const restaurantsRepository = new RestaurantsRepository();

exports.restaurantsController = {
  async getRestaurants (req, res) {
    const result = {
      status: 200,
      message: '',
      data: await restaurantsRepository.find()
    };

    res.status(result.status);
    res.json(result.message || result.data);
  },

  async getRestaurant (req, res) {
    const { id } = req.params;
    const result = {
      status: 200,
      message: '',
      data: await restaurantsRepository.retrieve(id)
    };

    res.status(result.status);
    res.json(result.message || result.data);
  },

  async createRestaurant (req, res) {
    const { body: order } = req;
    const result = {
      status: 200,
      message: '',
      data: await restaurantsRepository.create(order)
    };

    res.status(result.status);
    res.json(result.message || result.data);
  },

  async updateRestaurant (req, res) {
    const { body: order, params: { id } } = req;
    const result = {
      status: 200,
      message: '',
      data: await restaurantsRepository.update(id, order)
    };

    res.status(result.status);
    res.json(result.message || result.data);
  },
  async removeRestaurant (req, res) {
    const { id } = req.params;
    const result = {
      status: 200,
      message: '',
      data: await restaurantsRepository.delete(id)
    };

    res.status(result.status);
    res.json(result.message || result.data);
  }

};
