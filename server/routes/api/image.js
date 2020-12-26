
var express = require('express');
const { APIsessionChecker, APINOTsessionChecker } = require('../../content/authentication/middleware');
const { User } = require('../../content/datatypes/user_type');
const { Hash } = require('../../content/encrypt/hash');
const { Responses } = require('../../content/response/responses');
const { RespCode } = require('../../content/response/response_codes');
const {Image} = require('../../content/datatypes/image_type');
const app = require('../../app');
const url =require("express/lib/response");
const fs = require("fs");
var router = express.Router();

/* GET users listing. */


router.post('/', APIsessionChecker , async function(req, res, next) {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.json(Responses.respError(RespCode.NO_POST_DATA,"File length was zero"));
    }
    console.log(req.files);
    let uploadedFile = req.files.file;
    var n = uploadedFile.mimetype.lastIndexOf('/');
    var ending = uploadedFile.mimetype.substring(n + 1);

    console.log(app.fileSaveDir);

    let DBimg = await Image.new(uploadedFile.name,ending);

    console.log(DBimg);

    if (!fs.existsSync(app.fileSaveDir)){
        fs.mkdirSync(app.fileSaveDir, {recursive: true});
    }

    let err =await uploadedFile.mv(app.fileSaveDir+"/" + DBimg.name);
    if (err)
        return res.json(Responses.respError(RespCode.IMAGE_SAVE_ERROR, err));

    let arr = app.fileSaveDir.split("/");
    arr.shift();
    arr.shift();


    const host = req.protocol+"://"+req.hostname+"/"+arr.join("/");
    return res.json({
        location: host+"/" + DBimg.name,
        image: DBimg,
    });


});

router.get('/:id', APIsessionChecker ,function(req, res, next) {
    res.json(Responses.respOK(RespCode.OK,req.session.user));
});

module.exports = router;
