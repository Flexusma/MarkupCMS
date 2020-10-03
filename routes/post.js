var express = require('express');
var router = express.Router();

/* GET posts. */
router.get('/get/:id', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/add', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/edit/:id', function(req, res, next) {
  res.send('respond with a resource');
});
router.delete('/delete', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/get', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
