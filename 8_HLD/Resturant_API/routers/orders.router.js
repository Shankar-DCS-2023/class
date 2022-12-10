const { Router } = require('express');
const { ordersController } = require('../controllers/orders.controller');

const ordersRouter = new Router();

ordersRouter.get('/', ordersController.getOrders); //
ordersRouter.get('/:id', ordersController.getOrder); // localhost:3000/api/orders/6
ordersRouter.post('/', ordersController.createOrder); //
ordersRouter.put('/:id', ordersController.updateOrder); //
ordersRouter.delete('/:id', ordersController.removeOrder); //

module.exports = { ordersRouter };
