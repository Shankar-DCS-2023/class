require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

const { usersRouter } = require('./routers/users.router');
const { ordersRouter } = require('./routers/orders.router');
const { restaurantsRouter } = require('./routers/restaurants.router');

app.use('/users', usersRouter);
app.use('/restaurants', restaurantsRouter);
app.use('/orders', ordersRouter);

app.listen(port, () => console.log(`Express server is running on port ${port}`));
