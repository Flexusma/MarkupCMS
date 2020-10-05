var express = require('express');
const {APIsessionChecker} = require("../content/authentication/middleware");
var router = express.Router();

/* GET comments. */
router.get('/', APIsessionChecker, function(req, res, next) {

  res.json('api verfifcation worked');
});

module.exports = router;
