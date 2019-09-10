$(function () {
  $(".Eat-Burger").on("click", function (event) {
    var id = $(this).data("id");
    var eatenState = $(this).data("newsleep");

    var burgerEaten = {
      isEaten: eatenState
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
      }
    );
  });

  $(".make-burger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burg").val().trim(),
    };

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