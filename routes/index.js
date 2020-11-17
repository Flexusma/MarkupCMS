var express = require('express');
const {renderW} = require("../content/response/render_with_defaults");
const {SessionCheckNoBlock} = require("../content/authentication/middleware");
var router = express.Router();

/* GET home page. */
router.get('/', SessionCheckNoBlock, renderW, function(req, res, next) {


  //res.render('index', { title: 'Express' , logged_in: lgdi});

  req.renderW.render('index',{
    title: 'Express',
    hero_icon:process.env.MP_HERO_SYMBOL,
    hero_title:process.env.MP_HERO_TEXT
  });

});

module.exports = router;
