const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const bodyParser = require('body-parser');
const { PORT, DB_URI} = require('./config/environment');
const session = require('express-session');
const User = require('./models/user');
const flash = require('express-flash');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(DB_URI);
const methodOverride = require('method-override');
const morgan = require('morgan');

//////////////////layouts(express)/////

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));

///////////////static files//////////////
app.use(express.static(`${__dirname}/public`));

///////////////Middleware/////////////////

app.use(bodyParser.urlencoded({ extended: true})); //adds req.body

app.use(morgan('dev'));

app.use(methodOverride((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));



app.use(session({
  secret: 'hfeiq0hvnq0n',
  resave: false,
  saveUnintialized: false
}));

////////// check the session cookie for a user
app.use((req, res, next) => {
  if (!req.session.userId) return next();
  User
    .findById(req.session.userId)
    .then(user => {
    //we are logged in!
      res.locals.user = user; // res. locals is always passed to the view engine
      res.locals.isLoggedIn = true;

      next();
    });
});

app.use(flash());



//////////////Routes//////
const router = require('./config/routes');
app.use(router);


app.use((error, req, res, next) => {
  console.log(error);
  res.send(error);
  // if (error) {
  //   return res.render(`errors/${error.status}`, { error });
  // }
  // return next();
});

////////////////////listening/////////

app.listen(PORT, () => console.log(`Express is listening on ${PORT}`));
