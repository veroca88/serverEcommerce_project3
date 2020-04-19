const express = require("express");
const router = express.Router();

const Product = require("../../models/Product.model");


// Show all the products

  router.get("/products", (req, res, next) => {
    Product.find()
        .then((productsFromDB) => {
            res.status(200).json(productsFromDB);
            console.log(`BE product.js LINE 13 ++++++++++++++++++++++++++++++++`, productsFromDB)
        })
        .catch((err) => console.log(err));
});


// Show description of one product

router.get("/products/:productId", (req, res, next) => {
  Product.findById(req.params.productId)
      .then((productFromDB) => {
          res.status(200).json(productFromDB);
      })
      .catch((err) => console.log(err));
});

// Delete Product
router.delete("/products/:productId", (req, res, next) => {
  Product.findByIdAndDelete(req.params.productId)
      .then(() => {
          res.status(200).json({
              message: "Successful Deletion of Product",
          });
      })
      .catch((err) => console.log(err));
});



module.exports = router;
