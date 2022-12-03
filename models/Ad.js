const mongoose = require('mongoose');

const AdSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  type: {
    type: String,
    default: 'lost',
    required: true
  },
  pet: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  photo: {
    type: String
  },
  phone: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  coords: {
    type: Object
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ad', AdSchema);
