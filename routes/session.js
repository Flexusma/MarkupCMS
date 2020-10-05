var express = require('express');
const { APIsessionChecker, APINOTsessionChecker } = require('../content/authentication/middleware');
const { User } = require('../content/datatypes/user_type');
const { Hash } = require('../content/encrypt/hash');
const { Responses } = require('../content/response/responses');
const { RespCode } = require('../content/response/response_codes');
var router = express.Router();

/* GET users listing. */
router.get('/create', APINOTsessionChecker ,async function(req, res, next) {
    let username = req.headers.x_user;
    let pass = req.headers.x_pass;

    if(username===undefined) return res.json(Responses.respError(RespCode.UNAME_MISSING));
    if(pass===undefined) return res.json(Responses.respError(RespCode.PASS_MISSING));

    console.log(username+ " - "+pass);
    let pass_hash = Hash.hash512Salt(pass);
    let user = await User.getByUsername(username);

    if(user!=undefined && !(user instanceof Error)){
        if(user.pass===pass_hash){
            user.pass = null;
            req.session.user = user;
            req.session.permission = user.permission;
            return res.json(Responses.respOK(RespCode.OK,[req.session.user, req.session.permission, req.session.id]));
        }else return res.json(Responses.respError(RespCode.UNAME_OR_PASS_WRONG));
    }else return res.json(Responses.respError(RespCode.UNAME_OR_PASS_WRONG));
    
});

router.get('/destroy', APIsessionChecker ,function(req, res, next) {
  req.session.destroy(() => {
    res.json(Responses.respOK(RespCode.OK,["You are now logged out"]));
  });
});

module.exports = router;
