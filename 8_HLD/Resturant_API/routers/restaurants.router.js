const { Router } = require('express');
const { restaurantsController } = require('../controllers/restaurants.controller');

const restaurantsRouter = new Router();

restaurantsRouter.get('/', restaurantsController.getRestaurants); //
restaurantsRouter.get('/:id', restaurantsController.getRestaurant); // localhost:3000/api/orders/6
restaurantsRouter.post('/', restaurantsController.createRestaurant); //
restaurantsRouter.put('/:id', restaurantsController.updateRestaurant); //
restaurantsRouter.delete('/:id', restaurantsController.removeRestaurant); //

module.exports = { restaurantsRouter };
