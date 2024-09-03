const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String, 
    required: true
  },
  beds: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  amenities: {
    type: [String],
    default: []
  },
  photo: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
