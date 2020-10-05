var express = require('express');
const { pagewise } = require('../content/authentication/middleware');
const { User } = require('../content/datatypes/user_type');
const { Responses } = require('../content/response/responses');
const { RespCode } = require('../content/response/response_codes');
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
router.get('/get', pagewise, async function(req, res, next) {
  
  let users = await User.getPagewise(req.pageData.page,req.pageData.count);

  if (!(users instanceof Error) && users != undefined){
    let rowcount = users[Object.keys(users).length-1].count;
    req.pageData.total_pages = rowcount;
    res.json(Responses.respPage(RespCode.OK,users,req.pageData));
  }


});

module.exports = router;
