const { Schema, model } = require('mongoose');

const locationSchema = new Schema({ lng: { type: Number }, lat: { type: Number } });

const restaurantSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  location: [locationSchema],
  stars: { type: Number }
}, { collection: 'restaurant' });

module.exports = model('Restaurant', restaurantSchema);
