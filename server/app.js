var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//router
var usersRouter = require('./routes/api/user');
var postRouter = require('./routes/api/post');
var commentRouter = require('./routes/api/comment');
var sessionRouter = require('./routes/api/session');
var authorRouter = require('./routes/api/author');
var imageRouter = require('./routes/api/image');
var Router = require('named-routes');
var cors = require('cors');
var router = new Router();
var fileUpload = require('express-fileupload');
var fs = require('fs');

const port = process.env.PORT || 80

const sessionStore = require("./content/authentication/session_utils");
let session = sessionStore.session;

if(process.env==undefined) throw new Error("No ENV loaded! / .env missing")

var app = express();

router.extendExpress(app);
router.registerAppHelpers(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(fileUpload({
    limits:{
        fieldSize: 67108864,
    },
    safeFileNames: true,
}));


//setup image save directory


exports.fileSaveDir = dir = './public/storage/images';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, {recursive: true});
}


app.use(cors({
    origin: [
        'http://localhost:8080',
        'https://localhost:8080'
    ],
    credentials: true,
    exposedHeaders: ['set-cookie']
}));

if(process.env.SESSION_SECRET ===undefined ||process.env.SESSION_SECRET=="") throw new Error("No secret in env provided!");

app.use(session({
    key: 'user_sid',
    store: sessionStore.sessionStore,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 6000000
    }
}));



app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
      res.clearCookie('user_sid');        
  }
  next();
});

let apidef ="/api";

//api router
app.use(apidef+'/user', usersRouter);
app.use(apidef+'/post', postRouter);
app.use(apidef+'/comment', commentRouter);
app.use(apidef+'/session', sessionRouter);
app.use(apidef+'/author',authorRouter);
app.use(apidef+'/image',imageRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //error hero information
    res.locals.hero_title=process.env.ERR_PG_TEXT
    res.locals.hero_icon=process.env.ERR_PG_SYMBOL

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port);

module.exports = app;


