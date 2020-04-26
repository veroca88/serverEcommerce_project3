const express = require('express');
const router = express.Router();
const moment = require('moment');

const routeGuard = require('../../configs/route-guard.config');

const Product = require('../../models/Product.model');
const User = require('../../models/User.model');
const ShoppingCart = require('../../models/ShoppingCart.model');

router.get('/api/shopping-bag', routeGuard, (req, res, next) => {
    ShoppingCart.find({ owner: req.userId })
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
        res.json({ shopBag: currentShopBag,
        });
      })
      .catch(err => console.log(err));
  });




module.exports = router;