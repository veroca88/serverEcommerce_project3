const express = require('express');

const router = express.Router();
const routeGuard = require('../../configs/route-guard.config');

const User = require('../../models/User.model');

/* User profile page */
router.get('/api/profile', routeGuard, (req, res) => {
  User.findOne({_id: req.user._id})
  .then(currentUser => {
    console.log(`BE user.js the current user is ${currentUser}`)
    res.status(200).json({user: currentUser});
  })
  .catch(err => next(err))

});


router.post('/api/profile/upload', routeGuard, (req, res, next) => {
  console.log(">>>>>>>>>>>>>>>>>> updating profile <<<<<<<<<<<<<<<<<<<<< ", req.user);
  // const userInputInfo = req.body;
  
  // Prevent user to force empty input
  const {username, email} = req.body
  if (username === "" || email === "") {
    res.status(404).json({
      message: "Please fill up the forms."
    });
    return;
  }
  //Instead of req.params i changed to user._id due to 
  User.findByIdAndUpdate( req.user._id, req.body, {new:true})
  .then( updatedUser => {
    res.status(200).json({user: updatedUser});
  })
  .catch(err => next(err))
  
});

module.exports = router;
