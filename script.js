$('.show-card').click(function(e) {
  var music = new Audio('open.mp3');
  music.play();
  $('.card').addClass('show').css('display', 'block');
  $('.show-card').addClass('hide');
  $('.show-card1').addClass('hide');
});

$('.card .close').click(function(e) {
  var music = new Audio('open.mp3');
  music.play();
  $('.card').addClass('hide');
  setTimeout(function() {
    $('.card').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.show-card').removeClass('hide');
  $('.show-card1').removeClass('hide');
});

$('.show-card1').click(function(e) {
  var music = new Audio('open.mp3');
  music.play();
  $('.card1').addClass('show').css('display', 'block');
  $('.show-card1').addClass('hide');
  $('.show-card').addClass('hide');
});

$('.card1 .close1').click(function(e) {
  var music = new Audio('open.mp3');
  music.play();
  $('.card1').addClass('hide');
  setTimeout(function() {
    $('.card1').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.show-card1').removeClass('hide');
  $('.show-card').removeClass('hide');
});


$('.st').click(function(e) {
  var music = new Audio('se.wav');
  music.volume=0.3;
  music.play();
  $(".st span").addClass("stop");
  $(".st").addClass("hide");

  setTimeout(function(){

    $('.show-card').removeClass('hide');
    $('.show-card1').removeClass('hide');
    $('.heart').removeClass('hide');
    $('.show-card').addClass('show').css('display', 'block');
    $('.show-card1').addClass('show').css('display', 'block');
    $('.heart').addClass('show').css('display', 'block');
  }, 1000);
  });

$('.openm').click(function(e) {
    
  $('.open').addClass('hide');
  $('.openm').addClass('hide');
    $('.open').css('display', 'none').removeClass('show').removeClass('hide');
    $('.openm').css('display', 'none').removeClass('show').removeClass('hide');
    var $bgm = new Audio('indexs.wav'); 
    if (typeof $bgm.loop == 'boolean')
    {
        $bgm.loop = true;
    }
    else
    {
        $bgm.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    $bgm.volume = 0.2;
  
    $bgm.play();
    
    setTimeout(function(){
      $('h1').addClass('show').css('display', 'block');
      $('.span2').addClass('show').css('display', 'block');  
      $('.span1').addClass('show').css('display', 'block');
      $('.st').addClass('show').css('display', 'block');

    
    }, 1000);
    
 
});




  