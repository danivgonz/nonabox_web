var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var appInsights = require('applicationinsights');

appInsights.setup('ec7c73e3-2b59-43ac-9fac-7978f199d821').start();

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.then('app/controllers')
.into(app);


module.exports = app;
