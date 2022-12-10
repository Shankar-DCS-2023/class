const OrdersRepository = require('../repositories/Orders.repository');
const orderRepository = new OrdersRepository();

exports.ordersController = {
  async getOrders (req, res) {
    const result = {
      status: 200,
      message: '',
      data: await orderRepository.find()
    };

    res.status(result.status);
    res.json(result.message || result.data);
  },

  async getOrder (req, res) {
    const { id } = req.params;
    const result = {
      status: 200,
      message: '',
      data: await orderRepository.retrieve(id)
    };

    res.status(result.status);
    res.json(result.message || result.data);
  },

  async createOrder (req, res) {
    const { body: order } = req;
    const result = {
      status: 200,
      message: '',
      data: await orderRepository.create(order)
    };

    res.status(result.status);
    res.json(result.message || result.data);
  },

  async updateOrder (req, res) {
    const { body: order, params: { id } } = req;
    const result = {
      status: 200,
      message: '',
      data: await orderRepository.update(id, order)
    };

    res.status(result.status);
    res.json(result.message || result.data);
  },
  async removeOrder (req, res) {
    const { id } = req.params;
    const result = {
      status: 200,
      message: '',
      data: await orderRepository.delete(id)
    };

    res.status(result.status);
    res.json(result.message || result.data);
  }

};
