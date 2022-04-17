var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose=require('mongoose');
require('./components/users/model');
require('./components/categories/model');
require('./components/products/model');

require("dotenv").config();

mongoose.connect('mongodb+srv://lazyer93:helion210gran799@cluster0.71rke.mongodb.net/Ingredient?retryWrites=true&w=majority', {  
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
  .catch(err => console.log('>>>>>>>>> DB Error: ', err));

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/main', productsRouter);

module.exports = app;
