var express = require('express');
var router = express.Router();
var Group = require('../models/group');

/* GET home page. */
router.get('/', function(req, res, next) {
  Group.findOne({

  });
  res.render('index', { title: 'Express' }); // renders the view (index page)
});

module.exports = router;
