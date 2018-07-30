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




app.listen(PORT, () => console.log(`Express is listening on ${PORT}`));
