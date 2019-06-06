$(document).ready(function() {
  $("#requirement form").submit(function(event) {
    var height = parseInt($("#height").val());
    console.log(height);
    if (height >= 48) {
      $(".tall-rides").show();
      $(".medium-rides").show();
      $(".short-rides").show();

  }
    if (height >= 24 && height <=48) {
      $(".medium-rides").show();
      $(".short-rides").show();
  }
    else {
      $(".short-rides").show();

    }
    event.preventDefault();
    console.log("you made it");
  });
});
