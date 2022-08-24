$('.show-card').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card').addClass('show').css('display', 'block');
  $('.show-card').addClass('hide');
  $('.show-card1').addClass('hide');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});

$('.show-card1').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card1').addClass('show').css('display', 'block');
  $('.show-card1').addClass('hide');
  $('.show-card').addClass('hide');
  $('.show-card2').addClass('hide');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});


$('.show-card2').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card2').addClass('show').css('display', 'block');
  $('.show-card1').addClass('hide');
  $('.show-card').addClass('hide');
  $('.show-card2').addClass('hide');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});




$('.ashow-card').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card').addClass('show').css('display', 'block');
  $('.show-card').addClass('hide');
  $('.show-card1').addClass('hide');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});

$('.ashow-card1').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card1').addClass('show').css('display', 'block');
  $('.show-card1').addClass('hide');
  $('.show-card').addClass('hide');
  $('.show-card2').addClass('hide');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});


$('.ashow-card2').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card2').addClass('show').css('display', 'block');
  $('.show-card1').addClass('hide');
  $('.show-card').addClass('hide');
  $('.show-card2').addClass('hide');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});
$('.card .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card').addClass('hide');
  setTimeout(function() {
    $('.card').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.show-card').removeClass('hide');
  $('.show-card1').removeClass('hide'); 
  $('.show-card2').removeClass('hide'); 
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});


$('.card1 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card1').addClass('hide');
  setTimeout(function() {
    $('.card1').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.show-card1').removeClass('hide');
  $('.show-card').removeClass('hide');
  $('.show-card2').removeClass('hide');
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});



$('.card2 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card2').addClass('hide');
  setTimeout(function() {
    $('.card2').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.show-card1').removeClass('hide');
  $('.show-card').removeClass('hide');
  $('.show-card2').removeClass('hide');
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});

$('.acard .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card').addClass('hide');
  setTimeout(function() {
    $('.card').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.show-card').removeClass('hide');
  $('.show-card1').removeClass('hide'); 
  $('.show-card2').removeClass('hide'); 
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});


$('.acard1 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card1').addClass('hide');
  setTimeout(function() {
    $('.card1').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.show-card1').removeClass('hide');
  $('.show-card').removeClass('hide');
  $('.show-card2').removeClass('hide');
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});



$('.acard2 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card2').addClass('hide');
  setTimeout(function() {
    $('.card2').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.show-card1').removeClass('hide');
  $('.show-card').removeClass('hide');
  $('.show-card2').removeClass('hide');
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});

$('.st').click(function(e) {
  $(this).attr("disabled","disabled"); 
  var music = new Audio('data/se/se.wav');
  music.volume=0.3;
  music.play();
  $(".st span").addClass("stop");
  $(".st").addClass("hide");

  setTimeout(function(){
    $('.shang').removeClass('hide');
    $('.shang').addClass('show').css('display', 'block');
    $('.xia').removeClass('hide');
    $('.xia').addClass('show').css('display', 'block');
    $('.zuo').removeClass('hide');
    $('.zuo').addClass('show').css('display', 'block');
    $('.you').removeClass('hide');
    $('.you').addClass('show').css('display', 'block');
    $('.show-card').removeClass('hide');
    $('.show-card1').removeClass('hide');
    $('.show-card').addClass('show').css('display', 'block');
    $('.show-card1').addClass('show').css('display', 'block');
    $('.show-card2').removeClass('hide');
    $('.show-card2').addClass('show').css('display', 'block');
  }, 1000);
  });

$('.openm').click(function(e) {
  // var music = new Audio('data/se/open.mp3');
  // music.volume=0.5;
  // music.play();
  $('.open').addClass('hide');
  $('.openm').addClass('hide');
    $('.open').css('display', 'none').removeClass('show').removeClass('hide');
    $('.openm').css('display', 'none').removeClass('show').removeClass('hide');
    var $bgm = new Audio('data/se/indexs.wav'); 
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


$('.shang').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.show-card').addClass('hide');
  $('.show-card1').addClass('hide');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
  window.location="./page1.html";
});






  