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
