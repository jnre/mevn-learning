# mevn-learning

## node.js

**installation**
use node version manager to download for control for nodejs only
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
mongodb is a non-relational database\
**installation**
```
sudo apt-get install -y mongodb-org
sudo service mongod start
sudo service mongod stop
sudo service mongod restart
```
mongodb starts from system, so u can use `systemctl start mongodb.service`\
to run the db itself, use `mongo`
### mongodb commands
```
show dbs 
use <database>
db.(collection).insert({"title":"MEVN" }) .insert([{},{}])
db.(collection).find()  .find({$or:[{},{}]})
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
packages will be placed in package.json like debug,express... use `npm install` to install/remove packages\
**Note:** remove jade and `npm install pug --save` change views to pug in app.js and in views folder\
\
**PACKAGES to have:** npm install <package> --save\ 
- nodemon, use nodemon to run packages
- pug
- file-system
- mongoose

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

### concept: MVC, model view controller

- **model**: handles logic and connection to db
- **views**: the display
- **controller**: connect the models and views, like routing

![Alt text](https://imgur.com/3QIkdNJ.png)\
create controllers and models folder and `npm install file-system --save`
in app.js
```
var app = express();
// Require file system module
var fs = require('file-system');
// Include controllers
fs.readdirSync('controllers').forEach(function (file) {
if(file.substr(-3) == '.js') {
const route = require('./controllers/' + file)
route.controller(app)
}
})
```
in controllers/index.js
```
module.exports.controller = (app) => {
// get homepage
app.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
})
}
```
all routes can be removed, route folder, var index = require('./routes/index') etc  
when you render something from control, you can passed tags which is read by viewer,rendered name are also the pug name file.

### mongoose
helps to link to db
```
var mongoose = require(mongoose);
//connect to mongodb
mongoose.connect('mongodb://localhost:27017/express_app', function() {
console.log('Connection has been made');
})
.catch(err => {
console.error('App starting error:', err.stack);
process.exit(1);
});
```
in models create User.js to make the schema
```
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name:{
    //type can be custom created with it being new Schema
    type:String,
    required:[true,"message to respond"]
    //use validate for special validator
  },
  email: String
})

const user_resource = new User({
name: 'John Doe',
email: 'john@doe.com'
})

//save has a callback for errors
user_resource.save((error) => {
if(error)
  console.log(error);
res.send({
  success: true,
  code: 200,
  msg: "User added!"
  })
})

//to get a record
User.find({}, 'name email', function (error, users) {   //.findbyId(<Id>,...
  if (error) { console.error(error); }
  //make changes here
  users.name='Peter'
  users.email = 'peter@gmail.com'
  users.save(function(error){
    if (error) {
      console.log(error)
    }
    res.send({
      users: users
      success: true
    })
  })
})
const User = mongoose.model("User", UserSchema)
module.exports = User

//other functions, find OneAndUpdate, remove, findOneAndRemove which allows for return of query
User.remove({
  _id: 1
}, function(err){
if (err)
  res.send(err)
res.send({
  success: true
  })
})
```

