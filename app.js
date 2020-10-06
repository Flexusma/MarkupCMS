var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postRouter = require('./routes/post');
var commentRouter = require('./routes/comment');
var sessionRouter = require('./routes/session');
const sessionStore = require("./content/authentication/session_utils");
const { Post } = require('./content/datatypes/post_type');
let session = sessionStore.session;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    key: 'user_sid',
    secret: process.env.SESSION_SECRET,
    store: sessionStore.sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000
    }
}));



app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
      res.clearCookie('user_sid');        
  }
  next();
});

let apidef ="/api";

app.use('/', indexRouter);
app.use(apidef+'/users', usersRouter);
app.use(apidef+'/post', postRouter);
app.use(apidef+'/comment', commentRouter);
app.use(apidef+'/session', sessionRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
