module.exports.controller = (app) => {
    // get users page, render users.pug and passed variables
    app.get('/users', (req, res) => {
        res.render('users', {
            title: 'Users',
            description: 'This is the description of all the users'
        });
    })
}