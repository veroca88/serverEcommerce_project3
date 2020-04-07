const express = require('express');
const router = express.Router();
const moment = require('moment');

const routeGuard = require('../../configs/route-guard.config');

const Product = require('../../models/Product.model');
const User = require('../../models/User.model');
const ShoppingCart = require('../../models/ShoppingCart.model');

router.get('/api/shopping', routeGuard, (req, res, next) => {
  ShoppingCart.find({
    owner: req.user._id
  })
  .then(currentItems => {
    console.log({ currentItems });
    if (!currentItems) {
      res.json({
        errorMessage: 'Your shopping bag is empty.',
      });
      return;
    }

  //Looking for all products of the logged user
  Product.find({
      owner: req.user._id
    })
    .then(currentProducts => {
      console.log({ currentProducts});
      if (!currentProducts) {
        res.status(200).json({
          product: "Your shopping bag is empty.",
          Message: "Your shopping bag is empty."
        });
        return;
      }
      res.status(200).json({
        product: currentProducts
      });
    })
    .catch(err => console.log(err))
  })
});


router.get('/api/overview/json', routeGuard, (req, res, next) => {
  ShoppingCart.find({
      owner: req.user._id
    })
    .then(currentItems => {
      console.log({
        currentItems
      });
      let balance = currentItems.map(obj => obj.quantity);
      let totalBalance = balance.reduce((acc, val) => {
        return acc + val;
      });

      if (!currentItems) {
        res.json({
          errorMessage: 'Your shopping bag is empty.',
        });
        return;
      }
      Product.find({
          owner: req.user._id
        })
        .then(currentProducts => {
          // console.log({ currentProducts });
          if (!currentProducts) {
            res.status(200).json({
              orderValue: totalBalance,
              errorMessage: 'Your shopping bag is empty.',
            });
            return;
          }
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});


//Looking for all the products of the logged user

router.get('/api/shopping/json', routeGuard, (req, res, next) => {

  ShoppingCart.find({
      owner: req.user._id
    })
    .then(currentProducts => {
      //console.log({ currentTransaction });
      if (!currentProducts) {
        res.status(200).json({
          errorMessage: "Your shopping bag is empty."
        })
        return;
      }
    })
    .catch(err => console.log(err))
});



// Setup Todays date to defaut when adding products to shopping bag

// router.get('/api/shooping/add-product', routeGuard, (req, res, next) => {
//   const today = moment(new Date()).format('YYYY-MM-DD')
//   console.log(today)
//   ShoppingCart.find({
//       owner: req.user._id
//     })
//     .then(currentProducts => {
//       //Checking if the user has an Account
//       if (currentProducts[0] === undefined) {
//         res.status(200).json({
//           message: "Your shopping bag is empty.",
//           today
//         })
//         return;
//       }
//       res.render({
//         product: currentProducts,
//         today
//       })
//     })
//     .catch(err => next(err))
// })

// //

// router.post('/api/shopping/:id/add', routeGuard, (req, res, next) => {

//   const { newItem } = req.body;

//   Product.findOne({
//       _id: req.params.id
//     })
//     .then(currentItem => {
//       currentItem
//         .then(updatedTransaction => {
//           // console.log(updatedTransaction)
//           //Update the Account Balance
//           ShoppingCart.findOne({
//               _id: updated.account
//             })
//             .then(currentAccount => {
//               let balance = Number(currentAccount.accBalance)
//               // console.log(currentAccount);
//               // console.log(`    Amount: ------> ${amount}`)
//               // console.log(`diffAmount: ------> ${diffAmount}`);
//               // console.log(`  diffType: ------> ${diffType}`);
//               // console.log(`   balance: ------> ${balance}`);
//               // console.log(`      type: ------> ${updatedTransaction.type}`);
//               if (diffAmount !== 0 && diffType === false) {
//                 if (updatedTransaction.type === 'debit') {
//                   balance = balance + diffAmount;
//                 } else {
//                   balance = balance - diffAmount;
//                 }
//               } else if (diffAmount === 0 && diffType === true) {
//                 if (updatedTransaction.type === 'debit') {
//                   balance = balance - (amount * 2);
//                 } else {
//                   balance = balance + (amount * 2);
//                 }
//               } else if (diffAmount !== 0 && diffType === true) {
//                 if (updatedTransaction.type === 'debit') {
//                   if (diffAmount < 0) balance = -(Number(amount) + Number(diffAmount)) + Number(balance) - Number(amount);
//                   if (diffAmount > 0) balance = -(Number(diffAmount) + Number(amount)) + Number(balance) - Number(amount);
//                 } else {
//                   if (diffAmount < 0) balance = Number(balance) + (Number(diffAmount) + Number(amount)) + Number(amount);
//                   if (diffAmount > 0) balance = Number(balance) + Number(diffAmount) + Number(amount) + Number(amount);
//                 }
//               }
//               // console.log({the_balance: balance});
//               currentAccount.accBalance = balance;
//               currentAccount.save()
//                 .then(result => {
//                   // console.log(result)
//                   res.redirect('/wallet')
//                 }).catch(err => console.log(err))
//             }).catch(err => console.log(err))
//         }).catch(err => console.log(err))
//     }).catch(err => console.log(err))
// });




// //   // Find the transaction we want to delete and prepare the data to modify the Account Balance

// router.post('/api/shopping/:id/delete', routeGuard, (req, res, next) => {
//   ShoppingCart.findOne({
//       _id: req.params.id
//     })
//     .then(item => {
//       Product.findOne({
//           _id: transaction.account
//         })
//         .then(currentAccount => {
//           console.log(currentAccount);
//           let balance = currentAccount.accBalance
//           if (transaction.type === 'debit') {
//             balance = balance + transaction.amount;
//           } else {
//             balance = balance - transaction.amount;
//           }
//           currentAccount.accBalance = balance;
//           currentAccount.save()
//         })
//         .then(result => {
//           //Finally delete the Transaction
//           Transaction.findByIdAndRemove(req.params.id)
//             .then(() => res.redirect('/wallet'))
//         })
//         .catch(err => console.log(err));
//     })
// });

module.exports = router;