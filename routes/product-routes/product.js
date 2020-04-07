const express = require("express");
const router = express.Router();
const moment = require("moment");

const routeGuard = require("../../configs/route-guard.config");

const Product = require("../../models/Product.model");
const User = require("../../models/User.model");
const ShoppingCart = require("../../models/ShoppingCart.model");

// Show all the products

router.get("/api/products", (req, res, next) => {
  Product.find()
    .then(availableProducts => {
      res.json({ availableProducts });
    })
    .catch(err => console.log(`Err while displaying book input page: ${err}`));
});

// Show description of one product

router.get("/api/products/:id", (req, res, next) => {
  Product.findById(req.params.id)
    .then(detailProduct => {
      console.log(detailProduct);
      res.status(200).json({ Product: detailProduct });
    })
    .catch(err => console.log(err));
});

module.exports = router;
