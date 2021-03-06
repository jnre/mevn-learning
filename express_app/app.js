var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//Require file system module
var fs = require('file-system');

var app = express();

//connect to mongodb db name after 27017/
mongoose.connect('mongodb://localhost:27017/mongo_test_queries', { useNewUrlParser: true }, function () {
        console.log('Connection has been made');
        
    })
    .catch(err => {
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

var db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error"));
db.once("open", function(callback){
    console.log("Connection Succeeded");
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Include controllers- to do the routing 
fs.readdirSync('controllers').forEach(function (file) {
    if (file.substr(-3) == '.js') {
        const route = require('./controllers/' + file)
        route.controller(app)
    }
})

/// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

app.listen(3000, function () {
    console.log('listening on 3000')
})