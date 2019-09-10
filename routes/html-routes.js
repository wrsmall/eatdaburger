var path = require("path");
var db = require("../models");

module.exports = function (app) {



  app.get("/", function (req, res) {
    db.Burger.findAll({}).then(function(data){
      console.log(data);
      res.render("index", {burgers:data});
    });
  });


};
