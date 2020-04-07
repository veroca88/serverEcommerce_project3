const express = require('express');

const router = express.Router();
const routeGuard = require('../../configs/route-guard.config');

const User = require('../../models/User.model');

/* User profile page */
router.get('/api/profile', routeGuard, (req, res, next) => {
  User.findOne({_id: req.user._id})
  .then(currentUser => {
    console.log({currentUser})
    res.status(200).json({user: currentUser});
  })
  .catch(err => next(err))

});

router.post('/api/profile/update', routeGuard, (req, res, next) => {
  console.log(">>>>>>>>>>>>>>>>>> updating profile <<<<<<<<<<<<<<<<<<<<< ");
  const userInputInfo = req.body;
  
  // Prevent user to force empty input
  const {username, email} = req.body
  if (username === "" || email === "") {
    res.status(404).json({
      message: "Please fill up the forms."
    });
    return;
  }
  // Check if there are products in the shopping Cart
  // if (req.userShoppingCart) {
    
  // }

  // Prepare to log the action =======================
  let dt = new Date();
  let utcDate = dt.toUTCString();

  User.findByIdAndUpdate( req.user._id, { 
    $set: userInputInfo,
    $push: {logActions: {action: 'Profile update', date: utcDate}},
  }, {new:true})
  .then( updatedUser => {
    console.log({updatedUser});
    res.json('/api/profile');
  })
  .catch(err => next(err))
  
});

module.exports = router;
