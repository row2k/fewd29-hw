//instantiate bounce
var bounce = new Bounce();
bounce
  .scale({
    from: {x:0.8, y:0.1},
    to: {x:1, y:1},
  })
  .translate({
    from: { x: -300, y: 0 },
    to: { x: 0, y: 0 },
    duration: 600,
    stiffness: 4
  })
;

//Implement the red light using jQuery. Don't forget to add the script tags.


//button control #REFACTORED
////complete reset
$(".button").click(function(){
    $('div').removeClass('animation-target red-light yellow-light green-light')
});
////lights
$('#stopButton').click(function(){
  $('#stopLight').addClass('red-light animation-target');
  bounce.applyTo($(".animation-target"));
});
$('#slowButton').click(function(){
  $('#slowLight').addClass('yellow-light animation-target');
  bounce.applyTo($(".animation-target"));
});
$('#goButton').click(function(){
  $('#goLight').addClass('green-light animation-target');
  bounce.applyTo($(".animation-target"));
});

//light bulb control
$('#stopLight').click(
  function(){
  $('#stopLight').addClass('red-light animation-target');
  $('#slowLight').removeClass('yellow-light animation-target');
  $('#goLight').removeClass('green-light animation-target');
  bounce.applyTo($(".animation-target"));
});

$('#slowLight').click(
  function(){
  $('#stopLight').removeClass('red-light animation-target');
  $('#slowLight').addClass('yellow-light animation-target');
  $('#goLight').removeClass('green-light animation-target');
  bounce.applyTo($(".animation-target"));
});

$('#goLight').click(
  function(){
  $('#stopLight').removeClass('red-light animation-target');
  $('#slowLight').removeClass('yellow-light animation-target');
  $('#goLight').addClass('green-light animation-target');
  bounce.applyTo($(".animation-target"));
});
