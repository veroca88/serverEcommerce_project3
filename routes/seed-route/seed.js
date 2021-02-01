
// const express = require("express");
// const router = express.Router();
// const Product = require("../../models/Product.model");
// const productArray = require("../../bin/seeds");
// // seed db
// router.get("/seed-library", async (req, res, next) => {
//     try {
//         await productArray.map((product) => {
//             Product.create(product);
//         });

//         res.status(200).json({ message: "DB has been seeded!!"});
//         // res.status(200).json(arrayOfProducts);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// module.exports = router;
require('dotenv').config()
const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();
const productArray = require("../../bin/seeds");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_SEED_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "seed";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);
         // Use the collection "people"
         const col = db.collection("Products");
         // Construct a document                                                                                                                                                              
         let listOfProducts =  productArray.map(product => 
          product
         )
            
         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertMany(listOfProducts);
         // Find one document
        //  const myDoc = await col.findOne();
         // Print to the console
        //  console.log(myDoc);
        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
run().catch(console.dir);

module.exports = router;