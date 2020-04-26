const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const shoppingCartSchema = new Schema(
  {
    items: [{
      item: {
        type: Schema.Types.ObjectId,
          ref: 'Product'
      },
      quantity: {
           type: Number, 
      required: true,
      default: 0  
      }
    }],
    total: { 
      type: Number
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
      // required: [true, 'You need an owner id'],
    }
  },
  {
    timestamps: true,
  },
);

module.exports = model('ShoppingCart', shoppingCartSchema);

// model link orders []
