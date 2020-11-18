var express = require('express');
const {Author} = require("../../content/datatypes/author_type");
const {Post} = require("../../content/datatypes/post_type");
const {Permission} = require("../../content/authentication/permissions");
const {APIsessionChecker} = require("../../content/authentication/middleware");
const { pagewise } = require('../../content/authentication/middleware');
const { User } = require('../../content/datatypes/user_type');
const { Responses } = require('../../content/response/responses');
const { RespCode } = require('../../content/response/response_codes');
const { body, validationResult } = require('express-validator');

var router = express.Router();

/* GET posts. */
router.get('/:id(\\d)', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', APIsessionChecker, [body('title').not().isEmpty(),body('content').not().isEmpty()],async function(req, res, next) {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json(Responses.respError(RespCode.POST_CREATION_FAILED,errors.array()));
  }
  console.log("Create new Post permission?: "+Permission.hasPermission(req.session.user.permission, Permission.CREATE_POST));
  if(Permission.hasPermission(req.session.user.permission, Permission.CREATE_POST)){

    let title = req.body.title;
    let content = req.body.content;
    let crt_user = req.session.user;

    console.log(title,content,crt_user);

    let post;
    console.log(title+ " - "+crt_user);
    let author = Author.getByID(crt_user.id);
    if(!(author instanceof Error)&&(author!==undefined)) {
       post = await Post.new(title, content, author.id);
    }else return res.json(Responses.respError(RespCode.USER_NO_AUTHOR,author+""));

    if(!(post instanceof Error)){
      post.content = null;
      return res.json(Responses.respOK(RespCode.OK, post));
    }else return res.json(Responses.respError(RespCode.POST_CREATION_FAILED,post));
  }else res.json(Responses.respError(RespCode.NO_PERMISSION));
});
router.patch('/:id', function(req, res, next) {
  res.send('respond with a resource');
});
router.delete('/:id', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/get',pagewise,async function(req, res, next) {

  let users = await User.getPagewise(req.pageData.page, req.pageData.count);

  if (!(users instanceof Error) && users !== undefined) {
    let pagecount = users[users.length-1].pagecount;
    req.pageData.total_pages = pagecount;
    res.json(Responses.respPage(RespCode.OK, users, req.pageData));
  }

});


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
