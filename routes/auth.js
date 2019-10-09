var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {

    app.get('/', authController.home)

    app.get('/logout', authController.logout);

    app.get('/dashboard', isLoggedIn, authController.dashboard)

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',

        failureRedirect: '/'
    }
    ));


    // @route POST /login
    // @desc logs in a user
    app.post('/login', passport.authenticate('local-signin'),
        function (req, res) {
            res.redirect('/registration')
        }
    )

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/');
    }


}



