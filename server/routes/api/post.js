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
router.get('/:id(\\d)', async function(req, res, next) {
  let post = await Post.getPost(req.params.id)
  console.log(req.params.id,post)
  if(!(post instanceof Error)){
      return res.json(Responses.respOK(RespCode.OK,post));
  }else return res.json(Responses.respError(RespCode.DOESNT_EXIST_REFERENCE,post));
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
    console.log(title+ " - "+crt_user.id);
    let author = await Author.getByUserID(crt_user.id);
    console.log(author)
    if(!(author instanceof Error)&&(author!==undefined)) {
       post = await Post.new(title, content, author.id);
    }else return res.json(Responses.respError(RespCode.USER_NO_AUTHOR,author+""));

    if(!(post instanceof Error)){
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
router.get('/',pagewise,async function(req, res, next) {

  let posts = await Post.getPagewise(req.pageData.page, req.pageData.count);

  if (!(posts instanceof Error) && posts !== undefined) {
    let pagecount = posts[posts.length-1].pagecount;
    posts = posts.slice(0,-1);
    console.log(posts);
    req.pageData.total_pages = pagecount;
    res.json(Responses.respPage(RespCode.OK, posts, req.pageData));
  }

});
module.exports = router;
