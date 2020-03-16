$(document).ready(function() {

  $(document).on("click", ".quadratino", function() {
    // Mi salvo il this per poterlo richiamare sotto
    var myThis = $(this);
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function(data) {
        // console.log(data.response);
        if (data.response <= 5) {
          $(myThis).text(data.response);
          $(myThis).addClass("giallo");
        } else {
          $(myThis).text(data.response);
          $(myThis).addClass("rosso");
        }
      },
      error: function() {
        alert("C'è stato un errore!");
      }
    });


  });




});
