

module.exports = function(app) {
  var db = require("../models");

  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

   // POST route for saving a new post
   app.post("/api/profile", function(req, res) {
    console.log(req.body)
    db.cardProfile.create({
      User_name: req.body.User_name,
      Photo: req.body.Photo,
      Title: req.body.Title,
      Location: req.body.Location,
      Phone: req.body.Phone,
      Email: req.body.Email,
      Website:req.body.Website,
      Linkedin: req.body.Linkedin,
      Github: req.body.Github,
      Qrcode: req.body.Qrcode
    })
      .then(function(data) {
        console.log("success")

        res.json("success");
      });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};