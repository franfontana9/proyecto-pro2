var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const db = require("./database/models");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var posteosRouter = require('./routes/posteos');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'myApp',
  resave: false,
  saveUninitialized: true
}));

app.use(function(req, res, next) {
  /* Logica */
  if (req.session.usuario != undefined) {
      res.locals.usuario = req.session.usuario;
  }
  return next();
});

app.use(function(req, res, next) {
  if (req.cookies.userId != undefined && req.session.user == undefined) {
      let idUsuarioEnCookie = req.cookies.userId;

      db.Usuario.findByPk(idUsuarioEnCookie)
      .then((user) => {

        req.session.usuario = user.dataValues;
        res.locals.usuario  = user.dataValues;

        return next();
        
      }).catch((err) => {
        console.log(err);
        return next();
      });
  } else {
    return next();
  }


});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posteos', posteosRouter);


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
