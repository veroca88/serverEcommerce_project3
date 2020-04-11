
const express = require("express");
const router = express.Router();
const Product = require("../../models/Product.model");
const productArray = require("../../bin/seeds");
// seed db
router.get("/seed-library", async (req, res, next) => {
    try {
        await productArray.map((product) => {
            Product.create(product);
        });

        res.status(200).json({ message: "DB has been seeded"});
        // res.status(200).json(arrayOfProducts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;