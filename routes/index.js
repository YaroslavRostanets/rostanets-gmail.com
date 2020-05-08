var express = require('express');
var router = express.Router({strict: false});
const needs = require('./needs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = function (app) {
  app.use('/needs', needs);
  app.use('/', router);
};

