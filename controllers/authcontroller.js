var exports = module.exports = {};
var path = require("path");

exports.home = function (req, res) {
    res.sendFile(path.join(__dirname, '../pages/profile.js'));
}
exports.dashboard = function (req, res) {
    res.sendFile(path.join(__dirname, '../pages/registration.js'));
}

exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');

    })
}