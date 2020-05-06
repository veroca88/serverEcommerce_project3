const express = require('express');
const router = express.Router();
const moment = require('moment');

const routeGuard = require('../../configs/route-guard.config');

const Product = require('../../models/Product.model');
const User = require('../../models/User.model');
const ShoppingCart = require('../../models/ShoppingCart.model');

router.post('/api/shopping-bag',  (req,res,next) => {
  const { orderItem } = req.body
  console.log('shopping.js be line 13333333333333333333', req.body)

  ShoppingCart.findByIdAndUpdate(req.user.userShoppingCart, {
      $push: {items: {item:orderItem, quantity: 1}}, $set:  {date: Date.now()}, $inc: {total: orderItem.cost}
    }, {new: true})
    .then(currentItem => {
      res.status(200).json(currentItem)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err)})




//   console.log('REQ', req.body)
//   const { orderItem } = req.body;
//   try {
//   const call = async () => await ShoppingCart.findByIdAndUpdate(req.user.userShoppingCart, {
//   $push: {items: {item:orderItem, quantity: 1 }}, $set:  {date: Date.now()}, $inc: {total: orderItem.cost}
// }, {new: true})
//   const cart = call();
// console.log('CART', cart)
//   res.status(200).json(cart);
// } catch(err) {
//   console.log(err);
//   res.status(500).json(err)
// }
})


router.get('/api/shopping-bag/:userId', routeGuard, (req, res, next) => {
    ShoppingCart.find({ owner: req.params.userId })
    console.log('OWNER', owner)
      .then(currentShopBag => {
        console.log({
          currentShopBag,
        });
        if (!currentShopBag) {
          res.json({message: 'There is no Account.', 
        });
        console.log('There is no Account.')
          return;
        }
        res.json({ shoppingBag: currentShopBag,
        });
      })
      .catch(err => console.log(err));
  });



module.exports = router;
