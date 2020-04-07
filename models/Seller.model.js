// const mongoose = require('mongoose');

// const { Schema, model } = mongoose;

// const sellerSchema = new Schema(
//   {
//     username: {
//       type: String,
//       trim: true,
//       required: [true, 'Username must be unique!'],
//       unique: true,
//     },
//     passwordHash: {
//       type: String,

//       required: [true, 'Password is required.']
//     },
//     email: {
//       type: String,
//       required: [true, 'This email already in use. 😢'],
//       unique: true,
//       match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
//       lowercase: true,
//       trim: true
//     },
//     profilePic: {
//       type: String,
//       default: "user-default.png"
//   },
//   role: {
//     type: String,
//     default: "seller" //enum
//   },
  
//   },
//   {
//     timestamps: true,
//   }

// );

// module.exports = model('Seller', sellerSchema);

//if statement