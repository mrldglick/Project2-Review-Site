const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const bodyParser = require('body-parser');
const { PORT, DB_URI} = require('./config/enviroment');
const session = require('express-session');
// const User = require('./models/user');
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







//////////////Routes//////
const router = require('./config/routes');
app.use(router);


app.use((error, req, res, next) => {
  if (error) {
    return res.render(`errors/${error.status}`, { error });
  }
  return next();
});

////////////////////listening/////////

app.listen(PORT, () => console.log(`Express is listening on ${PORT}`));
