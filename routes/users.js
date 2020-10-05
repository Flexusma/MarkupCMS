var express = require('express');
const { APIsessionChecker } = require('../content/authentication/middleware');
const { Permission } = require('../content/authentication/permissions');
const { User } = require('../content/datatypes/user_type');
const { Hash } = require('../content/encrypt/hash');
const { Responses } = require('../content/response/responses');
const { RespCode } = require('../content/response/response_codes');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/create', APIsessionChecker ,async function(req, res, next) {
  let username = req.headers.x_user;
  let email = req.headers.x_email;
  let permission = req.headers.x_permission;
  let pass = req.headers.x_pass;

  console.log(username,email,permission,pass);

    console.log("Create user permission?: "+Permission.hasPermission(req.session.permission, Permission.CREATE_USER));

  if(username===undefined) return res.json(Responses.respError(RespCode.UNAME_MISSING));
  if(pass===undefined) return res.json(Responses.respError(RespCode.PASS_MISSING));
  if(email===undefined) return res.json(Responses.respError(RespCode.EMAIL_MISSING));
  if(Permission.hasPermission(req.session.permission, Permission.CREATE_USER)){
    console.log(username+ " - "+pass);
      if(permission===undefined) permission=0;

    let user = await User.new(username,email,pass,permission);

    if(!(user instanceof Error)){
      user.pass = null;
      return res.json(Responses.respOK(RespCode.TEST_OK, user));
    }else return res.json(Responses.respError(RespCode.USER_CREATION_FAILED,user));
  }else res.json(Responses.respError(RespCode.NO_PERMISSION));
});

router.get('/delete', APIsessionChecker, async function(req, res, next){
  let user_id = req.query.user_id;
  let current_user_permission = req.session.permission;
  let current_user_id = req.session.user.id;

  if(Permission.hasPermission(current_user_permission,Permission.DELETE_USER)){

  }
  
});

module.exports = router;
