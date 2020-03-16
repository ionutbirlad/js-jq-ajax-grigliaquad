$(document).ready(function() {

  $(document).on("click", ".quadratino", function() {

    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function(data) {
        // console.log(data.response);
      },
      error: function() {
        alert("C'è stato un errore!")
      }



    });


  });




});
