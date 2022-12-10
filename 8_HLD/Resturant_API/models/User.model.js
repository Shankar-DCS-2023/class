const { Schema, model } = require('mongoose');
const userSchema = new Schema({
  id: { type: Number, index: 1 },
  name: { type: String, required: true, default: 'John Duo' },
  username: { type: String },
  email: { type: String },
  address: { street: String, suites: String, city: String, zipcode: String, geo: { lat: Number, lng: Number } },
  age: Number,
  active: Boolean,
  website: String,
  phone: [String],
  type: { type: String, enum: ['User', 'Admin'] }
}, { collection: 'user' });

module.exports = model('User', userSchema);
