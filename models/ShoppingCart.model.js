const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const shoppingCartSchema = new Schema(
  {
    item: {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    },
    quantity: {
      type: Number, 
      required: true,
      default: 0
    },
    total: { 
      type: Number
    }
  },
  {
    timestamps: true,
  },
);

module.exports = model('ShoppingCart', shoppingCartSchema);
