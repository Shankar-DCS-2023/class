const { Schema, model } = require('mongoose');
const orderSchema = new Schema({
  id: { type: Number },
  price: { type: Number },
  dishId: { type: String },
  restaurantId: { type: Number }
}, { collection: 'order' });

module.exports = model('Order', orderSchema);
