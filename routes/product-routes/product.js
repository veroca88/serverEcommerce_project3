const express = require("express");
const router = express.Router();

const Product = require("../../models/Product.model");


// Show all the products

  router.get("/products", (req, res, next) => {
    Product.find()
        .then((productsFromDB) => {
            res.status(200).json(productsFromDB);
            console.log(`++++++++++++++++++++++++++++++++`, productsFromDB)
        })
        .catch((err) => req.status(500).json(err));
});


// Show description of one product

router.get("/products/:productId", (req, res, next) => {
  Product.findById(req.params.productId)
      .then((productFromDB) => {
          res.status(200).json(productFromDB);
      })
      .catch((err) => req.status(400).json(err));
});

// Delete Product
router.delete("/products/:productId", (req, res, next) => {
  Product.findByIdAndDelete(req.params.productId)
      .then(() => {
          res.status(200).json({
              message: "Successful Deletion of Product",
          });
      })
      .catch((err) => req.status(400).json(err));
});



module.exports = router;
