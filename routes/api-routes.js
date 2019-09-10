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
      

    
      db.Burger.update({
        isEaten: req.body.isEaten
      }, 
      {
        where: {
          id: req.params.id
        }
      }).then( function(result) {
          res.render("index",result);;
        
      });
    });
  
}

