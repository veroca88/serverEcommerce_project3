require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const cors         = require('cors')


const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// require database configuration
require('./configs/db.configs');

//Cross-Origin Resource Sharing
app.use(cors({
  origin: [process.env.FRONTEND_POINT], //this point is react is going to run and goes in env file too
  credentials: true //this need to setup on the frontend as well
                    //in axios withCredentials: true
}))


// Middleware Setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// make sure express- session is used before the passport
require('./configs/session.config')(app);

require('./configs/passport/passport.config.js')(app);

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';


app.use('/', require('./routes/auth-routes/authentication'));

module.exports = app;
