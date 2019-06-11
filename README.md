# mevn-learning

## node.js

**installation**
use node version manager to download for control
for nodejs only
```
sudo apt-get install -y nodejs
```
### nvm
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
nvm --version
nvm install node
```
check npm version with  `npm --version` which helps to download node packages
### create node package
```
npm init
```
## mongodb
mongodb is a non-relational database
**installation**
```
sudo apt-get install -y mongodb-org
sudo service mongod start
sudo service mongod stop
sudo service mongod restart
```
mongodb starts from system, so u can use `systemctl start mongodb.service`
to run the db itself, use `mongo`
### mongodb commands
```
show dbs 
use <database>
db.(collection).insert({"title":"MEVN" })
db.(collection).find()
db.(collection).update(
  {"title:"MEVN"},
  {$set: {"description": a learning MEVN"}}
  );
db.(collection).remove/delete({"title":"MEVN})
```
## express
express will be use as a server side webframework for nodejs
```
npm install -g express
express express_app
```
packages will be placed in package.json like debug,express... use `npm install` to install/remove packages
**Note** remove jade and `npm install pug --save` change views to pug in app.js and in views folder
```
// error handler
app.use(function(err, req, res, next) {
// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};
// render the error page
res.status(err.status || 500);
res.render('error');
});
app.listen(3000, function() { console.log('listening on 3000') })
module.exports = app;
```
run the node with `node app.js`
### routing
you want to seperate different routes to different stuff in routes/index.js, to create a route do in routes/index.js:
```
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
  res.render('index', { title: 'Express' });
});
module.exports = router;
```
now when '/' is visited, views/index.pug is rendered. in index.pug in views `extends layout` is the styling used

## concept: MVC, model view controller

**model**: handles logic and connection to db
**views**: the display
**controller**: connect the models and views 
![Alt text](https://imgur.com/3QIkdNJ.png)


