const express = require("express");
const router = express.Router();

const Product = require("../../models/Product.model");
const User = require("../../models/User.model")

const routeGuard = require('../../configs/route-guard.config');

// Show all the products

  router.get("/products", (req, res, next) => {
    Product.find()
        .then((productsFromDB) => {
          // console.log(`BE product.js LINE 23 =====`, productsFromDB)
            res.status(200).json(productsFromDB);
        })
        .catch((err) => console.log(err));
});


// Add the product to the shopping bag
router.post("/products/add-product", (req, res, next) => {
  const productInputInfo = req.body;
    Product.create(productInputInfo)
        .then((newlyCreatedProduct) => {
            res.status(200).json(newlyCreatedProduct);
        })
        .catch((err) => res.status(400).json(err));

  // const { size, color } = req.body

  // if (size === "" || color === "" ) {
  //   res.status(401).json({
  //     message: 'Please select color and size.'
  //   });
  //   return;
  // }
  // const itemAdded = new Product(req.body)
  
  // console.log('THIS IS SIZE.........................', itemAdded)

  // itemAdded.save()
  //   .then((currentProduct) => {
  //         res.status(200).json(currentProduct);
  //     })
  //     .catch((err) => console.log(err));
});

module.exports = router;
