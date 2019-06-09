var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: {
        type: String,
        required: [true,"name not here"]
    },
    email: {
        required: [true,"please add your email"]
    }
});
var User = mongoose.model("User", UserSchema);
module.exports = User;

const user_resource = new User({
    name: 'John Doe',
    email: 'john@doe.com'
})

user_resource.save((error) => {
    if (error)
        console.log(error);
    res.send({
        success: true,
        code: 200,
        msg: "User added!"
    })
})