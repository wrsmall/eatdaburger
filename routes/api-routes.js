var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  
    // POST route for saving a new todo. You can create a todo using the data on req.body
    app.post("/api/burgers", function (req, res) {
      db.Burger.create(
        { burgerName: req.body.name,
          })
         .then(burgersObject => {
          res.render("index",burgersObject);;
      });
      
      
    });
    app.put("/api/burger/:id", function(req, res) {
      var condition = "id = " + req.params.id;
    
      console.log("condition", condition);
    
      cat.update({
        sleepy: req.body.sleepy
      }, condition, function(result) {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
    });
  
}

