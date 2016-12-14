$(document).ready(function() {
  $("#submit-btn").click(function(event) {
    event.preventDefault();

    var city = $("#city-type").val().toString().toLowerCase().trim();
    $('#city-type').val(''); //reset input

    if (city ==="new york"||city==="new york city"||city==="nyc"){
      $('body').attr('class','nyc');
    } else if (city==="san francisco"||city==="sf"||city==="bay area"){
      $('body').attr('class','sf');
    } else if (city == 'los angeles' || city == 'la' || city == 'lax') {
      $('body').attr('class','la');
    } else if (city == 'austin' || city == 'atx') {
      $('body').attr('class','austin');
    } else if (city == 'sydney' || city == 'syd') {
      $('body').attr('class','sydney');
    }
  });
});
