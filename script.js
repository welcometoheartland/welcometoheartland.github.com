$('.show-card').click(function(e) {
  $('.card').addClass('show').css('display', 'block');
  $('.show-card').addClass('hide');
  $('.show-card1').addClass('hide');
});

$('.card .close').click(function(e) {
  $('.card').addClass('hide');
  setTimeout(function() {
    $('.card').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.show-card').removeClass('hide');
  $('.show-card1').removeClass('hide');
});

$('.show-card1').click(function(e) {
  $('.card1').addClass('show').css('display', 'block');
  $('.show-card1').addClass('hide');
  $('.show-card').addClass('hide');
});

$('.card1 .close1').click(function(e) {
  $('.card1').addClass('hide');
  setTimeout(function() {
    $('.card1').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.show-card1').removeClass('hide');
  $('.show-card').removeClass('hide');
});


$('.st').click(function(e) {
  $('.st').addClass('hide');
  setTimeout("javascript:location.href='start.html'", 1000);
  
});



  