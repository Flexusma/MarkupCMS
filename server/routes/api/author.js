var express = require('express');
const {Author} = require("../../content/datatypes/author_type");
const { APIsessionChecker } = require('../../content/authentication/middleware');
const { Permission } = require('../../content/authentication/permissions');
const { Responses } = require('../../content/response/responses');
const { RespCode } = require('../../content/response/response_codes');
const { body, validationResult } = require('express-validator');
var Router = require('named-routes');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', APIsessionChecker, [body('username').isAscii(),body('description').not().isEmpty()],async function(req, res, next) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json(Responses.respError(RespCode.POST_CREATION_FAILED,errors.array()));
    }
    console.log(req.session.user);
    console.log("Create author permission?"+req.session.user.permission+" "+Permission.CREATE_AUTHOR+" : "+Permission.hasPermission(req.session.user.permission, Permission.CREATE_AUTHOR));
    if(Permission.hasPermission(req.session.user.permission, Permission.CREATE_AUTHOR)){

        let username = req.body.username;
        let desc = req.body.description;
        let crt_user = req.session.user;

        console.log(username,desc,crt_user);
        let author;
        if(crt_user.id !== undefined)
             author = await Author.new(username,desc,crt_user.id);
        console.log(author);
        if(!(author instanceof Error)&&(author!==undefined)){
            return res.json(Responses.respOK(RespCode.OK, author));
        }else return res.json(Responses.respError(RespCode.USER_CREATION_FAILED,author));
    }else res.json(Responses.respError(RespCode.NO_PERMISSION));
});

router.delete('/', APIsessionChecker, async function(req, res, next){
    let user_id = req.query.user_id;
    let current_user_permission = req.session.permission;
    let current_user_id = req.session.user.id;

    if(Permission.hasPermission(current_user_permission,Permission.DELETE_USER)){

    }

});

module.exports = router;
