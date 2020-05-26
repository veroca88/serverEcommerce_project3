const express = require('express');
const router = express.Router();
const routeGuard = require('../../configs/route-guard.config');

const User = require('../../models/User.model');

// User profile page 
router.get('/api/profile', routeGuard, (req, res) => { console.log(`BE user.js the req.user is................................... ${req.user}`)
  User.findById({_id: req.user._id})
  .then(currentUser => {
    res.status(200).json({user: currentUser});
  })
  .catch(err => next(err))
  
});

// Update profile page
router.post('/api/profile/upload', routeGuard, (req, res, next) => {
  const {username, email} = req.body
  if (username === "" || email === "") {
    res.status(404).json({
      message: "Please fill up the forms."
    });
    return;
  }
  //Instead of req.params it changed to user._id ***
  User.findByIdAndUpdate( req.user._id, req.body, {new:true})
  .then( updatedUser => {
    res.status(200).json({user: updatedUser});
  })
  .catch(err => next(err))
  
});

module.exports = router;
