var db = require("../models");

module.exports = function(app) {
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
      User_name: req.body.name,
      Photo: req.body.photo,
      Title: req.body.title,
      Location: req.body.location,
      Phone: req.body.phone,
      Email: req.body.email,
      Linkedin: req.body.linkedin,
      Github: req.body.github,
      QRcode: req.body.qrcode
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
