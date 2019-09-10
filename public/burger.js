$(document).ready(function(){
  $(".eatBurger").click(function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log(id);
    

    var burgerEaten = {
      isEaten: true
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: burgerEaten
    }).then(
      function () {
        console.log("changed sleep to", burgerEaten);
        // Reload the page to get the updated list
        location.reload();
      });
  });

  $("#makeBurger").click(function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("click");

    var newBurger = {
      name: $("#burg").val().trim(),
    };
    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});