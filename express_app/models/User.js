const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true,"name not here"]
    },
    email: {
        type: String,
        required: [true,"please add your email"]
    }

});
const User = mongoose.model("User", UserSchema);
module.exports = User;

// const user_resource = new User({
//     name: 'John Doe',
//     email: 'john@doe.com'
// })

// user_resource.save((error) => {
//     if (error)
//         console.log(error);
//     res.send({
//         success: true,
//         code: 200,
//         msg: "User added!"
//     })
// })