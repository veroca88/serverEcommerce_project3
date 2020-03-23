const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, 'Username must be unique!'],
      unique: true,
    },
    passwordHash: {
      type: String,
    },
    email: {
      type: String,
      required: [true, 'This email already in use. 😢'],
      unique: true,
    },
    profilePicUrl: {
      type: String,
      default:
        'https://res.cloudinary.com/dpdnwaamk/image/upload/v1584649173/user-default_kjoqpi.png',
    },
    // Log of Delete and Update actions of the user
    logActions: {
      type: Array,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = model('User', userSchema);