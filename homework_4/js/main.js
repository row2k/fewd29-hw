$(document).ready(function() {
  //prevent default
  $(window).keydown(function(event) {
    if(event.keyCode == 13) { //prevent return form submit
      event.preventDefault();
      return false;
    } else if (event.keyCode == 8) { //prevent backspace nav
      event.preventDefault();
      return false;
    }
  });

  //click event smoothing
  $(document).on('click', 'a', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href') ).offset().top
    }, 500);
  });

  //toggle readmore readless
  $(".readmore").click(function(){
    $("#show-this-on-click").slideDown(300, function() {
      $(".readless").show();
    });
    $(".readmore").hide();
    $(".readless").click(function(){
      $("#show-this-on-click").slideUp(50, function() {
        $(".readless").hide();
      });
      $(".readmore").show();
    });
  });

  //expand learnmore
  $(".learnmore").click(function(){
    $("#learnmoretext").slideDown(300);
    $(".learnmore").hide();
  });
});
