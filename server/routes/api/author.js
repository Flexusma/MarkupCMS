var express = require('express');
const {Author} = require("../../content/datatypes/author_type");
const { APIsessionChecker } = require('../../content/authentication/middleware');
const { Permission } = require('../../content/authentication/permissions');
const { Responses } = require('../../content/response/responses');
const { RespCode } = require('../../content/response/response_codes');
const { body, validationResult } = require('express-validator');
var Router = require('named-routes');
const {User} = require("../../content/datatypes/user_type");
var router = express.Router();


/* GET users listing. */
router.get('/id/:id(\\d)', function(req, res, next) {

    if(req.params.id!==undefined)

    res.send('respond with a resource');
});
router.get('/user/:id(\\d)', function(req, res, next) {

    if(req.params.id!==undefined)

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

        let name = req.body.name;
        let desc = req.body.description;
        let createUserID = req.body.create_user_id;
        let crt_user = req.session.user;

        console.log(name,desc,createUserID,crt_user);
        let author;
            if(createUserID!==undefined) {
                if (crt_user.id !== createUserID) {
                    if(!Permission.hasPermission(Permission.CREATE_AUTHOR_OTHER,crt_user.permission))
                        return res.json(Responses.respError(RespCode.NO_PERMISSION,"No permission to create author for different user then self"))
                }
                let other_user = await User.getByID(createUserID);
                if (other_user !== undefined && !(other_user instanceof Error)) {
                    //safety check
                    if (other_user.id === createUserID)
                        author = await Author.new(name, desc, createUserID);
                }else
                    return res.json(Responses.respError(RespCode.DOESNT_EXIST_REFERENCE,"No user with ID: "+createUserID))
            }else
                return res.json(Responses.respError(RespCode.MISSING_FIELD,"create_user_id field missing or empty"))
        console.log(author);
        if((author!==undefined)&&!(author instanceof Error)){
            return res.json(Responses.respOK(RespCode.OK, author));
        }else return res.json(Responses.respError(RespCode.AUTHOR_CREATION_FAILED,author));
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
