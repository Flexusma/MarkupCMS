var express = require('express');
var router = express.Router();

/* GET posts. */
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', APIsessionChecker, function(req, res, next) {

  res.send('respond with a resource');
});
router.patch('/:id', function(req, res, next) {
  res.send('respond with a resource');
});
router.delete('/:id', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
