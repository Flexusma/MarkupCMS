var express = require('express');
const {SessionCheckNoBlock} = require("../content/authentication/middleware");
var router = express.Router();

/* GET home page. */
router.get('/', SessionCheckNoBlock, function(req, res, next) {

  let lgdi = req.logged_in;

  res.render('index', { title: 'Express' , logged_in: lgdi});
});

module.exports = router;
