$("button").click(function() {
  $("#result" ).text(parseInt($("#result").text()) + parseInt($(this).text()));
});
$("#zero").click(function() {
  $("#result").text(0);
});
