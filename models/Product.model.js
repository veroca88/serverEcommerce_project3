const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    color: {
      type: [String],
      required: true,
      enum: ['natural', 'multicolor', 'black/red', 'natural/blue', 'black', 'lightblue', 'red/gree', 'orange/blue', 'orange', 'green', 'blue', 'red', 'beige', 'orange', 'blue/green', 'orange/yellow', 'pink', 'gray', 'brown', 'brown/beige', 'black/white', 'white/blue']
    },
    size: {
      type: [String],
      required: true,
      enum: ["XS", "S", "M", "XL", "XS/52", "S/54", "M/56", "XL/58", "35", "36", "37", "38", "39", "40", "41", "nosize"]
    },
    description: {
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
      enum: ['cotton', 'wool', 'cabuya', 'wood', 'seeds', 'cotton and wool', 'coconut', 'pineapple']
    },
    cost: {
      type: Number,
      required: true
    },
    inShopBag: {
      type: Boolean,
      required: true
    },
    image: {
      type: String,
      required: true
    }
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: [true, 'You need an owner id'],
    // }
    // userShoppingCart: {
    //   type: Schema.Types.ObjectId, //mongoose.Schema.ObjectId
    //   ref: "ShoppingCart",
    //   require: true
    // },
  },
  {
    timestamps: true,
  },
);

module.exports = model('Product', productSchema);