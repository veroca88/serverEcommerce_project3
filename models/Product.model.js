const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      enum: ['upper', 'bottom', 'accessory']
    },
    material: {
      type: String,
      required: true,
      enum: ['cotton', 'wood', 'cabuya', 'seeds', 'cotton and wood', 'coconut', 'pineapple']
    },
    cost: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  },
);

module.exports = model('Product', productSchema);