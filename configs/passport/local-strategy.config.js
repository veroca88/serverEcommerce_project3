const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const bcryptjs = require('bcryptjs');

const User = require('../../models/User.model');

passport.use(
  'local',
  new LocalStrategy(
    {
      usernameField: 'username'
      // passReqToCallback: true // if we need to use request in the callback we can pass it like this
      // in that case the callback would look like: (req, email, password, next)
    },
    (username, password, next) => {
      User.findOne({ username })
        .then(userFromDB => {
          if (!userFromDB) {
            return next(null, false, { message: 'Incorrect username! 🛬' });
          }
          if (!bcryptjs.compareSync(password, userFromDB.passwordHash)) {
            return next(null, false, { message: 'Incorrect password! ❌' });
          }
          return next(null, userFromDB);
        })
        .catch(err => next(err));
    }
  )
);