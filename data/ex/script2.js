


function difference(first,sec){
  return Math.abs(first-sec);
}

document.getElementById("kaidou").addEventListener("scroll", function() {
  var diff = difference((this.scrollTop+this.clientHeight),(this.scrollHeight));
   
   if(diff < 5) {
    setTimeout(function(){
      $(".jsh4").removeClass('hide');
      $(".jsh4").addClass('show').css('display', 'block');
    },600); 
    }
});



document.getElementById("astral").addEventListener("scroll", function() {
  var diff = difference((this.scrollTop+this.clientHeight),(this.scrollHeight));
   
   if(diff < 5) {
    setTimeout(function(){
      $(".jsh4").removeClass('hide');
      $(".jsh4").addClass('show').css('display', 'block');
    },600); 
    }
});


document.getElementById("shayu").addEventListener("scroll", function() {
  var diff = difference((this.scrollTop+this.clientHeight),(this.scrollHeight));
   
   if(diff < 5) {
    setTimeout(function(){
      $(".jsh4").removeClass('hide');
      $(".jsh4").addClass('show').css('display', 'block');
    },600); 
    }
});

$('.jsh4').click(function(e) {
  var music = new Audio('data/se/se.wav');
  music.volume=0.5;
  music.play();

  setTimeout(function(){
    $(".ksh").addClass('hide');
    $(".jsh4").addClass('hide');

  },600); 

  
  
  var audio = document.getElementById("indexs");
  var vol1 = 0.50;
    var interval1 = 200; // 200ms interval
  
  var fadeout = setInterval(
    function() {
      // Reduce volume by 0.05 as long as it is above 0
      // This works as long as you start with a multiple of 0.05!
      if (vol1 > 0) {
        vol1 -= 0.05;
        audio.volume = vol1;
      }
      else {
        // Stop the setInterval when 0 is reached
        clearInterval(fadeout);
      }
    }, interval1);



   setTimeout(function(){
     $('.black1').removeClass('hide');
     $('.black1').addClass('show').css('display', 'block');
   },1800);
  
   
var audio1 = document.getElementById("ne");
   
    setTimeout(function(){ 
    audio1.volume=0.5;
    audio1.play();
   },2000);


  setTimeout(function(){
    $('.oe').addClass('show').css('display', 'block');
    $('.oe').removeClass('hide');
  },5100);
  setTimeout(function(){
    $('.oe1').addClass('show').css('display', 'block');
    $('.oe1').removeClass('hide');
  },8200);
  setTimeout(function(){
    $('.oe2').addClass('show').css('display', 'block');
    $('.oe2').removeClass('hide');
  },9800);
  setTimeout(function(){
    $('.oe3').addClass('show').css('display', 'block');
    $('.oe3').removeClass('hide');
  },12900);
  setTimeout(function(){
    $('.oe4').addClass('show').css('display', 'block');
    $('.oe4').removeClass('hide');
  },14500);
  setTimeout(function(){
    $('.oe5').addClass('show').css('display', 'block');
    $('.oe5').removeClass('hide');
  },16100);
  setTimeout(function(){
    $('.oe6').addClass('show').css('display', 'block');
    $('.oe6').removeClass('hide');
  },19200);
  setTimeout(function(){
    $('.oe7').addClass('show').css('display', 'block');
    $('.oe7').removeClass('hide');
  },20800);
  setTimeout(function(){
    $('.oe8').addClass('show').css('display', 'block');
    $('.oe8').removeClass('hide');
  },22400);
  setTimeout(function(){
    $('.oe9').addClass('show').css('display', 'block');
    $('.oe9').removeClass('hide');
  },24000);
  setTimeout(function(){
    $('.oe10').addClass('show').css('display', 'block');
    $('.oe10').removeClass('hide');
  },28800);

   setTimeout(function(){
     $('.black').removeClass('hide');
     $('.black').addClass('show').css('display', 'block');
   },33600);
   setTimeout(function(){
    $('.thanks').removeClass('hide');
    $('.thanks').addClass('show').css('display', 'block');
    $('.show-carddc').removeClass('hide');
    $('.show-carddc').addClass('show').css('display', 'block');
  },36100);
});


$('.jsh3').click(function(e) {
  var music = new Audio('data/se/se.wav');
  music.volume=0.5;
  music.play();

  setTimeout(function(){
    $(".jsh").addClass('hide');
    $(".jsh1").addClass('hide');
    $(".jsh2").addClass('hide');
    $(".jsh3").addClass('hide');

  },600); 
  setTimeout(function(){
    $(".ksh").removeClass('hide');
    $(".ksh").addClass('show').css('display', 'block');
  },1000);  
});


$('.jsh31').click(function(e) {

  
  var music = new Audio('data/se/se.wav');
  music.volume=0.5;
  music.play();

  setTimeout(function(){
    $(".jsh").addClass('hide');
    $(".jsh1").addClass('hide');
    $(".jsh2").addClass('hide');
    $(".jsh31").addClass('hide');

  },600); 
  setTimeout(function(){
    $(".ash").removeClass('hide');
    $(".ash").addClass('show').css('display', 'block');
  },1000);  
});
$('.jsh32').click(function(e) {

  
  var music = new Audio('data/se/se.wav');
  music.volume=0.5;
  music.play();

  setTimeout(function(){
    $(".jsh").addClass('hide');
    $(".jsh1").addClass('hide');
    $(".jsh2").addClass('hide');
    $(".jsh32").addClass('hide');

  },600); 
  setTimeout(function(){
    $(".ssh").removeClass('hide');
    $(".ssh").addClass('show').css('display', 'block');
  },1000);  
});
$('.show-carddc').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  window.open('https://wj.qq.com/s2/10769036/5fa0/','_blank');
  // setTimeout(function(){
  // window.location.href = "https://wj.qq.com/s2/10769036/5fa0/";
  // },600);  
});


$('.show-carddc1').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  setTimeout(function(){
  window.location.href = "https://wj.qq.com/s2/10769036/5fa0/";
  },600);  
});
$('.show-carddc2').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  setTimeout(function(){
  window.location.href = "https://wj.qq.com/s2/10769036/5fa0/";
  },600);  
});
$('.b11').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
    $('.message1').addClass('hide');

    $('.message2').addClass('hide');
    $('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
    $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');    
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
   $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
   $('.message22').addClass('hide');
   $('.message22jjj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
    $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
  $('.show-card').addClass('hide');
  $('.show-card1').addClass('hide');
  $('.show-card2').addClass('hide');
  $('.show-card3').addClass('hide');
  $('.show-card4').addClass('hide');
  $('.show-card5').addClass('hide');
  $('.show-card6').addClass('hide');
  $('.show-card7').addClass('hide');
  $('.show-card8').addClass('hide');
  $('.show-card9').addClass('hide');
  $('.show-card10').addClass('hide');    
  $('.show-card11').addClass('hide');
  $('.show-card12').addClass('hide');
  $('.show-card13').addClass('hide');
  $('.show-card14').addClass('hide');
  $('.show-card15').addClass('hide');
  $('.show-card16').addClass('hide');
  $('.show-card17').addClass('hide');
  $('.show-card18').addClass('hide');
  $('.show-card19').addClass('hide');
  $('.show-card20').addClass('hide');
  $('.show-card21').addClass('hide');
  $('.show-card22').addClass('hide');
  $('.show-card23').addClass('hide');
  $('.show-card24').addClass('hide');
  $('.show-card25').addClass('hide');
  $('.show-card26').addClass('hide');
  $('.show-card27').addClass('hide');
  $('.show-card28').addClass('hide');
  $('.show-card29').addClass('hide');
  $('.show-card30').addClass('hide');
  $('.show-card31').addClass('hide');
  $('.show-card32').addClass('hide');
  $('.show-card33').addClass('hide');
  $('.show-card34').addClass('hide');
  $('.show-card35').addClass('hide');
  $('.show-card36').addClass('hide');
  $('.show-card37').addClass('hide');
  $('.show-card38').addClass('hide');
  $('.show-card39').addClass('hide');
  $('.show-card40').addClass('hide');
  $('.s1').addClass('hide');  
  $('.s11').addClass('hide'); 
  $('.s12').addClass('hide');
  $('.s2').addClass('hide');  
  $('.s21').addClass('hide'); 
  $('.s22').addClass('hide');
  $('.s3').addClass('hide');
  $('.s31').addClass('hide');
  $('.s32').addClass('hide');
  $('.s4').addClass('hide');
  $('.s41').addClass('hide');
  $('.s42').addClass('hide');
  $('.s43').addClass('hide');
  $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide');  
  $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');

  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b54').addClass('hide');
  $('.b55').addClass('hide');
  $('.b56').addClass('hide');
  $('.b57').addClass('hide');
  $('.b58').addClass('hide');
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');
  //20220908
  var div = document.getElementById('b11');
        var div1 = document.getElementById('b12');
        var div2 = document.getElementById('b21');
        var div3 = document.getElementById('b22');
        div.style.visibility = 'hidden';
        div1.style.visibility = 'hidden';
        div2.style.visibility = 'hidden';
        div3.style.visibility = 'hidden';
        var div4 = document.getElementById('b31');
        var div5 = document.getElementById('b32');
        var div6 = document.getElementById('b41');
        var div7 = document.getElementById('b42');
        div4.style.visibility = 'hidden';
        div5.style.visibility = 'hidden';
        div6.style.visibility = 'hidden';
        div7.style.visibility = 'hidden';
        var div8 = document.getElementById('b51');
        var div9 = document.getElementById('b52');
        var div10 = document.getElementById('b53');
        div8.style.visibility = 'hidden';
        div9.style.visibility = 'hidden';
        div10.style.visibility = 'hidden';
        var div16 = document.getElementById('b61');
        var div17 = document.getElementById('b62');
        div16.style.visibility = 'hidden';
        div17.style.visibility = 'hidden';
  
  
  var audio = document.getElementById("indexs");
  var vol1 = 0.50;
    var interval1 = 200; // 200ms interval
  
  var fadeout = setInterval(
    function() {
      // Reduce volume by 0.05 as long as it is above 0
      // This works as long as you start with a multiple of 0.05!
      if (vol1 > 0) {
        vol1 -= 0.05;
        audio.volume = vol1;
      }
      else {
        // Stop the setInterval when 0 is reached
        clearInterval(fadeout);
      }
    }, interval1);





    setTimeout(function(){
      var m1 = new Audio('data/se/be.wav');
      m1.play();
      $('.red').removeClass('hide');
      $('.red').addClass('show').css('display', 'block');
    },600);
    setTimeout(function(){
    
      $('.red1').removeClass('hide');
      $('.red1').addClass('show').css('display', 'block');
    },2100);
    setTimeout(function(){
    
      $('.red2').removeClass('hide');
      $('.red2').addClass('show').css('display', 'block');
    },3600);
    
      setTimeout(function(){
      $('.be1').addClass('show').css('display', 'block');
      $('.be1').removeClass('hide');
    },6500);
    setTimeout(function(){
      $('.be11').addClass('show').css('display', 'block');
      $('.be11').removeClass('hide');
    },9500);
    setTimeout(function(){
      $('.be12').addClass('show').css('display', 'block');
      $('.be12').removeClass('hide');
    },12500);
    setTimeout(function(){
      $('.be13').addClass('show').css('display', 'block');
      $('.be13').removeClass('hide');
    },18000);
    setTimeout(function(){
      $('.black').addClass('show').css('display', 'block');
      $('.black').removeClass('hide');
      var m2 = new Audio('data/se/x.wav');
      m2.play();
      $('.show-carddc1').addClass('show').css('display', 'block');
      $('.show-carddc1').removeClass('hide');
    },21000);
  
});
$('.b12').click(function(e){
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb1').addClass('hide');
  $('.sb1').addClass('hide');
  $('.zb2').addClass('hide');
  $('.yb2').addClass('hide');
  $('.xcb').addClass('hide');
  $('.scb').addClass('hide');
  $('.zcb').addClass('hide');
  $('.ycb').addClass('hide');
  $('.xcbb').addClass('hide');
  $('.xcb1').addClass('hide');
  $('.scb1').addClass('hide');
  $('.zcb1').addClass('hide');
  $('.ycb1').addClass('hide');
  $('.xcb2').addClass('hide');
  $('.scb2').addClass('hide');
  $('.zcb2').addClass('hide');
  $('.ycb2').addClass('hide');
  $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide');
  $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');
  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b54').addClass('hide');
  $('.b55').addClass('hide');
  $('.b56').addClass('hide');
  $('.b57').addClass('hide');
  $('.b58').addClass('hide');
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');
  var div = document.getElementById('shang');
  var div1 = document.getElementById('xia');
  var div2 = document.getElementById('you');
  var div3 = document.getElementById('zuo');
  setTimeout(function() {
            $('.shang').removeClass('hide');
            $('.shang').addClass('show').css('display', 'block');
            $('.xia').removeClass('hide');
            $('.xia').addClass('show').css('display', 'block');
            $('.zuo').removeClass('hide');
            $('.zuo').addClass('show').css('display', 'block');
            $('.you').removeClass('hide');
            $('.you').addClass('show').css('display', 'block');
            div.style.visibility = 'visible';
            div1.style.visibility = 'visible';
            div2.style.visibility = 'visible';
            div3.style.visibility = 'visible';

    if(globalThis.start==1){ if(globalThis.e==1 && globalThis.s==1){
        
      $('.sb1').removeClass('hide');
      $('.sb1').addClass('show').css('display', 'block');
      $('.xcb1').removeClass('hide');
      $('.xcb1').addClass('show').css('display', 'block');
      $('.zcb1').removeClass('hide');
      $('.zcb1').addClass('show').css('display', 'block');
      $('.ycb1').removeClass('hide');
      $('.ycb1').addClass('show').css('display', 'block');

    }
    if(globalThis.e==1 && globalThis.a==1){
    
      $('.sb1').removeClass('hide');
      $('.sb1').addClass('show').css('display', 'block');
      $('.xcb1').removeClass('hide');
      $('.xcb1').addClass('show').css('display', 'block');
      $('.zcb1').removeClass('hide');
      $('.zcb1').addClass('show').css('display', 'block');
      $('.ycb1').removeClass('hide');
      $('.ycb1').addClass('show').css('display', 'block');

    }
    if(globalThis.e==1 && globalThis.k==1){
    
      $('.xb1').removeClass('hide');
      $('.xb1').addClass('show').css('display', 'block');
      $('.scb1').removeClass('hide');
      $('.scb1').addClass('show').css('display', 'block');
      $('.zcb1').removeClass('hide');
      $('.zcb1').addClass('show').css('display', 'block');
      $('.ycb1').removeClass('hide');
      $('.ycb1').addClass('show').css('display', 'block');

    }
    if(globalThis.e==2 && globalThis.s==1){
    
      $('.zb2').removeClass('hide');
      $('.zb2').addClass('show').css('display', 'block');
      $('.xcb2').removeClass('hide');
      $('.xcb2').addClass('show').css('display', 'block');
      $('.scb2').removeClass('hide');
      $('.scb2').addClass('show').css('display', 'block');
      $('.ycb2').removeClass('hide');
      $('.ycb2').addClass('show').css('display', 'block');
      

    }
    if(globalThis.e==2 && globalThis.a==1){
    
      $('.yb2').removeClass('hide');
      $('.yb2').addClass('show').css('display', 'block');
      $('.xcb2').removeClass('hide');
      $('.xcb2').addClass('show').css('display', 'block');
      $('.scb2').removeClass('hide');
      $('.scb2').addClass('show').css('display', 'block');
      $('.zcb2').removeClass('hide');
      $('.zcb2').addClass('show').css('display', 'block');

    }
    if(globalThis.e==2 && globalThis.k==1){
    
      $('.yb2').removeClass('hide');
      $('.yb2').addClass('show').css('display', 'block');
      $('.xcb2').removeClass('hide');
      $('.xcb2').addClass('show').css('display', 'block');
      $('.scb2').removeClass('hide');
      $('.scb2').addClass('show').css('display', 'block');
      $('.zcb2').removeClass('hide');
      $('.zcb2').addClass('show').css('display', 'block');

    }


    globalThis.e=globalThis.e+1}

         
  }, 600);




});
$('.b21').click(function(e) {
  $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb1').addClass('hide');
  $('.sb1').addClass('hide');
  $('.zb2').addClass('hide');
  $('.yb2').addClass('hide');
  $('.xcb').addClass('hide');
  $('.scb').addClass('hide');
  $('.zcb').addClass('hide');
  $('.ycb').addClass('hide');
  $('.xcbb').addClass('hide');
  $('.xcb1').addClass('hide');
  $('.scb1').addClass('hide');
  $('.zcb1').addClass('hide');
  $('.ycb1').addClass('hide');
  $('.xcb2').addClass('hide');
  $('.scb2').addClass('hide');
  $('.zcb2').addClass('hide');
  $('.ycb2').addClass('hide');
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
    $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');    
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
   $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
    $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
  $('.show-card').addClass('hide');
  $('.show-card1').addClass('hide');
  $('.show-card2').addClass('hide');
  $('.show-card3').addClass('hide');
  $('.show-card4').addClass('hide');
  $('.show-card5').addClass('hide');
  $('.show-card6').addClass('hide');
  $('.show-card7').addClass('hide');
  $('.show-card8').addClass('hide');
  $('.show-card9').addClass('hide');
  $('.show-card10').addClass('hide');    
  $('.show-card11').addClass('hide');
  $('.show-card12').addClass('hide');
  $('.show-card13').addClass('hide');
  $('.show-card14').addClass('hide');
  $('.show-card15').addClass('hide');
  $('.show-card16').addClass('hide');
  $('.show-card17').addClass('hide');
  $('.show-card18').addClass('hide');
  $('.show-card19').addClass('hide');
  $('.show-card20').addClass('hide');
  $('.show-card21').addClass('hide');
  $('.show-card22').addClass('hide');
  $('.show-card23').addClass('hide');
  $('.show-card24').addClass('hide');
  $('.show-card25').addClass('hide');
  $('.show-card26').addClass('hide');
  $('.show-card27').addClass('hide');
  $('.show-card28').addClass('hide');
  $('.show-card29').addClass('hide');
  $('.show-card30').addClass('hide');
  $('.show-card31').addClass('hide');
  $('.show-card32').addClass('hide');
  $('.show-card33').addClass('hide');
  $('.show-card34').addClass('hide');
  $('.show-card35').addClass('hide');
  $('.show-card36').addClass('hide');
  $('.show-card37').addClass('hide');
  $('.show-card38').addClass('hide');
  $('.show-card39').addClass('hide');
  $('.show-card40').addClass('hide');
  $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide'); 
   $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');
  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b54').addClass('hide');
  $('.b55').addClass('hide');
  $('.b56').addClass('hide');
  $('.b57').addClass('hide');
  $('.b58').addClass('hide');
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');

  
  var audio = document.getElementById("indexs");
  var vol1 = 0.50;
    var interval1 = 200; // 200ms interval
  
  var fadeout = setInterval(
    function() {
      // Reduce volume by 0.05 as long as it is above 0
      // This works as long as you start with a multiple of 0.05!
      if (vol1 > 0) {
        vol1 -= 0.05;
        audio.volume = vol1;
      }
      else {
        // Stop the setInterval when 0 is reached
        clearInterval(fadeout);
      }
    }, interval1);



    setTimeout(function(){
      var m1 = new Audio('data/se/be.wav');
      m1.play();
      $('.red').removeClass('hide');
      $('.red').addClass('show').css('display', 'block');
    },600);
    setTimeout(function(){
    
      $('.red1').removeClass('hide');
      $('.red1').addClass('show').css('display', 'block');
    },2100);
    setTimeout(function(){
    
      $('.red2').removeClass('hide');
      $('.red2').addClass('show').css('display', 'block');
    },3600);
    
      setTimeout(function(){
      $('.be2').addClass('show').css('display', 'block');
      $('.be2').removeClass('hide');
    },6500);
    setTimeout(function(){
      $('.be21').addClass('show').css('display', 'block');
      $('.be21').removeClass('hide');
    },9500);
    setTimeout(function(){
      $('.be22').addClass('show').css('display', 'block');
      $('.be22').removeClass('hide');
    },12500);
    setTimeout(function(){
      $('.be23').addClass('show').css('display', 'block');
      $('.be23').removeClass('hide');
    },15500);
    setTimeout(function(){
      $('.be24').addClass('show').css('display', 'block');
      $('.be24').removeClass('hide');
    },21000);
    setTimeout(function(){
      $('.be25').addClass('show').css('display', 'block');
      $('.be25').removeClass('hide');
    },24000);
    
    setTimeout(function(){
      $('.black').addClass('show').css('display', 'block');
      $('.black').removeClass('hide');
      var m2 = new Audio('data/se/x.wav');
      m2.play();
      $('.show-carddc2').addClass('show').css('display', 'block');
      $('.show-carddc2').removeClass('hide');
    },27000);



});
$('.b31').click(function(e) {
  $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb1').addClass('hide');
  $('.sb1').addClass('hide');
  $('.zb2').addClass('hide');
  $('.yb2').addClass('hide');
  $('.xcb').addClass('hide');
  $('.scb').addClass('hide');
  $('.zcb').addClass('hide');
  $('.ycb').addClass('hide');
  $('.xcbb').addClass('hide');
  $('.xcb1').addClass('hide');
  $('.scb1').addClass('hide');
  $('.zcb1').addClass('hide');
  $('.ycb1').addClass('hide');
  $('.xcb2').addClass('hide');
  $('.scb2').addClass('hide');
  $('.zcb2').addClass('hide');
  $('.ycb2').addClass('hide');
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
    $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');    
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
   $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
    $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
  $('.show-card').addClass('hide');
  $('.show-card1').addClass('hide');
  $('.show-card2').addClass('hide');
  $('.show-card3').addClass('hide');
  $('.show-card4').addClass('hide');
  $('.show-card5').addClass('hide');
  $('.show-card6').addClass('hide');
  $('.show-card7').addClass('hide');
  $('.show-card8').addClass('hide');
  $('.show-card9').addClass('hide');
  $('.show-card10').addClass('hide');    
  $('.show-card11').addClass('hide');
  $('.show-card12').addClass('hide');
  $('.show-card13').addClass('hide');
  $('.show-card14').addClass('hide');
  $('.show-card15').addClass('hide');
  $('.show-card16').addClass('hide');
  $('.show-card17').addClass('hide');
  $('.show-card18').addClass('hide');
  $('.show-card19').addClass('hide');
  $('.show-card20').addClass('hide');
  $('.show-card21').addClass('hide');
  $('.show-card22').addClass('hide');
  $('.show-card23').addClass('hide');
  $('.show-card24').addClass('hide');
  $('.show-card25').addClass('hide');
  $('.show-card26').addClass('hide');
  $('.show-card27').addClass('hide');
  $('.show-card28').addClass('hide');
  $('.show-card29').addClass('hide');
  $('.show-card30').addClass('hide');
  $('.show-card31').addClass('hide');
  $('.show-card32').addClass('hide');
  $('.show-card33').addClass('hide');
  $('.show-card34').addClass('hide');
  $('.show-card35').addClass('hide');
  $('.show-card36').addClass('hide');
  $('.show-card37').addClass('hide');
  $('.show-card38').addClass('hide');
  $('.show-card39').addClass('hide');
  $('.show-card40').addClass('hide');
  $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide');  
  $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');
  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b54').addClass('hide');
  $('.b55').addClass('hide');
  $('.b56').addClass('hide');
  $('.b57').addClass('hide');
  $('.b58').addClass('hide');
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');
  
 
  
  var audio = document.getElementById("indexs");
  var vol1 = 0.50;
    var interval1 = 200; // 200ms interval
  
  var fadeout = setInterval(
    function() {
      // Reduce volume by 0.05 as long as it is above 0
      // This works as long as you start with a multiple of 0.05!
      if (vol1 > 0) {
        vol1 -= 0.05;
        audio.volume = vol1;
      }
      else {
        // Stop the setInterval when 0 is reached
        clearInterval(fadeout);
      }
    }, interval1);



    setTimeout(function(){
      var m1 = new Audio('data/se/be.wav');
      m1.play();
      $('.red').removeClass('hide');
      $('.red').addClass('show').css('display', 'block');
    },600);
    setTimeout(function(){
    
      $('.red1').removeClass('hide');
      $('.red1').addClass('show').css('display', 'block');
    },2100);
    setTimeout(function(){
    
      $('.red2').removeClass('hide');
      $('.red2').addClass('show').css('display', 'block');
    },3600);
    
      setTimeout(function(){
      $('.be3').addClass('show').css('display', 'block');
      $('.be3').removeClass('hide');
    },6500);
    setTimeout(function(){
      $('.be31').addClass('show').css('display', 'block');
      $('.be31').removeClass('hide');
    },9500);
    setTimeout(function(){
      $('.be32').addClass('show').css('display', 'block');
      $('.be32').removeClass('hide');
    },12500);
    setTimeout(function(){
      $('.be33').addClass('show').css('display', 'block');
      $('.be33').removeClass('hide');
    },18000);
    setTimeout(function(){
      $('.be34').addClass('show').css('display', 'block');
      $('.be34').removeClass('hide');
    },21000);
    setTimeout(function(){
      $('.be35').addClass('show').css('display', 'block');
      $('.be35').removeClass('hide');
    },24000);
    
    setTimeout(function(){
      $('.black').addClass('show').css('display', 'block');
      $('.black').removeClass('hide');
      var m2 = new Audio('data/se/x.wav');
      m2.play();
      $('.show-carddc1').addClass('show').css('display', 'block');
      $('.show-carddc1').removeClass('hide');
    },27000);



});
$('.b41').click(function(e) {
  $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb1').addClass('hide');
  $('.sb1').addClass('hide');
  $('.zb2').addClass('hide');
  $('.yb2').addClass('hide');
  $('.xcb').addClass('hide');
  $('.scb').addClass('hide');
  $('.zcb').addClass('hide');
  $('.ycb').addClass('hide');
  $('.xcbb').addClass('hide');
  $('.xcb1').addClass('hide');
  $('.scb1').addClass('hide');
  $('.zcb1').addClass('hide');
  $('.ycb1').addClass('hide');
  $('.xcb2').addClass('hide');
  $('.scb2').addClass('hide');
  $('.zcb2').addClass('hide');
  $('.ycb2').addClass('hide');
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
    $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');    
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
  $('.show-card').addClass('hide');
  $('.show-card1').addClass('hide');
  $('.show-card2').addClass('hide');
  $('.show-card3').addClass('hide');
  $('.show-card4').addClass('hide');
  $('.show-card5').addClass('hide');
  $('.show-card6').addClass('hide');
  $('.show-card7').addClass('hide');
  $('.show-card8').addClass('hide');
  $('.show-card9').addClass('hide');
  $('.show-card10').addClass('hide');    
  $('.show-card11').addClass('hide');
  $('.show-card12').addClass('hide');
  $('.show-card13').addClass('hide');
  $('.show-card14').addClass('hide');
  $('.show-card15').addClass('hide');
  $('.show-card16').addClass('hide');
  $('.show-card17').addClass('hide');
  $('.show-card18').addClass('hide');
  $('.show-card19').addClass('hide');
  $('.show-card20').addClass('hide');
  $('.show-card21').addClass('hide');
  $('.show-card22').addClass('hide');
  $('.show-card23').addClass('hide');
  $('.show-card24').addClass('hide');
  $('.show-card25').addClass('hide');
  $('.show-card26').addClass('hide');
  $('.show-card27').addClass('hide');
  $('.show-card28').addClass('hide');
  $('.show-card29').addClass('hide');
  $('.show-card30').addClass('hide');
  $('.show-card31').addClass('hide');
  $('.show-card32').addClass('hide');
  $('.show-card33').addClass('hide');
  $('.show-card34').addClass('hide');
  $('.show-card35').addClass('hide');
  $('.show-card36').addClass('hide');
  $('.show-card37').addClass('hide');
  $('.show-card38').addClass('hide');
  $('.show-card39').addClass('hide');
  $('.show-card40').addClass('hide');
  $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide');  
  $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');
  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b54').addClass('hide');
  $('.b55').addClass('hide');
  $('.b56').addClass('hide');
  $('.b57').addClass('hide');
  $('.b58').addClass('hide');  
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');
    
  var audio = document.getElementById("indexs");
  var vol1 = 0.50;
    var interval1 = 200; // 200ms interval
  
  var fadeout = setInterval(
    function() {
      // Reduce volume by 0.05 as long as it is above 0
      // This works as long as you start with a multiple of 0.05!
      if (vol1 > 0) {
        vol1 -= 0.05;
        audio.volume = vol1;
      }
      else {
        // Stop the setInterval when 0 is reached
        clearInterval(fadeout);
      }
    }, interval1);



    setTimeout(function(){
      var m1 = new Audio('data/se/be.wav');
      m1.play();
      $('.red').removeClass('hide');
      $('.red').addClass('show').css('display', 'block');
    },600);
    setTimeout(function(){
    
      $('.red1').removeClass('hide');
      $('.red1').addClass('show').css('display', 'block');
    },2100);
    setTimeout(function(){
    
      $('.red2').removeClass('hide');
      $('.red2').addClass('show').css('display', 'block');
    },3600);
    
      setTimeout(function(){
      $('.be4').addClass('show').css('display', 'block');
      $('.be4').removeClass('hide');
    },6500);
    setTimeout(function(){
      $('.be41').addClass('show').css('display', 'block');
      $('.be41').removeClass('hide');
    },9500);
    setTimeout(function(){
      $('.be42').addClass('show').css('display', 'block');
      $('.be42').removeClass('hide');
    },12500);
    setTimeout(function(){
      $('.be43').addClass('show').css('display', 'block');
      $('.be43').removeClass('hide');
    },15500);
    setTimeout(function(){
      $('.be44').addClass('show').css('display', 'block');
      $('.be44').removeClass('hide');
    },21000);
    setTimeout(function(){
      $('.black').addClass('show').css('display', 'block');
      $('.black').removeClass('hide');
      var m2 = new Audio('data/se/x.wav');
      m2.play();
      $('.show-carddc1').addClass('show').css('display', 'block');
      $('.show-carddc1').removeClass('hide');
    },24000);

  

  
});
$('.b51').click(function(e) {
  $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb1').addClass('hide');
  $('.sb1').addClass('hide');
  $('.zb2').addClass('hide');
  $('.yb2').addClass('hide');
  $('.xcb').addClass('hide');
  $('.scb').addClass('hide');
  $('.zcb').addClass('hide');
  $('.ycb').addClass('hide');
  $('.xcbb').addClass('hide');
  $('.xcb1').addClass('hide');
  $('.scb1').addClass('hide');
  $('.zcb1').addClass('hide');
  $('.ycb1').addClass('hide');
  $('.xcb2').addClass('hide');
  $('.scb2').addClass('hide');
  $('.zcb2').addClass('hide');
  $('.ycb2').addClass('hide');
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
    $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');    
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
  $('.show-card').addClass('hide');
  $('.show-card1').addClass('hide');
  $('.show-card2').addClass('hide');
  $('.show-card3').addClass('hide');
  $('.show-card4').addClass('hide');
  $('.show-card5').addClass('hide');
  $('.show-card6').addClass('hide');
  $('.show-card7').addClass('hide');
  $('.show-card8').addClass('hide');
  $('.show-card9').addClass('hide');
  $('.show-card10').addClass('hide');    
  $('.show-card11').addClass('hide');
  $('.show-card12').addClass('hide');
  $('.show-card13').addClass('hide');
  $('.show-card14').addClass('hide');
  $('.show-card15').addClass('hide');
  $('.show-card16').addClass('hide');
  $('.show-card17').addClass('hide');
  $('.show-card18').addClass('hide');
  $('.show-card19').addClass('hide');
  $('.show-card20').addClass('hide');
  $('.show-card21').addClass('hide');
  $('.show-card22').addClass('hide');
  $('.show-card23').addClass('hide');
  $('.show-card24').addClass('hide');
  $('.show-card25').addClass('hide');
  $('.show-card26').addClass('hide');
  $('.show-card27').addClass('hide');
  $('.show-card28').addClass('hide');
  $('.show-card29').addClass('hide');
  $('.show-card30').addClass('hide');
  $('.show-card31').addClass('hide');
  $('.show-card32').addClass('hide');
  $('.show-card33').addClass('hide');
  $('.show-card34').addClass('hide');
  $('.show-card35').addClass('hide');
  $('.show-card36').addClass('hide');
  $('.show-card37').addClass('hide');
  $('.show-card38').addClass('hide');
  $('.show-card39').addClass('hide');
  $('.show-card40').addClass('hide');
  $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide');  
  $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');
  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b54').addClass('hide');
  $('.b55').addClass('hide');
  $('.b56').addClass('hide');
  $('.b57').addClass('hide');
  $('.b58').addClass('hide');
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');

    
  var audio = document.getElementById("indexs");
  var vol1 = 0.50;
    var interval1 = 200; // 200ms interval
  
  var fadeout = setInterval(
    function() {
      // Reduce volume by 0.05 as long as it is above 0
      // This works as long as you start with a multiple of 0.05!
      if (vol1 > 0) {
        vol1 -= 0.05;
        audio.volume = vol1;
      }
      else {
        // Stop the setInterval when 0 is reached
        clearInterval(fadeout);
      }
    }, interval1);



    setTimeout(function(){
      var m1 = new Audio('data/se/be.wav');
      m1.play();
      $('.red').removeClass('hide');
      $('.red').addClass('show').css('display', 'block');
    },600);
    setTimeout(function(){
    
      $('.red1').removeClass('hide');
      $('.red1').addClass('show').css('display', 'block');
    },2100);
    setTimeout(function(){
    
      $('.red2').removeClass('hide');
      $('.red2').addClass('show').css('display', 'block');
    },3600);
    
      setTimeout(function(){
      $('.be5').addClass('show').css('display', 'block');
      $('.be5').removeClass('hide');
    },6500);
    setTimeout(function(){
      $('.be51').addClass('show').css('display', 'block');
      $('.be51').removeClass('hide');
    },9500);
    setTimeout(function(){
      $('.be52').addClass('show').css('display', 'block');
      $('.be52').removeClass('hide');
    },12500);
    setTimeout(function(){
      $('.be53').addClass('show').css('display', 'block');
      $('.be53').removeClass('hide');
    },15500);
    setTimeout(function(){
      $('.be54').addClass('show').css('display', 'block');
      $('.be54').removeClass('hide');
    },18500);
    setTimeout(function(){
      $('.be55').addClass('show').css('display', 'block');
      $('.be55').removeClass('hide');
    },21500);
    setTimeout(function(){
      $('.be56').addClass('show').css('display', 'block');
      $('.be56').removeClass('hide');
    },27000);
    
    setTimeout(function(){
      $('.black').addClass('show').css('display', 'block');
      $('.black').removeClass('hide');
      var m2 = new Audio('data/se/x.wav');
      m2.play();
      $('.show-carddc1').addClass('show').css('display', 'block');
      $('.show-carddc1').removeClass('hide');
    },30000);

  
});
$('.b52').click(function(e) {
  $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb1').addClass('hide');
  $('.sb1').addClass('hide');
  $('.zb2').addClass('hide');
  $('.yb2').addClass('hide');
  $('.xcb').addClass('hide');
  $('.scb').addClass('hide');
  $('.zcb').addClass('hide');
  $('.ycb').addClass('hide');
  $('.xcbb').addClass('hide');
  $('.xcb1').addClass('hide');
  $('.scb1').addClass('hide');
  $('.zcb1').addClass('hide');
  $('.ycb1').addClass('hide');
  $('.xcb2').addClass('hide');
  $('.scb2').addClass('hide');
  $('.zcb2').addClass('hide');
  $('.ycb2').addClass('hide');
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
    $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');    
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
  $('.show-card').addClass('hide');
  $('.show-card1').addClass('hide');
  $('.show-card2').addClass('hide');
  $('.show-card3').addClass('hide');
  $('.show-card4').addClass('hide');
  $('.show-card5').addClass('hide');
  $('.show-card6').addClass('hide');
  $('.show-card7').addClass('hide');
  $('.show-card8').addClass('hide');
  $('.show-card9').addClass('hide');
  $('.show-card10').addClass('hide');    
  $('.show-card11').addClass('hide');
  $('.show-card12').addClass('hide');
  $('.show-card13').addClass('hide');
  $('.show-card14').addClass('hide');
  $('.show-card15').addClass('hide');
  $('.show-card16').addClass('hide');
  $('.show-card17').addClass('hide');
  $('.show-card18').addClass('hide');
  $('.show-card19').addClass('hide');
  $('.show-card20').addClass('hide');
  $('.show-card21').addClass('hide');
  $('.show-card22').addClass('hide');
  $('.show-card23').addClass('hide');
  $('.show-card24').addClass('hide');
  $('.show-card25').addClass('hide');
  $('.show-card26').addClass('hide');
  $('.show-card27').addClass('hide');
  $('.show-card28').addClass('hide');
  $('.show-card29').addClass('hide');
  $('.show-card30').addClass('hide');
  $('.show-card31').addClass('hide');
  $('.show-card32').addClass('hide');
  $('.show-card33').addClass('hide');
  $('.show-card34').addClass('hide');
  $('.show-card35').addClass('hide');
  $('.show-card36').addClass('hide');
  $('.show-card37').addClass('hide');
  $('.show-card38').addClass('hide');
  $('.show-card39').addClass('hide');
  $('.show-card40').addClass('hide');
  $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide');  
  $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');
  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b54').addClass('hide');
  $('.b55').addClass('hide');
  $('.b56').addClass('hide');
  $('.b57').addClass('hide');
  $('.b58').addClass('hide');
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');
  
   
  var audio = document.getElementById("indexs");
  var vol1 = 0.50;
    var interval1 = 200; // 200ms interval
  
  var fadeout = setInterval(
    function() {
      // Reduce volume by 0.05 as long as it is above 0
      // This works as long as you start with a multiple of 0.05!
      if (vol1 > 0) {
        vol1 -= 0.05;
        audio.volume = vol1;
      }
      else {
        // Stop the setInterval when 0 is reached
        clearInterval(fadeout);
      }
    }, interval1);



    setTimeout(function(){
      var m1 = new Audio('data/se/be.wav');
      m1.play();
      $('.red').removeClass('hide');
      $('.red').addClass('show').css('display', 'block');
    },600);
    setTimeout(function(){
    
      $('.red1').removeClass('hide');
      $('.red1').addClass('show').css('display', 'block');
    },2100);
    setTimeout(function(){
    
      $('.red2').removeClass('hide');
      $('.red2').addClass('show').css('display', 'block');
    },3600);
    
      setTimeout(function(){
      $('.be5').addClass('show').css('display', 'block');
      $('.be5').removeClass('hide');
    },6500);
    setTimeout(function(){
      $('.be51').addClass('show').css('display', 'block');
      $('.be51').removeClass('hide');
    },9500);
    setTimeout(function(){
      $('.be52').addClass('show').css('display', 'block');
      $('.be52').removeClass('hide');
    },12500);
    setTimeout(function(){
      $('.be53').addClass('show').css('display', 'block');
      $('.be53').removeClass('hide');
    },15500);
    setTimeout(function(){
      $('.be54').addClass('show').css('display', 'block');
      $('.be54').removeClass('hide');
    },18500);
    setTimeout(function(){
      $('.be55').addClass('show').css('display', 'block');
      $('.be55').removeClass('hide');
    },21500);
    setTimeout(function(){
      $('.be56').addClass('show').css('display', 'block');
      $('.be56').removeClass('hide');
    },27000);
    
    setTimeout(function(){
      $('.black').addClass('show').css('display', 'block');
      $('.black').removeClass('hide');
      var m2 = new Audio('data/se/x.wav');
      m2.play();
      $('.show-carddc1').addClass('show').css('display', 'block');
      $('.show-carddc1').removeClass('hide');
    },30000);
  
});
$('.b61').click(function(e) {
  $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb1').addClass('hide');
  $('.sb1').addClass('hide');
  $('.zb2').addClass('hide');
  $('.yb2').addClass('hide');
  $('.xcb').addClass('hide');
  $('.scb').addClass('hide');
  $('.zcb').addClass('hide');
  $('.ycb').addClass('hide');
  $('.xcbb').addClass('hide');
  $('.xcb1').addClass('hide');
  $('.scb1').addClass('hide');
  $('.zcb1').addClass('hide');
  $('.ycb1').addClass('hide');
  $('.xcb2').addClass('hide');
  $('.scb2').addClass('hide');
  $('.zcb2').addClass('hide');
  $('.ycb2').addClass('hide');
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
    $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');    
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
  $('.show-card').addClass('hide');
  $('.show-card1').addClass('hide');
  $('.show-card2').addClass('hide');
  $('.show-card3').addClass('hide');
  $('.show-card4').addClass('hide');
  $('.show-card5').addClass('hide');
  $('.show-card6').addClass('hide');
  $('.show-card7').addClass('hide');
  $('.show-card8').addClass('hide');
  $('.show-card9').addClass('hide');
  $('.show-card10').addClass('hide');    
  $('.show-card11').addClass('hide');
  $('.show-card12').addClass('hide');
  $('.show-card13').addClass('hide');
  $('.show-card14').addClass('hide');
  $('.show-card15').addClass('hide');
  $('.show-card16').addClass('hide');
  $('.show-card17').addClass('hide');
  $('.show-card18').addClass('hide');
  $('.show-card19').addClass('hide');
  $('.show-card20').addClass('hide');
  $('.show-card21').addClass('hide');
  $('.show-card22').addClass('hide');
  $('.show-card23').addClass('hide');
  $('.show-card24').addClass('hide');
  $('.show-card25').addClass('hide');
  $('.show-card26').addClass('hide');
  $('.show-card27').addClass('hide');
  $('.show-card28').addClass('hide');
  $('.show-card29').addClass('hide');
  $('.show-card30').addClass('hide');
  $('.show-card31').addClass('hide');
  $('.show-card32').addClass('hide');
  $('.show-card33').addClass('hide');
  $('.show-card34').addClass('hide');
  $('.show-card35').addClass('hide');
  $('.show-card36').addClass('hide');
  $('.show-card37').addClass('hide');
  $('.show-card38').addClass('hide');
  $('.show-card39').addClass('hide');
  $('.show-card40').addClass('hide');
  $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide');  
  $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');
  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b54').addClass('hide');
  $('.b55').addClass('hide');
  $('.b56').addClass('hide');
  $('.b57').addClass('hide');
  $('.b58').addClass('hide');
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');
   
  var audio = document.getElementById("indexs");
  var vol1 = 0.50;
    var interval1 = 200; // 200ms interval
  
  var fadeout = setInterval(
    function() {
      // Reduce volume by 0.05 as long as it is above 0
      // This works as long as you start with a multiple of 0.05!
      if (vol1 > 0) {
        vol1 -= 0.05;
        audio.volume = vol1;
      }
      else {
        // Stop the setInterval when 0 is reached
        clearInterval(fadeout);
      }
    }, interval1);



    setTimeout(function(){
      var m1 = new Audio('data/se/be.wav');
      m1.play();
      $('.red').removeClass('hide');
      $('.red').addClass('show').css('display', 'block');
    },600);
    setTimeout(function(){
    
      $('.red1').removeClass('hide');
      $('.red1').addClass('show').css('display', 'block');
    },2100);
    setTimeout(function(){
    
      $('.red2').removeClass('hide');
      $('.red2').addClass('show').css('display', 'block');
    },3600);
    
      setTimeout(function(){
      $('.be6').addClass('show').css('display', 'block');
      $('.be5').removeClass('hide');
    },6500);
    setTimeout(function(){
      $('.be61').addClass('show').css('display', 'block');
      $('.be61').removeClass('hide');
    },9500);
    setTimeout(function(){
      $('.be62').addClass('show').css('display', 'block');
      $('.be62').removeClass('hide');
    },12500);
    setTimeout(function(){
      $('.be63').addClass('show').css('display', 'block');
      $('.be63').removeClass('hide');
    },15500);
    setTimeout(function(){
      $('.be64').addClass('show').css('display', 'block');
      $('.be64').removeClass('hide');
    },18500);
    setTimeout(function(){
      $('.be65').addClass('show').css('display', 'block');
      $('.be65').removeClass('hide');
    },24000);

    
    setTimeout(function(){
      $('.black').addClass('show').css('display', 'block');
      $('.black').removeClass('hide');
      var m2 = new Audio('data/se/x.wav');
      m2.play();
      $('.show-carddc1').addClass('show').css('display', 'block');
      $('.show-carddc1').removeClass('hide');
    },27000);
  
});

$('.b22').click(function(e){
  $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb1').addClass('hide');
  $('.sb1').addClass('hide');
  $('.zb2').addClass('hide');
  $('.yb2').addClass('hide');
  $('.xcb').addClass('hide');
  $('.scb').addClass('hide');
  $('.zcb').addClass('hide');
  $('.ycb').addClass('hide');
  $('.xcbb').addClass('hide');
  $('.xcb1').addClass('hide');
  $('.scb1').addClass('hide');
  $('.zcb1').addClass('hide');
  $('.ycb1').addClass('hide');
  $('.xcb2').addClass('hide');
  $('.scb2').addClass('hide');
  $('.zcb2').addClass('hide');
  $('.ycb2').addClass('hide');
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide');  
  $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');

  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b54').addClass('hide');
  $('.b55').addClass('hide');
  $('.b56').addClass('hide');
  $('.b57').addClass('hide');
  $('.b58').addClass('hide');
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');
  var div = document.getElementById('shang');
  var div1 = document.getElementById('xia');
  var div2 = document.getElementById('you');
  var div3 = document.getElementById('zuo');
  setTimeout(function() {
    $('.shang').removeClass('hide');
            $('.shang').addClass('show').css('display', 'block');
            $('.xia').removeClass('hide');
            $('.xia').addClass('show').css('display', 'block');
            $('.zuo').removeClass('hide');
            $('.zuo').addClass('show').css('display', 'block');
            $('.you').removeClass('hide');
            $('.you').addClass('show').css('display', 'block');
            div.style.visibility = 'visible';
            div1.style.visibility = 'visible';
            div2.style.visibility = 'visible';
            div3.style.visibility = 'visible';
            if(globalThis.start==1){ if(globalThis.e==1 && globalThis.s==1){
        
              $('.sb1').removeClass('hide');
              $('.sb1').addClass('show').css('display', 'block');
              $('.xcb1').removeClass('hide');
              $('.xcb1').addClass('show').css('display', 'block');
              $('.zcb1').removeClass('hide');
              $('.zcb1').addClass('show').css('display', 'block');
              $('.ycb1').removeClass('hide');
              $('.ycb1').addClass('show').css('display', 'block');
        
            }
            if(globalThis.e==1 && globalThis.a==1){
            
              $('.sb1').removeClass('hide');
              $('.sb1').addClass('show').css('display', 'block');
              $('.xcb1').removeClass('hide');
              $('.xcb1').addClass('show').css('display', 'block');
              $('.zcb1').removeClass('hide');
              $('.zcb1').addClass('show').css('display', 'block');
              $('.ycb1').removeClass('hide');
              $('.ycb1').addClass('show').css('display', 'block');
        
            }
            if(globalThis.e==1 && globalThis.k==1){
            
              $('.xb1').removeClass('hide');
              $('.xb1').addClass('show').css('display', 'block');
              $('.scb1').removeClass('hide');
              $('.scb1').addClass('show').css('display', 'block');
              $('.zcb1').removeClass('hide');
              $('.zcb1').addClass('show').css('display', 'block');
              $('.ycb1').removeClass('hide');
              $('.ycb1').addClass('show').css('display', 'block');
        
            }
            if(globalThis.e==2 && globalThis.s==1){
            
              $('.zb2').removeClass('hide');
              $('.zb2').addClass('show').css('display', 'block');
              $('.xcb2').removeClass('hide');
              $('.xcb2').addClass('show').css('display', 'block');
              $('.scb2').removeClass('hide');
              $('.scb2').addClass('show').css('display', 'block');
              $('.ycb2').removeClass('hide');
              $('.ycb2').addClass('show').css('display', 'block');
              
        
            }
            if(globalThis.e==2 && globalThis.a==1){
            
              $('.yb2').removeClass('hide');
              $('.yb2').addClass('show').css('display', 'block');
              $('.xcb2').removeClass('hide');
              $('.xcb2').addClass('show').css('display', 'block');
              $('.scb2').removeClass('hide');
              $('.scb2').addClass('show').css('display', 'block');
              $('.zcb2').removeClass('hide');
              $('.zcb2').addClass('show').css('display', 'block');
        
            }
            if(globalThis.e==2 && globalThis.k==1){
            
              $('.yb2').removeClass('hide');
              $('.yb2').addClass('show').css('display', 'block');
              $('.xcb2').removeClass('hide');
              $('.xcb2').addClass('show').css('display', 'block');
              $('.scb2').removeClass('hide');
              $('.scb2').addClass('show').css('display', 'block');
              $('.zcb2').removeClass('hide');
              $('.zcb2').addClass('show').css('display', 'block');
        
            }
        
        
            globalThis.e=globalThis.e+1}
  }, 600);




});
$('.b32').click(function(e){
  $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb1').addClass('hide');
  $('.sb1').addClass('hide');
  $('.zb2').addClass('hide');
  $('.yb2').addClass('hide');
  $('.xcb').addClass('hide');
  $('.scb').addClass('hide');
  $('.zcb').addClass('hide');
  $('.ycb').addClass('hide');
  $('.xcbb').addClass('hide');
  $('.xcb1').addClass('hide');
  $('.scb1').addClass('hide');
  $('.zcb1').addClass('hide');
  $('.ycb1').addClass('hide');
  $('.xcb2').addClass('hide');
  $('.scb2').addClass('hide');
  $('.zcb2').addClass('hide');
  $('.ycb2').addClass('hide');
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide'); 
  $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');

  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b54').addClass('hide');
  $('.b55').addClass('hide');
  $('.b56').addClass('hide');
  $('.b57').addClass('hide');
  $('.b58').addClass('hide');
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');
  var div = document.getElementById('shang');
  var div1 = document.getElementById('xia');
  var div2 = document.getElementById('you');
  var div3 = document.getElementById('zuo');
  setTimeout(function() {
    $('.shang').removeClass('hide');
            $('.shang').addClass('show').css('display', 'block');
            $('.xia').removeClass('hide');
            $('.xia').addClass('show').css('display', 'block');
            $('.zuo').removeClass('hide');
            $('.zuo').addClass('show').css('display', 'block');
            $('.you').removeClass('hide');
            $('.you').addClass('show').css('display', 'block');
            div.style.visibility = 'visible';
            div1.style.visibility = 'visible';
            div2.style.visibility = 'visible';
            div3.style.visibility = 'visible';
            if(globalThis.start==1){ if(globalThis.e==1 && globalThis.s==1){
        
              $('.sb1').removeClass('hide');
              $('.sb1').addClass('show').css('display', 'block');
              $('.xcb1').removeClass('hide');
              $('.xcb1').addClass('show').css('display', 'block');
              $('.zcb1').removeClass('hide');
              $('.zcb1').addClass('show').css('display', 'block');
              $('.ycb1').removeClass('hide');
              $('.ycb1').addClass('show').css('display', 'block');
        
            }
            if(globalThis.e==1 && globalThis.a==1){
            
              $('.sb1').removeClass('hide');
              $('.sb1').addClass('show').css('display', 'block');
              $('.xcb1').removeClass('hide');
              $('.xcb1').addClass('show').css('display', 'block');
              $('.zcb1').removeClass('hide');
              $('.zcb1').addClass('show').css('display', 'block');
              $('.ycb1').removeClass('hide');
              $('.ycb1').addClass('show').css('display', 'block');
        
            }
            if(globalThis.e==1 && globalThis.k==1){
            
              $('.xb1').removeClass('hide');
              $('.xb1').addClass('show').css('display', 'block');
              $('.scb1').removeClass('hide');
              $('.scb1').addClass('show').css('display', 'block');
              $('.zcb1').removeClass('hide');
              $('.zcb1').addClass('show').css('display', 'block');
              $('.ycb1').removeClass('hide');
              $('.ycb1').addClass('show').css('display', 'block');
        
            }
            if(globalThis.e==2 && globalThis.s==1){
            
              $('.zb2').removeClass('hide');
              $('.zb2').addClass('show').css('display', 'block');
              $('.xcb2').removeClass('hide');
              $('.xcb2').addClass('show').css('display', 'block');
              $('.scb2').removeClass('hide');
              $('.scb2').addClass('show').css('display', 'block');
              $('.ycb2').removeClass('hide');
              $('.ycb2').addClass('show').css('display', 'block');
              
        
            }
            if(globalThis.e==2 && globalThis.a==1){
            
              $('.yb2').removeClass('hide');
              $('.yb2').addClass('show').css('display', 'block');
              $('.xcb2').removeClass('hide');
              $('.xcb2').addClass('show').css('display', 'block');
              $('.scb2').removeClass('hide');
              $('.scb2').addClass('show').css('display', 'block');
              $('.zcb2').removeClass('hide');
              $('.zcb2').addClass('show').css('display', 'block');
        
            }
            if(globalThis.e==2 && globalThis.k==1){
            
              $('.yb2').removeClass('hide');
              $('.yb2').addClass('show').css('display', 'block');
              $('.xcb2').removeClass('hide');
              $('.xcb2').addClass('show').css('display', 'block');
              $('.scb2').removeClass('hide');
              $('.scb2').addClass('show').css('display', 'block');
              $('.zcb2').removeClass('hide');
              $('.zcb2').addClass('show').css('display', 'block');
        
            }
        
        
            globalThis.e=globalThis.e+1}
         
  }, 600);




});

$('.b42').click(function(e){
  $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb1').addClass('hide');
  $('.sb1').addClass('hide');
  $('.zb2').addClass('hide');
  $('.yb2').addClass('hide');
  $('.xcb').addClass('hide');
  $('.scb').addClass('hide');
  $('.zcb').addClass('hide');
  $('.ycb').addClass('hide');
  $('.xcbb').addClass('hide');
  $('.xcb1').addClass('hide');
  $('.scb1').addClass('hide');
  $('.zcb1').addClass('hide');
  $('.ycb1').addClass('hide');
  $('.xcb2').addClass('hide');
  $('.scb2').addClass('hide');
  $('.zcb2').addClass('hide');
  $('.ycb2').addClass('hide');
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide'); 
  $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');

  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b54').addClass('hide');
  $('.b55').addClass('hide');
  $('.b56').addClass('hide');
  $('.b57').addClass('hide');
  $('.b58').addClass('hide');
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');
  var div = document.getElementById('shang');
  var div1 = document.getElementById('xia');
  var div2 = document.getElementById('you');
  var div3 = document.getElementById('zuo');
  setTimeout(function() {
    $('.shang').removeClass('hide');
            $('.shang').addClass('show').css('display', 'block');
            $('.xia').removeClass('hide');
            $('.xia').addClass('show').css('display', 'block');
            $('.zuo').removeClass('hide');
            $('.zuo').addClass('show').css('display', 'block');
            $('.you').removeClass('hide');
            $('.you').addClass('show').css('display', 'block');
            div.style.visibility = 'visible';
            div1.style.visibility = 'visible';
            div2.style.visibility = 'visible';
            div3.style.visibility = 'visible';
            if(globalThis.start==1){ if(globalThis.e==1 && globalThis.s==1){
        
              $('.sb1').removeClass('hide');
              $('.sb1').addClass('show').css('display', 'block');
              $('.xcb1').removeClass('hide');
              $('.xcb1').addClass('show').css('display', 'block');
              $('.zcb1').removeClass('hide');
              $('.zcb1').addClass('show').css('display', 'block');
              $('.ycb1').removeClass('hide');
              $('.ycb1').addClass('show').css('display', 'block');
        
            }
            if(globalThis.e==1 && globalThis.a==1){
            
              $('.sb1').removeClass('hide');
              $('.sb1').addClass('show').css('display', 'block');
              $('.xcb1').removeClass('hide');
              $('.xcb1').addClass('show').css('display', 'block');
              $('.zcb1').removeClass('hide');
              $('.zcb1').addClass('show').css('display', 'block');
              $('.ycb1').removeClass('hide');
              $('.ycb1').addClass('show').css('display', 'block');
        
            }
            if(globalThis.e==1 && globalThis.k==1){
            
              $('.xb1').removeClass('hide');
              $('.xb1').addClass('show').css('display', 'block');
              $('.scb1').removeClass('hide');
              $('.scb1').addClass('show').css('display', 'block');
              $('.zcb1').removeClass('hide');
              $('.zcb1').addClass('show').css('display', 'block');
              $('.ycb1').removeClass('hide');
              $('.ycb1').addClass('show').css('display', 'block');
        
            }
            if(globalThis.e==2 && globalThis.s==1){
            
              $('.zb2').removeClass('hide');
              $('.zb2').addClass('show').css('display', 'block');
              $('.xcb2').removeClass('hide');
              $('.xcb2').addClass('show').css('display', 'block');
              $('.scb2').removeClass('hide');
              $('.scb2').addClass('show').css('display', 'block');
              $('.ycb2').removeClass('hide');
              $('.ycb2').addClass('show').css('display', 'block');
              
        
            }
            if(globalThis.e==2 && globalThis.a==1){
            
              $('.yb2').removeClass('hide');
              $('.yb2').addClass('show').css('display', 'block');
              $('.xcb2').removeClass('hide');
              $('.xcb2').addClass('show').css('display', 'block');
              $('.scb2').removeClass('hide');
              $('.scb2').addClass('show').css('display', 'block');
              $('.zcb2').removeClass('hide');
              $('.zcb2').addClass('show').css('display', 'block');
        
            }
            if(globalThis.e==2 && globalThis.k==1){
            
              $('.yb2').removeClass('hide');
              $('.yb2').addClass('show').css('display', 'block');
              $('.xcb2').removeClass('hide');
              $('.xcb2').addClass('show').css('display', 'block');
              $('.scb2').removeClass('hide');
              $('.scb2').addClass('show').css('display', 'block');
              $('.zcb2').removeClass('hide');
              $('.zcb2').addClass('show').css('display', 'block');
        
            }
        
        
            globalThis.e=globalThis.e+1}
         
  }, 600);



});

$('.b53').click(function(e){
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide');  
  $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');

  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b54').addClass('hide');
  $('.b55').addClass('hide');
  $('.b56').addClass('hide');
  $('.b57').addClass('hide');
  $('.b58').addClass('hide');
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');
  var div = document.getElementById('shang');
  var div1 = document.getElementById('xia');
  var div2 = document.getElementById('you');
  var div3 = document.getElementById('zuo');
  setTimeout(function() {
    $('.shang').removeClass('hide');
            $('.shang').addClass('show').css('display', 'block');
            $('.xia').removeClass('hide');
            $('.xia').addClass('show').css('display', 'block');
            $('.zuo').removeClass('hide');
            $('.zuo').addClass('show').css('display', 'block');
            $('.you').removeClass('hide');
            $('.you').addClass('show').css('display', 'block');
            div.style.visibility = 'visible';
            div1.style.visibility = 'visible';
            div2.style.visibility = 'visible';
            div3.style.visibility = 'visible';
            if(globalThis.start==1){ if(globalThis.e==1 && globalThis.s==1){
        
              $('.sb1').removeClass('hide');
              $('.sb1').addClass('show').css('display', 'block');
              $('.xcb1').removeClass('hide');
              $('.xcb1').addClass('show').css('display', 'block');
              $('.zcb1').removeClass('hide');
              $('.zcb1').addClass('show').css('display', 'block');
              $('.ycb1').removeClass('hide');
              $('.ycb1').addClass('show').css('display', 'block');
        
            }
            if(globalThis.e==1 && globalThis.a==1){
            
              $('.sb1').removeClass('hide');
              $('.sb1').addClass('show').css('display', 'block');
              $('.xcb1').removeClass('hide');
              $('.xcb1').addClass('show').css('display', 'block');
              $('.zcb1').removeClass('hide');
              $('.zcb1').addClass('show').css('display', 'block');
              $('.ycb1').removeClass('hide');
              $('.ycb1').addClass('show').css('display', 'block');
        
            }
            if(globalThis.e==1 && globalThis.k==1){
            
              $('.xb1').removeClass('hide');
              $('.xb1').addClass('show').css('display', 'block');
              $('.scb1').removeClass('hide');
              $('.scb1').addClass('show').css('display', 'block');
              $('.zcb1').removeClass('hide');
              $('.zcb1').addClass('show').css('display', 'block');
              $('.ycb1').removeClass('hide');
              $('.ycb1').addClass('show').css('display', 'block');
        
            }
            if(globalThis.e==2 && globalThis.s==1){
            
              $('.zb2').removeClass('hide');
              $('.zb2').addClass('show').css('display', 'block');
              $('.xcb2').removeClass('hide');
              $('.xcb2').addClass('show').css('display', 'block');
              $('.scb2').removeClass('hide');
              $('.scb2').addClass('show').css('display', 'block');
              $('.ycb2').removeClass('hide');
              $('.ycb2').addClass('show').css('display', 'block');
              
        
            }
            if(globalThis.e==2 && globalThis.a==1){
            
              $('.yb2').removeClass('hide');
              $('.yb2').addClass('show').css('display', 'block');
              $('.xcb2').removeClass('hide');
              $('.xcb2').addClass('show').css('display', 'block');
              $('.scb2').removeClass('hide');
              $('.scb2').addClass('show').css('display', 'block');
              $('.zcb2').removeClass('hide');
              $('.zcb2').addClass('show').css('display', 'block');
        
            }
            if(globalThis.e==2 && globalThis.k==1){
            
              $('.yb2').removeClass('hide');
              $('.yb2').addClass('show').css('display', 'block');
              $('.xcb2').removeClass('hide');
              $('.xcb2').addClass('show').css('display', 'block');
              $('.scb2').removeClass('hide');
              $('.scb2').addClass('show').css('display', 'block');
              $('.zcb2').removeClass('hide');
              $('.zcb2').addClass('show').css('display', 'block');
        
            }
        
        
            globalThis.e=globalThis.e+1}
         
  }, 600);



});

$('.b62').click(function(e){
  $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb1').addClass('hide');
  $('.sb1').addClass('hide');
  $('.zb2').addClass('hide');
  $('.yb2').addClass('hide');
  $('.xcb').addClass('hide');
  $('.scb').addClass('hide');
  $('.zcb').addClass('hide');
  $('.ycb').addClass('hide');
  $('.xcbb').addClass('hide');
  $('.xcb1').addClass('hide');
  $('.scb1').addClass('hide');
  $('.zcb1').addClass('hide');
  $('.ycb1').addClass('hide');
  $('.xcb2').addClass('hide');
  $('.scb2').addClass('hide');
  $('.zcb2').addClass('hide');
  $('.ycb2').addClass('hide');
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide');  
  $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');

  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b54').addClass('hide');
  $('.b55').addClass('hide');
  $('.b56').addClass('hide');
  $('.b57').addClass('hide');
  $('.b58').addClass('hide');
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');
  var div = document.getElementById('shang');
  var div1 = document.getElementById('xia');
  var div2 = document.getElementById('you');
  var div3 = document.getElementById('zuo');
  setTimeout(function() {
    $('.shang').removeClass('hide');
            $('.shang').addClass('show').css('display', 'block');
            $('.xia').removeClass('hide');
            $('.xia').addClass('show').css('display', 'block');
            $('.zuo').removeClass('hide');
            $('.zuo').addClass('show').css('display', 'block');
            $('.you').removeClass('hide');
            $('.you').addClass('show').css('display', 'block');
            div.style.visibility = 'visible';
            div1.style.visibility = 'visible';
            div2.style.visibility = 'visible';
            div3.style.visibility = 'visible';
            if(globalThis.start==1){ if(globalThis.e==1 && globalThis.s==1){
        
              $('.sb1').removeClass('hide');
              $('.sb1').addClass('show').css('display', 'block');
              $('.xcb1').removeClass('hide');
              $('.xcb1').addClass('show').css('display', 'block');
              $('.zcb1').removeClass('hide');
              $('.zcb1').addClass('show').css('display', 'block');
              $('.ycb1').removeClass('hide');
              $('.ycb1').addClass('show').css('display', 'block');
        
            }
            if(globalThis.e==1 && globalThis.a==1){
            
              $('.sb1').removeClass('hide');
              $('.sb1').addClass('show').css('display', 'block');
              $('.xcb1').removeClass('hide');
              $('.xcb1').addClass('show').css('display', 'block');
              $('.zcb1').removeClass('hide');
              $('.zcb1').addClass('show').css('display', 'block');
              $('.ycb1').removeClass('hide');
              $('.ycb1').addClass('show').css('display', 'block');
        
            }
            if(globalThis.e==1 && globalThis.k==1){
            
              $('.xb1').removeClass('hide');
              $('.xb1').addClass('show').css('display', 'block');
              $('.scb1').removeClass('hide');
              $('.scb1').addClass('show').css('display', 'block');
              $('.zcb1').removeClass('hide');
              $('.zcb1').addClass('show').css('display', 'block');
              $('.ycb1').removeClass('hide');
              $('.ycb1').addClass('show').css('display', 'block');
        
            }
            if(globalThis.e==2 && globalThis.s==1){
            
              $('.zb2').removeClass('hide');
              $('.zb2').addClass('show').css('display', 'block');
              $('.xcb2').removeClass('hide');
              $('.xcb2').addClass('show').css('display', 'block');
              $('.scb2').removeClass('hide');
              $('.scb2').addClass('show').css('display', 'block');
              $('.ycb2').removeClass('hide');
              $('.ycb2').addClass('show').css('display', 'block');
              
        
            }
            if(globalThis.e==2 && globalThis.a==1){
            
              $('.yb2').removeClass('hide');
              $('.yb2').addClass('show').css('display', 'block');
              $('.xcb2').removeClass('hide');
              $('.xcb2').addClass('show').css('display', 'block');
              $('.scb2').removeClass('hide');
              $('.scb2').addClass('show').css('display', 'block');
              $('.zcb2').removeClass('hide');
              $('.zcb2').addClass('show').css('display', 'block');
        
            }
            if(globalThis.e==2 && globalThis.k==1){
            
              $('.yb2').removeClass('hide');
              $('.yb2').addClass('show').css('display', 'block');
              $('.xcb2').removeClass('hide');
              $('.xcb2').addClass('show').css('display', 'block');
              $('.scb2').removeClass('hide');
              $('.scb2').addClass('show').css('display', 'block');
              $('.zcb2').removeClass('hide');
              $('.zcb2').addClass('show').css('display', 'block');
        
            }
        
        
            globalThis.e=globalThis.e+1}
         
  }, 600);



});

$('.show-card').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
    $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');    
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
    
  $('.card').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});



$('.show-card1').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
   $('.message22j').addClass('hide');
  $('.message22jj').addClass('hide');
  $('.message14j').addClass('hide');
  $('.message10j').addClass('hide');
  $('.message7j').addClass('hide');
  $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
  $('.message5j').addClass('hide');
  $('.message1j').addClass('hide');
  $('.messagej').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');    
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card1').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});


$('.show-card2').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');    
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card2').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});



$('.show-card3').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');    
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card3').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});
$('.show-card4').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');    
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card4').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});
$('.show-card5').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');    
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card5').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});

$('.show-card6').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');    
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card6').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});

$('.show-card7').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');    
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card7').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});

$('.show-card8').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');    
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card8').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});

$('.show-card9').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');    
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card9').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});
$('.show-card10').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card10').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});

$('.show-card11').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card11').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});

$('.show-card12').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card12').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});

$('.show-card13').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card13').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});

$('.show-card14').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card14').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});
$('.show-card15').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card15').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});
$('.show-card16').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card16').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});

$('.show-card17').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card17').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
  setTimeout(function(){
    $('.show-card18').addClass('show').css('display', 'block');
},1000);
});

$('.show-card20').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card20').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});
$('.show-card21').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card21').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});
$('.show-card22').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card22').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
  
  setTimeout(function(){
    var m1 = new Audio('data/se/be.wav');
    m1.play();
    $('.red').removeClass('hide');
    $('.red').addClass('show').css('display', 'block');
  },600);
  setTimeout(function(){
    $('.red').addClass('hide');
    $('.red').removeClass('show');
    var div = document.getElementById('red');
          div.style.visibility = 'hidden';
  },2200);
});
$('.show-card23').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card23').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});


$('.show-card24').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card24').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});
$('.show-card25').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card25').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});
$('.show-card26').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card26').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});
$('.show-card27').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card27').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});
$('.show-card28').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card28').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});

$('.show-card29').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card29').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});

$('.show-card30').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card30').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});
$('.show-card31').click(function(e) {
  setTimeout(function(){
    var m1 = new Audio('data/se/be.wav');
    m1.play();
    $('.red').removeClass('hide');
    $('.red').addClass('show').css('display', 'block');
  },600);
  setTimeout(function(){
    $('.red').addClass('hide');
    
    $('.red').removeClass('show');
    var div = document.getElementById('red');
          div.style.visibility = 'hidden';
  },2200);

  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
  $('.card31').addClass('show').css('display', 'block');
  $('.shang').addClass('hide');
  $('.xia').addClass('hide');
  $('.zuo').addClass('hide');
  $('.you').addClass('hide');
});
$('.show-card32').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();   
  $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message1').addClass('hide');
    $('.message2').addClass('hide');
$('.message2j').addClass('hide');
    $('.message3').addClass('hide');
    $('.message4').addClass('hide');
    $('.message5').addClass('hide');
    $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
    $('.message7').addClass('hide');
    $('.message8').addClass('hide');
   $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
    $('.message10').addClass('hide');
    $('.message11').addClass('hide');
    $('.message12').addClass('hide');
    $('.message13').addClass('hide');
    $('.message13j').addClass('hide');
    $('.message14').addClass('hide');
    $('.message15').addClass('hide');
    $('.message16').addClass('hide');
    $('.message17').addClass('hide');
    $('.message16j').addClass('hide');
    $('.message17j').addClass('hide');
    $('.message18').addClass('hide');
    $('.message19').addClass('hide');
    $('.message20').addClass('hide');
    $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
     $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
    $('.message23').addClass('hide');
  $('.card32').addClass('show').css('display', 'block');
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
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});

$('.card3 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card3').addClass('hide');
  setTimeout(function() {
    $('.card3').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});
$('.card4 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card4').addClass('hide');
  setTimeout(function() {
    $('.card4').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});
$('.card5 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card5').addClass('hide');
  setTimeout(function() {
    $('.card5').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});

$('.card6 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card6').addClass('hide');
  setTimeout(function() {
    $('.card6').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});

$('.card7 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card7').addClass('hide');
  setTimeout(function() {
    $('.card7').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});

$('.card8 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card8').addClass('hide');
  setTimeout(function() {
    $('.card8').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});

$('.card9 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card9').addClass('hide');
  setTimeout(function() {
    $('.card9').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});

$('.card10 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card10').addClass('hide');
  setTimeout(function() {
    $('.card10').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});
$('.card11 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card11').addClass('hide');
  setTimeout(function() {
    $('.card11').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});

$('.card12 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card12').addClass('hide');
  setTimeout(function() {
    $('.card12').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});
$('.card13 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card13').addClass('hide');
  setTimeout(function() {
    $('.card13').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});

$('.card14 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card14').addClass('hide');
  setTimeout(function() {
    $('.card14').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});

$('.card15 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card15').addClass('hide');
  setTimeout(function() {
    $('.card15').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});

$('.card16 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card16').addClass('hide');
  setTimeout(function() {
    $('.card16').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});

$('.card17 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card17').addClass('h');
  $('.show-card18').addClass('hide');

  setTimeout(function() {
    $('.card17').css('display', 'none').removeClass('show').removeClass('h');
    $('.show-card18').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});

$('.card18 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card18').addClass('h');
  $('.show-card19').addClass('hide');
  setTimeout(function() {
    $('.card18').css('display', 'none').removeClass('show').removeClass('h');
    $('.show-card19').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});


$('.card19 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card19').addClass('hide');
  setTimeout(function() {
    $('.card19').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb1').addClass('hide');
  $('.sb1').addClass('hide');
  $('.zb2').addClass('hide');
  $('.yb2').addClass('hide');
  $('.xcb').addClass('hide');
  $('.scb').addClass('hide');
  $('.zcb').addClass('hide');
  $('.ycb').addClass('hide');
  $('.xcbb').addClass('hide');
  $('.xcb1').addClass('hide');
  $('.scb1').addClass('hide');
  $('.zcb1').addClass('hide');
  $('.ycb1').addClass('hide');
  $('.xcb2').addClass('hide');
  $('.scb2').addClass('hide');
  $('.zcb2').addClass('hide');
  $('.ycb2').addClass('hide');
  $('.message22j').addClass('hide');
  $('.message22jj').addClass('hide');
  $('.message14j').addClass('hide');
  $('.message10j').addClass('hide');
  $('.message7j').addClass('hide');
  $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
  $('.message5j').addClass('hide');
  $('.message1j').addClass('hide');
  $('.messagej').addClass('hide');
  $('.message1').addClass('hide');
   $('.message').addClass('hide');
   $('.message1').addClass('hide');
   $('.message2').addClass('hide');
$('.message2j').addClass('hide');
   $('.message3').addClass('hide');
   $('.message4').addClass('hide');
   $('.message5').addClass('hide');
   $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
   $('.message7').addClass('hide');
   $('.message8').addClass('hide');
  $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
   $('.message10').addClass('hide');    
   $('.message11').addClass('hide');
   $('.message12').addClass('hide');
   $('.message13').addClass('hide');
   $('.message13j').addClass('hide');
   $('.message14').addClass('hide');
   $('.message15').addClass('hide');
   $('.message16').addClass('hide');
   $('.message17').addClass('hide');
   $('.message18').addClass('hide');
   $('.message19').addClass('hide');
   $('.message20').addClass('hide');
   $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
   
   $('.s1').addClass('hide');  
   $('.s11').addClass('hide'); 
   $('.s12').addClass('hide');
   $('.s2').addClass('hide');  
   $('.s21').addClass('hide'); 
   $('.s22').addClass('hide');
   $('.s3').addClass('hide');
   $('.s31').addClass('hide');
   $('.s32').addClass('hide');
   $('.s4').addClass('hide');
   $('.s41').addClass('hide');
   $('.s42').addClass('hide');
   $('.s43').addClass('hide');
   $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide');  
  $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');

  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b54').addClass('hide');
  $('.b55').addClass('hide');
  $('.b56').addClass('hide');
  $('.b57').addClass('hide');
  $('.b58').addClass('hide');
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');
  $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.yb').addClass('hide');
  $('.xb').addClass('hide');
  $('.show-card').addClass('hide');
    $('.show-card1').addClass('hide');
    $('.show-card2').addClass('hide');
    $('.show-card3').addClass('hide');
    $('.show-card4').addClass('hide');
    $('.show-card5').addClass('hide');
    $('.show-card6').addClass('hide');
    $('.show-card7').addClass('hide');
    $('.show-card8').addClass('hide');
    $('.show-card9').addClass('hide');
    $('.show-card10').addClass('hide');    
    $('.show-card11').addClass('hide');
    $('.show-card12').addClass('hide');
    $('.show-card13').addClass('hide');
    $('.show-card14').addClass('hide');
    $('.show-card15').addClass('hide');
    $('.show-card16').addClass('hide');
    $('.show-card17').addClass('hide');
    $('.show-card18').addClass('hide');
    $('.show-card19').addClass('hide');
    $('.show-card20').addClass('hide');
    $('.show-card21').addClass('hide');
    $('.show-card22').addClass('hide');
    $('.show-card23').addClass('hide');
    $('.show-card24').addClass('hide');
    $('.show-card25').addClass('hide');
    $('.show-card26').addClass('hide');
    $('.show-card27').addClass('hide');
    $('.show-card28').addClass('hide');
    $('.show-card29').addClass('hide');
    $('.show-card30').addClass('hide');
    $('.show-card31').addClass('hide');
    $('.show-card32').addClass('hide');
    $('.show-card33').addClass('hide');
    $('.show-card34').addClass('hide');
    $('.show-card35').addClass('hide');
    $('.show-card36').addClass('hide');
    $('.show-card37').addClass('hide');
    $('.show-card38').addClass('hide');
    $('.show-card39').addClass('hide');
    $('.show-card40').addClass('hide');
    
    var audio = document.getElementById("indexs");
    var vol1 = 0.50;
      var interval1 = 200; // 200ms interval
    
    var fadeout = setInterval(
      function() {
        // Reduce volume by 0.05 as long as it is above 0
        // This works as long as you start with a multiple of 0.05!
        if (vol1 > 0) {
          vol1 -= 0.05;
          audio.volume = vol1;
        }
        else {
          // Stop the setInterval when 0 is reached
          clearInterval(fadeout);
        }
      }, interval1);

  setTimeout(function(){
    var m1 = new Audio('data/se/be.wav');
    m1.play();
    $('.red').removeClass('hide');
    $('.red').addClass('show').css('display', 'block');
  },600);
  setTimeout(function(){
  
    $('.red1').removeClass('hide');
    $('.red1').addClass('show').css('display', 'block');
  },2100);
  setTimeout(function(){
  
    $('.red2').removeClass('hide');
    $('.red2').addClass('show').css('display', 'block');
  },3600);

  setTimeout(function(){
    $('.abe').addClass('show').css('display', 'block');
    $('.abe').removeClass('hide');
  },5500);
  setTimeout(function(){
    $('.abe1').addClass('show').css('display', 'block');
    $('.abe1').removeClass('hide');
  },7000);
  setTimeout(function(){
    $('.abe2').addClass('show').css('display', 'block');
    $('.abe2').removeClass('hide');
  },9300);
  setTimeout(function(){
    $('.abe3').addClass('show').css('display', 'block');
    $('.abe3').removeClass('hide');
  },11600);
  setTimeout(function(){
    $('.abe4').addClass('show').css('display', 'block');
    $('.abe4').removeClass('hide');
  },13900);
  setTimeout(function(){
    $('.abe5').addClass('show').css('display', 'block');
    $('.abe5').removeClass('hide');
  },16200);
  setTimeout(function(){
    var m = new Audio('data/se/abe.mp3');
    m.play();
  },16600);

  
  setTimeout(function(){
    $('.black').addClass('show').css('display', 'block');
    $('.black').removeClass('hide');
    var m2 = new Audio('data/se/x.wav');
    m2.play();
    $('.show-carddc2').addClass('show').css('display', 'block');
    $('.show-carddc2').removeClass('hide');
  },18800);
 


  // $('.shang').removeClass('hide');
  // $('.xia').removeClass('hide');
  // $('.zuo').removeClass('hide');
  // $('.you').removeClass('hide');
});
$('.card20 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card20').addClass('hide');
  setTimeout(function() {
    $('.card20').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});
$('.card21 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card21').addClass('hide');
  setTimeout(function() {
    $('.card21').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});

$('.card22 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card22').addClass('hide');
  setTimeout(function() {
    $('.card22').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});
$('.card23 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card23').addClass('hide');
  setTimeout(function() {
    $('.card23').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});

$('.card24 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card24').addClass('hide');
  setTimeout(function() {
    $('.card24').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});
$('.card25 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card25').addClass('hide');
  setTimeout(function() {
    $('.card25').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});
$('.card26 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card26').addClass('hide');
  setTimeout(function() {
    $('.card26').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});
$('.card27 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card27').addClass('hide');
  setTimeout(function() {
    $('.card27').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});

$('.card28 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card28').addClass('hide');
  setTimeout(function() {
    $('.card28').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});

$('.card29 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card29').addClass('hide');
  setTimeout(function() {
    $('.card29').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});

$('.card30 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card30').addClass('hide');
  setTimeout(function() {
    $('.card30').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});

$('.card31 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card31').addClass('hide');
  setTimeout(function() {
    $('.card31').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});
$('.card32 .close').click(function(e) {
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  $('.card32').addClass('hide');
  setTimeout(function() {
    $('.card32').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.shang').removeClass('hide');
  $('.xia').removeClass('hide');
  $('.zuo').removeClass('hide');
  $('.you').removeClass('hide');
});





$('.shang').click(function(e) {
  var music = new Audio('data/se/z.wav');
  music.volume=0.5;
  music.play();
  $('.message22j').addClass('hide');
  $('.message22jj').addClass('hide');
  $('.message14j').addClass('hide');
  $('.message10j').addClass('hide');
  $('.message7j').addClass('hide');
  $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
  $('.message5j').addClass('hide');
  $('.message1j').addClass('hide');
  $('.messagej').addClass('hide');
  $('.message1').addClass('hide');
   $('.message').addClass('hide');
   $('.message1').addClass('hide');
   $('.message2').addClass('hide');
$('.message2j').addClass('hide');
   $('.message3').addClass('hide');
   $('.message4').addClass('hide');
   $('.message5').addClass('hide');
   $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
   $('.message7').addClass('hide');
   $('.message8').addClass('hide');
  $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
   $('.message10').addClass('hide');    
   $('.message11').addClass('hide');
   $('.message12').addClass('hide');
   $('.message13').addClass('hide');
   $('.message13j').addClass('hide');
   $('.message14').addClass('hide');
   $('.message15').addClass('hide');
   $('.message16').addClass('hide');
   $('.message17').addClass('hide');   
   $('.message16j').addClass('hide');
   $('.message17j').addClass('hide');
   $('.message18').addClass('hide');
   $('.message19').addClass('hide');
   $('.message20').addClass('hide');
   $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
   
   $('.s1').addClass('hide');  
   $('.s11').addClass('hide'); 
   $('.s12').addClass('hide');
   $('.s2').addClass('hide');  
   $('.s21').addClass('hide'); 
   $('.s22').addClass('hide');
   $('.s3').addClass('hide');
   $('.s31').addClass('hide');
   $('.s32').addClass('hide');
   $('.s4').addClass('hide');
   $('.s41').addClass('hide');
   $('.s42').addClass('hide');
   $('.s43').addClass('hide');
   $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide');  
  $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');

  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b54').addClass('hide');
  $('.b55').addClass('hide');
  $('.b56').addClass('hide');
  $('.b57').addClass('hide');
  $('.b58').addClass('hide');
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');
  $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.xb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb1').addClass('hide');
  $('.sb1').addClass('hide');
  $('.zb2').addClass('hide');
  $('.yb2').addClass('hide');
  $('.xcb').addClass('hide');
  $('.scb').addClass('hide');
  $('.zcb').addClass('hide');
  $('.ycb').addClass('hide');
  $('.xcbb').addClass('hide');
  $('.xcb1').addClass('hide');
  $('.scb1').addClass('hide');
  $('.zcb1').addClass('hide');
  $('.ycb1').addClass('hide');
  $('.xcb2').addClass('hide');
  $('.scb2').addClass('hide');
  $('.zcb2').addClass('hide');
  $('.ycb2').addClass('hide');
  
  

   
  var r=Math.floor(Math.random() * 100) + 1;
  if(globalThis.flag==7){
    var div = document.getElementById('shang');
          var div1 = document.getElementById('xia');
          var div2 = document.getElementById('you');
          var div3 = document.getElementById('zuo');
          div.style.visibility = 'hidden';
          div1.style.visibility = 'hidden';
          div2.style.visibility = 'hidden';
          div3.style.visibility = 'hidden';
          $('.shang').addClass('hide');
          $('.you').addClass('hide');
          $('.zuo').addClass('hide');
          $('.xia').addClass('hide');


    if(globalThis.r==0){ 
      if(globalThis.e==2){

    $('.show-card').addClass('hide');
    $('.show-card1').addClass('hide');
    $('.show-card2').addClass('hide');
    $('.show-card3').addClass('hide');
    $('.show-card4').addClass('hide');
    $('.show-card5').addClass('hide');
    $('.show-card6').addClass('hide');
    $('.show-card7').addClass('hide');
    $('.show-card8').addClass('hide');
    $('.show-card9').addClass('hide');
    $('.show-card10').addClass('hide');    
    $('.show-card11').addClass('hide');
    $('.show-card12').addClass('hide');
    $('.show-card13').addClass('hide');
    $('.show-card14').addClass('hide');
    $('.show-card15').addClass('hide');
    $('.show-card16').addClass('hide');
    $('.show-card17').addClass('hide');
    $('.show-card18').addClass('hide');
    $('.show-card19').addClass('hide');
    $('.show-card20').addClass('hide');
    $('.show-card21').addClass('hide');
    $('.show-card22').addClass('hide');
    $('.show-card23').addClass('hide');
    $('.show-card24').addClass('hide');
    $('.show-card25').addClass('hide');
    $('.show-card26').addClass('hide');
    $('.show-card27').addClass('hide');
    $('.show-card28').addClass('hide');
    $('.show-card29').addClass('hide');
    $('.show-card30').addClass('hide');
    $('.show-card31').addClass('hide');
    $('.show-card32').addClass('hide');
    $('.show-card33').addClass('hide');
    $('.show-card34').addClass('hide');
    $('.show-card35').addClass('hide');
    $('.show-card36').addClass('hide');
    $('.show-card37').addClass('hide');
    $('.show-card38').addClass('hide');
    $('.show-card39').addClass('hide');
    $('.show-card40').addClass('hide');
         
    var audio = document.getElementById("indexs");
    var vol1 = 0.50;
      var interval1 = 200; // 200ms interval
    
    var fadeout = setInterval(
      function() {
        // Reduce volume by 0.05 as long as it is above 0
        // This works as long as you start with a multiple of 0.05!
        if (vol1 > 0) {
          vol1 -= 0.05;
          audio.volume = vol1;
        }
        else {
          // Stop the setInterval when 0 is reached
          clearInterval(fadeout);
        }
      }, interval1);     
setTimeout(function(){
var m1 = new Audio('data/se/be.wav');
m1.play();
$('.red').removeClass('hide');
$('.red').addClass('show').css('display', 'block');
},600);
setTimeout(function(){

$('.red1').removeClass('hide');
$('.red1').addClass('show').css('display', 'block');
},2100);
setTimeout(function(){

$('.red2').removeClass('hide');
$('.red2').addClass('show').css('display', 'block');
},3600);

setTimeout(function(){
$('.lbe').addClass('show').css('display', 'block');
$('.lbe').removeClass('hide');
},6500);
setTimeout(function(){
$('.lbe1').addClass('show').css('display', 'block');
$('.lbe1').removeClass('hide');
},8500);
setTimeout(function(){
$('.lbe2').addClass('show').css('display', 'block');
$('.lbe2').removeClass('hide');
},11500);
setTimeout(function(){
$('.lbe3').addClass('show').css('display', 'block');
$('.lbe3').removeClass('hide');
},13000);
setTimeout(function(){
$('.lbe4').addClass('show').css('display', 'block');
$('.lbe4').removeClass('hide');
},14500);
setTimeout(function(){
$('.lbe5').addClass('show').css('display', 'block');
$('.lbe5').removeClass('hide');
},17500);
setTimeout(function(){
$('.lbe6').addClass('show').css('display', 'block');
$('.lbe6').removeClass('hide');
},20500);
setTimeout(function(){
$('.lbe7').addClass('show').css('display', 'block');
$('.lbe7').removeClass('hide');
},26000);
setTimeout(function(){
$('.lbe8').addClass('show').css('display', 'block');
$('.lbe8').removeClass('hide');
},29000);
setTimeout(function(){
$('.lbe9').addClass('show').css('display', 'block');
$('.lbe9').removeClass('hide');
},30500);
setTimeout(function(){
$('.lbe10').addClass('show').css('display', 'block');
$('.lbe10').removeClass('hide');
},36000);


setTimeout(function(){
$('.black').addClass('show').css('display', 'block');
$('.black').removeClass('hide');
var m2 = new Audio('data/se/x.wav');
m2.play();
$('.show-carddc1').addClass('show').css('display', 'block');
$('.show-carddc1').removeClass('hide');
},38500);
      }
      if(globalThis.e<2){
        globalThis.e=globalThis.e +1
        var r=Math.floor(Math.random() * 100) + 1;
        if (r<50) {   
          
           var s = [1,2,3,4];
           var rands = s[Math.floor(Math.random()*4)];
           var f = '.s'+rands
           var f1 = '.s'+rands+'1'
           var f2 = '.s'+rands+'2'
           var f3 = '.s'+rands+'3'
           setTimeout(function() {
            $(f).removeClass('hide');
            $(f).addClass('show').css('display', 'block');
           }, 500);
           setTimeout(function() {
            $(f1).removeClass('hide');
            $(f1).addClass('show').css('display', 'block');
          }, 2000);
          setTimeout(function() {
            $(f2).removeClass('hide');
            $(f2).addClass('show').css('display', 'block');
          }, 3500);
          setTimeout(function() {
            $(f3).removeClass('hide');
            $(f3).addClass('show').css('display', 'block');
          }, 5000);
  
  
  
          setTimeout(function() {
          
            $('.shang').removeClass('hide');
            $('.shang').addClass('show').css('display', 'block');
            $('.xia').removeClass('hide');
            $('.xia').addClass('show').css('display', 'block');
            $('.zuo').removeClass('hide');
            $('.zuo').addClass('show').css('display', 'block');
            $('.you').removeClass('hide');
            $('.you').addClass('show').css('display', 'block');
            div.style.visibility = 'visible';
            div1.style.visibility = 'visible';
            div2.style.visibility = 'visible';
            div3.style.visibility = 'visible';
          }, 6000);
        } else {   
          
           var s = [10,5,6,7,8,9];
           var rands = s[Math.floor(Math.random()*6)];
           var f = '.s'+rands
           var f1 = '.s'+rands+'1'
           var f2 = '.s'+rands+'2'
           var f3 = '.s'+rands+'3'
           var rands1=rands - 4;
           var a1 = '.b'+rands1+'1'
           var a2 = '.b'+rands1+'2'
           var a3 = '.b'+rands1+'3'
           setTimeout(function() {
           $(f).removeClass('hide');
           $(f).addClass('show').css('display', 'block');
          }, 500);
           setTimeout(function() {
            $(f1).removeClass('hide');
            $(f1).addClass('show').css('display', 'block');
          }, 2000);
          setTimeout(function() {
            $(f2).removeClass('hide');
            $(f2).addClass('show').css('display', 'block');
          }, 3500);
          setTimeout(function() {
            $(f3).removeClass('hide');
            $(f3).addClass('show').css('display', 'block');
          }, 5000);
  
  
           setTimeout(function() {
            $(a1).removeClass('hide');
            $(a1).addClass('show').css('display', 'block');
            $(a2).removeClass('hide');
            $(a2).addClass('show').css('display', 'block');
            $(a3).removeClass('hide');
            $(a3).addClass('show').css('display', 'block');
          }, 6000);
    
        }


      }
     

    }else{
      if(globalThis.e==0){
        globalThis.start=1
        globalThis.e=globalThis.e+1
        var s = [1,2,3,4];
           var rands = s[Math.floor(Math.random()*4)];
           var f = '.s'+rands
           var f1 = '.s'+rands+'1'
           var f2 = '.s'+rands+'2'
           var f3 = '.s'+rands+'3'
           setTimeout(function() {
            $(f).removeClass('hide');
            $(f).addClass('show').css('display', 'block');
           }, 500);
           setTimeout(function() {
            $(f1).removeClass('hide');
            $(f1).addClass('show').css('display', 'block');
          }, 2000);
          setTimeout(function() {
            $(f2).removeClass('hide');
            $(f2).addClass('show').css('display', 'block');
          }, 3500);
          setTimeout(function() {
            $(f3).removeClass('hide');
            $(f3).addClass('show').css('display', 'block');
          }, 5000);
  
  
  
          setTimeout(function() {
          
            $('.shang').removeClass('hide');
            $('.shang').addClass('show').css('display', 'block');
            $('.xia').removeClass('hide');
            $('.xia').addClass('show').css('display', 'block');
            $('.zuo').removeClass('hide');
            $('.zuo').addClass('show').css('display', 'block');
            $('.you').removeClass('hide');
            $('.you').addClass('show').css('display', 'block');
            div.style.visibility = 'visible';
            div1.style.visibility = 'visible';
            div2.style.visibility = 'visible';
            div3.style.visibility = 'visible';
            if(globalThis.s==1){
        
              $('.sb').removeClass('hide');
              $('.sb').addClass('show').css('display', 'block');
              $('.xcb').removeClass('hide');
              $('.xcb').addClass('show').css('display', 'block');
              $('.zcb').removeClass('hide');
              $('.zcb').addClass('show').css('display', 'block');
              $('.ycb').removeClass('hide');
              $('.ycb').addClass('show').css('display', 'block');
    
            }
            if(globalThis.a==1){
        
              $('.xb').removeClass('hide');
              $('.xb').addClass('show').css('display', 'block');
              $('.scb').removeClass('hide');
              $('.scb').addClass('show').css('display', 'block');
              $('.zcb').removeClass('hide');
              $('.zcb').addClass('show').css('display', 'block');
              $('.ycb').removeClass('hide');
              $('.ycb').addClass('show').css('display', 'block');
    
            }
            if(globalThis.k==1){
        
              $('.zb').removeClass('hide');
              $('.zb').addClass('show').css('display', 'block');
              $('.zbj').removeClass('hide');
              $('.zbj').addClass('show').css('display', 'block');
              $('.xcbb').removeClass('hide');
              $('.xcbb').addClass('show').css('display', 'block');
              $('.scb').removeClass('hide');
              $('.scb').addClass('show').css('display', 'block');
              $('.ycb').removeClass('hide');
              $('.ycb').addClass('show').css('display', 'block');
    
            }

          }, 6000);

      }else{
      if(globalThis.e<3 && globalThis.e>0){
    
        var r=Math.floor(Math.random() * 100) + 1;
        if (r<50) {   
           var s = [1,2,3,4];
           var rands = s[Math.floor(Math.random()*4)];
           var f = '.s'+rands
           var f1 = '.s'+rands+'1'
           var f2 = '.s'+rands+'2'
           var f3 = '.s'+rands+'3'
           setTimeout(function() {
            $(f).removeClass('hide');
            $(f).addClass('show').css('display', 'block');
           }, 500);
           setTimeout(function() {
            $(f1).removeClass('hide');
            $(f1).addClass('show').css('display', 'block');
          }, 2000);
          setTimeout(function() {
            $(f2).removeClass('hide');
            $(f2).addClass('show').css('display', 'block');
          }, 3500);
          setTimeout(function() {
            $(f3).removeClass('hide');
            $(f3).addClass('show').css('display', 'block');
          }, 5000);
  
  
  
          setTimeout(function() {
          
            $('.shang').removeClass('hide');
            $('.shang').addClass('show').css('display', 'block');
            $('.xia').removeClass('hide');
            $('.xia').addClass('show').css('display', 'block');
            $('.zuo').removeClass('hide');
            $('.zuo').addClass('show').css('display', 'block');
            $('.you').removeClass('hide');
            $('.you').addClass('show').css('display', 'block');
            div.style.visibility = 'visible';
            div1.style.visibility = 'visible';
            div2.style.visibility = 'visible';
            div3.style.visibility = 'visible';
            
        if(globalThis.e==1 && globalThis.s==1){
        
          $('.sb1').removeClass('hide');
          $('.sb1').addClass('show').css('display', 'block');
          $('.xcb1').removeClass('hide');
          $('.xcb1').addClass('show').css('display', 'block');
          $('.zcb1').removeClass('hide');
          $('.zcb1').addClass('show').css('display', 'block');
          $('.ycb1').removeClass('hide');
          $('.ycb1').addClass('show').css('display', 'block');

        }
        if(globalThis.e==1 && globalThis.a==1){
        
          $('.sb1').removeClass('hide');
          $('.sb1').addClass('show').css('display', 'block');
          $('.xcb1').removeClass('hide');
          $('.xcb1').addClass('show').css('display', 'block');
          $('.zcb1').removeClass('hide');
          $('.zcb1').addClass('show').css('display', 'block');
          $('.ycb1').removeClass('hide');
          $('.ycb1').addClass('show').css('display', 'block');

        }
        if(globalThis.e==1 && globalThis.k==1){
        
          $('.xb1').removeClass('hide');
          $('.xb1').addClass('show').css('display', 'block');
          $('.scb1').removeClass('hide');
          $('.scb1').addClass('show').css('display', 'block');
          $('.zcb1').removeClass('hide');
          $('.zcb1').addClass('show').css('display', 'block');
          $('.ycb1').removeClass('hide');
          $('.ycb1').addClass('show').css('display', 'block');

        }
        if(globalThis.e==2 && globalThis.s==1){
        
          $('.zb2').removeClass('hide');
          $('.zb2').addClass('show').css('display', 'block');
          $('.xcb2').removeClass('hide');
          $('.xcb2').addClass('show').css('display', 'block');
          $('.scb2').removeClass('hide');
          $('.scb2').addClass('show').css('display', 'block');
          $('.ycb2').removeClass('hide');
          $('.ycb2').addClass('show').css('display', 'block');
          

        }
        if(globalThis.e==2 && globalThis.a==1){
        
          $('.yb2').removeClass('hide');
          $('.yb2').addClass('show').css('display', 'block');
          $('.xcb2').removeClass('hide');
          $('.xcb2').addClass('show').css('display', 'block');
          $('.scb2').removeClass('hide');
          $('.scb2').addClass('show').css('display', 'block');
          $('.zcb2').removeClass('hide');
          $('.zcb2').addClass('show').css('display', 'block');

        }
        if(globalThis.e==2 && globalThis.k==1){
        
          $('.yb2').removeClass('hide');
          $('.yb2').addClass('show').css('display', 'block');
          $('.xcb2').removeClass('hide');
          $('.xcb2').addClass('show').css('display', 'block');
          $('.scb2').removeClass('hide');
          $('.scb2').addClass('show').css('display', 'block');
          $('.zcb2').removeClass('hide');
          $('.zcb2').addClass('show').css('display', 'block');

        }


          globalThis.t=globalThis.t+'1'
        globalThis.e=globalThis.e+1

          }, 6000);
        } else { 
          
          globalThis.t=globalThis.t+'1'  
           var s = [10,5,6,7,8,9];
           var rands = s[Math.floor(Math.random()*6)];
           var f = '.s'+rands
           var f1 = '.s'+rands+'1'
           var f2 = '.s'+rands+'2'
           var f3 = '.s'+rands+'3'
           var rands1=rands - 4;
           var a1 = '.b'+rands1+'1'
           var a2 = '.b'+rands1+'2'
           var a3 = '.b'+rands1+'3'
           setTimeout(function() {
           $(f).removeClass('hide');
           $(f).addClass('show').css('display', 'block');
          }, 500);
           setTimeout(function() {
            $(f1).removeClass('hide');
            $(f1).addClass('show').css('display', 'block');
          }, 2000);
          setTimeout(function() {
            $(f2).removeClass('hide');
            $(f2).addClass('show').css('display', 'block');
          }, 3500);
          setTimeout(function() {
            $(f3).removeClass('hide');
            $(f3).addClass('show').css('display', 'block');
          }, 5000);
  
  
           setTimeout(function() {
            $(a1).removeClass('hide');
            $(a1).addClass('show').css('display', 'block');
            $(a2).removeClass('hide');
            $(a2).addClass('show').css('display', 'block');
            $(a3).removeClass('hide');
            $(a3).addClass('show').css('display', 'block');
          }, 6000);
    
        }
      }else{
      if(globalThis.e==3){
        globalThis.t=globalThis.t+'1'
        if(globalThis.k==1){
          if(globalThis.t=='243'){
            $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb1').addClass('hide');
  $('.sb1').addClass('hide');
  $('.zb2').addClass('hide');
  $('.yb2').addClass('hide');
  $('.xcb').addClass('hide');
  $('.scb').addClass('hide');
  $('.zcb').addClass('hide');
  $('.ycb').addClass('hide');
  $('.xcbb').addClass('hide');
  $('.xcb1').addClass('hide');
  $('.scb1').addClass('hide');
  $('.zcb1').addClass('hide');
  $('.ycb1').addClass('hide');
  $('.xcb2').addClass('hide');
  $('.scb2').addClass('hide');
  $('.zcb2').addClass('hide');
  $('.ycb2').addClass('hide');
  $('.message22j').addClass('hide');
  $('.message22jj').addClass('hide');
  $('.message14j').addClass('hide');
  $('.message10j').addClass('hide');
  $('.message7j').addClass('hide');
  $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
  $('.message5j').addClass('hide');
  $('.message1j').addClass('hide');
  $('.messagej').addClass('hide');
  $('.message1').addClass('hide');
   $('.message').addClass('hide');
   $('.message1').addClass('hide');
   $('.message2').addClass('hide');
$('.message2j').addClass('hide');
   $('.message3').addClass('hide');
   $('.message4').addClass('hide');
   $('.message5').addClass('hide');
   $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
   $('.message7').addClass('hide');
   $('.message8').addClass('hide');
  $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
   $('.message10').addClass('hide');    
   $('.message11').addClass('hide');
   $('.message12').addClass('hide');
   $('.message13').addClass('hide');
   $('.message13j').addClass('hide');
   $('.message14').addClass('hide');
   $('.message15').addClass('hide');
   $('.message16').addClass('hide');
   $('.message17').addClass('hide');
   $('.message18').addClass('hide');
   $('.message19').addClass('hide');
   $('.message20').addClass('hide');
   $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
   
   $('.s1').addClass('hide');  
   $('.s11').addClass('hide'); 
   $('.s12').addClass('hide');
   $('.s2').addClass('hide');  
   $('.s21').addClass('hide'); 
   $('.s22').addClass('hide');
   $('.s3').addClass('hide');
   $('.s31').addClass('hide');
   $('.s32').addClass('hide');
   $('.s4').addClass('hide');
   $('.s41').addClass('hide');
   $('.s42').addClass('hide');
   $('.s43').addClass('hide');
   $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide');  
  $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');

  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b54').addClass('hide');
  $('.b55').addClass('hide');
  $('.b56').addClass('hide');
  $('.b57').addClass('hide');
  $('.b58').addClass('hide');
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');
  $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.yb').addClass('hide');
  $('.xb').addClass('hide');
  $('.show-card').addClass('hide');
    $('.show-card1').addClass('hide');
    $('.show-card2').addClass('hide');
    $('.show-card3').addClass('hide');
    $('.show-card4').addClass('hide');
    $('.show-card5').addClass('hide');
    $('.show-card6').addClass('hide');
    $('.show-card7').addClass('hide');
    $('.show-card8').addClass('hide');
    $('.show-card9').addClass('hide');
    $('.show-card10').addClass('hide');    
    $('.show-card11').addClass('hide');
    $('.show-card12').addClass('hide');
    $('.show-card13').addClass('hide');
    $('.show-card14').addClass('hide');
    $('.show-card15').addClass('hide');
    $('.show-card16').addClass('hide');
    $('.show-card17').addClass('hide');
    $('.show-card18').addClass('hide');
    $('.show-card19').addClass('hide');
    $('.show-card20').addClass('hide');
    $('.show-card21').addClass('hide');
    $('.show-card22').addClass('hide');
    $('.show-card23').addClass('hide');
    $('.show-card24').addClass('hide');
    $('.show-card25').addClass('hide');
    $('.show-card26').addClass('hide');
    $('.show-card27').addClass('hide');
    $('.show-card28').addClass('hide');
    $('.show-card29').addClass('hide');
    $('.show-card30').addClass('hide');
    $('.show-card31').addClass('hide');
    $('.show-card32').addClass('hide');
    $('.show-card33').addClass('hide');
    $('.show-card34').addClass('hide');
    $('.show-card35').addClass('hide');
    $('.show-card36').addClass('hide');
    $('.show-card37').addClass('hide');
    $('.show-card38').addClass('hide');
    $('.show-card39').addClass('hide');
    $('.show-card40').addClass('hide');
           

            setTimeout(function(){
              $(".jsh").removeClass('hide');
              $(".jsh").addClass('show').css('display', 'block');
            },3000); 
            setTimeout(function(){
              $(".jsh1").removeClass('hide');
              $(".jsh1").addClass('show').css('display', 'block');
            },6000);
            setTimeout(function(){
              $(".jsh2").removeClass('hide');
              $(".jsh2").addClass('show').css('display', 'block');
            },9000);
            setTimeout(function(){
              $(".jsh3").removeClass('hide');
              $(".jsh3").addClass('show').css('display', 'block');
            },14500);
        
        
        }else{
          
    $('.show-card').addClass('hide');
    $('.show-card1').addClass('hide');
    $('.show-card2').addClass('hide');
    $('.show-card3').addClass('hide');
    $('.show-card4').addClass('hide');
    $('.show-card5').addClass('hide');
    $('.show-card6').addClass('hide');
    $('.show-card7').addClass('hide');
    $('.show-card8').addClass('hide');
    $('.show-card9').addClass('hide');
    $('.show-card10').addClass('hide');    
    $('.show-card11').addClass('hide');
    $('.show-card12').addClass('hide');
    $('.show-card13').addClass('hide');
    $('.show-card14').addClass('hide');
    $('.show-card15').addClass('hide');
    $('.show-card16').addClass('hide');
    $('.show-card17').addClass('hide');
    $('.show-card18').addClass('hide');
    $('.show-card19').addClass('hide');
    $('.show-card20').addClass('hide');
    $('.show-card21').addClass('hide');
    $('.show-card22').addClass('hide');
    $('.show-card23').addClass('hide');
    $('.show-card24').addClass('hide');
    $('.show-card25').addClass('hide');
    $('.show-card26').addClass('hide');
    $('.show-card27').addClass('hide');
    $('.show-card28').addClass('hide');
    $('.show-card29').addClass('hide');
    $('.show-card30').addClass('hide');
    $('.show-card31').addClass('hide');
    $('.show-card32').addClass('hide');
    $('.show-card33').addClass('hide');
    $('.show-card34').addClass('hide');
    $('.show-card35').addClass('hide');
    $('.show-card36').addClass('hide');
    $('.show-card37').addClass('hide');
    $('.show-card38').addClass('hide');
    $('.show-card39').addClass('hide');
    $('.show-card40').addClass('hide');
         
    var audio = document.getElementById("indexs");
    var vol1 = 0.50;
      var interval1 = 200; // 200ms interval
    
    var fadeout = setInterval(
      function() {
        // Reduce volume by 0.05 as long as it is above 0
        // This works as long as you start with a multiple of 0.05!
        if (vol1 > 0) {
          vol1 -= 0.05;
          audio.volume = vol1;
        }
        else {
          // Stop the setInterval when 0 is reached
          clearInterval(fadeout);
        }
      }, interval1);     
setTimeout(function(){
var m1 = new Audio('data/se/be.wav');
m1.play();
$('.red').removeClass('hide');
$('.red').addClass('show').css('display', 'block');
},600);
setTimeout(function(){

$('.red1').removeClass('hide');
$('.red1').addClass('show').css('display', 'block');
},2100);
setTimeout(function(){

$('.red2').removeClass('hide');
$('.red2').addClass('show').css('display', 'block');
},3600);

setTimeout(function(){
$('.lbe').addClass('show').css('display', 'block');
$('.lbe').removeClass('hide');
},6500);
setTimeout(function(){
$('.lbe1').addClass('show').css('display', 'block');
$('.lbe1').removeClass('hide');
},8500);
setTimeout(function(){
$('.lbe2').addClass('show').css('display', 'block');
$('.lbe2').removeClass('hide');
},11500);
setTimeout(function(){
$('.lbe3').addClass('show').css('display', 'block');
$('.lbe3').removeClass('hide');
},13000);
setTimeout(function(){
$('.lbe4').addClass('show').css('display', 'block');
$('.lbe4').removeClass('hide');
},14500);
setTimeout(function(){
$('.lbe5').addClass('show').css('display', 'block');
$('.lbe5').removeClass('hide');
},17500);
setTimeout(function(){
$('.lbe6').addClass('show').css('display', 'block');
$('.lbe6').removeClass('hide');
},20500);
setTimeout(function(){
$('.lbe7').addClass('show').css('display', 'block');
$('.lbe7').removeClass('hide');
},26000);
setTimeout(function(){
$('.lbe8').addClass('show').css('display', 'block');
$('.lbe8').removeClass('hide');
},29000);
setTimeout(function(){
$('.lbe9').addClass('show').css('display', 'block');
$('.lbe9').removeClass('hide');
},30500);
setTimeout(function(){
$('.lbe10').addClass('show').css('display', 'block');
$('.lbe10').removeClass('hide');
},36000);


setTimeout(function(){
$('.black').addClass('show').css('display', 'block');
$('.black').removeClass('hide');
var m2 = new Audio('data/se/x.wav');
m2.play();
$('.show-carddc1').addClass('show').css('display', 'block');
$('.show-carddc1').removeClass('hide');
},38500);


          }
        }
        if(globalThis.a==1){
          

           if(globalThis.t=='413'){
            $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb1').addClass('hide');
  $('.sb1').addClass('hide');
  $('.zb2').addClass('hide');
  $('.yb2').addClass('hide');
  $('.xcb').addClass('hide');
  $('.scb').addClass('hide');
  $('.zcb').addClass('hide');
  $('.ycb').addClass('hide');
  $('.xcbb').addClass('hide');
  $('.xcb1').addClass('hide');
  $('.scb1').addClass('hide');
  $('.zcb1').addClass('hide');
  $('.ycb1').addClass('hide');
  $('.xcb2').addClass('hide');
  $('.scb2').addClass('hide');
  $('.zcb2').addClass('hide');
  $('.ycb2').addClass('hide');
  $('.message22j').addClass('hide');
  $('.message22jj').addClass('hide');
  $('.message14j').addClass('hide');
  $('.message10j').addClass('hide');
  $('.message7j').addClass('hide');
  $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
  $('.message5j').addClass('hide');
  $('.message1j').addClass('hide');
  $('.messagej').addClass('hide');
  $('.message1').addClass('hide');
   $('.message').addClass('hide');
   $('.message1').addClass('hide');
   $('.message2').addClass('hide');
$('.message2j').addClass('hide');
   $('.message3').addClass('hide');
   $('.message4').addClass('hide');
   $('.message5').addClass('hide');
   $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
   $('.message7').addClass('hide');
   $('.message8').addClass('hide');
  $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
   $('.message10').addClass('hide');    
   $('.message11').addClass('hide');
   $('.message12').addClass('hide');
   $('.message13').addClass('hide');
   $('.message13j').addClass('hide');
   $('.message14').addClass('hide');
   $('.message15').addClass('hide');
   $('.message16').addClass('hide');
   $('.message17').addClass('hide');
   $('.message18').addClass('hide');
   $('.message19').addClass('hide');
   $('.message20').addClass('hide');
   $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
   
   $('.s1').addClass('hide');  
   $('.s11').addClass('hide'); 
   $('.s12').addClass('hide');
   $('.s2').addClass('hide');  
   $('.s21').addClass('hide'); 
   $('.s22').addClass('hide');
   $('.s3').addClass('hide');
   $('.s31').addClass('hide');
   $('.s32').addClass('hide');
   $('.s4').addClass('hide');
   $('.s41').addClass('hide');
   $('.s42').addClass('hide');
   $('.s43').addClass('hide');
   $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide');  
  $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');

  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b54').addClass('hide');
  $('.b55').addClass('hide');
  $('.b56').addClass('hide');
  $('.b57').addClass('hide');
  $('.b58').addClass('hide');
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');
  $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.yb').addClass('hide');
  $('.xb').addClass('hide');
  $('.show-card').addClass('hide');
    $('.show-card1').addClass('hide');
    $('.show-card2').addClass('hide');
    $('.show-card3').addClass('hide');
    $('.show-card4').addClass('hide');
    $('.show-card5').addClass('hide');
    $('.show-card6').addClass('hide');
    $('.show-card7').addClass('hide');
    $('.show-card8').addClass('hide');
    $('.show-card9').addClass('hide');
    $('.show-card10').addClass('hide');    
    $('.show-card11').addClass('hide');
    $('.show-card12').addClass('hide');
    $('.show-card13').addClass('hide');
    $('.show-card14').addClass('hide');
    $('.show-card15').addClass('hide');
    $('.show-card16').addClass('hide');
    $('.show-card17').addClass('hide');
    $('.show-card18').addClass('hide');
    $('.show-card19').addClass('hide');
    $('.show-card20').addClass('hide');
    $('.show-card21').addClass('hide');
    $('.show-card22').addClass('hide');
    $('.show-card23').addClass('hide');
    $('.show-card24').addClass('hide');
    $('.show-card25').addClass('hide');
    $('.show-card26').addClass('hide');
    $('.show-card27').addClass('hide');
    $('.show-card28').addClass('hide');
    $('.show-card29').addClass('hide');
    $('.show-card30').addClass('hide');
    $('.show-card31').addClass('hide');
    $('.show-card32').addClass('hide');
    $('.show-card33').addClass('hide');
    $('.show-card34').addClass('hide');
    $('.show-card35').addClass('hide');
    $('.show-card36').addClass('hide');
    $('.show-card37').addClass('hide');
    $('.show-card38').addClass('hide');
    $('.show-card39').addClass('hide');
    $('.show-card40').addClass('hide');
           

            setTimeout(function(){
              $(".jsh").removeClass('hide');
              $(".jsh").addClass('show').css('display', 'block');
            },3000); 
            setTimeout(function(){
              $(".jsh1").removeClass('hide');
              $(".jsh1").addClass('show').css('display', 'block');
            },6000);
            setTimeout(function(){
              $(".jsh2").removeClass('hide');
              $(".jsh2").addClass('show').css('display', 'block');
            },9000);
            setTimeout(function(){
              $(".jsh31").removeClass('hide');
              $(".jsh31").addClass('show').css('display', 'block');
            },14500);
          }else{
            
            
    $('.show-card').addClass('hide');
    $('.show-card1').addClass('hide');
    $('.show-card2').addClass('hide');
    $('.show-card3').addClass('hide');
    $('.show-card4').addClass('hide');
    $('.show-card5').addClass('hide');
    $('.show-card6').addClass('hide');
    $('.show-card7').addClass('hide');
    $('.show-card8').addClass('hide');
    $('.show-card9').addClass('hide');
    $('.show-card10').addClass('hide');    
    $('.show-card11').addClass('hide');
    $('.show-card12').addClass('hide');
    $('.show-card13').addClass('hide');
    $('.show-card14').addClass('hide');
    $('.show-card15').addClass('hide');
    $('.show-card16').addClass('hide');
    $('.show-card17').addClass('hide');
    $('.show-card18').addClass('hide');
    $('.show-card19').addClass('hide');
    $('.show-card20').addClass('hide');
    $('.show-card21').addClass('hide');
    $('.show-card22').addClass('hide');
    $('.show-card23').addClass('hide');
    $('.show-card24').addClass('hide');
    $('.show-card25').addClass('hide');
    $('.show-card26').addClass('hide');
    $('.show-card27').addClass('hide');
    $('.show-card28').addClass('hide');
    $('.show-card29').addClass('hide');
    $('.show-card30').addClass('hide');
    $('.show-card31').addClass('hide');
    $('.show-card32').addClass('hide');
    $('.show-card33').addClass('hide');
    $('.show-card34').addClass('hide');
    $('.show-card35').addClass('hide');
    $('.show-card36').addClass('hide');
    $('.show-card37').addClass('hide');
    $('.show-card38').addClass('hide');
    $('.show-card39').addClass('hide');
    $('.show-card40').addClass('hide');
         
    var audio = document.getElementById("indexs");
    var vol1 = 0.50;
      var interval1 = 200; // 200ms interval
    
    var fadeout = setInterval(
      function() {
        // Reduce volume by 0.05 as long as it is above 0
        // This works as long as you start with a multiple of 0.05!
        if (vol1 > 0) {
          vol1 -= 0.05;
          audio.volume = vol1;
        }
        else {
          // Stop the setInterval when 0 is reached
          clearInterval(fadeout);
        }
      }, interval1);     
setTimeout(function(){
var m1 = new Audio('data/se/be.wav');
m1.play();
$('.red').removeClass('hide');
$('.red').addClass('show').css('display', 'block');
},600);
setTimeout(function(){

$('.red1').removeClass('hide');
$('.red1').addClass('show').css('display', 'block');
},2100);
setTimeout(function(){

$('.red2').removeClass('hide');
$('.red2').addClass('show').css('display', 'block');
},3600);

setTimeout(function(){
$('.lbe').addClass('show').css('display', 'block');
$('.lbe').removeClass('hide');
},6500);
setTimeout(function(){
$('.lbe1').addClass('show').css('display', 'block');
$('.lbe1').removeClass('hide');
},8500);
setTimeout(function(){
$('.lbe2').addClass('show').css('display', 'block');
$('.lbe2').removeClass('hide');
},11500);
setTimeout(function(){
$('.lbe3').addClass('show').css('display', 'block');
$('.lbe3').removeClass('hide');
},13000);
setTimeout(function(){
$('.lbe4').addClass('show').css('display', 'block');
$('.lbe4').removeClass('hide');
},14500);
setTimeout(function(){
$('.lbe5').addClass('show').css('display', 'block');
$('.lbe5').removeClass('hide');
},17500);
setTimeout(function(){
$('.lbe6').addClass('show').css('display', 'block');
$('.lbe6').removeClass('hide');
},20500);
setTimeout(function(){
$('.lbe7').addClass('show').css('display', 'block');
$('.lbe7').removeClass('hide');
},26000);
setTimeout(function(){
$('.lbe8').addClass('show').css('display', 'block');
$('.lbe8').removeClass('hide');
},29000);
setTimeout(function(){
$('.lbe9').addClass('show').css('display', 'block');
$('.lbe9').removeClass('hide');
},30500);
setTimeout(function(){
$('.lbe10').addClass('show').css('display', 'block');
$('.lbe10').removeClass('hide');
},36000);


setTimeout(function(){
$('.black').addClass('show').css('display', 'block');
$('.black').removeClass('hide');
var m2 = new Audio('data/se/x.wav');
m2.play();
$('.show-carddc1').addClass('show').css('display', 'block');
$('.show-carddc1').removeClass('hide');
},38500);


          }

        }
        if(globalThis.s==1){

          if(globalThis.t=='112'){
            $('.sb').addClass('hide');
               $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
            $('.xb').addClass('hide');
            $('.zbj').addClass('hide');
            $('.xb1').addClass('hide');
            $('.sb1').addClass('hide');
            $('.zb2').addClass('hide');
            $('.yb2').addClass('hide');
            $('.xcb').addClass('hide');
            $('.scb').addClass('hide');
            $('.zcb').addClass('hide');
            $('.ycb').addClass('hide');
            $('.xcbb').addClass('hide');
            $('.xcb1').addClass('hide');
            $('.scb1').addClass('hide');
            $('.zcb1').addClass('hide');
            $('.ycb1').addClass('hide');
            $('.xcb2').addClass('hide');
            $('.scb2').addClass('hide');
            $('.zcb2').addClass('hide');
            $('.ycb2').addClass('hide');
            $('.message22j').addClass('hide');
            $('.message22jj').addClass('hide');
            $('.message14j').addClass('hide');
            $('.message10j').addClass('hide');
            $('.message7j').addClass('hide');
            $('.message6j').addClass('hide');
            $('.message6jj').addClass('hide');
            $('.message5j').addClass('hide');
            $('.message1j').addClass('hide');
            $('.messagej').addClass('hide');
            $('.message1').addClass('hide');
             $('.message').addClass('hide');
             $('.message1').addClass('hide');
             $('.message2').addClass('hide');
          $('.message2j').addClass('hide');
             $('.message3').addClass('hide');
             $('.message4').addClass('hide');
             $('.message5').addClass('hide');
             $('.message6').addClass('hide');
              $('.message6jj').addClass('hide');
             $('.message7').addClass('hide');
             $('.message8').addClass('hide');
            $('.message9').addClass('hide');
              $('.message9j').addClass('hide');
             $('.message10').addClass('hide');    
             $('.message11').addClass('hide');
             $('.message12').addClass('hide');
             $('.message13').addClass('hide');
             $('.message13j').addClass('hide');
             $('.message14').addClass('hide');
             $('.message15').addClass('hide');
             $('.message16').addClass('hide');
             $('.message17').addClass('hide');
             $('.message18').addClass('hide');
             $('.message19').addClass('hide');
             $('.message20').addClass('hide');
             $('.message20j').addClass('hide');
                $('.message21').addClass('hide');
             $('.message21j').addClass('hide');
              $('.message22').addClass('hide');
          $('.message22jjj').addClass('hide');
             $('.message22j').addClass('hide');
              $('.message22jj').addClass('hide');
              $('.message14j').addClass('hide');
              $('.message10j').addClass('hide');
              $('.message10jj').addClass('hide');
              $('.message7j').addClass('hide');
              $('.message6j').addClass('hide');
            $('.message6jj').addClass('hide');
              $('.message5j').addClass('hide');
              $('.message5jj').addClass('hide');
              $('.message1j').addClass('hide');
              $('.message1jj').addClass('hide');
              $('.messagej').addClass('hide');
              $('.messagejj').addClass('hide');
             $('.message23').addClass('hide');
             $('.message24').addClass('hide');
                $('.message21').addClass('hide');
             $('.message21j').addClass('hide');
              $('.message22').addClass('hide');
          $('.message22jjj').addClass('hide');
             $('.message22j').addClass('hide');
              $('.message22jj').addClass('hide');
              $('.message14j').addClass('hide');
              $('.message10j').addClass('hide');
              $('.message10jj').addClass('hide');
              $('.message7j').addClass('hide');
              $('.message6j').addClass('hide');
            $('.message6jj').addClass('hide');
              $('.message5j').addClass('hide');
              $('.message5jj').addClass('hide');
              $('.message1j').addClass('hide');
              $('.message1jj').addClass('hide');
              $('.messagej').addClass('hide');
              $('.messagejj').addClass('hide');
             $('.message23').addClass('hide');
             $('.message24').addClass('hide');
             
             $('.s1').addClass('hide');  
             $('.s11').addClass('hide'); 
             $('.s12').addClass('hide');
             $('.s2').addClass('hide');  
             $('.s21').addClass('hide'); 
             $('.s22').addClass('hide');
             $('.s3').addClass('hide');
             $('.s31').addClass('hide');
             $('.s32').addClass('hide');
             $('.s4').addClass('hide');
             $('.s41').addClass('hide');
             $('.s42').addClass('hide');
             $('.s43').addClass('hide');
             $('.s5').addClass('hide');
            $('.s51').addClass('hide');
            $('.s52').addClass('hide');  
            $('.s53').addClass('hide');
            $('.s6').addClass('hide');
            $('.s61').addClass('hide');
            $('.s62').addClass('hide');
            $('.s7').addClass('hide');
            $('.s71').addClass('hide');
            $('.s72').addClass('hide');
            $('.s83').addClass('hide');
            $('.s8').addClass('hide');
            $('.s81').addClass('hide');
            $('.s82').addClass('hide');
            $('.s9').addClass('hide');
            $('.s91').addClass('hide');
            $('.s92').addClass('hide');
            $('.s10').addClass('hide');
            $('.s101').addClass('hide');
            $('.s102').addClass('hide');
          
            
            $('.b11').addClass('hide');
            $('.b12').addClass('hide');
            $('.b21').addClass('hide');
            $('.b22').addClass('hide');
            $('.b31').addClass('hide');
            $('.b32').addClass('hide');
            $('.b41').addClass('hide');
            $('.b42').addClass('hide');
            $('.b51').addClass('hide');
            $('.b52').addClass('hide');
            $('.b53').addClass('hide');
            $('.b54').addClass('hide');
            $('.b55').addClass('hide');
            $('.b56').addClass('hide');
            $('.b57').addClass('hide');
            $('.b58').addClass('hide');
            $('.b61').addClass('hide');
            $('.b62').addClass('hide');
            $('.sb').addClass('hide');
               $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
            $('.xb').addClass('hide');
            $('.yb').addClass('hide');
            $('.xb').addClass('hide');
            $('.show-card').addClass('hide');
              $('.show-card1').addClass('hide');
              $('.show-card2').addClass('hide');
              $('.show-card3').addClass('hide');
              $('.show-card4').addClass('hide');
              $('.show-card5').addClass('hide');
              $('.show-card6').addClass('hide');
              $('.show-card7').addClass('hide');
              $('.show-card8').addClass('hide');
              $('.show-card9').addClass('hide');
              $('.show-card10').addClass('hide');    
              $('.show-card11').addClass('hide');
              $('.show-card12').addClass('hide');
              $('.show-card13').addClass('hide');
              $('.show-card14').addClass('hide');
              $('.show-card15').addClass('hide');
              $('.show-card16').addClass('hide');
              $('.show-card17').addClass('hide');
              $('.show-card18').addClass('hide');
              $('.show-card19').addClass('hide');
              $('.show-card20').addClass('hide');
              $('.show-card21').addClass('hide');
              $('.show-card22').addClass('hide');
              $('.show-card23').addClass('hide');
              $('.show-card24').addClass('hide');
              $('.show-card25').addClass('hide');
              $('.show-card26').addClass('hide');
              $('.show-card27').addClass('hide');
              $('.show-card28').addClass('hide');
              $('.show-card29').addClass('hide');
              $('.show-card30').addClass('hide');
              $('.show-card31').addClass('hide');
              $('.show-card32').addClass('hide');
              $('.show-card33').addClass('hide');
              $('.show-card34').addClass('hide');
              $('.show-card35').addClass('hide');
              $('.show-card36').addClass('hide');
              $('.show-card37').addClass('hide');
              $('.show-card38').addClass('hide');
              $('.show-card39').addClass('hide');
              $('.show-card40').addClass('hide');
                     
          
                      setTimeout(function(){
                        $(".jsh").removeClass('hide');
                        $(".jsh").addClass('show').css('display', 'block');
                      },3000); 
                      setTimeout(function(){
                        $(".jsh1").removeClass('hide');
                        $(".jsh1").addClass('show').css('display', 'block');
                      },6000);
                      setTimeout(function(){
                        $(".jsh2").removeClass('hide');
                        $(".jsh2").addClass('show').css('display', 'block');
                      },9000);
                      setTimeout(function(){
                        $(".jsh32").removeClass('hide');
                        $(".jsh32").addClass('show').css('display', 'block');
                      },14500);
        
        }else{
            
          
    $('.show-card').addClass('hide');
    $('.show-card1').addClass('hide');
    $('.show-card2').addClass('hide');
    $('.show-card3').addClass('hide');
    $('.show-card4').addClass('hide');
    $('.show-card5').addClass('hide');
    $('.show-card6').addClass('hide');
    $('.show-card7').addClass('hide');
    $('.show-card8').addClass('hide');
    $('.show-card9').addClass('hide');
    $('.show-card10').addClass('hide');    
    $('.show-card11').addClass('hide');
    $('.show-card12').addClass('hide');
    $('.show-card13').addClass('hide');
    $('.show-card14').addClass('hide');
    $('.show-card15').addClass('hide');
    $('.show-card16').addClass('hide');
    $('.show-card17').addClass('hide');
    $('.show-card18').addClass('hide');
    $('.show-card19').addClass('hide');
    $('.show-card20').addClass('hide');
    $('.show-card21').addClass('hide');
    $('.show-card22').addClass('hide');
    $('.show-card23').addClass('hide');
    $('.show-card24').addClass('hide');
    $('.show-card25').addClass('hide');
    $('.show-card26').addClass('hide');
    $('.show-card27').addClass('hide');
    $('.show-card28').addClass('hide');
    $('.show-card29').addClass('hide');
    $('.show-card30').addClass('hide');
    $('.show-card31').addClass('hide');
    $('.show-card32').addClass('hide');
    $('.show-card33').addClass('hide');
    $('.show-card34').addClass('hide');
    $('.show-card35').addClass('hide');
    $('.show-card36').addClass('hide');
    $('.show-card37').addClass('hide');
    $('.show-card38').addClass('hide');
    $('.show-card39').addClass('hide');
    $('.show-card40').addClass('hide');
         
    var audio = document.getElementById("indexs");
    var vol1 = 0.50;
      var interval1 = 200; // 200ms interval
    
    var fadeout = setInterval(
      function() {
        // Reduce volume by 0.05 as long as it is above 0
        // This works as long as you start with a multiple of 0.05!
        if (vol1 > 0) {
          vol1 -= 0.05;
          audio.volume = vol1;
        }
        else {
          // Stop the setInterval when 0 is reached
          clearInterval(fadeout);
        }
      }, interval1);     
setTimeout(function(){
var m1 = new Audio('data/se/be.wav');
m1.play();
$('.red').removeClass('hide');
$('.red').addClass('show').css('display', 'block');
},600);
setTimeout(function(){

$('.red1').removeClass('hide');
$('.red1').addClass('show').css('display', 'block');
},2100);
setTimeout(function(){

$('.red2').removeClass('hide');
$('.red2').addClass('show').css('display', 'block');
},3600);

setTimeout(function(){
$('.lbe').addClass('show').css('display', 'block');
$('.lbe').removeClass('hide');
},6500);
setTimeout(function(){
$('.lbe1').addClass('show').css('display', 'block');
$('.lbe1').removeClass('hide');
},8500);
setTimeout(function(){
$('.lbe2').addClass('show').css('display', 'block');
$('.lbe2').removeClass('hide');
},11500);
setTimeout(function(){
$('.lbe3').addClass('show').css('display', 'block');
$('.lbe3').removeClass('hide');
},13000);
setTimeout(function(){
$('.lbe4').addClass('show').css('display', 'block');
$('.lbe4').removeClass('hide');
},14500);
setTimeout(function(){
$('.lbe5').addClass('show').css('display', 'block');
$('.lbe5').removeClass('hide');
},17500);
setTimeout(function(){
$('.lbe6').addClass('show').css('display', 'block');
$('.lbe6').removeClass('hide');
},20500);
setTimeout(function(){
$('.lbe7').addClass('show').css('display', 'block');
$('.lbe7').removeClass('hide');
},26000);
setTimeout(function(){
$('.lbe8').addClass('show').css('display', 'block');
$('.lbe8').removeClass('hide');
},29000);
setTimeout(function(){
$('.lbe9').addClass('show').css('display', 'block');
$('.lbe9').removeClass('hide');
},30500);
setTimeout(function(){
$('.lbe10').addClass('show').css('display', 'block');
$('.lbe10').removeClass('hide');
},36000);


setTimeout(function(){
$('.black').addClass('show').css('display', 'block');
$('.black').removeClass('hide');
var m2 = new Audio('data/se/x.wav');
m2.play();
$('.show-carddc1').addClass('show').css('display', 'block');
$('.show-carddc1').removeClass('hide');
},38500);

          }
        }
  
      }
    }}}


  }else{

    if (r<50) {
      if (r<25) {   
        var div = document.getElementById('shang');
        var div1 = document.getElementById('xia');
        var div2 = document.getElementById('you');
        var div3 = document.getElementById('zuo');
        div.style.visibility = 'hidden';
        div1.style.visibility = 'hidden';
        div2.style.visibility = 'hidden';
        div3.style.visibility = 'hidden';
        $('.shang').addClass('hide');
        $('.you').addClass('hide');
        $('.zuo').addClass('hide');
        $('.xia').addClass('hide');
         var s = [1,2,3,4];
         var rands = s[Math.floor(Math.random()*4)];
         var f = '.s'+rands
         var f1 = '.s'+rands+'1'
         var f2 = '.s'+rands+'2'
         var f3 = '.s'+rands+'3'
         setTimeout(function() {
          $(f).removeClass('hide');
          $(f).addClass('show').css('display', 'block');
         }, 500);
         setTimeout(function() {
          $(f1).removeClass('hide');
          $(f1).addClass('show').css('display', 'block');
        }, 2000);
        setTimeout(function() {
          $(f2).removeClass('hide');
          $(f2).addClass('show').css('display', 'block');
        }, 3500);
        setTimeout(function() {
          $(f3).removeClass('hide');
          $(f3).addClass('show').css('display', 'block');
        }, 5000);



        setTimeout(function() {
        
          $('.shang').removeClass('hide');
          $('.shang').addClass('show').css('display', 'block');
          $('.xia').removeClass('hide');
          $('.xia').addClass('show').css('display', 'block');
          $('.zuo').removeClass('hide');
          $('.zuo').addClass('show').css('display', 'block');
          $('.you').removeClass('hide');
          $('.you').addClass('show').css('display', 'block');
          div.style.visibility = 'visible';
          div1.style.visibility = 'visible';
          div2.style.visibility = 'visible';
          div3.style.visibility = 'visible';
        }, 6000);
      } else {   
        $('.shang').addClass('hide');
        $('.you').addClass('hide');
        $('.zuo').addClass('hide');
        $('.xia').addClass('hide');
        var div = document.getElementById('shang');
        var div1 = document.getElementById('xia');
        var div2 = document.getElementById('you');
        var div3 = document.getElementById('zuo');
        div.style.visibility = 'hidden';
        div1.style.visibility = 'hidden';
        div2.style.visibility = 'hidden';
        div3.style.visibility = 'hidden';
         var s = [10,5,6,7,8,9];
         var rands = s[Math.floor(Math.random()*6)];
         var f = '.s'+rands
         var f1 = '.s'+rands+'1'
         var f2 = '.s'+rands+'2'
         var f3 = '.s'+rands+'3'
         var rands1=rands - 4;
         var a1 = '.b'+rands1+'1'
         var a2 = '.b'+rands1+'2'
         var a3 = '.b'+rands1+'3'
         setTimeout(function() {
         $(f).removeClass('hide');
         $(f).addClass('show').css('display', 'block');
        }, 500);
         setTimeout(function() {
          $(f1).removeClass('hide');
          $(f1).addClass('show').css('display', 'block');
        }, 2000);
        setTimeout(function() {
          $(f2).removeClass('hide');
          $(f2).addClass('show').css('display', 'block');
        }, 3500);
        setTimeout(function() {
          $(f3).removeClass('hide');
          $(f3).addClass('show').css('display', 'block');
        }, 5000);


         setTimeout(function() {
          $(a1).removeClass('hide');
          $(a1).addClass('show').css('display', 'block');
          $(a2).removeClass('hide');
          $(a2).addClass('show').css('display', 'block');
          $(a3).removeClass('hide');
          $(a3).addClass('show').css('display', 'block');
        }, 6000);
  
      }
      
    } else {
     
      if(globalThis.flag==6){   
        $('.message11').removeClass('hide');
        $('.message11').addClass('show').css('display', 'block');
        $('.show-card17').removeClass('hide');
        $('.show-card17').addClass('show').css('display', 'block');
        globalThis.r=1
        globalThis.a=1

        globalThis.flag=7
      }
      if(globalThis.flag==5){   
        setTimeout(function() {
          $('.message20j').removeClass('hide');
        $('.message20j').addClass('show').css('display', 'block');
        }, 1100);
        $('.message20').removeClass('hide');
        $('.message20').addClass('show').css('display', 'block');
        $('.show-card29').removeClass('hide');
        $('.show-card29').addClass('show').css('display', 'block');
   
        globalThis.flag=6
      }
      if(globalThis.flag==4){   
        $('.message14').removeClass('hide');
        $('.message14').addClass('show').css('display', 'block');
        setTimeout(function() {
          $('.message14j').removeClass('hide');
        $('.message14j').addClass('show').css('display', 'block');
        }, 1100);
        $('.show-card22').removeClass('hide');
        $('.show-card22').addClass('show').css('display', 'block');
        globalThis.flag=5
      }
      if(globalThis.flag==3){   
        $('.message10').removeClass('hide');
        $('.message10').addClass('show').css('display', 'block');
        setTimeout(function() {
          $('.message10j').removeClass('hide');
        $('.message10j').addClass('show').css('display', 'block');
        }, 1100);
        setTimeout(function() {
          $('.message10jj').removeClass('hide');
        $('.message10jj').addClass('show').css('display', 'block');
        }, 2200);
        $('.show-card16').removeClass('hide');
        $('.show-card16').addClass('show').css('display', 'block');
        
        globalThis.flag=4
      }
      if(globalThis.flag==2){   
        $('.message2').removeClass('hide');
        $('.message2').addClass('show').css('display', 'block');
        setTimeout(function() {
          $('.message2j').removeClass('hide');
        $('.message2j').addClass('show').css('display', 'block');
        }, 1100);
        $('.show-card10').removeClass('hide');
        $('.show-card10').addClass('show').css('display', 'block');

        globalThis.flag=3
      }
      if(globalThis.flag==1){   

        $('.message1').removeClass('hide');
        $('.message1').addClass('show').css('display', 'block');
        setTimeout(function() {
          $('.message1j').removeClass('hide');
        $('.message1j').addClass('show').css('display', 'block');
        }, 1100);
        setTimeout(function() {
          $('.message1jj').removeClass('hide');
        $('.message1jj').addClass('show').css('display', 'block');
        }, 2200);
        

        $('.show-card7').removeClass('hide');
        $('.show-card7').addClass('show').css('display', 'block');

        globalThis.flag=2
      }
      if(globalThis.flag==0){   
        $('.message').removeClass('hide');
        $('.message').addClass('show').css('display', 'block');
        setTimeout(function() {
          $('.messagej').removeClass('hide');
        $('.messagej').addClass('show').css('display', 'block');
        }, 1100);
        setTimeout(function() {
          $('.messagejj').removeClass('hide');
        $('.messagejj').addClass('show').css('display', 'block');
        }, 2200);
        
        $('.show-card3').removeClass('hide');
        $('.show-card3').addClass('show').css('display', 'block');
        
        globalThis.flag=1
      }
  
    }
    
  }

  
  
  
  
});

$('.zuo').click(function(e) {
  var music = new Audio('data/se/z.wav');
  music.volume=0.5;
  music.play();  
  $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb1').addClass('hide');
  $('.sb1').addClass('hide');
  $('.zb2').addClass('hide');
  $('.yb2').addClass('hide');
  $('.xcb').addClass('hide');
  $('.scb').addClass('hide');
  $('.zcb').addClass('hide');
  $('.ycb').addClass('hide');
  $('.xcbb').addClass('hide');
  $('.xcb1').addClass('hide');
  $('.scb1').addClass('hide');
  $('.zcb1').addClass('hide');
  $('.ycb1').addClass('hide');
  $('.xcb2').addClass('hide');
  $('.scb2').addClass('hide');
  $('.zcb2').addClass('hide');
  $('.ycb2').addClass('hide');
  $('.message22j').addClass('hide');
  $('.message22jj').addClass('hide');
  $('.message14j').addClass('hide');
  $('.message10j').addClass('hide');
  $('.message7j').addClass('hide');
  $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
  $('.message5j').addClass('hide');
  $('.message1j').addClass('hide');
  $('.messagej').addClass('hide');
  $('.message1').addClass('hide');
   $('.message').addClass('hide');
   $('.message1').addClass('hide');
   $('.message2').addClass('hide');
$('.message2j').addClass('hide');
   $('.message3').addClass('hide');
   $('.message4').addClass('hide');
   $('.message5').addClass('hide');
   $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
   $('.message7').addClass('hide');
   $('.message8').addClass('hide');
  $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
   $('.message10').addClass('hide');    
   $('.message11').addClass('hide');
   $('.message12').addClass('hide');
   $('.message13').addClass('hide');
   $('.message13j').addClass('hide');
   $('.message14').addClass('hide');
   $('.message15').addClass('hide');
   $('.message16').addClass('hide');
   $('.message17').addClass('hide');
   $('.message16j').addClass('hide');
   $('.message17j').addClass('hide');
   $('.message18').addClass('hide');
   $('.message19').addClass('hide');
   $('.message20').addClass('hide');
   $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
   $('.s1').addClass('hide');  
   $('.s11').addClass('hide'); 
   $('.s12').addClass('hide');
   $('.s2').addClass('hide');  
   $('.s21').addClass('hide'); 
   $('.s22').addClass('hide');
   $('.s3').addClass('hide');
   $('.s31').addClass('hide');
   $('.s32').addClass('hide');
   $('.s4').addClass('hide');
   $('.s41').addClass('hide');
   $('.s42').addClass('hide');
   $('.s43').addClass('hide');
   $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide');  
  $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');

  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');


   var r=Math.floor(Math.random() * 100) + 1;
  // if(globalThis.flag==7){
  //   if(globalThis.r==0){
  //     if(globalThis.e==2){

  //       $('.show-card').addClass('hide');
  //   $('.show-card1').addClass('hide');
  //   $('.show-card2').addClass('hide');
  //   $('.show-card3').addClass('hide');
  //   $('.show-card4').addClass('hide');
  //   $('.show-card5').addClass('hide');
  //   $('.show-card6').addClass('hide');
  //   $('.show-card7').addClass('hide');
  //   $('.show-card8').addClass('hide');
  //   $('.show-card9').addClass('hide');
  //   $('.show-card10').addClass('hide');    
  //   $('.show-card11').addClass('hide');
  //   $('.show-card12').addClass('hide');
  //   $('.show-card13').addClass('hide');
  //   $('.show-card14').addClass('hide');
  //   $('.show-card15').addClass('hide');
  //   $('.show-card16').addClass('hide');
  //   $('.show-card17').addClass('hide');
  //   $('.show-card18').addClass('hide');
  //   $('.show-card19').addClass('hide');
  //   $('.show-card20').addClass('hide');
  //   $('.show-card21').addClass('hide');
  //   $('.show-card22').addClass('hide');
  //   $('.show-card23').addClass('hide');
  //   $('.show-card24').addClass('hide');
  //   $('.show-card25').addClass('hide');
  //   $('.show-card26').addClass('hide');
  //   $('.show-card27').addClass('hide');
  //   $('.show-card28').addClass('hide');
  //   $('.show-card29').addClass('hide');
  //   $('.show-card30').addClass('hide');
  //   $('.show-card31').addClass('hide');
  //   $('.show-card32').addClass('hide');
  //   $('.show-card33').addClass('hide');
  //   $('.show-card34').addClass('hide');
  //   $('.show-card35').addClass('hide');
  //   $('.show-card36').addClass('hide');
  //   $('.show-card37').addClass('hide');
  //   $('.show-card38').addClass('hide');
  //   $('.show-card39').addClass('hide');
  //   $('.show-card40').addClass('hide');
  //   var div = document.getElementById('shang');
  //         var div1 = document.getElementById('xia');
  //         var div2 = document.getElementById('you');
  //         var div3 = document.getElementById('zuo');
  //         div.style.visibility = 'hidden';
  //         div1.style.visibility = 'hidden';
  //         div2.style.visibility = 'hidden';
  //         div3.style.visibility = 'hidden';
  //         $('.shang').addClass('hide');
  //         $('.you').addClass('hide');
  //         $('.zuo').addClass('hide');
  //         $('.xia').addClass('hide');
         
  //         var audio = document.getElementById("indexs");
  //         var vol1 = 0.50;
  //           var interval1 = 200; // 200ms interval
          
  //         var fadeout = setInterval(
  //           function() {
  //             // Reduce volume by 0.05 as long as it is above 0
  //             // This works as long as you start with a multiple of 0.05!
  //             if (vol1 > 0) {
  //               vol1 -= 0.05;
  //               audio.volume = vol1;
  //             }
  //             else {
  //               // Stop the setInterval when 0 is reached
  //               clearInterval(fadeout);
  //             }
  //           }, interval1);     
  // setTimeout(function(){
  //   var m1 = new Audio('data/se/be.wav');
  //   m1.play();
  //   $('.red').removeClass('hide');
  //   $('.red').addClass('show').css('display', 'block');
  // },600);
  // setTimeout(function(){
  
  //   $('.red1').removeClass('hide');
  //   $('.red1').addClass('show').css('display', 'block');
  // },2100);
  // setTimeout(function(){
  
  //   $('.red2').removeClass('hide');
  //   $('.red2').addClass('show').css('display', 'block');
  // },3600);
  
  // setTimeout(function(){
  //   $('.lbe').addClass('show').css('display', 'block');
  //   $('.lbe').removeClass('hide');
  //   },6500);
  //   setTimeout(function(){
  //   $('.lbe1').addClass('show').css('display', 'block');
  //   $('.lbe1').removeClass('hide');
  //   },8500);
  //   setTimeout(function(){
  //   $('.lbe2').addClass('show').css('display', 'block');
  //   $('.lbe2').removeClass('hide');
  //   },11500);
  //   setTimeout(function(){
  //   $('.lbe3').addClass('show').css('display', 'block');
  //   $('.lbe3').removeClass('hide');
  //   },13000);
  //   setTimeout(function(){
  //   $('.lbe4').addClass('show').css('display', 'block');
  //   $('.lbe4').removeClass('hide');
  //   },14500);
  //   setTimeout(function(){
  //   $('.lbe5').addClass('show').css('display', 'block');
  //   $('.lbe5').removeClass('hide');
  //   },17500);
  //   setTimeout(function(){
  //   $('.lbe6').addClass('show').css('display', 'block');
  //   $('.lbe6').removeClass('hide');
  //   },20500);
  //   setTimeout(function(){
  //   $('.lbe7').addClass('show').css('display', 'block');
  //   $('.lbe7').removeClass('hide');
  //   },26000);
  //   setTimeout(function(){
  //   $('.lbe8').addClass('show').css('display', 'block');
  //   $('.lbe8').removeClass('hide');
  //   },29000);
  //   setTimeout(function(){
  //   $('.lbe9').addClass('show').css('display', 'block');
  //   $('.lbe9').removeClass('hide');
  //   },30500);
  //   setTimeout(function(){
  //   $('.lbe10').addClass('show').css('display', 'block');
  //   $('.lbe10').removeClass('hide');
  //   },36000);
    
    
  //   setTimeout(function(){
  //   $('.black').addClass('show').css('display', 'block');
  //   $('.black').removeClass('hide');
  //   var m2 = new Audio('data/se/x.wav');
  //   m2.play();
  //   $('.show-carddc1').addClass('show').css('display', 'block');
  //   $('.show-carddc1').removeClass('hide');
  //   },38500);
  //     }
  //     if(globalThis.e<2){
  //       globalThis.e=globalThis.e +1
  //       var r=Math.floor(Math.random() * 100) + 1;
  //       if (r<50) {   
  //         var div = document.getElementById('shang');
  //         var div1 = document.getElementById('xia');
  //         var div2 = document.getElementById('you');
  //         var div3 = document.getElementById('zuo');
  //         div.style.visibility = 'hidden';
  //         div1.style.visibility = 'hidden';
  //         div2.style.visibility = 'hidden';
  //         div3.style.visibility = 'hidden';
  //         $('.shang').addClass('hide');
  //         $('.you').addClass('hide');
  //         $('.zuo').addClass('hide');
  //         $('.xia').addClass('hide');
  //          var s = [1,2,3,4];
  //          var rands = s[Math.floor(Math.random()*4)];
  //          var f = '.s'+rands
  //          var f1 = '.s'+rands+'1'
  //          var f2 = '.s'+rands+'2'
  //          var f3 = '.s'+rands+'3'
  //          setTimeout(function() {
  //           $(f).removeClass('hide');
  //           $(f).addClass('show').css('display', 'block');
  //          }, 500);
  //          setTimeout(function() {
  //           $(f1).removeClass('hide');
  //           $(f1).addClass('show').css('display', 'block');
  //         }, 2000);
  //         setTimeout(function() {
  //           $(f2).removeClass('hide');
  //           $(f2).addClass('show').css('display', 'block');
  //         }, 3500);
  //         setTimeout(function() {
  //           $(f3).removeClass('hide');
  //           $(f3).addClass('show').css('display', 'block');
  //         }, 5000);
  
  
  
  //         setTimeout(function() {
          
  //           $('.shang').removeClass('hide');
  //           $('.shang').addClass('show').css('display', 'block');
  //           $('.xia').removeClass('hide');
  //           $('.xia').addClass('show').css('display', 'block');
  //           $('.zuo').removeClass('hide');
  //           $('.zuo').addClass('show').css('display', 'block');
  //           $('.you').removeClass('hide');
  //           $('.you').addClass('show').css('display', 'block');
  //           div.style.visibility = 'visible';
  //           div1.style.visibility = 'visible';
  //           div2.style.visibility = 'visible';
  //           div3.style.visibility = 'visible';
  //         }, 6000);
  //       } else {   
  //         $('.shang').addClass('hide');
  //         $('.you').addClass('hide');
  //         $('.zuo').addClass('hide');
  //         $('.xia').addClass('hide');
  //         var div = document.getElementById('shang');
  //         var div1 = document.getElementById('xia');
  //         var div2 = document.getElementById('you');
  //         var div3 = document.getElementById('zuo');
  //         div.style.visibility = 'hidden';
  //         div1.style.visibility = 'hidden';
  //         div2.style.visibility = 'hidden';
  //         div3.style.visibility = 'hidden';
  //          var s = [10,5,6,7,8,9];
  //          var rands = s[Math.floor(Math.random()*6)];
  //          var f = '.s'+rands
  //          var f1 = '.s'+rands+'1'
  //          var f2 = '.s'+rands+'2'
  //          var f3 = '.s'+rands+'3'
  //          var rands1=rands - 4;
  //          var a1 = '.b'+rands1+'1'
  //          var a2 = '.b'+rands1+'2'
  //          var a3 = '.b'+rands1+'3'
  //          setTimeout(function() {
  //          $(f).removeClass('hide');
  //          $(f).addClass('show').css('display', 'block');
  //         }, 500);
  //          setTimeout(function() {
  //           $(f1).removeClass('hide');
  //           $(f1).addClass('show').css('display', 'block');
  //         }, 2000);
  //         setTimeout(function() {
  //           $(f2).removeClass('hide');
  //           $(f2).addClass('show').css('display', 'block');
  //         }, 3500);
  //         setTimeout(function() {
  //           $(f3).removeClass('hide');
  //           $(f3).addClass('show').css('display', 'block');
  //         }, 5000);
  
  
  //          setTimeout(function() {
  //           $(a1).removeClass('hide');
  //           $(a1).addClass('show').css('display', 'block');
  //           $(a2).removeClass('hide');
  //           $(a2).addClass('show').css('display', 'block');
  //           $(a3).removeClass('hide');
  //           $(a3).addClass('show').css('display', 'block');
  //         }, 6000);
    
  //       }


  //     }
     

  //   }else{
  //     if(globalThis.e==0){
  //       globalThis.e=globalThis.e+1
  //       var s = [1,2,3,4];
  //          var rands = s[Math.floor(Math.random()*4)];
  //          var f = '.s'+rands
  //          var f1 = '.s'+rands+'1'
  //          var f2 = '.s'+rands+'2'
  //          var f3 = '.s'+rands+'3'
  //          setTimeout(function() {
  //           $(f).removeClass('hide');
  //           $(f).addClass('show').css('display', 'block');
  //          }, 500);
  //          setTimeout(function() {
  //           $(f1).removeClass('hide');
  //           $(f1).addClass('show').css('display', 'block');
  //         }, 2000);
  //         setTimeout(function() {
  //           $(f2).removeClass('hide');
  //           $(f2).addClass('show').css('display', 'block');
  //         }, 3500);
  //         setTimeout(function() {
  //           $(f3).removeClass('hide');
  //           $(f3).addClass('show').css('display', 'block');
  //         }, 5000);
  
  
  
  //         setTimeout(function() {
          
  //           $('.shang').removeClass('hide');
  //           $('.shang').addClass('show').css('display', 'block');
  //           $('.xia').removeClass('hide');
  //           $('.xia').addClass('show').css('display', 'block');
  //           $('.zuo').removeClass('hide');
  //           $('.zuo').addClass('show').css('display', 'block');
  //           $('.you').removeClass('hide');
  //           $('.you').addClass('show').css('display', 'block');
  //           div.style.visibility = 'visible';
  //           div1.style.visibility = 'visible';
  //           div2.style.visibility = 'visible';
  //           div3.style.visibility = 'visible';
  //           if(globalThis.s==1){
        
  //             $('.sb').removeClass('hide');
  //             $('.sb').addClass('show').css('display', 'block');
    
  //           }
  //           if(globalThis.a==1){
        
  //             $('.xb').removeClass('hide');
  //             $('.xb').addClass('show').css('display', 'block');
    
  //           }
  //           if(globalThis.k==1){
        
  //             $('.zb').removeClass('hide');
  //             $('.zb').addClass('show').css('display', 'block');
    
  //           }

  //         }, 6000);

  //     }
  //     if(globalThis.e<4 && globalThis.e>0){

        
  //       if(globalThis.e<3){
  //       globalThis.t=globalThis.t+'2'}
  //       globalThis.e=globalThis.e+1
  //       var r=Math.floor(Math.random() * 100) + 1;
  //       if (r<50) {   
  //         var div = document.getElementById('shang');
  //         var div1 = document.getElementById('xia');
  //         var div2 = document.getElementById('you');
  //         var div3 = document.getElementById('zuo');
  //         div.style.visibility = 'hidden';
  //         div1.style.visibility = 'hidden';
  //         div2.style.visibility = 'hidden';
  //         div3.style.visibility = 'hidden';
  //         $('.shang').addClass('hide');
  //         $('.you').addClass('hide');
  //         $('.zuo').addClass('hide');
  //         $('.xia').addClass('hide');
  //          var s = [1,2,3,4];
  //          var rands = s[Math.floor(Math.random()*4)];
  //          var f = '.s'+rands
  //          var f1 = '.s'+rands+'1'
  //          var f2 = '.s'+rands+'2'
  //          var f3 = '.s'+rands+'3'
  //          setTimeout(function() {
  //           $(f).removeClass('hide');
  //           $(f).addClass('show').css('display', 'block');
  //          }, 500);
  //          setTimeout(function() {
  //           $(f1).removeClass('hide');
  //           $(f1).addClass('show').css('display', 'block');
  //         }, 2000);
  //         setTimeout(function() {
  //           $(f2).removeClass('hide');
  //           $(f2).addClass('show').css('display', 'block');
  //         }, 3500);
  //         setTimeout(function() {
  //           $(f3).removeClass('hide');
  //           $(f3).addClass('show').css('display', 'block');
  //         }, 5000);
  
  
  
  //         setTimeout(function() {
          
  //           $('.shang').removeClass('hide');
  //           $('.shang').addClass('show').css('display', 'block');
  //           $('.xia').removeClass('hide');
  //           $('.xia').addClass('show').css('display', 'block');
  //           $('.zuo').removeClass('hide');
  //           $('.zuo').addClass('show').css('display', 'block');
  //           $('.you').removeClass('hide');
  //           $('.you').addClass('show').css('display', 'block');
  //           div.style.visibility = 'visible';
  //           div1.style.visibility = 'visible';
  //           div2.style.visibility = 'visible';
  //           div3.style.visibility = 'visible';
  //           if(globalThis.e==1 && globalThis.s==1){
        
  //             $('.sb1').removeClass('hide');
  //             $('.sb1').addClass('show').css('display', 'block');
    
  //           }
  //           if(globalThis.e==1 && globalThis.a==1){
            
  //             $('.sb1').removeClass('hide');
  //             $('.sb1').addClass('show').css('display', 'block');
    
  //           }
  //           if(globalThis.e==1 && globalThis.k==1){
            
  //             $('.xb1').removeClass('hide');
  //             $('.xb1').addClass('show').css('display', 'block');
    
  //           }
  //           if(globalThis.e==2 && globalThis.s==1){
            
  //             $('.zb1').removeClass('hide');
  //             $('.zb1').addClass('show').css('display', 'block');
    
  //           }
  //           if(globalThis.e==2 && globalThis.a==1){
            
  //             $('.yb1').removeClass('hide');
  //             $('.yb1').addClass('show').css('display', 'block');
    
  //           }
  //           if(globalThis.e==2 && globalThis.k==1){
            
  //             $('.yb1').removeClass('hide');
  //             $('.yb1').addClass('show').css('display', 'block');
    
  //           }
         

            
  //         }, 6000);
  //       } else {   
  //         $('.shang').addClass('hide');
  //         $('.you').addClass('hide');
  //         $('.zuo').addClass('hide');
  //         $('.xia').addClass('hide');
  //         var div = document.getElementById('shang');
  //         var div1 = document.getElementById('xia');
  //         var div2 = document.getElementById('you');
  //         var div3 = document.getElementById('zuo');
  //         div.style.visibility = 'hidden';
  //         div1.style.visibility = 'hidden';
  //         div2.style.visibility = 'hidden';
  //         div3.style.visibility = 'hidden';
  //          var s = [10,5,6,7,8,9];
  //          var rands = s[Math.floor(Math.random()*6)];
  //          var f = '.s'+rands
  //          var f1 = '.s'+rands+'1'
  //          var f2 = '.s'+rands+'2'
  //          var f3 = '.s'+rands+'3'
  //          var rands1=rands - 4;
  //          var a1 = '.b'+rands1+'1'
  //          var a2 = '.b'+rands1+'2'
  //          var a3 = '.b'+rands1+'3'
  //          setTimeout(function() {
  //          $(f).removeClass('hide');
  //          $(f).addClass('show').css('display', 'block');
  //         }, 500);
  //          setTimeout(function() {
  //           $(f1).removeClass('hide');
  //           $(f1).addClass('show').css('display', 'block');
  //         }, 2000);
  //         setTimeout(function() {
  //           $(f2).removeClass('hide');
  //           $(f2).addClass('show').css('display', 'block');
  //         }, 3500);
  //         setTimeout(function() {
  //           $(f3).removeClass('hide');
  //           $(f3).addClass('show').css('display', 'block');
  //         }, 5000);
  
  
  //          setTimeout(function() {
  //           $(a1).removeClass('hide');
  //           $(a1).addClass('show').css('display', 'block');
  //           $(a2).removeClass('hide');
  //           $(a2).addClass('show').css('display', 'block');
  //           $(a3).removeClass('hide');
  //           $(a3).addClass('show').css('display', 'block');
  //         }, 6000);
    
  //       }
  //     }else{
  //     if(globalThis.e==5){
  //       if(globalThis.k==1){
  //         if(globalThis.t='243'){
  //           $(".ksh").removeClass('hide');
  //         $(".ksh").addClass('show').css('display', 'block');}else{
            
  //           var audio = document.getElementById("indexs");
  //           var vol1 = 0.50;
  //             var interval1 = 200; // 200ms interval
            
  //           var fadeout = setInterval(
  //             function() {
  //               // Reduce volume by 0.05 as long as it is above 0
  //               // This works as long as you start with a multiple of 0.05!
  //               if (vol1 > 0) {
  //                 vol1 -= 0.05;
  //                 audio.volume = vol1;
  //               }
  //               else {
  //                 // Stop the setInterval when 0 is reached
  //                 clearInterval(fadeout);
  //               }
  //             }, interval1);     
  //   setTimeout(function(){
  //     var m1 = new Audio('data/se/be.wav');
  //     m1.play();
  //     $('.red').removeClass('hide');
  //     $('.red').addClass('show').css('display', 'block');
  //   },600);
  //   setTimeout(function(){
    
  //     $('.red1').removeClass('hide');
  //     $('.red1').addClass('show').css('display', 'block');
  //   },2100);
  //   setTimeout(function(){
    
  //     $('.red2').removeClass('hide');
  //     $('.red2').addClass('show').css('display', 'block');
  //   },3600);
  //   setTimeout(function(){
  //     $('.lbe').addClass('show').css('display', 'block');
  //     $('.lbe').removeClass('hide');
  //     },6500);
  //     setTimeout(function(){
  //     $('.lbe1').addClass('show').css('display', 'block');
  //     $('.lbe1').removeClass('hide');
  //     },8500);
  //     setTimeout(function(){
  //     $('.lbe2').addClass('show').css('display', 'block');
  //     $('.lbe2').removeClass('hide');
  //     },11500);
  //     setTimeout(function(){
  //     $('.lbe3').addClass('show').css('display', 'block');
  //     $('.lbe3').removeClass('hide');
  //     },13000);
  //     setTimeout(function(){
  //     $('.lbe4').addClass('show').css('display', 'block');
  //     $('.lbe4').removeClass('hide');
  //     },14500);
  //     setTimeout(function(){
  //     $('.lbe5').addClass('show').css('display', 'block');
  //     $('.lbe5').removeClass('hide');
  //     },17500);
  //     setTimeout(function(){
  //     $('.lbe6').addClass('show').css('display', 'block');
  //     $('.lbe6').removeClass('hide');
  //     },20500);
  //     setTimeout(function(){
  //     $('.lbe7').addClass('show').css('display', 'block');
  //     $('.lbe7').removeClass('hide');
  //     },26000);
  //     setTimeout(function(){
  //     $('.lbe8').addClass('show').css('display', 'block');
  //     $('.lbe8').removeClass('hide');
  //     },29000);
  //     setTimeout(function(){
  //     $('.lbe9').addClass('show').css('display', 'block');
  //     $('.lbe9').removeClass('hide');
  //     },30500);
  //     setTimeout(function(){
  //     $('.lbe10').addClass('show').css('display', 'block');
  //     $('.lbe10').removeClass('hide');
  //     },36000);
      
      
  //     setTimeout(function(){
  //     $('.black').addClass('show').css('display', 'block');
  //     $('.black').removeClass('hide');
  //     var m2 = new Audio('data/se/x.wav');
  //     m2.play();
  //     $('.show-carddc1').addClass('show').css('display', 'block');
  //     $('.show-carddc1').removeClass('hide');
  //     },38500);



  //         }
          

  //       }
  //       if(globalThis.a==1){

  //         if(globalThis.t='413'){
  //           $(".ash").removeClass('hide');
  //         $(".ash").addClass('show').css('display', 'block');}else{
            
  //           var audio = document.getElementById("indexs");
  //           var vol1 = 0.50;
  //             var interval1 = 200; // 200ms interval
            
  //           var fadeout = setInterval(
  //             function() {
  //               // Reduce volume by 0.05 as long as it is above 0
  //               // This works as long as you start with a multiple of 0.05!
  //               if (vol1 > 0) {
  //                 vol1 -= 0.05;
  //                 audio.volume = vol1;
  //               }
  //               else {
  //                 // Stop the setInterval when 0 is reached
  //                 clearInterval(fadeout);
  //               }
  //             }, interval1);     
  //   setTimeout(function(){
  //     var m1 = new Audio('data/se/be.wav');
  //     m1.play();
  //     $('.red').removeClass('hide');
  //     $('.red').addClass('show').css('display', 'block');
  //   },600);
  //   setTimeout(function(){
    
  //     $('.red1').removeClass('hide');
  //     $('.red1').addClass('show').css('display', 'block');
  //   },2100);
  //   setTimeout(function(){
    
  //     $('.red2').removeClass('hide');
  //     $('.red2').addClass('show').css('display', 'block');
  //   },3600);
    
  //   setTimeout(function(){
  //     $('.lbe').addClass('show').css('display', 'block');
  //     $('.lbe').removeClass('hide');
  //     },6500);
  //     setTimeout(function(){
  //     $('.lbe1').addClass('show').css('display', 'block');
  //     $('.lbe1').removeClass('hide');
  //     },8500);
  //     setTimeout(function(){
  //     $('.lbe2').addClass('show').css('display', 'block');
  //     $('.lbe2').removeClass('hide');
  //     },11500);
  //     setTimeout(function(){
  //     $('.lbe3').addClass('show').css('display', 'block');
  //     $('.lbe3').removeClass('hide');
  //     },13000);
  //     setTimeout(function(){
  //     $('.lbe4').addClass('show').css('display', 'block');
  //     $('.lbe4').removeClass('hide');
  //     },14500);
  //     setTimeout(function(){
  //     $('.lbe5').addClass('show').css('display', 'block');
  //     $('.lbe5').removeClass('hide');
  //     },17500);
  //     setTimeout(function(){
  //     $('.lbe6').addClass('show').css('display', 'block');
  //     $('.lbe6').removeClass('hide');
  //     },20500);
  //     setTimeout(function(){
  //     $('.lbe7').addClass('show').css('display', 'block');
  //     $('.lbe7').removeClass('hide');
  //     },26000);
  //     setTimeout(function(){
  //     $('.lbe8').addClass('show').css('display', 'block');
  //     $('.lbe8').removeClass('hide');
  //     },29000);
  //     setTimeout(function(){
  //     $('.lbe9').addClass('show').css('display', 'block');
  //     $('.lbe9').removeClass('hide');
  //     },30500);
  //     setTimeout(function(){
  //     $('.lbe10').addClass('show').css('display', 'block');
  //     $('.lbe10').removeClass('hide');
  //     },36000);
      
      
  //     setTimeout(function(){
  //     $('.black').addClass('show').css('display', 'block');
  //     $('.black').removeClass('hide');
  //     var m2 = new Audio('data/se/x.wav');
  //     m2.play();
  //     $('.show-carddc1').addClass('show').css('display', 'block');
  //     $('.show-carddc1').removeClass('hide');
  //     },38500);



  //         }

  //       }
  //       if(globalThis.s==1){

  //         if(globalThis.t='112'){
  //           $(".ssh").removeClass('hide');
  //         $(".ssh").addClass('show').css('display', 'block');}else{
            
  //           var audio = document.getElementById("indexs");
  //           var vol1 = 0.50;
  //             var interval1 = 200; // 200ms interval
            
  //           var fadeout = setInterval(
  //             function() {
  //               // Reduce volume by 0.05 as long as it is above 0
  //               // This works as long as you start with a multiple of 0.05!
  //               if (vol1 > 0) {
  //                 vol1 -= 0.05;
  //                 audio.volume = vol1;
  //               }
  //               else {
  //                 // Stop the setInterval when 0 is reached
  //                 clearInterval(fadeout);
  //               }
  //             }, interval1);     
  //   setTimeout(function(){
  //     var m1 = new Audio('data/se/be.wav');
  //     m1.play();
  //     $('.red').removeClass('hide');
  //     $('.red').addClass('show').css('display', 'block');
  //   },600);
  //   setTimeout(function(){
    
  //     $('.red1').removeClass('hide');
  //     $('.red1').addClass('show').css('display', 'block');
  //   },2100);
  //   setTimeout(function(){
    
  //     $('.red2').removeClass('hide');
  //     $('.red2').addClass('show').css('display', 'block');
  //   },3600);
    
  //   setTimeout(function(){
  //     $('.lbe').addClass('show').css('display', 'block');
  //     $('.lbe').removeClass('hide');
  //     },6500);
  //     setTimeout(function(){
  //     $('.lbe1').addClass('show').css('display', 'block');
  //     $('.lbe1').removeClass('hide');
  //     },8500);
  //     setTimeout(function(){
  //     $('.lbe2').addClass('show').css('display', 'block');
  //     $('.lbe2').removeClass('hide');
  //     },11500);
  //     setTimeout(function(){
  //     $('.lbe3').addClass('show').css('display', 'block');
  //     $('.lbe3').removeClass('hide');
  //     },13000);
  //     setTimeout(function(){
  //     $('.lbe4').addClass('show').css('display', 'block');
  //     $('.lbe4').removeClass('hide');
  //     },14500);
  //     setTimeout(function(){
  //     $('.lbe5').addClass('show').css('display', 'block');
  //     $('.lbe5').removeClass('hide');
  //     },17500);
  //     setTimeout(function(){
  //     $('.lbe6').addClass('show').css('display', 'block');
  //     $('.lbe6').removeClass('hide');
  //     },20500);
  //     setTimeout(function(){
  //     $('.lbe7').addClass('show').css('display', 'block');
  //     $('.lbe7').removeClass('hide');
  //     },26000);
  //     setTimeout(function(){
  //     $('.lbe8').addClass('show').css('display', 'block');
  //     $('.lbe8').removeClass('hide');
  //     },29000);
  //     setTimeout(function(){
  //     $('.lbe9').addClass('show').css('display', 'block');
  //     $('.lbe9').removeClass('hide');
  //     },30500);
  //     setTimeout(function(){
  //     $('.lbe10').addClass('show').css('display', 'block');
  //     $('.lbe10').removeClass('hide');
  //     },36000);
      
      
  //     setTimeout(function(){
  //     $('.black').addClass('show').css('display', 'block');
  //     $('.black').removeClass('hide');
  //     var m2 = new Audio('data/se/x.wav');
  //     m2.play();
  //     $('.show-carddc1').addClass('show').css('display', 'block');
  //     $('.show-carddc1').removeClass('hide');
  //     },38500);


  //         }
  //       }
  
  //     }
  //   }}


  // }else{

  //   if (r<50) {
  //     if (r<25) {   
  //       var div = document.getElementById('shang');
  //       var div1 = document.getElementById('xia');
  //       var div2 = document.getElementById('you');
  //       var div3 = document.getElementById('zuo');
  //       div.style.visibility = 'hidden';
  //       div1.style.visibility = 'hidden';
  //       div2.style.visibility = 'hidden';
  //       div3.style.visibility = 'hidden';
  //       $('.shang').addClass('hide');
  //       $('.you').addClass('hide');
  //       $('.zuo').addClass('hide');
  //       $('.xia').addClass('hide');
  //        var s = [1,2,3,4];
  //        var rands = s[Math.floor(Math.random()*4)];
  //        var f = '.s'+rands
  //        var f1 = '.s'+rands+'1'
  //        var f2 = '.s'+rands+'2'
  //        var f3 = '.s'+rands+'3'
  //        setTimeout(function() {
  //         $(f).removeClass('hide');
  //         $(f).addClass('show').css('display', 'block');
  //        }, 500);
  //        setTimeout(function() {
  //         $(f1).removeClass('hide');
  //         $(f1).addClass('show').css('display', 'block');
  //       }, 2000);
  //       setTimeout(function() {
  //         $(f2).removeClass('hide');
  //         $(f2).addClass('show').css('display', 'block');
  //       }, 3500);
  //       setTimeout(function() {
  //         $(f3).removeClass('hide');
  //         $(f3).addClass('show').css('display', 'block');
  //       }, 5000);



  //       setTimeout(function() {
        
  //         $('.shang').removeClass('hide');
  //         $('.shang').addClass('show').css('display', 'block');
  //         $('.xia').removeClass('hide');
  //         $('.xia').addClass('show').css('display', 'block');
  //         $('.zuo').removeClass('hide');
  //         $('.zuo').addClass('show').css('display', 'block');
  //         $('.you').removeClass('hide');
  //         $('.you').addClass('show').css('display', 'block');
  //         div.style.visibility = 'visible';
  //         div1.style.visibility = 'visible';
  //         div2.style.visibility = 'visible';
  //         div3.style.visibility = 'visible';
  //       }, 6000);
  //     } else {   
  //       $('.shang').addClass('hide');
  //       $('.you').addClass('hide');
  //       $('.zuo').addClass('hide');
  //       $('.xia').addClass('hide');
  //       var div = document.getElementById('shang');
  //       var div1 = document.getElementById('xia');
  //       var div2 = document.getElementById('you');
  //       var div3 = document.getElementById('zuo');
  //       div.style.visibility = 'hidden';
  //       div1.style.visibility = 'hidden';
  //       div2.style.visibility = 'hidden';
  //       div3.style.visibility = 'hidden';
  //        var s = [10,5,6,7,8,9];
  //        var rands = s[Math.floor(Math.random()*6)];
  //        var f = '.s'+rands
  //        var f1 = '.s'+rands+'1'
  //        var f2 = '.s'+rands+'2'
  //        var f3 = '.s'+rands+'3'
  //        var rands1=rands - 4;
  //        var a1 = '.b'+rands1+'1'
  //        var a2 = '.b'+rands1+'2'
  //        var a3 = '.b'+rands1+'3'
  //        setTimeout(function() {
  //        $(f).removeClass('hide');
  //        $(f).addClass('show').css('display', 'block');
  //       }, 500);
  //        setTimeout(function() {
  //         $(f1).removeClass('hide');
  //         $(f1).addClass('show').css('display', 'block');
  //       }, 2000);
  //       setTimeout(function() {
  //         $(f2).removeClass('hide');
  //         $(f2).addClass('show').css('display', 'block');
  //       }, 3500);
  //       setTimeout(function() {
  //         $(f3).removeClass('hide');
  //         $(f3).addClass('show').css('display', 'block');
  //       }, 5000);


  //        setTimeout(function() {
  //         $(a1).removeClass('hide');
  //         $(a1).addClass('show').css('display', 'block');
  //         $(a2).removeClass('hide');
  //         $(a2).addClass('show').css('display', 'block');
  //         $(a3).removeClass('hide');
  //         $(a3).addClass('show').css('display', 'block');
  //       }, 6000);
  
  //     }
      
  //   } else {
     
  //       if(globalThis.flag==6){
  //           globalThis.r=1
  //           globalThis.k=1
  //           $('.message18').removeClass('hide');
  //           $('.message18').addClass('show').css('display', 'block');
  //           $('.show-card27').removeClass('hide');
  //           $('.show-card27').addClass('show').css('display', 'block');
  //           globalThis.flag=7
  //         }
  //         if(globalThis.flag==5){
  //           $('.message9').removeClass('hide');
  //           $('.message9').addClass('show').css('display', 'block');
  //           setTimeout(function() {
  //             $('.message9j').removeClass('hide');
  //           $('.message9j').addClass('show').css('display', 'block');
  //           }, 1100);
  //           $('.show-card31').removeClass('hide');
  //           $('.show-card31').addClass('show').css('display', 'block');
  //           globalThis.flag=6
  //         }
  //         if(globalThis.flag==4){
  //           $('.message15').removeClass('hide');
  //           $('.message15').addClass('show').css('display', 'block');
  //           $('.show-card23').removeClass('hide');
  //           $('.show-card23').addClass('show').css('display', 'block');
  //           globalThis.flag=5
  //         }
  //         if(globalThis.flag==3){
  //           $('.message8').removeClass('hide');
  //           $('.message8').addClass('show').css('display', 'block');
  //           $('.show-card12').removeClass('hide');
  //           $('.show-card12').addClass('show').css('display', 'block');
  //           globalThis.flag=4
  //         }
  //         if(globalThis.flag==2){
  //           $('.message9').removeClass('hide');
  //           $('.message9').addClass('show').css('display', 'block');
  //           setTimeout(function() {
  //             $('.message9j').removeClass('hide');
  //           $('.message9j').addClass('show').css('display', 'block');
  //           }, 1100);
  //           $('.show-card13').removeClass('hide');
  //           $('.show-card13').addClass('show').css('display', 'block');
  //           globalThis.flag=3
  //         }
  //         if(globalThis.flag==1){
  //           $('.message3').removeClass('hide');
  //           $('.message3').addClass('show').css('display', 'block');
  //           $('.show-card8').removeClass('hide');
  //           $('.show-card8').addClass('show').css('display', 'block');
  //           globalThis.flag=2
  //         }
  //         if(globalThis.flag==0){
  //           $('.message23').removeClass('hide');
  //           $('.message23').addClass('show').css('display', 'block');
  //           $('.show-card5').removeClass('hide');
  //           $('.show-card5').addClass('show').css('display', 'block');
  //           globalThis.flag=1
  //         }
  
  //   }
    
  // }




  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  var r=Math.floor(Math.random() * 100) + 1;
  if(globalThis.flag==7){
    var div = document.getElementById('shang');
          var div1 = document.getElementById('xia');
          var div2 = document.getElementById('you');
          var div3 = document.getElementById('zuo');
          div.style.visibility = 'hidden';
          div1.style.visibility = 'hidden';
          div2.style.visibility = 'hidden';
          div3.style.visibility = 'hidden';
          $('.shang').addClass('hide');
          $('.you').addClass('hide');
          $('.zuo').addClass('hide');
          $('.xia').addClass('hide');


    if(globalThis.r==0){ 
      if(globalThis.e==2){

    $('.show-card').addClass('hide');
    $('.show-card1').addClass('hide');
    $('.show-card2').addClass('hide');
    $('.show-card3').addClass('hide');
    $('.show-card4').addClass('hide');
    $('.show-card5').addClass('hide');
    $('.show-card6').addClass('hide');
    $('.show-card7').addClass('hide');
    $('.show-card8').addClass('hide');
    $('.show-card9').addClass('hide');
    $('.show-card10').addClass('hide');    
    $('.show-card11').addClass('hide');
    $('.show-card12').addClass('hide');
    $('.show-card13').addClass('hide');
    $('.show-card14').addClass('hide');
    $('.show-card15').addClass('hide');
    $('.show-card16').addClass('hide');
    $('.show-card17').addClass('hide');
    $('.show-card18').addClass('hide');
    $('.show-card19').addClass('hide');
    $('.show-card20').addClass('hide');
    $('.show-card21').addClass('hide');
    $('.show-card22').addClass('hide');
    $('.show-card23').addClass('hide');
    $('.show-card24').addClass('hide');
    $('.show-card25').addClass('hide');
    $('.show-card26').addClass('hide');
    $('.show-card27').addClass('hide');
    $('.show-card28').addClass('hide');
    $('.show-card29').addClass('hide');
    $('.show-card30').addClass('hide');
    $('.show-card31').addClass('hide');
    $('.show-card32').addClass('hide');
    $('.show-card33').addClass('hide');
    $('.show-card34').addClass('hide');
    $('.show-card35').addClass('hide');
    $('.show-card36').addClass('hide');
    $('.show-card37').addClass('hide');
    $('.show-card38').addClass('hide');
    $('.show-card39').addClass('hide');
    $('.show-card40').addClass('hide');
         
    var audio = document.getElementById("indexs");
    var vol1 = 0.50;
      var interval1 = 200; // 200ms interval
    
    var fadeout = setInterval(
      function() {
        // Reduce volume by 0.05 as long as it is above 0
        // This works as long as you start with a multiple of 0.05!
        if (vol1 > 0) {
          vol1 -= 0.05;
          audio.volume = vol1;
        }
        else {
          // Stop the setInterval when 0 is reached
          clearInterval(fadeout);
        }
      }, interval1);     
setTimeout(function(){
var m1 = new Audio('data/se/be.wav');
m1.play();
$('.red').removeClass('hide');
$('.red').addClass('show').css('display', 'block');
},600);
setTimeout(function(){

$('.red1').removeClass('hide');
$('.red1').addClass('show').css('display', 'block');
},2100);
setTimeout(function(){

$('.red2').removeClass('hide');
$('.red2').addClass('show').css('display', 'block');
},3600);

setTimeout(function(){
$('.lbe').addClass('show').css('display', 'block');
$('.lbe').removeClass('hide');
},6500);
setTimeout(function(){
$('.lbe1').addClass('show').css('display', 'block');
$('.lbe1').removeClass('hide');
},8500);
setTimeout(function(){
$('.lbe2').addClass('show').css('display', 'block');
$('.lbe2').removeClass('hide');
},11500);
setTimeout(function(){
$('.lbe3').addClass('show').css('display', 'block');
$('.lbe3').removeClass('hide');
},13000);
setTimeout(function(){
$('.lbe4').addClass('show').css('display', 'block');
$('.lbe4').removeClass('hide');
},14500);
setTimeout(function(){
$('.lbe5').addClass('show').css('display', 'block');
$('.lbe5').removeClass('hide');
},17500);
setTimeout(function(){
$('.lbe6').addClass('show').css('display', 'block');
$('.lbe6').removeClass('hide');
},20500);
setTimeout(function(){
$('.lbe7').addClass('show').css('display', 'block');
$('.lbe7').removeClass('hide');
},26000);
setTimeout(function(){
$('.lbe8').addClass('show').css('display', 'block');
$('.lbe8').removeClass('hide');
},29000);
setTimeout(function(){
$('.lbe9').addClass('show').css('display', 'block');
$('.lbe9').removeClass('hide');
},30500);
setTimeout(function(){
$('.lbe10').addClass('show').css('display', 'block');
$('.lbe10').removeClass('hide');
},36000);


setTimeout(function(){
$('.black').addClass('show').css('display', 'block');
$('.black').removeClass('hide');
var m2 = new Audio('data/se/x.wav');
m2.play();
$('.show-carddc1').addClass('show').css('display', 'block');
$('.show-carddc1').removeClass('hide');
},38500);
      }
      if(globalThis.e<2){
        globalThis.e=globalThis.e +1
        var r=Math.floor(Math.random() * 100) + 1;
        if (r<50) {   
          
           var s = [1,2,3,4];
           var rands = s[Math.floor(Math.random()*4)];
           var f = '.s'+rands
           var f1 = '.s'+rands+'1'
           var f2 = '.s'+rands+'2'
           var f3 = '.s'+rands+'3'
           setTimeout(function() {
            $(f).removeClass('hide');
            $(f).addClass('show').css('display', 'block');
           }, 500);
           setTimeout(function() {
            $(f1).removeClass('hide');
            $(f1).addClass('show').css('display', 'block');
          }, 2000);
          setTimeout(function() {
            $(f2).removeClass('hide');
            $(f2).addClass('show').css('display', 'block');
          }, 3500);
          setTimeout(function() {
            $(f3).removeClass('hide');
            $(f3).addClass('show').css('display', 'block');
          }, 5000);
  
  
  
          setTimeout(function() {
          
            $('.shang').removeClass('hide');
            $('.shang').addClass('show').css('display', 'block');
            $('.xia').removeClass('hide');
            $('.xia').addClass('show').css('display', 'block');
            $('.zuo').removeClass('hide');
            $('.zuo').addClass('show').css('display', 'block');
            $('.you').removeClass('hide');
            $('.you').addClass('show').css('display', 'block');
            div.style.visibility = 'visible';
            div1.style.visibility = 'visible';
            div2.style.visibility = 'visible';
            div3.style.visibility = 'visible';
          }, 6000);
        } else {   
          
           var s = [10,5,6,7,8,9];
           var rands = s[Math.floor(Math.random()*6)];
           var f = '.s'+rands
           var f1 = '.s'+rands+'1'
           var f2 = '.s'+rands+'2'
           var f3 = '.s'+rands+'3'
           var rands1=rands - 4;
           var a1 = '.b'+rands1+'1'
           var a2 = '.b'+rands1+'2'
           var a3 = '.b'+rands1+'3'
           setTimeout(function() {
           $(f).removeClass('hide');
           $(f).addClass('show').css('display', 'block');
          }, 500);
           setTimeout(function() {
            $(f1).removeClass('hide');
            $(f1).addClass('show').css('display', 'block');
          }, 2000);
          setTimeout(function() {
            $(f2).removeClass('hide');
            $(f2).addClass('show').css('display', 'block');
          }, 3500);
          setTimeout(function() {
            $(f3).removeClass('hide');
            $(f3).addClass('show').css('display', 'block');
          }, 5000);
  
  
           setTimeout(function() {
            $(a1).removeClass('hide');
            $(a1).addClass('show').css('display', 'block');
            $(a2).removeClass('hide');
            $(a2).addClass('show').css('display', 'block');
            $(a3).removeClass('hide');
            $(a3).addClass('show').css('display', 'block');
          }, 6000);
    
        }


      }
     

    }else{
      if(globalThis.e==0){
        globalThis.start=1
        globalThis.e=globalThis.e+1
        var s = [1,2,3,4];
           var rands = s[Math.floor(Math.random()*4)];
           var f = '.s'+rands
           var f1 = '.s'+rands+'1'
           var f2 = '.s'+rands+'2'
           var f3 = '.s'+rands+'3'
           setTimeout(function() {
            $(f).removeClass('hide');
            $(f).addClass('show').css('display', 'block');
           }, 500);
           setTimeout(function() {
            $(f1).removeClass('hide');
            $(f1).addClass('show').css('display', 'block');
          }, 2000);
          setTimeout(function() {
            $(f2).removeClass('hide');
            $(f2).addClass('show').css('display', 'block');
          }, 3500);
          setTimeout(function() {
            $(f3).removeClass('hide');
            $(f3).addClass('show').css('display', 'block');
          }, 5000);
  
  
  
          setTimeout(function() {
          
            $('.shang').removeClass('hide');
            $('.shang').addClass('show').css('display', 'block');
            $('.xia').removeClass('hide');
            $('.xia').addClass('show').css('display', 'block');
            $('.zuo').removeClass('hide');
            $('.zuo').addClass('show').css('display', 'block');
            $('.you').removeClass('hide');
            $('.you').addClass('show').css('display', 'block');
            div.style.visibility = 'visible';
            div1.style.visibility = 'visible';
            div2.style.visibility = 'visible';
            div3.style.visibility = 'visible';
            if(globalThis.s==1){
        
              $('.sb').removeClass('hide');
              $('.sb').addClass('show').css('display', 'block');
              $('.xcb').removeClass('hide');
              $('.xcb').addClass('show').css('display', 'block');
              $('.zcb').removeClass('hide');
              $('.zcb').addClass('show').css('display', 'block');
              $('.ycb').removeClass('hide');
              $('.ycb').addClass('show').css('display', 'block');
    
            }
            if(globalThis.a==1){
        
              $('.xb').removeClass('hide');
              $('.xb').addClass('show').css('display', 'block');
              $('.scb').removeClass('hide');
              $('.scb').addClass('show').css('display', 'block');
              $('.zcb').removeClass('hide');
              $('.zcb').addClass('show').css('display', 'block');
              $('.ycb').removeClass('hide');
              $('.ycb').addClass('show').css('display', 'block');
    
            }
            if(globalThis.k==1){
        
              $('.zb').removeClass('hide');
              $('.zb').addClass('show').css('display', 'block');
              $('.zbj').removeClass('hide');
              $('.zbj').addClass('show').css('display', 'block');
              $('.xcbb').removeClass('hide');
              $('.xcbb').addClass('show').css('display', 'block');
              $('.scb').removeClass('hide');
              $('.scb').addClass('show').css('display', 'block');
              $('.ycb').removeClass('hide');
              $('.ycb').addClass('show').css('display', 'block');
    
            }

          }, 6000);

      }else{
      if(globalThis.e<3 && globalThis.e>0){
    
        var r=Math.floor(Math.random() * 100) + 1;
        if (r<50) {   
           var s = [1,2,3,4];
           var rands = s[Math.floor(Math.random()*4)];
           var f = '.s'+rands
           var f1 = '.s'+rands+'1'
           var f2 = '.s'+rands+'2'
           var f3 = '.s'+rands+'3'
           setTimeout(function() {
            $(f).removeClass('hide');
            $(f).addClass('show').css('display', 'block');
           }, 500);
           setTimeout(function() {
            $(f1).removeClass('hide');
            $(f1).addClass('show').css('display', 'block');
          }, 2000);
          setTimeout(function() {
            $(f2).removeClass('hide');
            $(f2).addClass('show').css('display', 'block');
          }, 3500);
          setTimeout(function() {
            $(f3).removeClass('hide');
            $(f3).addClass('show').css('display', 'block');
          }, 5000);
  
  
  
          setTimeout(function() {
          
            $('.shang').removeClass('hide');
            $('.shang').addClass('show').css('display', 'block');
            $('.xia').removeClass('hide');
            $('.xia').addClass('show').css('display', 'block');
            $('.zuo').removeClass('hide');
            $('.zuo').addClass('show').css('display', 'block');
            $('.you').removeClass('hide');
            $('.you').addClass('show').css('display', 'block');
            div.style.visibility = 'visible';
            div1.style.visibility = 'visible';
            div2.style.visibility = 'visible';
            div3.style.visibility = 'visible';
            
        if(globalThis.e==1 && globalThis.s==1){
        
          $('.sb1').removeClass('hide');
          $('.sb1').addClass('show').css('display', 'block');
          $('.xcb1').removeClass('hide');
          $('.xcb1').addClass('show').css('display', 'block');
          $('.zcb1').removeClass('hide');
          $('.zcb1').addClass('show').css('display', 'block');
          $('.ycb1').removeClass('hide');
          $('.ycb1').addClass('show').css('display', 'block');

        }
        if(globalThis.e==1 && globalThis.a==1){
        
          $('.sb1').removeClass('hide');
          $('.sb1').addClass('show').css('display', 'block');
          $('.xcb1').removeClass('hide');
          $('.xcb1').addClass('show').css('display', 'block');
          $('.zcb1').removeClass('hide');
          $('.zcb1').addClass('show').css('display', 'block');
          $('.ycb1').removeClass('hide');
          $('.ycb1').addClass('show').css('display', 'block');

        }
        if(globalThis.e==1 && globalThis.k==1){
        
          $('.xb1').removeClass('hide');
          $('.xb1').addClass('show').css('display', 'block');
          $('.scb1').removeClass('hide');
          $('.scb1').addClass('show').css('display', 'block');
          $('.zcb1').removeClass('hide');
          $('.zcb1').addClass('show').css('display', 'block');
          $('.ycb1').removeClass('hide');
          $('.ycb1').addClass('show').css('display', 'block');

        }
        if(globalThis.e==2 && globalThis.s==1){
        
          $('.zb2').removeClass('hide');
          $('.zb2').addClass('show').css('display', 'block');
          $('.xcb2').removeClass('hide');
          $('.xcb2').addClass('show').css('display', 'block');
          $('.scb2').removeClass('hide');
          $('.scb2').addClass('show').css('display', 'block');
          $('.ycb2').removeClass('hide');
          $('.ycb2').addClass('show').css('display', 'block');
          

        }
        if(globalThis.e==2 && globalThis.a==1){
        
          $('.yb2').removeClass('hide');
          $('.yb2').addClass('show').css('display', 'block');
          $('.xcb2').removeClass('hide');
          $('.xcb2').addClass('show').css('display', 'block');
          $('.scb2').removeClass('hide');
          $('.scb2').addClass('show').css('display', 'block');
          $('.zcb2').removeClass('hide');
          $('.zcb2').addClass('show').css('display', 'block');

        }
        if(globalThis.e==2 && globalThis.k==1){
        
          $('.yb2').removeClass('hide');
          $('.yb2').addClass('show').css('display', 'block');
          $('.xcb2').removeClass('hide');
          $('.xcb2').addClass('show').css('display', 'block');
          $('.scb2').removeClass('hide');
          $('.scb2').addClass('show').css('display', 'block');
          $('.zcb2').removeClass('hide');
          $('.zcb2').addClass('show').css('display', 'block');

        }


          globalThis.t=globalThis.t+'2'
        globalThis.e=globalThis.e+1

          }, 6000);
        } else { 
          globalThis.t=globalThis.t+'2'  
           var s = [10,5,6,7,8,9];
           var rands = s[Math.floor(Math.random()*6)];
           var f = '.s'+rands
           var f1 = '.s'+rands+'1'
           var f2 = '.s'+rands+'2'
           var f3 = '.s'+rands+'3'
           var rands1=rands - 4;
           var a1 = '.b'+rands1+'1'
           var a2 = '.b'+rands1+'2'
           var a3 = '.b'+rands1+'3'
           setTimeout(function() {
           $(f).removeClass('hide');
           $(f).addClass('show').css('display', 'block');
          }, 500);
           setTimeout(function() {
            $(f1).removeClass('hide');
            $(f1).addClass('show').css('display', 'block');
          }, 2000);
          setTimeout(function() {
            $(f2).removeClass('hide');
            $(f2).addClass('show').css('display', 'block');
          }, 3500);
          setTimeout(function() {
            $(f3).removeClass('hide');
            $(f3).addClass('show').css('display', 'block');
          }, 5000);
  
  
           setTimeout(function() {
            $(a1).removeClass('hide');
            $(a1).addClass('show').css('display', 'block');
            $(a2).removeClass('hide');
            $(a2).addClass('show').css('display', 'block');
            $(a3).removeClass('hide');
            $(a3).addClass('show').css('display', 'block');
          }, 6000);
    
        }
      }else{
      if(globalThis.e==3){
        globalThis.t=globalThis.t+'2'
        if(globalThis.k==1){
          if(globalThis.t=='243'){
            $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb1').addClass('hide');
  $('.sb1').addClass('hide');
  $('.zb2').addClass('hide');
  $('.yb2').addClass('hide');
  $('.xcb').addClass('hide');
  $('.scb').addClass('hide');
  $('.zcb').addClass('hide');
  $('.ycb').addClass('hide');
  $('.xcbb').addClass('hide');
  $('.xcb1').addClass('hide');
  $('.scb1').addClass('hide');
  $('.zcb1').addClass('hide');
  $('.ycb1').addClass('hide');
  $('.xcb2').addClass('hide');
  $('.scb2').addClass('hide');
  $('.zcb2').addClass('hide');
  $('.ycb2').addClass('hide');
  $('.message22j').addClass('hide');
  $('.message22jj').addClass('hide');
  $('.message14j').addClass('hide');
  $('.message10j').addClass('hide');
  $('.message7j').addClass('hide');
  $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
  $('.message5j').addClass('hide');
  $('.message1j').addClass('hide');
  $('.messagej').addClass('hide');
  $('.message1').addClass('hide');
   $('.message').addClass('hide');
   $('.message1').addClass('hide');
   $('.message2').addClass('hide');
$('.message2j').addClass('hide');
   $('.message3').addClass('hide');
   $('.message4').addClass('hide');
   $('.message5').addClass('hide');
   $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
   $('.message7').addClass('hide');
   $('.message8').addClass('hide');
  $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
   $('.message10').addClass('hide');    
   $('.message11').addClass('hide');
   $('.message12').addClass('hide');
   $('.message13').addClass('hide');
   $('.message13j').addClass('hide');
   $('.message14').addClass('hide');
   $('.message15').addClass('hide');
   $('.message16').addClass('hide');
   $('.message17').addClass('hide');
   $('.message18').addClass('hide');
   $('.message19').addClass('hide');
   $('.message20').addClass('hide');
   $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
   
   $('.s1').addClass('hide');  
   $('.s11').addClass('hide'); 
   $('.s12').addClass('hide');
   $('.s2').addClass('hide');  
   $('.s21').addClass('hide'); 
   $('.s22').addClass('hide');
   $('.s3').addClass('hide');
   $('.s31').addClass('hide');
   $('.s32').addClass('hide');
   $('.s4').addClass('hide');
   $('.s41').addClass('hide');
   $('.s42').addClass('hide');
   $('.s43').addClass('hide');
   $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide');  
  $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');

  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b54').addClass('hide');
  $('.b55').addClass('hide');
  $('.b56').addClass('hide');
  $('.b57').addClass('hide');
  $('.b58').addClass('hide');
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');
  $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.yb').addClass('hide');
  $('.xb').addClass('hide');
  $('.show-card').addClass('hide');
    $('.show-card1').addClass('hide');
    $('.show-card2').addClass('hide');
    $('.show-card3').addClass('hide');
    $('.show-card4').addClass('hide');
    $('.show-card5').addClass('hide');
    $('.show-card6').addClass('hide');
    $('.show-card7').addClass('hide');
    $('.show-card8').addClass('hide');
    $('.show-card9').addClass('hide');
    $('.show-card10').addClass('hide');    
    $('.show-card11').addClass('hide');
    $('.show-card12').addClass('hide');
    $('.show-card13').addClass('hide');
    $('.show-card14').addClass('hide');
    $('.show-card15').addClass('hide');
    $('.show-card16').addClass('hide');
    $('.show-card17').addClass('hide');
    $('.show-card18').addClass('hide');
    $('.show-card19').addClass('hide');
    $('.show-card20').addClass('hide');
    $('.show-card21').addClass('hide');
    $('.show-card22').addClass('hide');
    $('.show-card23').addClass('hide');
    $('.show-card24').addClass('hide');
    $('.show-card25').addClass('hide');
    $('.show-card26').addClass('hide');
    $('.show-card27').addClass('hide');
    $('.show-card28').addClass('hide');
    $('.show-card29').addClass('hide');
    $('.show-card30').addClass('hide');
    $('.show-card31').addClass('hide');
    $('.show-card32').addClass('hide');
    $('.show-card33').addClass('hide');
    $('.show-card34').addClass('hide');
    $('.show-card35').addClass('hide');
    $('.show-card36').addClass('hide');
    $('.show-card37').addClass('hide');
    $('.show-card38').addClass('hide');
    $('.show-card39').addClass('hide');
    $('.show-card40').addClass('hide');
           

            setTimeout(function(){
              $(".jsh").removeClass('hide');
              $(".jsh").addClass('show').css('display', 'block');
            },3000); 
            setTimeout(function(){
              $(".jsh1").removeClass('hide');
              $(".jsh1").addClass('show').css('display', 'block');
            },6000);
            setTimeout(function(){
              $(".jsh2").removeClass('hide');
              $(".jsh2").addClass('show').css('display', 'block');
            },9000);
            setTimeout(function(){
              $(".jsh3").removeClass('hide');
              $(".jsh3").addClass('show').css('display', 'block');
            },14500);
        
        
        }else{
          
    $('.show-card').addClass('hide');
    $('.show-card1').addClass('hide');
    $('.show-card2').addClass('hide');
    $('.show-card3').addClass('hide');
    $('.show-card4').addClass('hide');
    $('.show-card5').addClass('hide');
    $('.show-card6').addClass('hide');
    $('.show-card7').addClass('hide');
    $('.show-card8').addClass('hide');
    $('.show-card9').addClass('hide');
    $('.show-card10').addClass('hide');    
    $('.show-card11').addClass('hide');
    $('.show-card12').addClass('hide');
    $('.show-card13').addClass('hide');
    $('.show-card14').addClass('hide');
    $('.show-card15').addClass('hide');
    $('.show-card16').addClass('hide');
    $('.show-card17').addClass('hide');
    $('.show-card18').addClass('hide');
    $('.show-card19').addClass('hide');
    $('.show-card20').addClass('hide');
    $('.show-card21').addClass('hide');
    $('.show-card22').addClass('hide');
    $('.show-card23').addClass('hide');
    $('.show-card24').addClass('hide');
    $('.show-card25').addClass('hide');
    $('.show-card26').addClass('hide');
    $('.show-card27').addClass('hide');
    $('.show-card28').addClass('hide');
    $('.show-card29').addClass('hide');
    $('.show-card30').addClass('hide');
    $('.show-card31').addClass('hide');
    $('.show-card32').addClass('hide');
    $('.show-card33').addClass('hide');
    $('.show-card34').addClass('hide');
    $('.show-card35').addClass('hide');
    $('.show-card36').addClass('hide');
    $('.show-card37').addClass('hide');
    $('.show-card38').addClass('hide');
    $('.show-card39').addClass('hide');
    $('.show-card40').addClass('hide');
         
    var audio = document.getElementById("indexs");
    var vol1 = 0.50;
      var interval1 = 200; // 200ms interval
    
    var fadeout = setInterval(
      function() {
        // Reduce volume by 0.05 as long as it is above 0
        // This works as long as you start with a multiple of 0.05!
        if (vol1 > 0) {
          vol1 -= 0.05;
          audio.volume = vol1;
        }
        else {
          // Stop the setInterval when 0 is reached
          clearInterval(fadeout);
        }
      }, interval1);     
setTimeout(function(){
var m1 = new Audio('data/se/be.wav');
m1.play();
$('.red').removeClass('hide');
$('.red').addClass('show').css('display', 'block');
},600);
setTimeout(function(){

$('.red1').removeClass('hide');
$('.red1').addClass('show').css('display', 'block');
},2100);
setTimeout(function(){

$('.red2').removeClass('hide');
$('.red2').addClass('show').css('display', 'block');
},3600);

setTimeout(function(){
$('.lbe').addClass('show').css('display', 'block');
$('.lbe').removeClass('hide');
},6500);
setTimeout(function(){
$('.lbe1').addClass('show').css('display', 'block');
$('.lbe1').removeClass('hide');
},8500);
setTimeout(function(){
$('.lbe2').addClass('show').css('display', 'block');
$('.lbe2').removeClass('hide');
},11500);
setTimeout(function(){
$('.lbe3').addClass('show').css('display', 'block');
$('.lbe3').removeClass('hide');
},13000);
setTimeout(function(){
$('.lbe4').addClass('show').css('display', 'block');
$('.lbe4').removeClass('hide');
},14500);
setTimeout(function(){
$('.lbe5').addClass('show').css('display', 'block');
$('.lbe5').removeClass('hide');
},17500);
setTimeout(function(){
$('.lbe6').addClass('show').css('display', 'block');
$('.lbe6').removeClass('hide');
},20500);
setTimeout(function(){
$('.lbe7').addClass('show').css('display', 'block');
$('.lbe7').removeClass('hide');
},26000);
setTimeout(function(){
$('.lbe8').addClass('show').css('display', 'block');
$('.lbe8').removeClass('hide');
},29000);
setTimeout(function(){
$('.lbe9').addClass('show').css('display', 'block');
$('.lbe9').removeClass('hide');
},30500);
setTimeout(function(){
$('.lbe10').addClass('show').css('display', 'block');
$('.lbe10').removeClass('hide');
},36000);


setTimeout(function(){
$('.black').addClass('show').css('display', 'block');
$('.black').removeClass('hide');
var m2 = new Audio('data/se/x.wav');
m2.play();
$('.show-carddc1').addClass('show').css('display', 'block');
$('.show-carddc1').removeClass('hide');
},38500);


          }
        }
        if(globalThis.a==1){
          

           if(globalThis.t=='413'){
            $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb1').addClass('hide');
  $('.sb1').addClass('hide');
  $('.zb2').addClass('hide');
  $('.yb2').addClass('hide');
  $('.xcb').addClass('hide');
  $('.scb').addClass('hide');
  $('.zcb').addClass('hide');
  $('.ycb').addClass('hide');
  $('.xcbb').addClass('hide');
  $('.xcb1').addClass('hide');
  $('.scb1').addClass('hide');
  $('.zcb1').addClass('hide');
  $('.ycb1').addClass('hide');
  $('.xcb2').addClass('hide');
  $('.scb2').addClass('hide');
  $('.zcb2').addClass('hide');
  $('.ycb2').addClass('hide');
  $('.message22j').addClass('hide');
  $('.message22jj').addClass('hide');
  $('.message14j').addClass('hide');
  $('.message10j').addClass('hide');
  $('.message7j').addClass('hide');
  $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
  $('.message5j').addClass('hide');
  $('.message1j').addClass('hide');
  $('.messagej').addClass('hide');
  $('.message1').addClass('hide');
   $('.message').addClass('hide');
   $('.message1').addClass('hide');
   $('.message2').addClass('hide');
$('.message2j').addClass('hide');
   $('.message3').addClass('hide');
   $('.message4').addClass('hide');
   $('.message5').addClass('hide');
   $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
   $('.message7').addClass('hide');
   $('.message8').addClass('hide');
  $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
   $('.message10').addClass('hide');    
   $('.message11').addClass('hide');
   $('.message12').addClass('hide');
   $('.message13').addClass('hide');
   $('.message13j').addClass('hide');
   $('.message14').addClass('hide');
   $('.message15').addClass('hide');
   $('.message16').addClass('hide');
   $('.message17').addClass('hide');
   $('.message18').addClass('hide');
   $('.message19').addClass('hide');
   $('.message20').addClass('hide');
   $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
   
   $('.s1').addClass('hide');  
   $('.s11').addClass('hide'); 
   $('.s12').addClass('hide');
   $('.s2').addClass('hide');  
   $('.s21').addClass('hide'); 
   $('.s22').addClass('hide');
   $('.s3').addClass('hide');
   $('.s31').addClass('hide');
   $('.s32').addClass('hide');
   $('.s4').addClass('hide');
   $('.s41').addClass('hide');
   $('.s42').addClass('hide');
   $('.s43').addClass('hide');
   $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide');  
  $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');

  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b54').addClass('hide');
  $('.b55').addClass('hide');
  $('.b56').addClass('hide');
  $('.b57').addClass('hide');
  $('.b58').addClass('hide');
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');
  $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.yb').addClass('hide');
  $('.xb').addClass('hide');
  $('.show-card').addClass('hide');
    $('.show-card1').addClass('hide');
    $('.show-card2').addClass('hide');
    $('.show-card3').addClass('hide');
    $('.show-card4').addClass('hide');
    $('.show-card5').addClass('hide');
    $('.show-card6').addClass('hide');
    $('.show-card7').addClass('hide');
    $('.show-card8').addClass('hide');
    $('.show-card9').addClass('hide');
    $('.show-card10').addClass('hide');    
    $('.show-card11').addClass('hide');
    $('.show-card12').addClass('hide');
    $('.show-card13').addClass('hide');
    $('.show-card14').addClass('hide');
    $('.show-card15').addClass('hide');
    $('.show-card16').addClass('hide');
    $('.show-card17').addClass('hide');
    $('.show-card18').addClass('hide');
    $('.show-card19').addClass('hide');
    $('.show-card20').addClass('hide');
    $('.show-card21').addClass('hide');
    $('.show-card22').addClass('hide');
    $('.show-card23').addClass('hide');
    $('.show-card24').addClass('hide');
    $('.show-card25').addClass('hide');
    $('.show-card26').addClass('hide');
    $('.show-card27').addClass('hide');
    $('.show-card28').addClass('hide');
    $('.show-card29').addClass('hide');
    $('.show-card30').addClass('hide');
    $('.show-card31').addClass('hide');
    $('.show-card32').addClass('hide');
    $('.show-card33').addClass('hide');
    $('.show-card34').addClass('hide');
    $('.show-card35').addClass('hide');
    $('.show-card36').addClass('hide');
    $('.show-card37').addClass('hide');
    $('.show-card38').addClass('hide');
    $('.show-card39').addClass('hide');
    $('.show-card40').addClass('hide');
           

            setTimeout(function(){
              $(".jsh").removeClass('hide');
              $(".jsh").addClass('show').css('display', 'block');
            },3000); 
            setTimeout(function(){
              $(".jsh1").removeClass('hide');
              $(".jsh1").addClass('show').css('display', 'block');
            },6000);
            setTimeout(function(){
              $(".jsh2").removeClass('hide');
              $(".jsh2").addClass('show').css('display', 'block');
            },9000);
            setTimeout(function(){
              $(".jsh31").removeClass('hide');
              $(".jsh31").addClass('show').css('display', 'block');
            },14500);
          }else{
            
            
    $('.show-card').addClass('hide');
    $('.show-card1').addClass('hide');
    $('.show-card2').addClass('hide');
    $('.show-card3').addClass('hide');
    $('.show-card4').addClass('hide');
    $('.show-card5').addClass('hide');
    $('.show-card6').addClass('hide');
    $('.show-card7').addClass('hide');
    $('.show-card8').addClass('hide');
    $('.show-card9').addClass('hide');
    $('.show-card10').addClass('hide');    
    $('.show-card11').addClass('hide');
    $('.show-card12').addClass('hide');
    $('.show-card13').addClass('hide');
    $('.show-card14').addClass('hide');
    $('.show-card15').addClass('hide');
    $('.show-card16').addClass('hide');
    $('.show-card17').addClass('hide');
    $('.show-card18').addClass('hide');
    $('.show-card19').addClass('hide');
    $('.show-card20').addClass('hide');
    $('.show-card21').addClass('hide');
    $('.show-card22').addClass('hide');
    $('.show-card23').addClass('hide');
    $('.show-card24').addClass('hide');
    $('.show-card25').addClass('hide');
    $('.show-card26').addClass('hide');
    $('.show-card27').addClass('hide');
    $('.show-card28').addClass('hide');
    $('.show-card29').addClass('hide');
    $('.show-card30').addClass('hide');
    $('.show-card31').addClass('hide');
    $('.show-card32').addClass('hide');
    $('.show-card33').addClass('hide');
    $('.show-card34').addClass('hide');
    $('.show-card35').addClass('hide');
    $('.show-card36').addClass('hide');
    $('.show-card37').addClass('hide');
    $('.show-card38').addClass('hide');
    $('.show-card39').addClass('hide');
    $('.show-card40').addClass('hide');
         
    var audio = document.getElementById("indexs");
    var vol1 = 0.50;
      var interval1 = 200; // 200ms interval
    
    var fadeout = setInterval(
      function() {
        // Reduce volume by 0.05 as long as it is above 0
        // This works as long as you start with a multiple of 0.05!
        if (vol1 > 0) {
          vol1 -= 0.05;
          audio.volume = vol1;
        }
        else {
          // Stop the setInterval when 0 is reached
          clearInterval(fadeout);
        }
      }, interval1);     
setTimeout(function(){
var m1 = new Audio('data/se/be.wav');
m1.play();
$('.red').removeClass('hide');
$('.red').addClass('show').css('display', 'block');
},600);
setTimeout(function(){

$('.red1').removeClass('hide');
$('.red1').addClass('show').css('display', 'block');
},2100);
setTimeout(function(){

$('.red2').removeClass('hide');
$('.red2').addClass('show').css('display', 'block');
},3600);

setTimeout(function(){
$('.lbe').addClass('show').css('display', 'block');
$('.lbe').removeClass('hide');
},6500);
setTimeout(function(){
$('.lbe1').addClass('show').css('display', 'block');
$('.lbe1').removeClass('hide');
},8500);
setTimeout(function(){
$('.lbe2').addClass('show').css('display', 'block');
$('.lbe2').removeClass('hide');
},11500);
setTimeout(function(){
$('.lbe3').addClass('show').css('display', 'block');
$('.lbe3').removeClass('hide');
},13000);
setTimeout(function(){
$('.lbe4').addClass('show').css('display', 'block');
$('.lbe4').removeClass('hide');
},14500);
setTimeout(function(){
$('.lbe5').addClass('show').css('display', 'block');
$('.lbe5').removeClass('hide');
},17500);
setTimeout(function(){
$('.lbe6').addClass('show').css('display', 'block');
$('.lbe6').removeClass('hide');
},20500);
setTimeout(function(){
$('.lbe7').addClass('show').css('display', 'block');
$('.lbe7').removeClass('hide');
},26000);
setTimeout(function(){
$('.lbe8').addClass('show').css('display', 'block');
$('.lbe8').removeClass('hide');
},29000);
setTimeout(function(){
$('.lbe9').addClass('show').css('display', 'block');
$('.lbe9').removeClass('hide');
},30500);
setTimeout(function(){
$('.lbe10').addClass('show').css('display', 'block');
$('.lbe10').removeClass('hide');
},36000);


setTimeout(function(){
$('.black').addClass('show').css('display', 'block');
$('.black').removeClass('hide');
var m2 = new Audio('data/se/x.wav');
m2.play();
$('.show-carddc1').addClass('show').css('display', 'block');
$('.show-carddc1').removeClass('hide');
},38500);


          }

        }
        if(globalThis.s==1){

          if(globalThis.t=='112'){
            $('.sb').addClass('hide');
               $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
            $('.xb').addClass('hide');
            $('.zbj').addClass('hide');
            $('.xb1').addClass('hide');
            $('.sb1').addClass('hide');
            $('.zb2').addClass('hide');
            $('.yb2').addClass('hide');
            $('.xcb').addClass('hide');
            $('.scb').addClass('hide');
            $('.zcb').addClass('hide');
            $('.ycb').addClass('hide');
            $('.xcbb').addClass('hide');
            $('.xcb1').addClass('hide');
            $('.scb1').addClass('hide');
            $('.zcb1').addClass('hide');
            $('.ycb1').addClass('hide');
            $('.xcb2').addClass('hide');
            $('.scb2').addClass('hide');
            $('.zcb2').addClass('hide');
            $('.ycb2').addClass('hide');
            $('.message22j').addClass('hide');
            $('.message22jj').addClass('hide');
            $('.message14j').addClass('hide');
            $('.message10j').addClass('hide');
            $('.message7j').addClass('hide');
            $('.message6j').addClass('hide');
            $('.message6jj').addClass('hide');
            $('.message5j').addClass('hide');
            $('.message1j').addClass('hide');
            $('.messagej').addClass('hide');
            $('.message1').addClass('hide');
             $('.message').addClass('hide');
             $('.message1').addClass('hide');
             $('.message2').addClass('hide');
          $('.message2j').addClass('hide');
             $('.message3').addClass('hide');
             $('.message4').addClass('hide');
             $('.message5').addClass('hide');
             $('.message6').addClass('hide');
              $('.message6jj').addClass('hide');
             $('.message7').addClass('hide');
             $('.message8').addClass('hide');
            $('.message9').addClass('hide');
              $('.message9j').addClass('hide');
             $('.message10').addClass('hide');    
             $('.message11').addClass('hide');
             $('.message12').addClass('hide');
             $('.message13').addClass('hide');
             $('.message13j').addClass('hide');
             $('.message14').addClass('hide');
             $('.message15').addClass('hide');
             $('.message16').addClass('hide');
             $('.message17').addClass('hide');
             $('.message18').addClass('hide');
             $('.message19').addClass('hide');
             $('.message20').addClass('hide');
             $('.message20j').addClass('hide');
                $('.message21').addClass('hide');
             $('.message21j').addClass('hide');
              $('.message22').addClass('hide');
          $('.message22jjj').addClass('hide');
             $('.message22j').addClass('hide');
              $('.message22jj').addClass('hide');
              $('.message14j').addClass('hide');
              $('.message10j').addClass('hide');
              $('.message10jj').addClass('hide');
              $('.message7j').addClass('hide');
              $('.message6j').addClass('hide');
            $('.message6jj').addClass('hide');
              $('.message5j').addClass('hide');
              $('.message5jj').addClass('hide');
              $('.message1j').addClass('hide');
              $('.message1jj').addClass('hide');
              $('.messagej').addClass('hide');
              $('.messagejj').addClass('hide');
             $('.message23').addClass('hide');
             $('.message24').addClass('hide');
                $('.message21').addClass('hide');
             $('.message21j').addClass('hide');
              $('.message22').addClass('hide');
          $('.message22jjj').addClass('hide');
             $('.message22j').addClass('hide');
              $('.message22jj').addClass('hide');
              $('.message14j').addClass('hide');
              $('.message10j').addClass('hide');
              $('.message10jj').addClass('hide');
              $('.message7j').addClass('hide');
              $('.message6j').addClass('hide');
            $('.message6jj').addClass('hide');
              $('.message5j').addClass('hide');
              $('.message5jj').addClass('hide');
              $('.message1j').addClass('hide');
              $('.message1jj').addClass('hide');
              $('.messagej').addClass('hide');
              $('.messagejj').addClass('hide');
             $('.message23').addClass('hide');
             $('.message24').addClass('hide');
             
             $('.s1').addClass('hide');  
             $('.s11').addClass('hide'); 
             $('.s12').addClass('hide');
             $('.s2').addClass('hide');  
             $('.s21').addClass('hide'); 
             $('.s22').addClass('hide');
             $('.s3').addClass('hide');
             $('.s31').addClass('hide');
             $('.s32').addClass('hide');
             $('.s4').addClass('hide');
             $('.s41').addClass('hide');
             $('.s42').addClass('hide');
             $('.s43').addClass('hide');
             $('.s5').addClass('hide');
            $('.s51').addClass('hide');
            $('.s52').addClass('hide');  
            $('.s53').addClass('hide');
            $('.s6').addClass('hide');
            $('.s61').addClass('hide');
            $('.s62').addClass('hide');
            $('.s7').addClass('hide');
            $('.s71').addClass('hide');
            $('.s72').addClass('hide');
            $('.s83').addClass('hide');
            $('.s8').addClass('hide');
            $('.s81').addClass('hide');
            $('.s82').addClass('hide');
            $('.s9').addClass('hide');
            $('.s91').addClass('hide');
            $('.s92').addClass('hide');
            $('.s10').addClass('hide');
            $('.s101').addClass('hide');
            $('.s102').addClass('hide');
          
            
            $('.b11').addClass('hide');
            $('.b12').addClass('hide');
            $('.b21').addClass('hide');
            $('.b22').addClass('hide');
            $('.b31').addClass('hide');
            $('.b32').addClass('hide');
            $('.b41').addClass('hide');
            $('.b42').addClass('hide');
            $('.b51').addClass('hide');
            $('.b52').addClass('hide');
            $('.b53').addClass('hide');
            $('.b54').addClass('hide');
            $('.b55').addClass('hide');
            $('.b56').addClass('hide');
            $('.b57').addClass('hide');
            $('.b58').addClass('hide');
            $('.b61').addClass('hide');
            $('.b62').addClass('hide');
            $('.sb').addClass('hide');
               $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
            $('.xb').addClass('hide');
            $('.yb').addClass('hide');
            $('.xb').addClass('hide');
            $('.show-card').addClass('hide');
              $('.show-card1').addClass('hide');
              $('.show-card2').addClass('hide');
              $('.show-card3').addClass('hide');
              $('.show-card4').addClass('hide');
              $('.show-card5').addClass('hide');
              $('.show-card6').addClass('hide');
              $('.show-card7').addClass('hide');
              $('.show-card8').addClass('hide');
              $('.show-card9').addClass('hide');
              $('.show-card10').addClass('hide');    
              $('.show-card11').addClass('hide');
              $('.show-card12').addClass('hide');
              $('.show-card13').addClass('hide');
              $('.show-card14').addClass('hide');
              $('.show-card15').addClass('hide');
              $('.show-card16').addClass('hide');
              $('.show-card17').addClass('hide');
              $('.show-card18').addClass('hide');
              $('.show-card19').addClass('hide');
              $('.show-card20').addClass('hide');
              $('.show-card21').addClass('hide');
              $('.show-card22').addClass('hide');
              $('.show-card23').addClass('hide');
              $('.show-card24').addClass('hide');
              $('.show-card25').addClass('hide');
              $('.show-card26').addClass('hide');
              $('.show-card27').addClass('hide');
              $('.show-card28').addClass('hide');
              $('.show-card29').addClass('hide');
              $('.show-card30').addClass('hide');
              $('.show-card31').addClass('hide');
              $('.show-card32').addClass('hide');
              $('.show-card33').addClass('hide');
              $('.show-card34').addClass('hide');
              $('.show-card35').addClass('hide');
              $('.show-card36').addClass('hide');
              $('.show-card37').addClass('hide');
              $('.show-card38').addClass('hide');
              $('.show-card39').addClass('hide');
              $('.show-card40').addClass('hide');
                     
          
                      setTimeout(function(){
                        $(".jsh").removeClass('hide');
                        $(".jsh").addClass('show').css('display', 'block');
                      },3000); 
                      setTimeout(function(){
                        $(".jsh1").removeClass('hide');
                        $(".jsh1").addClass('show').css('display', 'block');
                      },6000);
                      setTimeout(function(){
                        $(".jsh2").removeClass('hide');
                        $(".jsh2").addClass('show').css('display', 'block');
                      },9000);
                      setTimeout(function(){
                        $(".jsh32").removeClass('hide');
                        $(".jsh32").addClass('show').css('display', 'block');
                      },14500);
        
        }else{
            
          
    $('.show-card').addClass('hide');
    $('.show-card1').addClass('hide');
    $('.show-card2').addClass('hide');
    $('.show-card3').addClass('hide');
    $('.show-card4').addClass('hide');
    $('.show-card5').addClass('hide');
    $('.show-card6').addClass('hide');
    $('.show-card7').addClass('hide');
    $('.show-card8').addClass('hide');
    $('.show-card9').addClass('hide');
    $('.show-card10').addClass('hide');    
    $('.show-card11').addClass('hide');
    $('.show-card12').addClass('hide');
    $('.show-card13').addClass('hide');
    $('.show-card14').addClass('hide');
    $('.show-card15').addClass('hide');
    $('.show-card16').addClass('hide');
    $('.show-card17').addClass('hide');
    $('.show-card18').addClass('hide');
    $('.show-card19').addClass('hide');
    $('.show-card20').addClass('hide');
    $('.show-card21').addClass('hide');
    $('.show-card22').addClass('hide');
    $('.show-card23').addClass('hide');
    $('.show-card24').addClass('hide');
    $('.show-card25').addClass('hide');
    $('.show-card26').addClass('hide');
    $('.show-card27').addClass('hide');
    $('.show-card28').addClass('hide');
    $('.show-card29').addClass('hide');
    $('.show-card30').addClass('hide');
    $('.show-card31').addClass('hide');
    $('.show-card32').addClass('hide');
    $('.show-card33').addClass('hide');
    $('.show-card34').addClass('hide');
    $('.show-card35').addClass('hide');
    $('.show-card36').addClass('hide');
    $('.show-card37').addClass('hide');
    $('.show-card38').addClass('hide');
    $('.show-card39').addClass('hide');
    $('.show-card40').addClass('hide');
         
    var audio = document.getElementById("indexs");
    var vol1 = 0.50;
      var interval1 = 200; // 200ms interval
    
    var fadeout = setInterval(
      function() {
        // Reduce volume by 0.05 as long as it is above 0
        // This works as long as you start with a multiple of 0.05!
        if (vol1 > 0) {
          vol1 -= 0.05;
          audio.volume = vol1;
        }
        else {
          // Stop the setInterval when 0 is reached
          clearInterval(fadeout);
        }
      }, interval1);     
setTimeout(function(){
var m1 = new Audio('data/se/be.wav');
m1.play();
$('.red').removeClass('hide');
$('.red').addClass('show').css('display', 'block');
},600);
setTimeout(function(){

$('.red1').removeClass('hide');
$('.red1').addClass('show').css('display', 'block');
},2100);
setTimeout(function(){

$('.red2').removeClass('hide');
$('.red2').addClass('show').css('display', 'block');
},3600);

setTimeout(function(){
$('.lbe').addClass('show').css('display', 'block');
$('.lbe').removeClass('hide');
},6500);
setTimeout(function(){
$('.lbe1').addClass('show').css('display', 'block');
$('.lbe1').removeClass('hide');
},8500);
setTimeout(function(){
$('.lbe2').addClass('show').css('display', 'block');
$('.lbe2').removeClass('hide');
},11500);
setTimeout(function(){
$('.lbe3').addClass('show').css('display', 'block');
$('.lbe3').removeClass('hide');
},13000);
setTimeout(function(){
$('.lbe4').addClass('show').css('display', 'block');
$('.lbe4').removeClass('hide');
},14500);
setTimeout(function(){
$('.lbe5').addClass('show').css('display', 'block');
$('.lbe5').removeClass('hide');
},17500);
setTimeout(function(){
$('.lbe6').addClass('show').css('display', 'block');
$('.lbe6').removeClass('hide');
},20500);
setTimeout(function(){
$('.lbe7').addClass('show').css('display', 'block');
$('.lbe7').removeClass('hide');
},26000);
setTimeout(function(){
$('.lbe8').addClass('show').css('display', 'block');
$('.lbe8').removeClass('hide');
},29000);
setTimeout(function(){
$('.lbe9').addClass('show').css('display', 'block');
$('.lbe9').removeClass('hide');
},30500);
setTimeout(function(){
$('.lbe10').addClass('show').css('display', 'block');
$('.lbe10').removeClass('hide');
},36000);


setTimeout(function(){
$('.black').addClass('show').css('display', 'block');
$('.black').removeClass('hide');
var m2 = new Audio('data/se/x.wav');
m2.play();
$('.show-carddc1').addClass('show').css('display', 'block');
$('.show-carddc1').removeClass('hide');
},38500);

          }
        }
  
      }
    }}}


  }else{

    if (r<50) {
      if (r<25) {   
        var div = document.getElementById('shang');
        var div1 = document.getElementById('xia');
        var div2 = document.getElementById('you');
        var div3 = document.getElementById('zuo');
        div.style.visibility = 'hidden';
        div1.style.visibility = 'hidden';
        div2.style.visibility = 'hidden';
        div3.style.visibility = 'hidden';
        $('.shang').addClass('hide');
        $('.you').addClass('hide');
        $('.zuo').addClass('hide');
        $('.xia').addClass('hide');
         var s = [1,2,3,4];
         var rands = s[Math.floor(Math.random()*4)];
         var f = '.s'+rands
         var f1 = '.s'+rands+'1'
         var f2 = '.s'+rands+'2'
         var f3 = '.s'+rands+'3'
         setTimeout(function() {
          $(f).removeClass('hide');
          $(f).addClass('show').css('display', 'block');
         }, 500);
         setTimeout(function() {
          $(f1).removeClass('hide');
          $(f1).addClass('show').css('display', 'block');
        }, 2000);
        setTimeout(function() {
          $(f2).removeClass('hide');
          $(f2).addClass('show').css('display', 'block');
        }, 3500);
        setTimeout(function() {
          $(f3).removeClass('hide');
          $(f3).addClass('show').css('display', 'block');
        }, 5000);



        setTimeout(function() {
        
          $('.shang').removeClass('hide');
          $('.shang').addClass('show').css('display', 'block');
          $('.xia').removeClass('hide');
          $('.xia').addClass('show').css('display', 'block');
          $('.zuo').removeClass('hide');
          $('.zuo').addClass('show').css('display', 'block');
          $('.you').removeClass('hide');
          $('.you').addClass('show').css('display', 'block');
          div.style.visibility = 'visible';
          div1.style.visibility = 'visible';
          div2.style.visibility = 'visible';
          div3.style.visibility = 'visible';
        }, 6000);
      } else {   
        $('.shang').addClass('hide');
        $('.you').addClass('hide');
        $('.zuo').addClass('hide');
        $('.xia').addClass('hide');
        var div = document.getElementById('shang');
        var div1 = document.getElementById('xia');
        var div2 = document.getElementById('you');
        var div3 = document.getElementById('zuo');
        div.style.visibility = 'hidden';
        div1.style.visibility = 'hidden';
        div2.style.visibility = 'hidden';
        div3.style.visibility = 'hidden';
         var s = [10,5,6,7,8,9];
         var rands = s[Math.floor(Math.random()*6)];
         var f = '.s'+rands
         var f1 = '.s'+rands+'1'
         var f2 = '.s'+rands+'2'
         var f3 = '.s'+rands+'3'
         var rands1=rands - 4;
         var a1 = '.b'+rands1+'1'
         var a2 = '.b'+rands1+'2'
         var a3 = '.b'+rands1+'3'
         setTimeout(function() {
         $(f).removeClass('hide');
         $(f).addClass('show').css('display', 'block');
        }, 500);
         setTimeout(function() {
          $(f1).removeClass('hide');
          $(f1).addClass('show').css('display', 'block');
        }, 2000);
        setTimeout(function() {
          $(f2).removeClass('hide');
          $(f2).addClass('show').css('display', 'block');
        }, 3500);
        setTimeout(function() {
          $(f3).removeClass('hide');
          $(f3).addClass('show').css('display', 'block');
        }, 5000);


         setTimeout(function() {
          $(a1).removeClass('hide');
          $(a1).addClass('show').css('display', 'block');
          $(a2).removeClass('hide');
          $(a2).addClass('show').css('display', 'block');
          $(a3).removeClass('hide');
          $(a3).addClass('show').css('display', 'block');
        }, 6000);
  
      }
      
    } else {
      if(globalThis.flag==6){
        globalThis.r=1
        globalThis.k=1
        $('.message18').removeClass('hide');
        $('.message18').addClass('show').css('display', 'block');
        $('.show-card27').removeClass('hide');
        $('.show-card27').addClass('show').css('display', 'block');
        globalThis.flag=7
      }
      if(globalThis.flag==5){
        $('.message9').removeClass('hide');
        $('.message9').addClass('show').css('display', 'block');
        setTimeout(function() {
          $('.message9j').removeClass('hide');
        $('.message9j').addClass('show').css('display', 'block');
        }, 1100);
        $('.show-card31').removeClass('hide');
        $('.show-card31').addClass('show').css('display', 'block');
        globalThis.flag=6
      }
      if(globalThis.flag==4){
        $('.message15').removeClass('hide');
        $('.message15').addClass('show').css('display', 'block');
        $('.show-card23').removeClass('hide');
        $('.show-card23').addClass('show').css('display', 'block');
        globalThis.flag=5
      }
      if(globalThis.flag==3){
        $('.message8').removeClass('hide');
        $('.message8').addClass('show').css('display', 'block');
        $('.show-card12').removeClass('hide');
        $('.show-card12').addClass('show').css('display', 'block');
        globalThis.flag=4
      }
      if(globalThis.flag==2){
        $('.message9').removeClass('hide');
        $('.message9').addClass('show').css('display', 'block');
        setTimeout(function() {
          $('.message9j').removeClass('hide');
        $('.message9j').addClass('show').css('display', 'block');
        }, 1100);
        $('.show-card13').removeClass('hide');
        $('.show-card13').addClass('show').css('display', 'block');
        globalThis.flag=3
      }
      if(globalThis.flag==1){
        $('.message3').removeClass('hide');
        $('.message3').addClass('show').css('display', 'block');
        $('.show-card8').removeClass('hide');
        $('.show-card8').addClass('show').css('display', 'block');
        globalThis.flag=2
      }
      if(globalThis.flag==0){
        $('.message23').removeClass('hide');
        $('.message23').addClass('show').css('display', 'block');
        $('.show-card5').removeClass('hide');
        $('.show-card5').addClass('show').css('display', 'block');
        globalThis.flag=1
      }
     
  
    }
    
  }
  
  
});


$('.you').click(function(e) {
  var music = new Audio('data/se/z.wav');
  music.volume=0.5;
  music.play();
  $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb1').addClass('hide');
  $('.sb1').addClass('hide');
  $('.zb2').addClass('hide');
  $('.yb2').addClass('hide');
  $('.xcb').addClass('hide');
  $('.scb').addClass('hide');
  $('.zcb').addClass('hide');
  $('.ycb').addClass('hide');
  $('.xcbb').addClass('hide');
  $('.xcb1').addClass('hide');
  $('.scb1').addClass('hide');
  $('.zcb1').addClass('hide');
  $('.ycb1').addClass('hide');
  $('.xcb2').addClass('hide');
  $('.scb2').addClass('hide');
  $('.zcb2').addClass('hide');
  $('.ycb2').addClass('hide');
  $('.message22j').addClass('hide');
  $('.message22jj').addClass('hide');
  $('.message14j').addClass('hide');
  $('.message10j').addClass('hide');
  $('.message7j').addClass('hide');
  $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
  $('.message5j').addClass('hide');
  $('.message1j').addClass('hide');
  $('.messagej').addClass('hide');
  $('.message1').addClass('hide');
   $('.message').addClass('hide');
   $('.message1').addClass('hide');
   $('.message2').addClass('hide');
$('.message2j').addClass('hide');
   $('.message3').addClass('hide');
   $('.message4').addClass('hide');
   $('.message5').addClass('hide');
   $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
   $('.message7').addClass('hide');
   $('.message8').addClass('hide');
  $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
   $('.message10').addClass('hide');    
   $('.message11').addClass('hide');
   $('.message12').addClass('hide');
   $('.message13').addClass('hide');
   $('.message13j').addClass('hide');
   $('.message14').addClass('hide');
   $('.message15').addClass('hide');
   $('.message16').addClass('hide');
   $('.message17').addClass('hide');
   $('.message16j').addClass('hide');
   $('.message17j').addClass('hide');
   $('.message18').addClass('hide');
   $('.message19').addClass('hide');
   $('.message20').addClass('hide');
   $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
   $('.s1').addClass('hide');  
   $('.s11').addClass('hide'); 
   $('.s12').addClass('hide');
   $('.s2').addClass('hide');  
   $('.s21').addClass('hide'); 
   $('.s22').addClass('hide');
   $('.s3').addClass('hide');
   $('.s31').addClass('hide');
   $('.s32').addClass('hide');
   $('.s4').addClass('hide');
   $('.s41').addClass('hide');
   $('.s42').addClass('hide');
   $('.s43').addClass('hide');
   $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide');  
  $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');

  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b54').addClass('hide');
  $('.b55').addClass('hide');
  $('.b56').addClass('hide');
  $('.b57').addClass('hide');
  $('.b58').addClass('hide');
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');
  //  var r=Math.floor(Math.random() * 100) + 1;
  //  if(globalThis.flag==7){
  //    if(globalThis.r==0){
  //     if(globalThis.e==2){
 
  //       $('.show-card').addClass('hide');
  //   $('.show-card1').addClass('hide');
  //   $('.show-card2').addClass('hide');
  //   $('.show-card3').addClass('hide');
  //   $('.show-card4').addClass('hide');
  //   $('.show-card5').addClass('hide');
  //   $('.show-card6').addClass('hide');
  //   $('.show-card7').addClass('hide');
  //   $('.show-card8').addClass('hide');
  //   $('.show-card9').addClass('hide');
  //   $('.show-card10').addClass('hide');    
  //   $('.show-card11').addClass('hide');
  //   $('.show-card12').addClass('hide');
  //   $('.show-card13').addClass('hide');
  //   $('.show-card14').addClass('hide');
  //   $('.show-card15').addClass('hide');
  //   $('.show-card16').addClass('hide');
  //   $('.show-card17').addClass('hide');
  //   $('.show-card18').addClass('hide');
  //   $('.show-card19').addClass('hide');
  //   $('.show-card20').addClass('hide');
  //   $('.show-card21').addClass('hide');
  //   $('.show-card22').addClass('hide');
  //   $('.show-card23').addClass('hide');
  //   $('.show-card24').addClass('hide');
  //   $('.show-card25').addClass('hide');
  //   $('.show-card26').addClass('hide');
  //   $('.show-card27').addClass('hide');
  //   $('.show-card28').addClass('hide');
  //   $('.show-card29').addClass('hide');
  //   $('.show-card30').addClass('hide');
  //   $('.show-card31').addClass('hide');
  //   $('.show-card32').addClass('hide');
  //   $('.show-card33').addClass('hide');
  //   $('.show-card34').addClass('hide');
  //   $('.show-card35').addClass('hide');
  //   $('.show-card36').addClass('hide');
  //   $('.show-card37').addClass('hide');
  //   $('.show-card38').addClass('hide');
  //   $('.show-card39').addClass('hide');
  //   $('.show-card40').addClass('hide');
  //   var div = document.getElementById('shang');
  //         var div1 = document.getElementById('xia');
  //         var div2 = document.getElementById('you');
  //         var div3 = document.getElementById('zuo');
  //         div.style.visibility = 'hidden';
  //         div1.style.visibility = 'hidden';
  //         div2.style.visibility = 'hidden';
  //         div3.style.visibility = 'hidden';
  //         $('.shang').addClass('hide');
  //         $('.you').addClass('hide');
  //         $('.zuo').addClass('hide');
  //         $('.xia').addClass('hide');



                   
  //         var audio = document.getElementById("indexs");
  //         var vol1 = 0.50;
  //           var interval1 = 200; // 200ms interval
          
  //         var fadeout = setInterval(
  //           function() {
  //             // Reduce volume by 0.05 as long as it is above 0
  //             // This works as long as you start with a multiple of 0.05!
  //             if (vol1 > 0) {
  //               vol1 -= 0.05;
  //               audio.volume = vol1;
  //             }
  //             else {
  //               // Stop the setInterval when 0 is reached
  //               clearInterval(fadeout);
  //             }
  //           }, interval1);     
  // setTimeout(function(){
  //   var m1 = new Audio('data/se/be.wav');
  //   m1.play();
  //   $('.red').removeClass('hide');
  //   $('.red').addClass('show').css('display', 'block');
  // },600);
  // setTimeout(function(){
  
  //   $('.red1').removeClass('hide');
  //   $('.red1').addClass('show').css('display', 'block');
  // },2100);
  // setTimeout(function(){
  
  //   $('.red2').removeClass('hide');
  //   $('.red2').addClass('show').css('display', 'block');
  // },3600);
  // setTimeout(function(){
  //   $('.lbe').addClass('show').css('display', 'block');
  //   $('.lbe').removeClass('hide');
  //   },6500);
  //   setTimeout(function(){
  //   $('.lbe1').addClass('show').css('display', 'block');
  //   $('.lbe1').removeClass('hide');
  //   },8500);
  //   setTimeout(function(){
  //   $('.lbe2').addClass('show').css('display', 'block');
  //   $('.lbe2').removeClass('hide');
  //   },11500);
  //   setTimeout(function(){
  //   $('.lbe3').addClass('show').css('display', 'block');
  //   $('.lbe3').removeClass('hide');
  //   },13000);
  //   setTimeout(function(){
  //   $('.lbe4').addClass('show').css('display', 'block');
  //   $('.lbe4').removeClass('hide');
  //   },14500);
  //   setTimeout(function(){
  //   $('.lbe5').addClass('show').css('display', 'block');
  //   $('.lbe5').removeClass('hide');
  //   },17500);
  //   setTimeout(function(){
  //   $('.lbe6').addClass('show').css('display', 'block');
  //   $('.lbe6').removeClass('hide');
  //   },20500);
  //   setTimeout(function(){
  //   $('.lbe7').addClass('show').css('display', 'block');
  //   $('.lbe7').removeClass('hide');
  //   },26000);
  //   setTimeout(function(){
  //   $('.lbe8').addClass('show').css('display', 'block');
  //   $('.lbe8').removeClass('hide');
  //   },29000);
  //   setTimeout(function(){
  //   $('.lbe9').addClass('show').css('display', 'block');
  //   $('.lbe9').removeClass('hide');
  //   },30500);
  //   setTimeout(function(){
  //   $('.lbe10').addClass('show').css('display', 'block');
  //   $('.lbe10').removeClass('hide');
  //   },36000);
    
    
  //   setTimeout(function(){
  //   $('.black').addClass('show').css('display', 'block');
  //   $('.black').removeClass('hide');
  //   var m2 = new Audio('data/se/x.wav');
  //   m2.play();
  //   $('.show-carddc1').addClass('show').css('display', 'block');
  //   $('.show-carddc1').removeClass('hide');
  //   },38500);
  //     }
  //      if(globalThis.e<2){
  //        globalThis.e=globalThis.e +1
  //        var r=Math.floor(Math.random() * 100) + 1;
  //        if (r<50) {   
  //          var div = document.getElementById('shang');
  //          var div1 = document.getElementById('xia');
  //          var div2 = document.getElementById('you');
  //          var div3 = document.getElementById('zuo');
  //          div.style.visibility = 'hidden';
  //          div1.style.visibility = 'hidden';
  //          div2.style.visibility = 'hidden';
  //          div3.style.visibility = 'hidden';
  //          $('.shang').addClass('hide');
  //          $('.you').addClass('hide');
  //          $('.zuo').addClass('hide');
  //          $('.xia').addClass('hide');
  //           var s = [1,2,3,4];
  //           var rands = s[Math.floor(Math.random()*4)];
  //           var f = '.s'+rands
  //           var f1 = '.s'+rands+'1'
  //           var f2 = '.s'+rands+'2'
  //           var f3 = '.s'+rands+'3'
  //           setTimeout(function() {
  //            $(f).removeClass('hide');
  //            $(f).addClass('show').css('display', 'block');
  //           }, 500);
  //           setTimeout(function() {
  //            $(f1).removeClass('hide');
  //            $(f1).addClass('show').css('display', 'block');
  //          }, 2000);
  //          setTimeout(function() {
  //            $(f2).removeClass('hide');
  //            $(f2).addClass('show').css('display', 'block');
  //          }, 3500);
  //          setTimeout(function() {
  //            $(f3).removeClass('hide');
  //            $(f3).addClass('show').css('display', 'block');
  //          }, 5000);
   
   
   
  //          setTimeout(function() {
           
  //            $('.shang').removeClass('hide');
  //            $('.shang').addClass('show').css('display', 'block');
  //            $('.xia').removeClass('hide');
  //            $('.xia').addClass('show').css('display', 'block');
  //            $('.zuo').removeClass('hide');
  //            $('.zuo').addClass('show').css('display', 'block');
  //            $('.you').removeClass('hide');
  //            $('.you').addClass('show').css('display', 'block');
  //            div.style.visibility = 'visible';
  //            div1.style.visibility = 'visible';
  //            div2.style.visibility = 'visible';
  //            div3.style.visibility = 'visible';
  //          }, 6000);
  //        } else {   
  //          $('.shang').addClass('hide');
  //          $('.you').addClass('hide');
  //          $('.zuo').addClass('hide');
  //          $('.xia').addClass('hide');
  //          var div = document.getElementById('shang');
  //          var div1 = document.getElementById('xia');
  //          var div2 = document.getElementById('you');
  //          var div3 = document.getElementById('zuo');
  //          div.style.visibility = 'hidden';
  //          div1.style.visibility = 'hidden';
  //          div2.style.visibility = 'hidden';
  //          div3.style.visibility = 'hidden';
  //           var s = [10,5,6,7,8,9];
  //           var rands = s[Math.floor(Math.random()*6)];
  //           var f = '.s'+rands
  //           var f1 = '.s'+rands+'1'
  //           var f2 = '.s'+rands+'2'
  //           var f3 = '.s'+rands+'3'
  //           var rands1=rands - 4;
  //           var a1 = '.b'+rands1+'1'
  //           var a2 = '.b'+rands1+'2'
  //           var a3 = '.b'+rands1+'3'
  //           setTimeout(function() {
  //           $(f).removeClass('hide');
  //           $(f).addClass('show').css('display', 'block');
  //          }, 500);
  //           setTimeout(function() {
  //            $(f1).removeClass('hide');
  //            $(f1).addClass('show').css('display', 'block');
  //          }, 2000);
  //          setTimeout(function() {
  //            $(f2).removeClass('hide');
  //            $(f2).addClass('show').css('display', 'block');
  //          }, 3500);
  //          setTimeout(function() {
  //            $(f3).removeClass('hide');
  //            $(f3).addClass('show').css('display', 'block');
  //          }, 5000);
   
   
  //           setTimeout(function() {
  //            $(a1).removeClass('hide');
  //            $(a1).addClass('show').css('display', 'block');
  //            $(a2).removeClass('hide');
  //            $(a2).addClass('show').css('display', 'block');
  //            $(a3).removeClass('hide');
  //            $(a3).addClass('show').css('display', 'block');
  //          }, 6000);
     
  //        }
 
 
  //      }
       
 
  //    }else{
  //     if(globalThis.e==0){
  //       globalThis.e=globalThis.e+1
  //       var s = [1,2,3,4];
  //          var rands = s[Math.floor(Math.random()*4)];
  //          var f = '.s'+rands
  //          var f1 = '.s'+rands+'1'
  //          var f2 = '.s'+rands+'2'
  //          var f3 = '.s'+rands+'3'
  //          setTimeout(function() {
  //           $(f).removeClass('hide');
  //           $(f).addClass('show').css('display', 'block');
  //          }, 500);
  //          setTimeout(function() {
  //           $(f1).removeClass('hide');
  //           $(f1).addClass('show').css('display', 'block');
  //         }, 2000);
  //         setTimeout(function() {
  //           $(f2).removeClass('hide');
  //           $(f2).addClass('show').css('display', 'block');
  //         }, 3500);
  //         setTimeout(function() {
  //           $(f3).removeClass('hide');
  //           $(f3).addClass('show').css('display', 'block');
  //         }, 5000);
  
  
  
  //         setTimeout(function() {
          
  //           $('.shang').removeClass('hide');
  //           $('.shang').addClass('show').css('display', 'block');
  //           $('.xia').removeClass('hide');
  //           $('.xia').addClass('show').css('display', 'block');
  //           $('.zuo').removeClass('hide');
  //           $('.zuo').addClass('show').css('display', 'block');
  //           $('.you').removeClass('hide');
  //           $('.you').addClass('show').css('display', 'block');
  //           div.style.visibility = 'visible';
  //           div1.style.visibility = 'visible';
  //           div2.style.visibility = 'visible';
  //           div3.style.visibility = 'visible';
  //           if(globalThis.s==1){
        
  //             $('.sb').removeClass('hide');
  //             $('.sb').addClass('show').css('display', 'block');
    
  //           }
  //           if(globalThis.a==1){
        
  //             $('.xb').removeClass('hide');
  //             $('.xb').addClass('show').css('display', 'block');
    
  //           }
  //           if(globalThis.k==1){
        
  //             $('.zb').removeClass('hide');
  //             $('.zb').addClass('show').css('display', 'block');
    
  //           }

  //         }, 6000);

  //     }
  //      if(globalThis.e<4 && globalThis.e>0){
  //       if(globalThis.e==1 && globalThis.s==1){
        
  //         $('.sb').removeClass('hide');
  //         $('.sb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==1 && globalThis.a==1){
        
  //         $('.sb').removeClass('hide');
  //         $('.sb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==1 && globalThis.k==1){
        
  //         $('.xb').removeClass('hide');
  //         $('.xb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==2 && globalThis.s==1){
        
  //         $('.zb').removeClass('hide');
  //         $('.zb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==2 && globalThis.a==1){
        
  //         $('.yb').removeClass('hide');
  //         $('.yb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==2 && globalThis.k==1){
        
  //         $('.yb').removeClass('hide');
  //         $('.yb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==3 && globalThis.s==1){
        
  //         $('.yb').removeClass('hide');
  //         $('.yb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==3 && globalThis.a==1){
        
  //         $('.yb').removeClass('hide');
  //         $('.yb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==3 && globalThis.k==1){
        
  //         $('.sb').removeClass('hide');
  //         $('.sb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==4 && globalThis.s==1){
        
  //         $('.sb').removeClass('hide');
  //         $('.sb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==4 && globalThis.a==1){
        
  //         $('.sb').removeClass('hide');
  //         $('.sb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==4 && globalThis.k==1){
        
  //         $('.xb').removeClass('hide');
  //         $('.xb').addClass('show').css('display', 'block');

  //       }
        
  //       if(globalThis.e<5){
  //       globalThis.t=globalThis.t+'3'}
  //        globalThis.e=globalThis.e+1
  //        var r=Math.floor(Math.random() * 100) + 1;
  //        if (r<50) {   
  //          var div = document.getElementById('shang');
  //          var div1 = document.getElementById('xia');
  //          var div2 = document.getElementById('you');
  //          var div3 = document.getElementById('zuo');
  //          div.style.visibility = 'hidden';
  //          div1.style.visibility = 'hidden';
  //          div2.style.visibility = 'hidden';
  //          div3.style.visibility = 'hidden';
  //          $('.shang').addClass('hide');
  //          $('.you').addClass('hide');
  //          $('.zuo').addClass('hide');
  //          $('.xia').addClass('hide');
  //           var s = [1,2,3,4];
  //           var rands = s[Math.floor(Math.random()*4)];
  //           var f = '.s'+rands
  //           var f1 = '.s'+rands+'1'
  //           var f2 = '.s'+rands+'2'
  //           var f3 = '.s'+rands+'3'
  //           setTimeout(function() {
  //            $(f).removeClass('hide');
  //            $(f).addClass('show').css('display', 'block');
  //           }, 500);
  //           setTimeout(function() {
  //            $(f1).removeClass('hide');
  //            $(f1).addClass('show').css('display', 'block');
  //          }, 2000);
  //          setTimeout(function() {
  //            $(f2).removeClass('hide');
  //            $(f2).addClass('show').css('display', 'block');
  //          }, 3500);
  //          setTimeout(function() {
  //            $(f3).removeClass('hide');
  //            $(f3).addClass('show').css('display', 'block');
  //          }, 5000);
   
   
   
  //          setTimeout(function() {
           
  //            $('.shang').removeClass('hide');
  //            $('.shang').addClass('show').css('display', 'block');
  //            $('.xia').removeClass('hide');
  //            $('.xia').addClass('show').css('display', 'block');
  //            $('.zuo').removeClass('hide');
  //            $('.zuo').addClass('show').css('display', 'block');
  //            $('.you').removeClass('hide');
  //            $('.you').addClass('show').css('display', 'block');
  //            div.style.visibility = 'visible';
  //            div1.style.visibility = 'visible';
  //            div2.style.visibility = 'visible';
  //            div3.style.visibility = 'visible';
  //          }, 6000);
  //        } else {   
  //          $('.shang').addClass('hide');
  //          $('.you').addClass('hide');
  //          $('.zuo').addClass('hide');
  //          $('.xia').addClass('hide');
  //          var div = document.getElementById('shang');
  //          var div1 = document.getElementById('xia');
  //          var div2 = document.getElementById('you');
  //          var div3 = document.getElementById('zuo');
  //          div.style.visibility = 'hidden';
  //          div1.style.visibility = 'hidden';
  //          div2.style.visibility = 'hidden';
  //          div3.style.visibility = 'hidden';
  //           var s = [10,5,6,7,8,9];
  //           var rands = s[Math.floor(Math.random()*6)];
  //           var f = '.s'+rands
  //           var f1 = '.s'+rands+'1'
  //           var f2 = '.s'+rands+'2'
  //           var f3 = '.s'+rands+'3'
  //           var rands1=rands - 4;
  //           var a1 = '.b'+rands1+'1'
  //           var a2 = '.b'+rands1+'2'
  //           var a3 = '.b'+rands1+'3'
  //           setTimeout(function() {
  //           $(f).removeClass('hide');
  //           $(f).addClass('show').css('display', 'block');
  //          }, 500);
  //           setTimeout(function() {
  //            $(f1).removeClass('hide');
  //            $(f1).addClass('show').css('display', 'block');
  //          }, 2000);
  //          setTimeout(function() {
  //            $(f2).removeClass('hide');
  //            $(f2).addClass('show').css('display', 'block');
  //          }, 3500);
  //          setTimeout(function() {
  //            $(f3).removeClass('hide');
  //            $(f3).addClass('show').css('display', 'block');
  //          }, 5000);
   
   
  //           setTimeout(function() {
  //            $(a1).removeClass('hide');
  //            $(a1).addClass('show').css('display', 'block');
  //            $(a2).removeClass('hide');
  //            $(a2).addClass('show').css('display', 'block');
  //            $(a3).removeClass('hide');
  //            $(a3).addClass('show').css('display', 'block');
  //          }, 6000);
     
  //        }
  //      }else{
  //      if(globalThis.e==5){
  //       if(globalThis.k==1){
  //         if(globalThis.t='24314'){
  //           $(".ksh").removeClass('hide');
  //         $(".ksh").addClass('show').css('display', 'block');}else{
            
  //         // 這裏放be


  //         }
          

  //       }
  //       if(globalThis.a==1){

  //         if(globalThis.t='41331'){
  //           $(".ash").removeClass('hide');
  //         $(".ash").addClass('show').css('display', 'block');}else{
            
  //         // 這裏放be


  //         }

  //       }
  //       if(globalThis.s==1){

  //         if(globalThis.t='11231'){
  //           $(".ssh").removeClass('hide');
  //         $(".ssh").addClass('show').css('display', 'block');}else{
            
  //         // 這裏放be


  //         }
  //       }
   
  //      }
  //    }}
 
 
  //  }else{
 
  //    if (r<50) {
  //      if (r<25) {   
  //        var div = document.getElementById('shang');
  //        var div1 = document.getElementById('xia');
  //        var div2 = document.getElementById('you');
  //        var div3 = document.getElementById('zuo');
  //        div.style.visibility = 'hidden';
  //        div1.style.visibility = 'hidden';
  //        div2.style.visibility = 'hidden';
  //        div3.style.visibility = 'hidden';
  //        $('.shang').addClass('hide');
  //        $('.you').addClass('hide');
  //        $('.zuo').addClass('hide');
  //        $('.xia').addClass('hide');
  //         var s = [1,2,3,4];
  //         var rands = s[Math.floor(Math.random()*4)];
  //         var f = '.s'+rands
  //         var f1 = '.s'+rands+'1'
  //         var f2 = '.s'+rands+'2'
  //         var f3 = '.s'+rands+'3'
  //         setTimeout(function() {
  //          $(f).removeClass('hide');
  //          $(f).addClass('show').css('display', 'block');
  //         }, 500);
  //         setTimeout(function() {
  //          $(f1).removeClass('hide');
  //          $(f1).addClass('show').css('display', 'block');
  //        }, 2000);
  //        setTimeout(function() {
  //          $(f2).removeClass('hide');
  //          $(f2).addClass('show').css('display', 'block');
  //        }, 3500);
  //        setTimeout(function() {
  //          $(f3).removeClass('hide');
  //          $(f3).addClass('show').css('display', 'block');
  //        }, 5000);
 
 
 
  //        setTimeout(function() {
         
  //          $('.shang').removeClass('hide');
  //          $('.shang').addClass('show').css('display', 'block');
  //          $('.xia').removeClass('hide');
  //          $('.xia').addClass('show').css('display', 'block');
  //          $('.zuo').removeClass('hide');
  //          $('.zuo').addClass('show').css('display', 'block');
  //          $('.you').removeClass('hide');
  //          $('.you').addClass('show').css('display', 'block');
  //          div.style.visibility = 'visible';
  //          div1.style.visibility = 'visible';
  //          div2.style.visibility = 'visible';
  //          div3.style.visibility = 'visible';
  //        }, 6000);
  //      } else {   
  //        $('.shang').addClass('hide');
  //        $('.you').addClass('hide');
  //        $('.zuo').addClass('hide');
  //        $('.xia').addClass('hide');
  //        var div = document.getElementById('shang');
  //        var div1 = document.getElementById('xia');
  //        var div2 = document.getElementById('you');
  //        var div3 = document.getElementById('zuo');
  //        div.style.visibility = 'hidden';
  //        div1.style.visibility = 'hidden';
  //        div2.style.visibility = 'hidden';
  //        div3.style.visibility = 'hidden';
  //         var s = [10,5,6,7,8,9];
  //         var rands = s[Math.floor(Math.random()*6)];
  //         var f = '.s'+rands
  //         var f1 = '.s'+rands+'1'
  //         var f2 = '.s'+rands+'2'
  //         var f3 = '.s'+rands+'3'
  //         var rands1=rands - 4;
  //         var a1 = '.b'+rands1+'1'
  //         var a2 = '.b'+rands1+'2'
  //         var a3 = '.b'+rands1+'3'
  //         setTimeout(function() {
  //         $(f).removeClass('hide');
  //         $(f).addClass('show').css('display', 'block');
  //        }, 500);
  //         setTimeout(function() {
  //          $(f1).removeClass('hide');
  //          $(f1).addClass('show').css('display', 'block');
  //        }, 2000);
  //        setTimeout(function() {
  //          $(f2).removeClass('hide');
  //          $(f2).addClass('show').css('display', 'block');
  //        }, 3500);
  //        setTimeout(function() {
  //          $(f3).removeClass('hide');
  //          $(f3).addClass('show').css('display', 'block');
  //        }, 5000);
 
 
  //         setTimeout(function() {
  //          $(a1).removeClass('hide');
  //          $(a1).addClass('show').css('display', 'block');
  //          $(a2).removeClass('hide');
  //          $(a2).addClass('show').css('display', 'block');
  //          $(a3).removeClass('hide');
  //          $(a3).addClass('show').css('display', 'block');
  //        }, 6000);
   
  //      }
       
  //    } else {
  //       if(globalThis.flag==6){
  //           $('.message22').removeClass('hide');
  //           $('.message22').addClass('show').css('display', 'block');
  //           setTimeout(function() {
  //             $('.message22j').removeClass('hide');
  //           $('.message22j').addClass('show').css('display', 'block');
  //           }, 1100);
  //           setTimeout(function() {
  //             $('.message22jj').removeClass('hide');
  //           $('.message22jj').addClass('show').css('display', 'block');
  //           }, 1100);
  //           $('.show-card32').removeClass('hide');
  //           $('.show-card32').addClass('show').css('display', 'block');
  //           globalThis.flag=7
  //         }
  //         if(globalThis.flag==5){
  //           $('.message19').removeClass('hide');
  //           $('.message19').addClass('show').css('display', 'block');
  //           $('.show-card28').removeClass('hide');
  //           $('.show-card28').addClass('show').css('display', 'block');
  //           globalThis.flag=6
  //         }
  //         if(globalThis.flag==4){
  //           $('.message16').removeClass('hide');
  //           $('.message16').addClass('show').css('display', 'block');
  //           setTimeout(function() {
  //             $('.message16j').removeClass('hide');
  //           $('.message16j').addClass('show').css('display', 'block');
  //           }, 1100);
  //           $('.show-card24').removeClass('hide');
  //           $('.show-card24').addClass('show').css('display', 'block');
  //           globalThis.flag=5
  //         }
  //         if(globalThis.flag==3){
  //           $('.message20').removeClass('hide');
  //           $('.message20').addClass('show').css('display', 'block');
  //           setTimeout(function() {
  //             $('.message20j').removeClass('hide');
  //           $('.message20j').addClass('show').css('display', 'block');
  //           }, 1100);
  //           $('.show-card20').removeClass('hide');
  //           $('.show-card20').addClass('show').css('display', 'block');
  //           globalThis.flag=4
  //         }
  //         if(globalThis.flag==2){
  //           setTimeout(function() {
  //             $('.message9j').removeClass('hide');
  //           $('.message9j').addClass('show').css('display', 'block');
  //           }, 1100);
  //           $('.message9').removeClass('hide');
  //           $('.message9').addClass('show').css('display', 'block');
  //           $('.show-card14').removeClass('hide');
  //           $('.show-card14').addClass('show').css('display', 'block');
  //           globalThis.flag=3
  //         }
  //         if(globalThis.flag==1){
  //           $('.message5').removeClass('hide');
  //           $('.message5').addClass('show').css('display', 'block');
  //           setTimeout(function() {
  //             $('.message5j').removeClass('hide');
  //           $('.message5j').addClass('show').css('display', 'block');
  //           }, 1100);
  //           setTimeout(function() {
  //             $('.message5jj').removeClass('hide');
  //           $('.message5jj').addClass('show').css('display', 'block');
  //           }, 2200);
  //           $('.show-card9').removeClass('hide');
  //           $('.show-card9').addClass('show').css('display', 'block');
  //           globalThis.flag=2
  //         }
  //         if(globalThis.flag==0){
  //           $('.message4').removeClass('hide');
  //           $('.message4').addClass('show').css('display', 'block');
  //           $('.show-card4').removeClass('hide');
  //           $('.show-card4').addClass('show').css('display', 'block');
  //           globalThis.flag=1
  //         }
       
  //    }
     
  //  }
 //=======================================================================
    
 var r=Math.floor(Math.random() * 100) + 1;
 if(globalThis.flag==7){
   var div = document.getElementById('shang');
         var div1 = document.getElementById('xia');
         var div2 = document.getElementById('you');
         var div3 = document.getElementById('zuo');
         div.style.visibility = 'hidden';
         div1.style.visibility = 'hidden';
         div2.style.visibility = 'hidden';
         div3.style.visibility = 'hidden';
         $('.shang').addClass('hide');
         $('.you').addClass('hide');
         $('.zuo').addClass('hide');
         $('.xia').addClass('hide');


   if(globalThis.r==0){ 
     if(globalThis.e==2){

   $('.show-card').addClass('hide');
   $('.show-card1').addClass('hide');
   $('.show-card2').addClass('hide');
   $('.show-card3').addClass('hide');
   $('.show-card4').addClass('hide');
   $('.show-card5').addClass('hide');
   $('.show-card6').addClass('hide');
   $('.show-card7').addClass('hide');
   $('.show-card8').addClass('hide');
   $('.show-card9').addClass('hide');
   $('.show-card10').addClass('hide');    
   $('.show-card11').addClass('hide');
   $('.show-card12').addClass('hide');
   $('.show-card13').addClass('hide');
   $('.show-card14').addClass('hide');
   $('.show-card15').addClass('hide');
   $('.show-card16').addClass('hide');
   $('.show-card17').addClass('hide');
   $('.show-card18').addClass('hide');
   $('.show-card19').addClass('hide');
   $('.show-card20').addClass('hide');
   $('.show-card21').addClass('hide');
   $('.show-card22').addClass('hide');
   $('.show-card23').addClass('hide');
   $('.show-card24').addClass('hide');
   $('.show-card25').addClass('hide');
   $('.show-card26').addClass('hide');
   $('.show-card27').addClass('hide');
   $('.show-card28').addClass('hide');
   $('.show-card29').addClass('hide');
   $('.show-card30').addClass('hide');
   $('.show-card31').addClass('hide');
   $('.show-card32').addClass('hide');
   $('.show-card33').addClass('hide');
   $('.show-card34').addClass('hide');
   $('.show-card35').addClass('hide');
   $('.show-card36').addClass('hide');
   $('.show-card37').addClass('hide');
   $('.show-card38').addClass('hide');
   $('.show-card39').addClass('hide');
   $('.show-card40').addClass('hide');
        
   var audio = document.getElementById("indexs");
   var vol1 = 0.50;
     var interval1 = 200; // 200ms interval
   
   var fadeout = setInterval(
     function() {
       // Reduce volume by 0.05 as long as it is above 0
       // This works as long as you start with a multiple of 0.05!
       if (vol1 > 0) {
         vol1 -= 0.05;
         audio.volume = vol1;
       }
       else {
         // Stop the setInterval when 0 is reached
         clearInterval(fadeout);
       }
     }, interval1);     
setTimeout(function(){
var m1 = new Audio('data/se/be.wav');
m1.play();
$('.red').removeClass('hide');
$('.red').addClass('show').css('display', 'block');
},600);
setTimeout(function(){

$('.red1').removeClass('hide');
$('.red1').addClass('show').css('display', 'block');
},2100);
setTimeout(function(){

$('.red2').removeClass('hide');
$('.red2').addClass('show').css('display', 'block');
},3600);

setTimeout(function(){
$('.lbe').addClass('show').css('display', 'block');
$('.lbe').removeClass('hide');
},6500);
setTimeout(function(){
$('.lbe1').addClass('show').css('display', 'block');
$('.lbe1').removeClass('hide');
},8500);
setTimeout(function(){
$('.lbe2').addClass('show').css('display', 'block');
$('.lbe2').removeClass('hide');
},11500);
setTimeout(function(){
$('.lbe3').addClass('show').css('display', 'block');
$('.lbe3').removeClass('hide');
},13000);
setTimeout(function(){
$('.lbe4').addClass('show').css('display', 'block');
$('.lbe4').removeClass('hide');
},14500);
setTimeout(function(){
$('.lbe5').addClass('show').css('display', 'block');
$('.lbe5').removeClass('hide');
},17500);
setTimeout(function(){
$('.lbe6').addClass('show').css('display', 'block');
$('.lbe6').removeClass('hide');
},20500);
setTimeout(function(){
$('.lbe7').addClass('show').css('display', 'block');
$('.lbe7').removeClass('hide');
},26000);
setTimeout(function(){
$('.lbe8').addClass('show').css('display', 'block');
$('.lbe8').removeClass('hide');
},29000);
setTimeout(function(){
$('.lbe9').addClass('show').css('display', 'block');
$('.lbe9').removeClass('hide');
},30500);
setTimeout(function(){
$('.lbe10').addClass('show').css('display', 'block');
$('.lbe10').removeClass('hide');
},36000);


setTimeout(function(){
$('.black').addClass('show').css('display', 'block');
$('.black').removeClass('hide');
var m2 = new Audio('data/se/x.wav');
m2.play();
$('.show-carddc1').addClass('show').css('display', 'block');
$('.show-carddc1').removeClass('hide');
},38500);
     }
     if(globalThis.e<2){
       globalThis.e=globalThis.e +1
       var r=Math.floor(Math.random() * 100) + 1;
       if (r<50) {   
         
          var s = [1,2,3,4];
          var rands = s[Math.floor(Math.random()*4)];
          var f = '.s'+rands
          var f1 = '.s'+rands+'1'
          var f2 = '.s'+rands+'2'
          var f3 = '.s'+rands+'3'
          setTimeout(function() {
           $(f).removeClass('hide');
           $(f).addClass('show').css('display', 'block');
          }, 500);
          setTimeout(function() {
           $(f1).removeClass('hide');
           $(f1).addClass('show').css('display', 'block');
         }, 2000);
         setTimeout(function() {
           $(f2).removeClass('hide');
           $(f2).addClass('show').css('display', 'block');
         }, 3500);
         setTimeout(function() {
           $(f3).removeClass('hide');
           $(f3).addClass('show').css('display', 'block');
         }, 5000);
 
 
 
         setTimeout(function() {
         
           $('.shang').removeClass('hide');
           $('.shang').addClass('show').css('display', 'block');
           $('.xia').removeClass('hide');
           $('.xia').addClass('show').css('display', 'block');
           $('.zuo').removeClass('hide');
           $('.zuo').addClass('show').css('display', 'block');
           $('.you').removeClass('hide');
           $('.you').addClass('show').css('display', 'block');
           div.style.visibility = 'visible';
           div1.style.visibility = 'visible';
           div2.style.visibility = 'visible';
           div3.style.visibility = 'visible';
         }, 6000);
       } else {   
         
          var s = [10,5,6,7,8,9];
          var rands = s[Math.floor(Math.random()*6)];
          var f = '.s'+rands
          var f1 = '.s'+rands+'1'
          var f2 = '.s'+rands+'2'
          var f3 = '.s'+rands+'3'
          var rands1=rands - 4;
          var a1 = '.b'+rands1+'1'
          var a2 = '.b'+rands1+'2'
          var a3 = '.b'+rands1+'3'
          setTimeout(function() {
          $(f).removeClass('hide');
          $(f).addClass('show').css('display', 'block');
         }, 500);
          setTimeout(function() {
           $(f1).removeClass('hide');
           $(f1).addClass('show').css('display', 'block');
         }, 2000);
         setTimeout(function() {
           $(f2).removeClass('hide');
           $(f2).addClass('show').css('display', 'block');
         }, 3500);
         setTimeout(function() {
           $(f3).removeClass('hide');
           $(f3).addClass('show').css('display', 'block');
         }, 5000);
 
 
          setTimeout(function() {
           $(a1).removeClass('hide');
           $(a1).addClass('show').css('display', 'block');
           $(a2).removeClass('hide');
           $(a2).addClass('show').css('display', 'block');
           $(a3).removeClass('hide');
           $(a3).addClass('show').css('display', 'block');
         }, 6000);
   
       }


     }
    

   }else{
     if(globalThis.e==0){
       globalThis.start=1
       globalThis.e=globalThis.e+1
       var s = [1,2,3,4];
          var rands = s[Math.floor(Math.random()*4)];
          var f = '.s'+rands
          var f1 = '.s'+rands+'1'
          var f2 = '.s'+rands+'2'
          var f3 = '.s'+rands+'3'
          setTimeout(function() {
           $(f).removeClass('hide');
           $(f).addClass('show').css('display', 'block');
          }, 500);
          setTimeout(function() {
           $(f1).removeClass('hide');
           $(f1).addClass('show').css('display', 'block');
         }, 2000);
         setTimeout(function() {
           $(f2).removeClass('hide');
           $(f2).addClass('show').css('display', 'block');
         }, 3500);
         setTimeout(function() {
           $(f3).removeClass('hide');
           $(f3).addClass('show').css('display', 'block');
         }, 5000);
 
 
 
         setTimeout(function() {
         
           $('.shang').removeClass('hide');
           $('.shang').addClass('show').css('display', 'block');
           $('.xia').removeClass('hide');
           $('.xia').addClass('show').css('display', 'block');
           $('.zuo').removeClass('hide');
           $('.zuo').addClass('show').css('display', 'block');
           $('.you').removeClass('hide');
           $('.you').addClass('show').css('display', 'block');
           div.style.visibility = 'visible';
           div1.style.visibility = 'visible';
           div2.style.visibility = 'visible';
           div3.style.visibility = 'visible';
           if(globalThis.s==1){
       
             $('.sb').removeClass('hide');
             $('.sb').addClass('show').css('display', 'block');
             $('.xcb').removeClass('hide');
             $('.xcb').addClass('show').css('display', 'block');
             $('.zcb').removeClass('hide');
             $('.zcb').addClass('show').css('display', 'block');
             $('.ycb').removeClass('hide');
             $('.ycb').addClass('show').css('display', 'block');
   
           }
           if(globalThis.a==1){
       
             $('.xb').removeClass('hide');
             $('.xb').addClass('show').css('display', 'block');
             $('.scb').removeClass('hide');
             $('.scb').addClass('show').css('display', 'block');
             $('.zcb').removeClass('hide');
             $('.zcb').addClass('show').css('display', 'block');
             $('.ycb').removeClass('hide');
             $('.ycb').addClass('show').css('display', 'block');
   
           }
           if(globalThis.k==1){
       
             $('.zb').removeClass('hide');
             $('.zb').addClass('show').css('display', 'block');
             $('.zbj').removeClass('hide');
             $('.zbj').addClass('show').css('display', 'block');
             $('.xcbb').removeClass('hide');
             $('.xcbb').addClass('show').css('display', 'block');
             $('.scb').removeClass('hide');
             $('.scb').addClass('show').css('display', 'block');
             $('.ycb').removeClass('hide');
             $('.ycb').addClass('show').css('display', 'block');
   
           }

         }, 6000);

     }else{
     if(globalThis.e<3 && globalThis.e>0){
   
       var r=Math.floor(Math.random() * 100) + 1;
       if (r<50) {   
          var s = [1,2,3,4];
          var rands = s[Math.floor(Math.random()*4)];
          var f = '.s'+rands
          var f1 = '.s'+rands+'1'
          var f2 = '.s'+rands+'2'
          var f3 = '.s'+rands+'3'
          setTimeout(function() {
           $(f).removeClass('hide');
           $(f).addClass('show').css('display', 'block');
          }, 500);
          setTimeout(function() {
           $(f1).removeClass('hide');
           $(f1).addClass('show').css('display', 'block');
         }, 2000);
         setTimeout(function() {
           $(f2).removeClass('hide');
           $(f2).addClass('show').css('display', 'block');
         }, 3500);
         setTimeout(function() {
           $(f3).removeClass('hide');
           $(f3).addClass('show').css('display', 'block');
         }, 5000);
 
 
 
         setTimeout(function() {
         
           $('.shang').removeClass('hide');
           $('.shang').addClass('show').css('display', 'block');
           $('.xia').removeClass('hide');
           $('.xia').addClass('show').css('display', 'block');
           $('.zuo').removeClass('hide');
           $('.zuo').addClass('show').css('display', 'block');
           $('.you').removeClass('hide');
           $('.you').addClass('show').css('display', 'block');
           div.style.visibility = 'visible';
           div1.style.visibility = 'visible';
           div2.style.visibility = 'visible';
           div3.style.visibility = 'visible';
           
       if(globalThis.e==1 && globalThis.s==1){
       
         $('.sb1').removeClass('hide');
         $('.sb1').addClass('show').css('display', 'block');
         $('.xcb1').removeClass('hide');
         $('.xcb1').addClass('show').css('display', 'block');
         $('.zcb1').removeClass('hide');
         $('.zcb1').addClass('show').css('display', 'block');
         $('.ycb1').removeClass('hide');
         $('.ycb1').addClass('show').css('display', 'block');

       }
       if(globalThis.e==1 && globalThis.a==1){
       
         $('.sb1').removeClass('hide');
         $('.sb1').addClass('show').css('display', 'block');
         $('.xcb1').removeClass('hide');
         $('.xcb1').addClass('show').css('display', 'block');
         $('.zcb1').removeClass('hide');
         $('.zcb1').addClass('show').css('display', 'block');
         $('.ycb1').removeClass('hide');
         $('.ycb1').addClass('show').css('display', 'block');

       }
       if(globalThis.e==1 && globalThis.k==1){
       
         $('.xb1').removeClass('hide');
         $('.xb1').addClass('show').css('display', 'block');
         $('.scb1').removeClass('hide');
         $('.scb1').addClass('show').css('display', 'block');
         $('.zcb1').removeClass('hide');
         $('.zcb1').addClass('show').css('display', 'block');
         $('.ycb1').removeClass('hide');
         $('.ycb1').addClass('show').css('display', 'block');

       }
       if(globalThis.e==2 && globalThis.s==1){
       
         $('.zb2').removeClass('hide');
         $('.zb2').addClass('show').css('display', 'block');
         $('.xcb2').removeClass('hide');
         $('.xcb2').addClass('show').css('display', 'block');
         $('.scb2').removeClass('hide');
         $('.scb2').addClass('show').css('display', 'block');
         $('.ycb2').removeClass('hide');
         $('.ycb2').addClass('show').css('display', 'block');
         

       }
       if(globalThis.e==2 && globalThis.a==1){
       
         $('.yb2').removeClass('hide');
         $('.yb2').addClass('show').css('display', 'block');
         $('.xcb2').removeClass('hide');
         $('.xcb2').addClass('show').css('display', 'block');
         $('.scb2').removeClass('hide');
         $('.scb2').addClass('show').css('display', 'block');
         $('.zcb2').removeClass('hide');
         $('.zcb2').addClass('show').css('display', 'block');

       }
       if(globalThis.e==2 && globalThis.k==1){
       
         $('.yb2').removeClass('hide');
         $('.yb2').addClass('show').css('display', 'block');
         $('.xcb2').removeClass('hide');
         $('.xcb2').addClass('show').css('display', 'block');
         $('.scb2').removeClass('hide');
         $('.scb2').addClass('show').css('display', 'block');
         $('.zcb2').removeClass('hide');
         $('.zcb2').addClass('show').css('display', 'block');

       }


         globalThis.t=globalThis.t+'3'
       globalThis.e=globalThis.e+1

         }, 6000);
       } else { 
         
         globalThis.t=globalThis.t+'3'  
          var s = [10,5,6,7,8,9];
          var rands = s[Math.floor(Math.random()*6)];
          var f = '.s'+rands
          var f1 = '.s'+rands+'1'
          var f2 = '.s'+rands+'2'
          var f3 = '.s'+rands+'3'
          var rands1=rands - 4;
          var a1 = '.b'+rands1+'1'
          var a2 = '.b'+rands1+'2'
          var a3 = '.b'+rands1+'3'
          setTimeout(function() {
          $(f).removeClass('hide');
          $(f).addClass('show').css('display', 'block');
         }, 500);
          setTimeout(function() {
           $(f1).removeClass('hide');
           $(f1).addClass('show').css('display', 'block');
         }, 2000);
         setTimeout(function() {
           $(f2).removeClass('hide');
           $(f2).addClass('show').css('display', 'block');
         }, 3500);
         setTimeout(function() {
           $(f3).removeClass('hide');
           $(f3).addClass('show').css('display', 'block');
         }, 5000);
 
 
          setTimeout(function() {
           $(a1).removeClass('hide');
           $(a1).addClass('show').css('display', 'block');
           $(a2).removeClass('hide');
           $(a2).addClass('show').css('display', 'block');
           $(a3).removeClass('hide');
           $(a3).addClass('show').css('display', 'block');
         }, 6000);
   
       }
     }else{
     if(globalThis.e==3){
       globalThis.t=globalThis.t+'3'
       if(globalThis.k==1){
         if(globalThis.t=='243'){
           $('.sb').addClass('hide');
    $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
 $('.xb').addClass('hide');
 $('.zbj').addClass('hide');
 $('.xb1').addClass('hide');
 $('.sb1').addClass('hide');
 $('.zb2').addClass('hide');
 $('.yb2').addClass('hide');
 $('.xcb').addClass('hide');
 $('.scb').addClass('hide');
 $('.zcb').addClass('hide');
 $('.ycb').addClass('hide');
 $('.xcbb').addClass('hide');
 $('.xcb1').addClass('hide');
 $('.scb1').addClass('hide');
 $('.zcb1').addClass('hide');
 $('.ycb1').addClass('hide');
 $('.xcb2').addClass('hide');
 $('.scb2').addClass('hide');
 $('.zcb2').addClass('hide');
 $('.ycb2').addClass('hide');
 $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message6jj').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message').addClass('hide');
  $('.message1').addClass('hide');
  $('.message2').addClass('hide');
$('.message2j').addClass('hide');
  $('.message3').addClass('hide');
  $('.message4').addClass('hide');
  $('.message5').addClass('hide');
  $('.message6').addClass('hide');
   $('.message6jj').addClass('hide');
  $('.message7').addClass('hide');
  $('.message8').addClass('hide');
 $('.message9').addClass('hide');
   $('.message9j').addClass('hide');
  $('.message10').addClass('hide');    
  $('.message11').addClass('hide');
  $('.message12').addClass('hide');
  $('.message13').addClass('hide');
  $('.message13j').addClass('hide');
  $('.message14').addClass('hide');
  $('.message15').addClass('hide');
  $('.message16').addClass('hide');
  $('.message17').addClass('hide');
  $('.message18').addClass('hide');
  $('.message19').addClass('hide');
  $('.message20').addClass('hide');
  $('.message20j').addClass('hide');
     $('.message21').addClass('hide');
  $('.message21j').addClass('hide');
   $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
  $('.message22j').addClass('hide');
   $('.message22jj').addClass('hide');
   $('.message14j').addClass('hide');
   $('.message10j').addClass('hide');
   $('.message10jj').addClass('hide');
   $('.message7j').addClass('hide');
   $('.message6j').addClass('hide');
 $('.message6jj').addClass('hide');
   $('.message5j').addClass('hide');
   $('.message5jj').addClass('hide');
   $('.message1j').addClass('hide');
   $('.message1jj').addClass('hide');
   $('.messagej').addClass('hide');
   $('.messagejj').addClass('hide');
  $('.message23').addClass('hide');
  $('.message24').addClass('hide');
     $('.message21').addClass('hide');
  $('.message21j').addClass('hide');
   $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
  $('.message22j').addClass('hide');
   $('.message22jj').addClass('hide');
   $('.message14j').addClass('hide');
   $('.message10j').addClass('hide');
   $('.message10jj').addClass('hide');
   $('.message7j').addClass('hide');
   $('.message6j').addClass('hide');
 $('.message6jj').addClass('hide');
   $('.message5j').addClass('hide');
   $('.message5jj').addClass('hide');
   $('.message1j').addClass('hide');
   $('.message1jj').addClass('hide');
   $('.messagej').addClass('hide');
   $('.messagejj').addClass('hide');
  $('.message23').addClass('hide');
  $('.message24').addClass('hide');
  
  $('.s1').addClass('hide');  
  $('.s11').addClass('hide'); 
  $('.s12').addClass('hide');
  $('.s2').addClass('hide');  
  $('.s21').addClass('hide'); 
  $('.s22').addClass('hide');
  $('.s3').addClass('hide');
  $('.s31').addClass('hide');
  $('.s32').addClass('hide');
  $('.s4').addClass('hide');
  $('.s41').addClass('hide');
  $('.s42').addClass('hide');
  $('.s43').addClass('hide');
  $('.s5').addClass('hide');
 $('.s51').addClass('hide');
 $('.s52').addClass('hide');  
 $('.s53').addClass('hide');
 $('.s6').addClass('hide');
 $('.s61').addClass('hide');
 $('.s62').addClass('hide');
 $('.s7').addClass('hide');
 $('.s71').addClass('hide');
 $('.s72').addClass('hide');
 $('.s83').addClass('hide');
 $('.s8').addClass('hide');
 $('.s81').addClass('hide');
 $('.s82').addClass('hide');
 $('.s9').addClass('hide');
 $('.s91').addClass('hide');
 $('.s92').addClass('hide');
 $('.s10').addClass('hide');
 $('.s101').addClass('hide');
 $('.s102').addClass('hide');

 
 $('.b11').addClass('hide');
 $('.b12').addClass('hide');
 $('.b21').addClass('hide');
 $('.b22').addClass('hide');
 $('.b31').addClass('hide');
 $('.b32').addClass('hide');
 $('.b41').addClass('hide');
 $('.b42').addClass('hide');
 $('.b51').addClass('hide');
 $('.b52').addClass('hide');
 $('.b53').addClass('hide');
 $('.b54').addClass('hide');
 $('.b55').addClass('hide');
 $('.b56').addClass('hide');
 $('.b57').addClass('hide');
 $('.b58').addClass('hide');
 $('.b61').addClass('hide');
 $('.b62').addClass('hide');
 $('.sb').addClass('hide');
    $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
 $('.xb').addClass('hide');
 $('.yb').addClass('hide');
 $('.xb').addClass('hide');
 $('.show-card').addClass('hide');
   $('.show-card1').addClass('hide');
   $('.show-card2').addClass('hide');
   $('.show-card3').addClass('hide');
   $('.show-card4').addClass('hide');
   $('.show-card5').addClass('hide');
   $('.show-card6').addClass('hide');
   $('.show-card7').addClass('hide');
   $('.show-card8').addClass('hide');
   $('.show-card9').addClass('hide');
   $('.show-card10').addClass('hide');    
   $('.show-card11').addClass('hide');
   $('.show-card12').addClass('hide');
   $('.show-card13').addClass('hide');
   $('.show-card14').addClass('hide');
   $('.show-card15').addClass('hide');
   $('.show-card16').addClass('hide');
   $('.show-card17').addClass('hide');
   $('.show-card18').addClass('hide');
   $('.show-card19').addClass('hide');
   $('.show-card20').addClass('hide');
   $('.show-card21').addClass('hide');
   $('.show-card22').addClass('hide');
   $('.show-card23').addClass('hide');
   $('.show-card24').addClass('hide');
   $('.show-card25').addClass('hide');
   $('.show-card26').addClass('hide');
   $('.show-card27').addClass('hide');
   $('.show-card28').addClass('hide');
   $('.show-card29').addClass('hide');
   $('.show-card30').addClass('hide');
   $('.show-card31').addClass('hide');
   $('.show-card32').addClass('hide');
   $('.show-card33').addClass('hide');
   $('.show-card34').addClass('hide');
   $('.show-card35').addClass('hide');
   $('.show-card36').addClass('hide');
   $('.show-card37').addClass('hide');
   $('.show-card38').addClass('hide');
   $('.show-card39').addClass('hide');
   $('.show-card40').addClass('hide');
          

           setTimeout(function(){
             $(".jsh").removeClass('hide');
             $(".jsh").addClass('show').css('display', 'block');
           },3000); 
           setTimeout(function(){
             $(".jsh1").removeClass('hide');
             $(".jsh1").addClass('show').css('display', 'block');
           },6000);
           setTimeout(function(){
             $(".jsh2").removeClass('hide');
             $(".jsh2").addClass('show').css('display', 'block');
           },9000);
           setTimeout(function(){
             $(".jsh3").removeClass('hide');
             $(".jsh3").addClass('show').css('display', 'block');
           },14500);
       
       
       }else{
         
   $('.show-card').addClass('hide');
   $('.show-card1').addClass('hide');
   $('.show-card2').addClass('hide');
   $('.show-card3').addClass('hide');
   $('.show-card4').addClass('hide');
   $('.show-card5').addClass('hide');
   $('.show-card6').addClass('hide');
   $('.show-card7').addClass('hide');
   $('.show-card8').addClass('hide');
   $('.show-card9').addClass('hide');
   $('.show-card10').addClass('hide');    
   $('.show-card11').addClass('hide');
   $('.show-card12').addClass('hide');
   $('.show-card13').addClass('hide');
   $('.show-card14').addClass('hide');
   $('.show-card15').addClass('hide');
   $('.show-card16').addClass('hide');
   $('.show-card17').addClass('hide');
   $('.show-card18').addClass('hide');
   $('.show-card19').addClass('hide');
   $('.show-card20').addClass('hide');
   $('.show-card21').addClass('hide');
   $('.show-card22').addClass('hide');
   $('.show-card23').addClass('hide');
   $('.show-card24').addClass('hide');
   $('.show-card25').addClass('hide');
   $('.show-card26').addClass('hide');
   $('.show-card27').addClass('hide');
   $('.show-card28').addClass('hide');
   $('.show-card29').addClass('hide');
   $('.show-card30').addClass('hide');
   $('.show-card31').addClass('hide');
   $('.show-card32').addClass('hide');
   $('.show-card33').addClass('hide');
   $('.show-card34').addClass('hide');
   $('.show-card35').addClass('hide');
   $('.show-card36').addClass('hide');
   $('.show-card37').addClass('hide');
   $('.show-card38').addClass('hide');
   $('.show-card39').addClass('hide');
   $('.show-card40').addClass('hide');
        
   var audio = document.getElementById("indexs");
   var vol1 = 0.50;
     var interval1 = 200; // 200ms interval
   
   var fadeout = setInterval(
     function() {
       // Reduce volume by 0.05 as long as it is above 0
       // This works as long as you start with a multiple of 0.05!
       if (vol1 > 0) {
         vol1 -= 0.05;
         audio.volume = vol1;
       }
       else {
         // Stop the setInterval when 0 is reached
         clearInterval(fadeout);
       }
     }, interval1);     
setTimeout(function(){
var m1 = new Audio('data/se/be.wav');
m1.play();
$('.red').removeClass('hide');
$('.red').addClass('show').css('display', 'block');
},600);
setTimeout(function(){

$('.red1').removeClass('hide');
$('.red1').addClass('show').css('display', 'block');
},2100);
setTimeout(function(){

$('.red2').removeClass('hide');
$('.red2').addClass('show').css('display', 'block');
},3600);

setTimeout(function(){
$('.lbe').addClass('show').css('display', 'block');
$('.lbe').removeClass('hide');
},6500);
setTimeout(function(){
$('.lbe1').addClass('show').css('display', 'block');
$('.lbe1').removeClass('hide');
},8500);
setTimeout(function(){
$('.lbe2').addClass('show').css('display', 'block');
$('.lbe2').removeClass('hide');
},11500);
setTimeout(function(){
$('.lbe3').addClass('show').css('display', 'block');
$('.lbe3').removeClass('hide');
},13000);
setTimeout(function(){
$('.lbe4').addClass('show').css('display', 'block');
$('.lbe4').removeClass('hide');
},14500);
setTimeout(function(){
$('.lbe5').addClass('show').css('display', 'block');
$('.lbe5').removeClass('hide');
},17500);
setTimeout(function(){
$('.lbe6').addClass('show').css('display', 'block');
$('.lbe6').removeClass('hide');
},20500);
setTimeout(function(){
$('.lbe7').addClass('show').css('display', 'block');
$('.lbe7').removeClass('hide');
},26000);
setTimeout(function(){
$('.lbe8').addClass('show').css('display', 'block');
$('.lbe8').removeClass('hide');
},29000);
setTimeout(function(){
$('.lbe9').addClass('show').css('display', 'block');
$('.lbe9').removeClass('hide');
},30500);
setTimeout(function(){
$('.lbe10').addClass('show').css('display', 'block');
$('.lbe10').removeClass('hide');
},36000);


setTimeout(function(){
$('.black').addClass('show').css('display', 'block');
$('.black').removeClass('hide');
var m2 = new Audio('data/se/x.wav');
m2.play();
$('.show-carddc1').addClass('show').css('display', 'block');
$('.show-carddc1').removeClass('hide');
},38500);


         }
       }
       if(globalThis.a==1){
         

          if(globalThis.t=='413'){
           $('.sb').addClass('hide');
    $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
 $('.xb').addClass('hide');
 $('.zbj').addClass('hide');
 $('.xb1').addClass('hide');
 $('.sb1').addClass('hide');
 $('.zb2').addClass('hide');
 $('.yb2').addClass('hide');
 $('.xcb').addClass('hide');
 $('.scb').addClass('hide');
 $('.zcb').addClass('hide');
 $('.ycb').addClass('hide');
 $('.xcbb').addClass('hide');
 $('.xcb1').addClass('hide');
 $('.scb1').addClass('hide');
 $('.zcb1').addClass('hide');
 $('.ycb1').addClass('hide');
 $('.xcb2').addClass('hide');
 $('.scb2').addClass('hide');
 $('.zcb2').addClass('hide');
 $('.ycb2').addClass('hide');
 $('.message22j').addClass('hide');
 $('.message22jj').addClass('hide');
 $('.message14j').addClass('hide');
 $('.message10j').addClass('hide');
 $('.message7j').addClass('hide');
 $('.message6j').addClass('hide');
 $('.message6jj').addClass('hide');
 $('.message5j').addClass('hide');
 $('.message1j').addClass('hide');
 $('.messagej').addClass('hide');
 $('.message1').addClass('hide');
  $('.message').addClass('hide');
  $('.message1').addClass('hide');
  $('.message2').addClass('hide');
$('.message2j').addClass('hide');
  $('.message3').addClass('hide');
  $('.message4').addClass('hide');
  $('.message5').addClass('hide');
  $('.message6').addClass('hide');
   $('.message6jj').addClass('hide');
  $('.message7').addClass('hide');
  $('.message8').addClass('hide');
 $('.message9').addClass('hide');
   $('.message9j').addClass('hide');
  $('.message10').addClass('hide');    
  $('.message11').addClass('hide');
  $('.message12').addClass('hide');
  $('.message13').addClass('hide');
  $('.message13j').addClass('hide');
  $('.message14').addClass('hide');
  $('.message15').addClass('hide');
  $('.message16').addClass('hide');
  $('.message17').addClass('hide');
  $('.message18').addClass('hide');
  $('.message19').addClass('hide');
  $('.message20').addClass('hide');
  $('.message20j').addClass('hide');
     $('.message21').addClass('hide');
  $('.message21j').addClass('hide');
   $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
  $('.message22j').addClass('hide');
   $('.message22jj').addClass('hide');
   $('.message14j').addClass('hide');
   $('.message10j').addClass('hide');
   $('.message10jj').addClass('hide');
   $('.message7j').addClass('hide');
   $('.message6j').addClass('hide');
 $('.message6jj').addClass('hide');
   $('.message5j').addClass('hide');
   $('.message5jj').addClass('hide');
   $('.message1j').addClass('hide');
   $('.message1jj').addClass('hide');
   $('.messagej').addClass('hide');
   $('.messagejj').addClass('hide');
  $('.message23').addClass('hide');
  $('.message24').addClass('hide');
     $('.message21').addClass('hide');
  $('.message21j').addClass('hide');
   $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
  $('.message22j').addClass('hide');
   $('.message22jj').addClass('hide');
   $('.message14j').addClass('hide');
   $('.message10j').addClass('hide');
   $('.message10jj').addClass('hide');
   $('.message7j').addClass('hide');
   $('.message6j').addClass('hide');
 $('.message6jj').addClass('hide');
   $('.message5j').addClass('hide');
   $('.message5jj').addClass('hide');
   $('.message1j').addClass('hide');
   $('.message1jj').addClass('hide');
   $('.messagej').addClass('hide');
   $('.messagejj').addClass('hide');
  $('.message23').addClass('hide');
  $('.message24').addClass('hide');
  
  $('.s1').addClass('hide');  
  $('.s11').addClass('hide'); 
  $('.s12').addClass('hide');
  $('.s2').addClass('hide');  
  $('.s21').addClass('hide'); 
  $('.s22').addClass('hide');
  $('.s3').addClass('hide');
  $('.s31').addClass('hide');
  $('.s32').addClass('hide');
  $('.s4').addClass('hide');
  $('.s41').addClass('hide');
  $('.s42').addClass('hide');
  $('.s43').addClass('hide');
  $('.s5').addClass('hide');
 $('.s51').addClass('hide');
 $('.s52').addClass('hide');  
 $('.s53').addClass('hide');
 $('.s6').addClass('hide');
 $('.s61').addClass('hide');
 $('.s62').addClass('hide');
 $('.s7').addClass('hide');
 $('.s71').addClass('hide');
 $('.s72').addClass('hide');
 $('.s83').addClass('hide');
 $('.s8').addClass('hide');
 $('.s81').addClass('hide');
 $('.s82').addClass('hide');
 $('.s9').addClass('hide');
 $('.s91').addClass('hide');
 $('.s92').addClass('hide');
 $('.s10').addClass('hide');
 $('.s101').addClass('hide');
 $('.s102').addClass('hide');

 
 $('.b11').addClass('hide');
 $('.b12').addClass('hide');
 $('.b21').addClass('hide');
 $('.b22').addClass('hide');
 $('.b31').addClass('hide');
 $('.b32').addClass('hide');
 $('.b41').addClass('hide');
 $('.b42').addClass('hide');
 $('.b51').addClass('hide');
 $('.b52').addClass('hide');
 $('.b53').addClass('hide');
 $('.b54').addClass('hide');
 $('.b55').addClass('hide');
 $('.b56').addClass('hide');
 $('.b57').addClass('hide');
 $('.b58').addClass('hide');
 $('.b61').addClass('hide');
 $('.b62').addClass('hide');
 $('.sb').addClass('hide');
    $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
 $('.xb').addClass('hide');
 $('.yb').addClass('hide');
 $('.xb').addClass('hide');
 $('.show-card').addClass('hide');
   $('.show-card1').addClass('hide');
   $('.show-card2').addClass('hide');
   $('.show-card3').addClass('hide');
   $('.show-card4').addClass('hide');
   $('.show-card5').addClass('hide');
   $('.show-card6').addClass('hide');
   $('.show-card7').addClass('hide');
   $('.show-card8').addClass('hide');
   $('.show-card9').addClass('hide');
   $('.show-card10').addClass('hide');    
   $('.show-card11').addClass('hide');
   $('.show-card12').addClass('hide');
   $('.show-card13').addClass('hide');
   $('.show-card14').addClass('hide');
   $('.show-card15').addClass('hide');
   $('.show-card16').addClass('hide');
   $('.show-card17').addClass('hide');
   $('.show-card18').addClass('hide');
   $('.show-card19').addClass('hide');
   $('.show-card20').addClass('hide');
   $('.show-card21').addClass('hide');
   $('.show-card22').addClass('hide');
   $('.show-card23').addClass('hide');
   $('.show-card24').addClass('hide');
   $('.show-card25').addClass('hide');
   $('.show-card26').addClass('hide');
   $('.show-card27').addClass('hide');
   $('.show-card28').addClass('hide');
   $('.show-card29').addClass('hide');
   $('.show-card30').addClass('hide');
   $('.show-card31').addClass('hide');
   $('.show-card32').addClass('hide');
   $('.show-card33').addClass('hide');
   $('.show-card34').addClass('hide');
   $('.show-card35').addClass('hide');
   $('.show-card36').addClass('hide');
   $('.show-card37').addClass('hide');
   $('.show-card38').addClass('hide');
   $('.show-card39').addClass('hide');
   $('.show-card40').addClass('hide');
          

           setTimeout(function(){
             $(".jsh").removeClass('hide');
             $(".jsh").addClass('show').css('display', 'block');
           },3000); 
           setTimeout(function(){
             $(".jsh1").removeClass('hide');
             $(".jsh1").addClass('show').css('display', 'block');
           },6000);
           setTimeout(function(){
             $(".jsh2").removeClass('hide');
             $(".jsh2").addClass('show').css('display', 'block');
           },9000);
           setTimeout(function(){
             $(".jsh31").removeClass('hide');
             $(".jsh31").addClass('show').css('display', 'block');
           },14500);
         }else{
           
           
   $('.show-card').addClass('hide');
   $('.show-card1').addClass('hide');
   $('.show-card2').addClass('hide');
   $('.show-card3').addClass('hide');
   $('.show-card4').addClass('hide');
   $('.show-card5').addClass('hide');
   $('.show-card6').addClass('hide');
   $('.show-card7').addClass('hide');
   $('.show-card8').addClass('hide');
   $('.show-card9').addClass('hide');
   $('.show-card10').addClass('hide');    
   $('.show-card11').addClass('hide');
   $('.show-card12').addClass('hide');
   $('.show-card13').addClass('hide');
   $('.show-card14').addClass('hide');
   $('.show-card15').addClass('hide');
   $('.show-card16').addClass('hide');
   $('.show-card17').addClass('hide');
   $('.show-card18').addClass('hide');
   $('.show-card19').addClass('hide');
   $('.show-card20').addClass('hide');
   $('.show-card21').addClass('hide');
   $('.show-card22').addClass('hide');
   $('.show-card23').addClass('hide');
   $('.show-card24').addClass('hide');
   $('.show-card25').addClass('hide');
   $('.show-card26').addClass('hide');
   $('.show-card27').addClass('hide');
   $('.show-card28').addClass('hide');
   $('.show-card29').addClass('hide');
   $('.show-card30').addClass('hide');
   $('.show-card31').addClass('hide');
   $('.show-card32').addClass('hide');
   $('.show-card33').addClass('hide');
   $('.show-card34').addClass('hide');
   $('.show-card35').addClass('hide');
   $('.show-card36').addClass('hide');
   $('.show-card37').addClass('hide');
   $('.show-card38').addClass('hide');
   $('.show-card39').addClass('hide');
   $('.show-card40').addClass('hide');
        
   var audio = document.getElementById("indexs");
   var vol1 = 0.50;
     var interval1 = 200; // 200ms interval
   
   var fadeout = setInterval(
     function() {
       // Reduce volume by 0.05 as long as it is above 0
       // This works as long as you start with a multiple of 0.05!
       if (vol1 > 0) {
         vol1 -= 0.05;
         audio.volume = vol1;
       }
       else {
         // Stop the setInterval when 0 is reached
         clearInterval(fadeout);
       }
     }, interval1);     
setTimeout(function(){
var m1 = new Audio('data/se/be.wav');
m1.play();
$('.red').removeClass('hide');
$('.red').addClass('show').css('display', 'block');
},600);
setTimeout(function(){

$('.red1').removeClass('hide');
$('.red1').addClass('show').css('display', 'block');
},2100);
setTimeout(function(){

$('.red2').removeClass('hide');
$('.red2').addClass('show').css('display', 'block');
},3600);

setTimeout(function(){
$('.lbe').addClass('show').css('display', 'block');
$('.lbe').removeClass('hide');
},6500);
setTimeout(function(){
$('.lbe1').addClass('show').css('display', 'block');
$('.lbe1').removeClass('hide');
},8500);
setTimeout(function(){
$('.lbe2').addClass('show').css('display', 'block');
$('.lbe2').removeClass('hide');
},11500);
setTimeout(function(){
$('.lbe3').addClass('show').css('display', 'block');
$('.lbe3').removeClass('hide');
},13000);
setTimeout(function(){
$('.lbe4').addClass('show').css('display', 'block');
$('.lbe4').removeClass('hide');
},14500);
setTimeout(function(){
$('.lbe5').addClass('show').css('display', 'block');
$('.lbe5').removeClass('hide');
},17500);
setTimeout(function(){
$('.lbe6').addClass('show').css('display', 'block');
$('.lbe6').removeClass('hide');
},20500);
setTimeout(function(){
$('.lbe7').addClass('show').css('display', 'block');
$('.lbe7').removeClass('hide');
},26000);
setTimeout(function(){
$('.lbe8').addClass('show').css('display', 'block');
$('.lbe8').removeClass('hide');
},29000);
setTimeout(function(){
$('.lbe9').addClass('show').css('display', 'block');
$('.lbe9').removeClass('hide');
},30500);
setTimeout(function(){
$('.lbe10').addClass('show').css('display', 'block');
$('.lbe10').removeClass('hide');
},36000);


setTimeout(function(){
$('.black').addClass('show').css('display', 'block');
$('.black').removeClass('hide');
var m2 = new Audio('data/se/x.wav');
m2.play();
$('.show-carddc1').addClass('show').css('display', 'block');
$('.show-carddc1').removeClass('hide');
},38500);


         }

       }
       if(globalThis.s==1){

         if(globalThis.t=='112'){
           $('.sb').addClass('hide');
              $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
           $('.xb').addClass('hide');
           $('.zbj').addClass('hide');
           $('.xb1').addClass('hide');
           $('.sb1').addClass('hide');
           $('.zb2').addClass('hide');
           $('.yb2').addClass('hide');
           $('.xcb').addClass('hide');
           $('.scb').addClass('hide');
           $('.zcb').addClass('hide');
           $('.ycb').addClass('hide');
           $('.xcbb').addClass('hide');
           $('.xcb1').addClass('hide');
           $('.scb1').addClass('hide');
           $('.zcb1').addClass('hide');
           $('.ycb1').addClass('hide');
           $('.xcb2').addClass('hide');
           $('.scb2').addClass('hide');
           $('.zcb2').addClass('hide');
           $('.ycb2').addClass('hide');
           $('.message22j').addClass('hide');
           $('.message22jj').addClass('hide');
           $('.message14j').addClass('hide');
           $('.message10j').addClass('hide');
           $('.message7j').addClass('hide');
           $('.message6j').addClass('hide');
           $('.message6jj').addClass('hide');
           $('.message5j').addClass('hide');
           $('.message1j').addClass('hide');
           $('.messagej').addClass('hide');
           $('.message1').addClass('hide');
            $('.message').addClass('hide');
            $('.message1').addClass('hide');
            $('.message2').addClass('hide');
         $('.message2j').addClass('hide');
            $('.message3').addClass('hide');
            $('.message4').addClass('hide');
            $('.message5').addClass('hide');
            $('.message6').addClass('hide');
             $('.message6jj').addClass('hide');
            $('.message7').addClass('hide');
            $('.message8').addClass('hide');
           $('.message9').addClass('hide');
             $('.message9j').addClass('hide');
            $('.message10').addClass('hide');    
            $('.message11').addClass('hide');
            $('.message12').addClass('hide');
            $('.message13').addClass('hide');
            $('.message13j').addClass('hide');
            $('.message14').addClass('hide');
            $('.message15').addClass('hide');
            $('.message16').addClass('hide');
            $('.message17').addClass('hide');
            $('.message18').addClass('hide');
            $('.message19').addClass('hide');
            $('.message20').addClass('hide');
            $('.message20j').addClass('hide');
               $('.message21').addClass('hide');
            $('.message21j').addClass('hide');
             $('.message22').addClass('hide');
         $('.message22jjj').addClass('hide');
            $('.message22j').addClass('hide');
             $('.message22jj').addClass('hide');
             $('.message14j').addClass('hide');
             $('.message10j').addClass('hide');
             $('.message10jj').addClass('hide');
             $('.message7j').addClass('hide');
             $('.message6j').addClass('hide');
           $('.message6jj').addClass('hide');
             $('.message5j').addClass('hide');
             $('.message5jj').addClass('hide');
             $('.message1j').addClass('hide');
             $('.message1jj').addClass('hide');
             $('.messagej').addClass('hide');
             $('.messagejj').addClass('hide');
            $('.message23').addClass('hide');
            $('.message24').addClass('hide');
               $('.message21').addClass('hide');
            $('.message21j').addClass('hide');
             $('.message22').addClass('hide');
         $('.message22jjj').addClass('hide');
            $('.message22j').addClass('hide');
             $('.message22jj').addClass('hide');
             $('.message14j').addClass('hide');
             $('.message10j').addClass('hide');
             $('.message10jj').addClass('hide');
             $('.message7j').addClass('hide');
             $('.message6j').addClass('hide');
           $('.message6jj').addClass('hide');
             $('.message5j').addClass('hide');
             $('.message5jj').addClass('hide');
             $('.message1j').addClass('hide');
             $('.message1jj').addClass('hide');
             $('.messagej').addClass('hide');
             $('.messagejj').addClass('hide');
            $('.message23').addClass('hide');
            $('.message24').addClass('hide');
            
            $('.s1').addClass('hide');  
            $('.s11').addClass('hide'); 
            $('.s12').addClass('hide');
            $('.s2').addClass('hide');  
            $('.s21').addClass('hide'); 
            $('.s22').addClass('hide');
            $('.s3').addClass('hide');
            $('.s31').addClass('hide');
            $('.s32').addClass('hide');
            $('.s4').addClass('hide');
            $('.s41').addClass('hide');
            $('.s42').addClass('hide');
            $('.s43').addClass('hide');
            $('.s5').addClass('hide');
           $('.s51').addClass('hide');
           $('.s52').addClass('hide');  
           $('.s53').addClass('hide');
           $('.s6').addClass('hide');
           $('.s61').addClass('hide');
           $('.s62').addClass('hide');
           $('.s7').addClass('hide');
           $('.s71').addClass('hide');
           $('.s72').addClass('hide');
           $('.s83').addClass('hide');
           $('.s8').addClass('hide');
           $('.s81').addClass('hide');
           $('.s82').addClass('hide');
           $('.s9').addClass('hide');
           $('.s91').addClass('hide');
           $('.s92').addClass('hide');
           $('.s10').addClass('hide');
           $('.s101').addClass('hide');
           $('.s102').addClass('hide');
         
           
           $('.b11').addClass('hide');
           $('.b12').addClass('hide');
           $('.b21').addClass('hide');
           $('.b22').addClass('hide');
           $('.b31').addClass('hide');
           $('.b32').addClass('hide');
           $('.b41').addClass('hide');
           $('.b42').addClass('hide');
           $('.b51').addClass('hide');
           $('.b52').addClass('hide');
           $('.b53').addClass('hide');
           $('.b54').addClass('hide');
           $('.b55').addClass('hide');
           $('.b56').addClass('hide');
           $('.b57').addClass('hide');
           $('.b58').addClass('hide');
           $('.b61').addClass('hide');
           $('.b62').addClass('hide');
           $('.sb').addClass('hide');
              $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
           $('.xb').addClass('hide');
           $('.yb').addClass('hide');
           $('.xb').addClass('hide');
           $('.show-card').addClass('hide');
             $('.show-card1').addClass('hide');
             $('.show-card2').addClass('hide');
             $('.show-card3').addClass('hide');
             $('.show-card4').addClass('hide');
             $('.show-card5').addClass('hide');
             $('.show-card6').addClass('hide');
             $('.show-card7').addClass('hide');
             $('.show-card8').addClass('hide');
             $('.show-card9').addClass('hide');
             $('.show-card10').addClass('hide');    
             $('.show-card11').addClass('hide');
             $('.show-card12').addClass('hide');
             $('.show-card13').addClass('hide');
             $('.show-card14').addClass('hide');
             $('.show-card15').addClass('hide');
             $('.show-card16').addClass('hide');
             $('.show-card17').addClass('hide');
             $('.show-card18').addClass('hide');
             $('.show-card19').addClass('hide');
             $('.show-card20').addClass('hide');
             $('.show-card21').addClass('hide');
             $('.show-card22').addClass('hide');
             $('.show-card23').addClass('hide');
             $('.show-card24').addClass('hide');
             $('.show-card25').addClass('hide');
             $('.show-card26').addClass('hide');
             $('.show-card27').addClass('hide');
             $('.show-card28').addClass('hide');
             $('.show-card29').addClass('hide');
             $('.show-card30').addClass('hide');
             $('.show-card31').addClass('hide');
             $('.show-card32').addClass('hide');
             $('.show-card33').addClass('hide');
             $('.show-card34').addClass('hide');
             $('.show-card35').addClass('hide');
             $('.show-card36').addClass('hide');
             $('.show-card37').addClass('hide');
             $('.show-card38').addClass('hide');
             $('.show-card39').addClass('hide');
             $('.show-card40').addClass('hide');
                    
         
                     setTimeout(function(){
                       $(".jsh").removeClass('hide');
                       $(".jsh").addClass('show').css('display', 'block');
                     },3000); 
                     setTimeout(function(){
                       $(".jsh1").removeClass('hide');
                       $(".jsh1").addClass('show').css('display', 'block');
                     },6000);
                     setTimeout(function(){
                       $(".jsh2").removeClass('hide');
                       $(".jsh2").addClass('show').css('display', 'block');
                     },9000);
                     setTimeout(function(){
                       $(".jsh32").removeClass('hide');
                       $(".jsh32").addClass('show').css('display', 'block');
                     },14500);
       
       }else{
           
         
   $('.show-card').addClass('hide');
   $('.show-card1').addClass('hide');
   $('.show-card2').addClass('hide');
   $('.show-card3').addClass('hide');
   $('.show-card4').addClass('hide');
   $('.show-card5').addClass('hide');
   $('.show-card6').addClass('hide');
   $('.show-card7').addClass('hide');
   $('.show-card8').addClass('hide');
   $('.show-card9').addClass('hide');
   $('.show-card10').addClass('hide');    
   $('.show-card11').addClass('hide');
   $('.show-card12').addClass('hide');
   $('.show-card13').addClass('hide');
   $('.show-card14').addClass('hide');
   $('.show-card15').addClass('hide');
   $('.show-card16').addClass('hide');
   $('.show-card17').addClass('hide');
   $('.show-card18').addClass('hide');
   $('.show-card19').addClass('hide');
   $('.show-card20').addClass('hide');
   $('.show-card21').addClass('hide');
   $('.show-card22').addClass('hide');
   $('.show-card23').addClass('hide');
   $('.show-card24').addClass('hide');
   $('.show-card25').addClass('hide');
   $('.show-card26').addClass('hide');
   $('.show-card27').addClass('hide');
   $('.show-card28').addClass('hide');
   $('.show-card29').addClass('hide');
   $('.show-card30').addClass('hide');
   $('.show-card31').addClass('hide');
   $('.show-card32').addClass('hide');
   $('.show-card33').addClass('hide');
   $('.show-card34').addClass('hide');
   $('.show-card35').addClass('hide');
   $('.show-card36').addClass('hide');
   $('.show-card37').addClass('hide');
   $('.show-card38').addClass('hide');
   $('.show-card39').addClass('hide');
   $('.show-card40').addClass('hide');
        
   var audio = document.getElementById("indexs");
   var vol1 = 0.50;
     var interval1 = 200; // 200ms interval
   
   var fadeout = setInterval(
     function() {
       // Reduce volume by 0.05 as long as it is above 0
       // This works as long as you start with a multiple of 0.05!
       if (vol1 > 0) {
         vol1 -= 0.05;
         audio.volume = vol1;
       }
       else {
         // Stop the setInterval when 0 is reached
         clearInterval(fadeout);
       }
     }, interval1);     
setTimeout(function(){
var m1 = new Audio('data/se/be.wav');
m1.play();
$('.red').removeClass('hide');
$('.red').addClass('show').css('display', 'block');
},600);
setTimeout(function(){

$('.red1').removeClass('hide');
$('.red1').addClass('show').css('display', 'block');
},2100);
setTimeout(function(){

$('.red2').removeClass('hide');
$('.red2').addClass('show').css('display', 'block');
},3600);

setTimeout(function(){
$('.lbe').addClass('show').css('display', 'block');
$('.lbe').removeClass('hide');
},6500);
setTimeout(function(){
$('.lbe1').addClass('show').css('display', 'block');
$('.lbe1').removeClass('hide');
},8500);
setTimeout(function(){
$('.lbe2').addClass('show').css('display', 'block');
$('.lbe2').removeClass('hide');
},11500);
setTimeout(function(){
$('.lbe3').addClass('show').css('display', 'block');
$('.lbe3').removeClass('hide');
},13000);
setTimeout(function(){
$('.lbe4').addClass('show').css('display', 'block');
$('.lbe4').removeClass('hide');
},14500);
setTimeout(function(){
$('.lbe5').addClass('show').css('display', 'block');
$('.lbe5').removeClass('hide');
},17500);
setTimeout(function(){
$('.lbe6').addClass('show').css('display', 'block');
$('.lbe6').removeClass('hide');
},20500);
setTimeout(function(){
$('.lbe7').addClass('show').css('display', 'block');
$('.lbe7').removeClass('hide');
},26000);
setTimeout(function(){
$('.lbe8').addClass('show').css('display', 'block');
$('.lbe8').removeClass('hide');
},29000);
setTimeout(function(){
$('.lbe9').addClass('show').css('display', 'block');
$('.lbe9').removeClass('hide');
},30500);
setTimeout(function(){
$('.lbe10').addClass('show').css('display', 'block');
$('.lbe10').removeClass('hide');
},36000);


setTimeout(function(){
$('.black').addClass('show').css('display', 'block');
$('.black').removeClass('hide');
var m2 = new Audio('data/se/x.wav');
m2.play();
$('.show-carddc1').addClass('show').css('display', 'block');
$('.show-carddc1').removeClass('hide');
},38500);

         }
       }
 
     }
   }}}


 }else{

   if (r<50) {
     if (r<25) {   
       var div = document.getElementById('shang');
       var div1 = document.getElementById('xia');
       var div2 = document.getElementById('you');
       var div3 = document.getElementById('zuo');
       div.style.visibility = 'hidden';
       div1.style.visibility = 'hidden';
       div2.style.visibility = 'hidden';
       div3.style.visibility = 'hidden';
       $('.shang').addClass('hide');
       $('.you').addClass('hide');
       $('.zuo').addClass('hide');
       $('.xia').addClass('hide');
        var s = [1,2,3,4];
        var rands = s[Math.floor(Math.random()*4)];
        var f = '.s'+rands
        var f1 = '.s'+rands+'1'
        var f2 = '.s'+rands+'2'
        var f3 = '.s'+rands+'3'
        setTimeout(function() {
         $(f).removeClass('hide');
         $(f).addClass('show').css('display', 'block');
        }, 500);
        setTimeout(function() {
         $(f1).removeClass('hide');
         $(f1).addClass('show').css('display', 'block');
       }, 2000);
       setTimeout(function() {
         $(f2).removeClass('hide');
         $(f2).addClass('show').css('display', 'block');
       }, 3500);
       setTimeout(function() {
         $(f3).removeClass('hide');
         $(f3).addClass('show').css('display', 'block');
       }, 5000);



       setTimeout(function() {
       
         $('.shang').removeClass('hide');
         $('.shang').addClass('show').css('display', 'block');
         $('.xia').removeClass('hide');
         $('.xia').addClass('show').css('display', 'block');
         $('.zuo').removeClass('hide');
         $('.zuo').addClass('show').css('display', 'block');
         $('.you').removeClass('hide');
         $('.you').addClass('show').css('display', 'block');
         div.style.visibility = 'visible';
         div1.style.visibility = 'visible';
         div2.style.visibility = 'visible';
         div3.style.visibility = 'visible';
       }, 6000);
     } else {   
       $('.shang').addClass('hide');
       $('.you').addClass('hide');
       $('.zuo').addClass('hide');
       $('.xia').addClass('hide');
       var div = document.getElementById('shang');
       var div1 = document.getElementById('xia');
       var div2 = document.getElementById('you');
       var div3 = document.getElementById('zuo');
       div.style.visibility = 'hidden';
       div1.style.visibility = 'hidden';
       div2.style.visibility = 'hidden';
       div3.style.visibility = 'hidden';
        var s = [10,5,6,7,8,9];
        var rands = s[Math.floor(Math.random()*6)];
        var f = '.s'+rands
        var f1 = '.s'+rands+'1'
        var f2 = '.s'+rands+'2'
        var f3 = '.s'+rands+'3'
        var rands1=rands - 4;
        var a1 = '.b'+rands1+'1'
        var a2 = '.b'+rands1+'2'
        var a3 = '.b'+rands1+'3'
        setTimeout(function() {
        $(f).removeClass('hide');
        $(f).addClass('show').css('display', 'block');
       }, 500);
        setTimeout(function() {
         $(f1).removeClass('hide');
         $(f1).addClass('show').css('display', 'block');
       }, 2000);
       setTimeout(function() {
         $(f2).removeClass('hide');
         $(f2).addClass('show').css('display', 'block');
       }, 3500);
       setTimeout(function() {
         $(f3).removeClass('hide');
         $(f3).addClass('show').css('display', 'block');
       }, 5000);


        setTimeout(function() {
         $(a1).removeClass('hide');
         $(a1).addClass('show').css('display', 'block');
         $(a2).removeClass('hide');
         $(a2).addClass('show').css('display', 'block');
         $(a3).removeClass('hide');
         $(a3).addClass('show').css('display', 'block');
       }, 6000);
 
     }
     
   } else {
    
    if(globalThis.flag==6){
      $('.message22').removeClass('hide');
      $('.message22').addClass('show').css('display', 'block');
      setTimeout(function() {
        $('.message22j').removeClass('hide');
      $('.message22j').addClass('show').css('display', 'block');
      }, 1100);
      setTimeout(function() {
        $('.message22jj').removeClass('hide');
      $('.message22jj').addClass('show').css('display', 'block');
      }, 2200);
      setTimeout(function() {
        $('.message22jjj').removeClass('hide');
      $('.message22jjj').addClass('show').css('display', 'block');
      }, 3300);
      
      $('.show-card32').removeClass('hide');
      $('.show-card32').addClass('show').css('display', 'block');
      globalThis.flag=7
    }
    if(globalThis.flag==5){
      $('.message19').removeClass('hide');
      $('.message19').addClass('show').css('display', 'block');
      $('.show-card28').removeClass('hide');
      $('.show-card28').addClass('show').css('display', 'block');
      globalThis.flag=6
    }
    if(globalThis.flag==4){
      $('.message16').removeClass('hide');
      $('.message16').addClass('show').css('display', 'block');
      setTimeout(function() {
        $('.message16j').removeClass('hide');
      $('.message16j').addClass('show').css('display', 'block');
      }, 1100);
      $('.show-card24').removeClass('hide');
      $('.show-card24').addClass('show').css('display', 'block');
      globalThis.flag=5
    }
    if(globalThis.flag==3){
      $('.message20').removeClass('hide');
      $('.message20').addClass('show').css('display', 'block');
      setTimeout(function() {
        $('.message20j').removeClass('hide');
      $('.message20j').addClass('show').css('display', 'block');
      }, 1100);
      $('.show-card20').removeClass('hide');
      $('.show-card20').addClass('show').css('display', 'block');
      globalThis.flag=4
    }
    if(globalThis.flag==2){
      setTimeout(function() {
        $('.message9j').removeClass('hide');
      $('.message9j').addClass('show').css('display', 'block');
      }, 1100);
      $('.message9').removeClass('hide');
      $('.message9').addClass('show').css('display', 'block');
      $('.show-card14').removeClass('hide');
      $('.show-card14').addClass('show').css('display', 'block');
      globalThis.flag=3
    }
    if(globalThis.flag==1){
      $('.message5').removeClass('hide');
      $('.message5').addClass('show').css('display', 'block');
      setTimeout(function() {
        $('.message5j').removeClass('hide');
      $('.message5j').addClass('show').css('display', 'block');
      }, 1100);
      setTimeout(function() {
        $('.message5jj').removeClass('hide');
      $('.message5jj').addClass('show').css('display', 'block');
      }, 2200);
      $('.show-card9').removeClass('hide');
      $('.show-card9').addClass('show').css('display', 'block');
      globalThis.flag=2
    }
    if(globalThis.flag==0){
      $('.message4').removeClass('hide');
      $('.message4').addClass('show').css('display', 'block');
      $('.show-card4').removeClass('hide');
      $('.show-card4').addClass('show').css('display', 'block');
      globalThis.flag=1
    }
 
 
   }
   
 }
  
  
});


$('.xia').click(function(e) {
  var music = new Audio('data/se/z.wav');
  music.volume=0.5;
  music.play();
  $('.sb').addClass('hide');
     $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb').addClass('hide');
  $('.zbj').addClass('hide');
  $('.xb1').addClass('hide');
  $('.sb1').addClass('hide');
  $('.zb2').addClass('hide');
  $('.yb2').addClass('hide');
  $('.xcb').addClass('hide');
  $('.scb').addClass('hide');
  $('.zcb').addClass('hide');
  $('.ycb').addClass('hide');
  $('.xcbb').addClass('hide');
  $('.xcb1').addClass('hide');
  $('.scb1').addClass('hide');
  $('.zcb1').addClass('hide');
  $('.ycb1').addClass('hide');
  $('.xcb2').addClass('hide');
  $('.scb2').addClass('hide');
  $('.zcb2').addClass('hide');
  $('.ycb2').addClass('hide');
  $('.message22j').addClass('hide');
  $('.message22jj').addClass('hide');
  $('.message14j').addClass('hide');
  $('.message10j').addClass('hide');
  $('.message7j').addClass('hide');
  $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
  $('.message5j').addClass('hide');
  $('.message1j').addClass('hide');
  $('.messagej').addClass('hide');
  $('.message1').addClass('hide');
   $('.message').addClass('hide');
   $('.message1').addClass('hide');
   $('.message2').addClass('hide');
$('.message2j').addClass('hide');
   $('.message3').addClass('hide');
   $('.message4').addClass('hide');
   $('.message5').addClass('hide');
   $('.message6').addClass('hide');
    $('.message6jj').addClass('hide');
   $('.message7').addClass('hide');
   $('.message8').addClass('hide');
  $('.message9').addClass('hide');
    $('.message9j').addClass('hide');
   $('.message10').addClass('hide');    
   $('.message11').addClass('hide');
   $('.message12').addClass('hide');
   $('.message13').addClass('hide');
   $('.message13j').addClass('hide');
   $('.message14').addClass('hide');
   $('.message15').addClass('hide');
   $('.message16').addClass('hide');
   $('.message17').addClass('hide');
   $('.message16j').addClass('hide');
   $('.message17j').addClass('hide');
   $('.message18').addClass('hide');
   $('.message19').addClass('hide');
   $('.message20').addClass('hide');
   $('.message20j').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.message1jj').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
      $('.message21').addClass('hide');
   $('.message21j').addClass('hide');
    $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
   $('.message22j').addClass('hide');
    $('.message22jj').addClass('hide');
    $('.message14j').addClass('hide');
    $('.message10j').addClass('hide');
    $('.message10jj').addClass('hide');
    $('.message7j').addClass('hide');
    $('.message6j').addClass('hide');
  $('.message6jj').addClass('hide');
  $('.message6jj').addClass('hide');
    $('.message5j').addClass('hide');
    $('.message5jj').addClass('hide');
    $('.message1j').addClass('hide');
    $('.messagej').addClass('hide');
    $('.messagejj').addClass('hide');
   $('.message23').addClass('hide');
   $('.message24').addClass('hide');
   $('.s1').addClass('hide');  
   $('.s11').addClass('hide'); 
   $('.s12').addClass('hide');
   $('.s2').addClass('hide');  
   $('.s21').addClass('hide'); 
   $('.s22').addClass('hide');
   $('.s3').addClass('hide');
   $('.s31').addClass('hide');
   $('.s32').addClass('hide');
   $('.s4').addClass('hide');
   $('.s41').addClass('hide');
   $('.s42').addClass('hide');
   $('.s43').addClass('hide');
   $('.s5').addClass('hide');
  $('.s51').addClass('hide');
  $('.s52').addClass('hide');  
  $('.s53').addClass('hide');
  $('.s6').addClass('hide');
  $('.s61').addClass('hide');
  $('.s62').addClass('hide');
  $('.s7').addClass('hide');
  $('.s71').addClass('hide');
  $('.s72').addClass('hide');
  $('.s83').addClass('hide');
  $('.s8').addClass('hide');
  $('.s81').addClass('hide');
  $('.s82').addClass('hide');
  $('.s9').addClass('hide');
  $('.s91').addClass('hide');
  $('.s92').addClass('hide');
  $('.s10').addClass('hide');
  $('.s101').addClass('hide');
  $('.s102').addClass('hide');

  
  $('.b11').addClass('hide');
  $('.b12').addClass('hide');
  $('.b21').addClass('hide');
  $('.b22').addClass('hide');
  $('.b31').addClass('hide');
  $('.b32').addClass('hide');
  $('.b41').addClass('hide');
  $('.b42').addClass('hide');
  $('.b51').addClass('hide');
  $('.b52').addClass('hide');
  $('.b53').addClass('hide');
  $('.b54').addClass('hide');
  $('.b55').addClass('hide');
  $('.b56').addClass('hide');
  $('.b57').addClass('hide');
  $('.b58').addClass('hide');
  $('.b61').addClass('hide');
  $('.b62').addClass('hide');

  //  var r=Math.floor(Math.random() * 100) + 1;
  //  if(globalThis.flag==7){
  //    if(globalThis.r==0){
  //     if(globalThis.e==2){
 
  //        $('.show-card').addClass('hide');
  //    $('.show-card1').addClass('hide');
  //    $('.show-card2').addClass('hide');
  //    $('.show-card3').addClass('hide');
  //    $('.show-card4').addClass('hide');
  //    $('.show-card5').addClass('hide');
  //    $('.show-card6').addClass('hide');
  //    $('.show-card7').addClass('hide');
  //    $('.show-card8').addClass('hide');
  //    $('.show-card9').addClass('hide');
  //    $('.show-card10').addClass('hide');    
  //    $('.show-card11').addClass('hide');
  //    $('.show-card12').addClass('hide');
  //    $('.show-card13').addClass('hide');
  //    $('.show-card14').addClass('hide');
  //    $('.show-card15').addClass('hide');
  //    $('.show-card16').addClass('hide');
  //    $('.show-card17').addClass('hide');
  //    $('.show-card18').addClass('hide');
  //    $('.show-card19').addClass('hide');
  //    $('.show-card20').addClass('hide');
  //    $('.show-card21').addClass('hide');
  //    $('.show-card22').addClass('hide');
  //    $('.show-card23').addClass('hide');
  //    $('.show-card24').addClass('hide');
  //    $('.show-card25').addClass('hide');
  //    $('.show-card26').addClass('hide');
  //    $('.show-card27').addClass('hide');
  //    $('.show-card28').addClass('hide');
  //    $('.show-card29').addClass('hide');
  //    $('.show-card30').addClass('hide');
  //    $('.show-card31').addClass('hide');
  //    $('.show-card32').addClass('hide');
  //    $('.show-card33').addClass('hide');
  //    $('.show-card34').addClass('hide');
  //    $('.show-card35').addClass('hide');
  //    $('.show-card36').addClass('hide');
  //    $('.show-card37').addClass('hide');
  //    $('.show-card38').addClass('hide');
  //    $('.show-card39').addClass('hide');
  //    $('.show-card40').addClass('hide');
  //    $('.sb').addClass('hide');
  //       $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
  // $('.xb').addClass('hide');
  //    $('.zbj').addClass('hide');
  //    $('.xb1').addClass('hide');
  //    $('.sb1').addClass('hide');
  //    $('.zb2').addClass('hide');
  //    $('.yb2').addClass('hide');
  //    $('.xcb').addClass('hide');
  //    $('.scb').addClass('hide');
  //    $('.zcb').addClass('hide');
  //    $('.ycb').addClass('hide');
  //    $('.xcbb').addClass('hide');
  //    $('.xcb1').addClass('hide');
  //    $('.scb1').addClass('hide');
  //    $('.zcb1').addClass('hide');
  //    $('.ycb1').addClass('hide');
  //    $('.xcb2').addClass('hide');
  //    $('.scb2').addClass('hide');
  //    $('.zcb2').addClass('hide');
  //    $('.ycb2').addClass('hide');
  //    var div = document.getElementById('shang');
  //          var div1 = document.getElementById('xia');
  //          var div2 = document.getElementById('you');
  //          var div3 = document.getElementById('zuo');
  //          div.style.visibility = 'hidden';
  //          div1.style.visibility = 'hidden';
  //          div2.style.visibility = 'hidden';
  //          div3.style.visibility = 'hidden';
  //          $('.shang').addClass('hide');
  //          $('.you').addClass('hide');
  //          $('.zuo').addClass('hide');
  //          $('.xia').addClass('hide');
         
  //          var audio = document.getElementById("indexs");
  //          var vol1 = 0.50;
  //            var interval1 = 200; // 200ms interval
           
  //          var fadeout = setInterval(
  //            function() {
  //              // Reduce volume by 0.05 as long as it is above 0
  //              // This works as long as you start with a multiple of 0.05!
  //              if (vol1 > 0) {
  //                vol1 -= 0.05;
  //                audio.volume = vol1;
  //              }
  //              else {
  //                // Stop the setInterval when 0 is reached
  //                clearInterval(fadeout);
  //              }
  //            }, interval1);     
  //  setTimeout(function(){
  //    var m1 = new Audio('data/se/be.wav');
  //    m1.play();
  //    $('.red').removeClass('hide');
  //    $('.red').addClass('show').css('display', 'block');
  //  },600);
  //  setTimeout(function(){
   
  //    $('.red1').removeClass('hide');
  //    $('.red1').addClass('show').css('display', 'block');
  //  },2100);
  //  setTimeout(function(){
   
  //    $('.red2').removeClass('hide');
  //    $('.red2').addClass('show').css('display', 'block');
  //  },3600);
  //  setTimeout(function(){
  //   $('.lbe').addClass('show').css('display', 'block');
  //   $('.lbe').removeClass('hide');
  //   },6500);
  //   setTimeout(function(){
  //   $('.lbe1').addClass('show').css('display', 'block');
  //   $('.lbe1').removeClass('hide');
  //   },8500);
  //   setTimeout(function(){
  //   $('.lbe2').addClass('show').css('display', 'block');
  //   $('.lbe2').removeClass('hide');
  //   },11500);
  //   setTimeout(function(){
  //   $('.lbe3').addClass('show').css('display', 'block');
  //   $('.lbe3').removeClass('hide');
  //   },13000);
  //   setTimeout(function(){
  //   $('.lbe4').addClass('show').css('display', 'block');
  //   $('.lbe4').removeClass('hide');
  //   },14500);
  //   setTimeout(function(){
  //   $('.lbe5').addClass('show').css('display', 'block');
  //   $('.lbe5').removeClass('hide');
  //   },17500);
  //   setTimeout(function(){
  //   $('.lbe6').addClass('show').css('display', 'block');
  //   $('.lbe6').removeClass('hide');
  //   },20500);
  //   setTimeout(function(){
  //   $('.lbe7').addClass('show').css('display', 'block');
  //   $('.lbe7').removeClass('hide');
  //   },26000);
  //   setTimeout(function(){
  //   $('.lbe8').addClass('show').css('display', 'block');
  //   $('.lbe8').removeClass('hide');
  //   },29000);
  //   setTimeout(function(){
  //   $('.lbe9').addClass('show').css('display', 'block');
  //   $('.lbe9').removeClass('hide');
  //   },30500);
  //   setTimeout(function(){
  //   $('.lbe10').addClass('show').css('display', 'block');
  //   $('.lbe10').removeClass('hide');
  //   },36000);
    
    
  //   setTimeout(function(){
  //   $('.black').addClass('show').css('display', 'block');
  //   $('.black').removeClass('hide');
  //   var m2 = new Audio('data/se/x.wav');
  //   m2.play();
  //   $('.show-carddc1').addClass('show').css('display', 'block');
  //   $('.show-carddc1').removeClass('hide');
  //   },38500);
  //      }
  //      if(globalThis.e<2){
  //        globalThis.e=globalThis.e +1
  //        var r=Math.floor(Math.random() * 100) + 1;
  //        if (r<50) {   
  //          var div = document.getElementById('shang');
  //          var div1 = document.getElementById('xia');
  //          var div2 = document.getElementById('you');
  //          var div3 = document.getElementById('zuo');
  //          div.style.visibility = 'hidden';
  //          div1.style.visibility = 'hidden';
  //          div2.style.visibility = 'hidden';
  //          div3.style.visibility = 'hidden';
  //          $('.shang').addClass('hide');
  //          $('.you').addClass('hide');
  //          $('.zuo').addClass('hide');
  //          $('.xia').addClass('hide');
  //           var s = [1,2,3,4];
  //           var rands = s[Math.floor(Math.random()*4)];
  //           var f = '.s'+rands
  //           var f1 = '.s'+rands+'1'
  //           var f2 = '.s'+rands+'2'
  //           var f3 = '.s'+rands+'3'
  //           setTimeout(function() {
  //            $(f).removeClass('hide');
  //            $(f).addClass('show').css('display', 'block');
  //           }, 500);
  //           setTimeout(function() {
  //            $(f1).removeClass('hide');
  //            $(f1).addClass('show').css('display', 'block');
  //          }, 2000);
  //          setTimeout(function() {
  //            $(f2).removeClass('hide');
  //            $(f2).addClass('show').css('display', 'block');
  //          }, 3500);
  //          setTimeout(function() {
  //            $(f3).removeClass('hide');
  //            $(f3).addClass('show').css('display', 'block');
  //          }, 5000);
   
   
   
  //          setTimeout(function() {
           
  //            $('.shang').removeClass('hide');
  //            $('.shang').addClass('show').css('display', 'block');
  //            $('.xia').removeClass('hide');
  //            $('.xia').addClass('show').css('display', 'block');
  //            $('.zuo').removeClass('hide');
  //            $('.zuo').addClass('show').css('display', 'block');
  //            $('.you').removeClass('hide');
  //            $('.you').addClass('show').css('display', 'block');
  //            div.style.visibility = 'visible';
  //            div1.style.visibility = 'visible';
  //            div2.style.visibility = 'visible';
  //            div3.style.visibility = 'visible';
  //          }, 6000);
  //        } else {   
  //          $('.shang').addClass('hide');
  //          $('.you').addClass('hide');
  //          $('.zuo').addClass('hide');
  //          $('.xia').addClass('hide');
  //          var div = document.getElementById('shang');
  //          var div1 = document.getElementById('xia');
  //          var div2 = document.getElementById('you');
  //          var div3 = document.getElementById('zuo');
  //          div.style.visibility = 'hidden';
  //          div1.style.visibility = 'hidden';
  //          div2.style.visibility = 'hidden';
  //          div3.style.visibility = 'hidden';
  //           var s = [10,5,6,7,8,9];
  //           var rands = s[Math.floor(Math.random()*6)];
  //           var f = '.s'+rands
  //           var f1 = '.s'+rands+'1'
  //           var f2 = '.s'+rands+'2'
  //           var f3 = '.s'+rands+'3'
  //           var rands1=rands - 4;
  //           var a1 = '.b'+rands1+'1'
  //           var a2 = '.b'+rands1+'2'
  //           var a3 = '.b'+rands1+'3'
  //           setTimeout(function() {
  //           $(f).removeClass('hide');
  //           $(f).addClass('show').css('display', 'block');
  //          }, 500);
  //           setTimeout(function() {
  //            $(f1).removeClass('hide');
  //            $(f1).addClass('show').css('display', 'block');
  //          }, 2000);
  //          setTimeout(function() {
  //            $(f2).removeClass('hide');
  //            $(f2).addClass('show').css('display', 'block');
  //          }, 3500);
  //          setTimeout(function() {
  //            $(f3).removeClass('hide');
  //            $(f3).addClass('show').css('display', 'block');
  //          }, 5000);
   
   
  //           setTimeout(function() {
  //            $(a1).removeClass('hide');
  //            $(a1).addClass('show').css('display', 'block');
  //            $(a2).removeClass('hide');
  //            $(a2).addClass('show').css('display', 'block');
  //            $(a3).removeClass('hide');
  //            $(a3).addClass('show').css('display', 'block');
  //          }, 6000);
     
  //        }
 
 
  //      }
       
 
  //    }else{
  //     if(globalThis.e==0){
  //       globalThis.e=globalThis.e+1
  //       var s = [1,2,3,4];
  //          var rands = s[Math.floor(Math.random()*4)];
  //          var f = '.s'+rands
  //          var f1 = '.s'+rands+'1'
  //          var f2 = '.s'+rands+'2'
  //          var f3 = '.s'+rands+'3'
  //          setTimeout(function() {
  //           $(f).removeClass('hide');
  //           $(f).addClass('show').css('display', 'block');
  //          }, 500);
  //          setTimeout(function() {
  //           $(f1).removeClass('hide');
  //           $(f1).addClass('show').css('display', 'block');
  //         }, 2000);
  //         setTimeout(function() {
  //           $(f2).removeClass('hide');
  //           $(f2).addClass('show').css('display', 'block');
  //         }, 3500);
  //         setTimeout(function() {
  //           $(f3).removeClass('hide');
  //           $(f3).addClass('show').css('display', 'block');
  //         }, 5000);
  
  
  
  //         setTimeout(function() {
          
  //           $('.shang').removeClass('hide');
  //           $('.shang').addClass('show').css('display', 'block');
  //           $('.xia').removeClass('hide');
  //           $('.xia').addClass('show').css('display', 'block');
  //           $('.zuo').removeClass('hide');
  //           $('.zuo').addClass('show').css('display', 'block');
  //           $('.you').removeClass('hide');
  //           $('.you').addClass('show').css('display', 'block');
  //           div.style.visibility = 'visible';
  //           div1.style.visibility = 'visible';
  //           div2.style.visibility = 'visible';
  //           div3.style.visibility = 'visible';
  //           if(globalThis.s==1){
        
  //             $('.sb').removeClass('hide');
  //             $('.sb').addClass('show').css('display', 'block');
    
  //           }
  //           if(globalThis.a==1){
        
  //             $('.xb').removeClass('hide');
  //             $('.xb').addClass('show').css('display', 'block');
    
  //           }
  //           if(globalThis.k==1){
        
  //             $('.zb').removeClass('hide');
  //             $('.zb').addClass('show').css('display', 'block');
    
  //           }

  //         }, 6000);

  //     }
  //      if(globalThis.e<4 && globalThis.e>0){
  //       if(globalThis.e==1 && globalThis.s==1){
        
  //         $('.sb').removeClass('hide');
  //         $('.sb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==1 && globalThis.a==1){
        
  //         $('.sb').removeClass('hide');
  //         $('.sb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==1 && globalThis.k==1){
        
  //         $('.xb').removeClass('hide');
  //         $('.xb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==2 && globalThis.s==1){
        
  //         $('.zb').removeClass('hide');
  //         $('.zb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==2 && globalThis.a==1){
        
  //         $('.yb').removeClass('hide');
  //         $('.yb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==2 && globalThis.k==1){
        
  //         $('.yb').removeClass('hide');
  //         $('.yb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==3 && globalThis.s==1){
        
  //         $('.yb').removeClass('hide');
  //         $('.yb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==3 && globalThis.a==1){
        
  //         $('.yb').removeClass('hide');
  //         $('.yb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==3 && globalThis.k==1){
        
  //         $('.sb').removeClass('hide');
  //         $('.sb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==4 && globalThis.s==1){
        
  //         $('.sb').removeClass('hide');
  //         $('.sb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==4 && globalThis.a==1){
        
  //         $('.sb').removeClass('hide');
  //         $('.sb').addClass('show').css('display', 'block');

  //       }
  //       if(globalThis.e==4 && globalThis.k==1){
        
  //         $('.xb').removeClass('hide');
  //         $('.xb').addClass('show').css('display', 'block');

  //       }
        
  //       if(globalThis.e<5){
  //       globalThis.t=globalThis.t+'4'}
  //        globalThis.e=globalThis.e+1
  //        var r=Math.floor(Math.random() * 100) + 1;
  //        if (r<50) {   
  //          var div = document.getElementById('shang');
  //          var div1 = document.getElementById('xia');
  //          var div2 = document.getElementById('you');
  //          var div3 = document.getElementById('zuo');
  //          div.style.visibility = 'hidden';
  //          div1.style.visibility = 'hidden';
  //          div2.style.visibility = 'hidden';
  //          div3.style.visibility = 'hidden';
  //          $('.shang').addClass('hide');
  //          $('.you').addClass('hide');
  //          $('.zuo').addClass('hide');
  //          $('.xia').addClass('hide');
  //           var s = [1,2,3,4];
  //           var rands = s[Math.floor(Math.random()*4)];
  //           var f = '.s'+rands
  //           var f1 = '.s'+rands+'1'
  //           var f2 = '.s'+rands+'2'
  //           var f3 = '.s'+rands+'3'
  //           setTimeout(function() {
  //            $(f).removeClass('hide');
  //            $(f).addClass('show').css('display', 'block');
  //           }, 500);
  //           setTimeout(function() {
  //            $(f1).removeClass('hide');
  //            $(f1).addClass('show').css('display', 'block');
  //          }, 2000);
  //          setTimeout(function() {
  //            $(f2).removeClass('hide');
  //            $(f2).addClass('show').css('display', 'block');
  //          }, 3500);
  //          setTimeout(function() {
  //            $(f3).removeClass('hide');
  //            $(f3).addClass('show').css('display', 'block');
  //          }, 5000);
   
   
   
  //          setTimeout(function() {
           
  //            $('.shang').removeClass('hide');
  //            $('.shang').addClass('show').css('display', 'block');
  //            $('.xia').removeClass('hide');
  //            $('.xia').addClass('show').css('display', 'block');
  //            $('.zuo').removeClass('hide');
  //            $('.zuo').addClass('show').css('display', 'block');
  //            $('.you').removeClass('hide');
  //            $('.you').addClass('show').css('display', 'block');
  //            div.style.visibility = 'visible';
  //            div1.style.visibility = 'visible';
  //            div2.style.visibility = 'visible';
  //            div3.style.visibility = 'visible';
  //          }, 6000);
  //        } else {   
  //          $('.shang').addClass('hide');
  //          $('.you').addClass('hide');
  //          $('.zuo').addClass('hide');
  //          $('.xia').addClass('hide');
  //          var div = document.getElementById('shang');
  //          var div1 = document.getElementById('xia');
  //          var div2 = document.getElementById('you');
  //          var div3 = document.getElementById('zuo');
  //          div.style.visibility = 'hidden';
  //          div1.style.visibility = 'hidden';
  //          div2.style.visibility = 'hidden';
  //          div3.style.visibility = 'hidden';
  //           var s = [10,5,6,7,8,9];
  //           var rands = s[Math.floor(Math.random()*6)];
  //           var f = '.s'+rands
  //           var f1 = '.s'+rands+'1'
  //           var f2 = '.s'+rands+'2'
  //           var f3 = '.s'+rands+'3'
  //           var rands1=rands - 4;
  //           var a1 = '.b'+rands1+'1'
  //           var a2 = '.b'+rands1+'2'
  //           var a3 = '.b'+rands1+'3'
  //           setTimeout(function() {
  //           $(f).removeClass('hide');
  //           $(f).addClass('show').css('display', 'block');
  //          }, 500);
  //           setTimeout(function() {
  //            $(f1).removeClass('hide');
  //            $(f1).addClass('show').css('display', 'block');
  //          }, 2000);
  //          setTimeout(function() {
  //            $(f2).removeClass('hide');
  //            $(f2).addClass('show').css('display', 'block');
  //          }, 3500);
  //          setTimeout(function() {
  //            $(f3).removeClass('hide');
  //            $(f3).addClass('show').css('display', 'block');
  //          }, 5000);
   
   
  //           setTimeout(function() {
  //            $(a1).removeClass('hide');
  //            $(a1).addClass('show').css('display', 'block');
  //            $(a2).removeClass('hide');
  //            $(a2).addClass('show').css('display', 'block');
  //            $(a3).removeClass('hide');
  //            $(a3).addClass('show').css('display', 'block');
  //          }, 6000);
     
  //        }
  //      }else{
  //      if(globalThis.e==5){
  //       if(globalThis.k==1){
  //         if(globalThis.t='24314'){
  //           $(".ksh").removeClass('hide');
  //         $(".ksh").addClass('show').css('display', 'block');}else{
            
  //         // 這裏放be


  //         }
          

  //       }
  //       if(globalThis.a==1){

  //         if(globalThis.t='41331'){
  //           $(".ash").removeClass('hide');
  //         $(".ash").addClass('show').css('display', 'block');}else{
            
  //         // 這裏放be


  //         }

  //       }
  //       if(globalThis.s==1){

  //         if(globalThis.t='11231'){
  //           $(".ssh").removeClass('hide');
  //         $(".ssh").addClass('show').css('display', 'block');}else{
            
  //         // 這裏放be


  //         }
  //       }
   
  //      }
  //    }}
 
 
  //  }else{
 
  //    if (r<50) {
  //      if (r<25) {   
  //        var div = document.getElementById('shang');
  //        var div1 = document.getElementById('xia');
  //        var div2 = document.getElementById('you');
  //        var div3 = document.getElementById('zuo');
  //        div.style.visibility = 'hidden';
  //        div1.style.visibility = 'hidden';
  //        div2.style.visibility = 'hidden';
  //        div3.style.visibility = 'hidden';
  //        $('.shang').addClass('hide');
  //        $('.you').addClass('hide');
  //        $('.zuo').addClass('hide');
  //        $('.xia').addClass('hide');
  //         var s = [1,2,3,4];
  //         var rands = s[Math.floor(Math.random()*4)];
  //         var f = '.s'+rands
  //         var f1 = '.s'+rands+'1'
  //         var f2 = '.s'+rands+'2'
  //         var f3 = '.s'+rands+'3'
  //         setTimeout(function() {
  //          $(f).removeClass('hide');
  //          $(f).addClass('show').css('display', 'block');
  //         }, 500);
  //         setTimeout(function() {
  //          $(f1).removeClass('hide');
  //          $(f1).addClass('show').css('display', 'block');
  //        }, 2000);
  //        setTimeout(function() {
  //          $(f2).removeClass('hide');
  //          $(f2).addClass('show').css('display', 'block');
  //        }, 3500);
  //        setTimeout(function() {
  //          $(f3).removeClass('hide');
  //          $(f3).addClass('show').css('display', 'block');
  //        }, 5000);
 
 
 
  //        setTimeout(function() {
         
  //          $('.shang').removeClass('hide');
  //          $('.shang').addClass('show').css('display', 'block');
  //          $('.xia').removeClass('hide');
  //          $('.xia').addClass('show').css('display', 'block');
  //          $('.zuo').removeClass('hide');
  //          $('.zuo').addClass('show').css('display', 'block');
  //          $('.you').removeClass('hide');
  //          $('.you').addClass('show').css('display', 'block');
  //          div.style.visibility = 'visible';
  //          div1.style.visibility = 'visible';
  //          div2.style.visibility = 'visible';
  //          div3.style.visibility = 'visible';
  //        }, 6000);
  //      } else {   
  //        $('.shang').addClass('hide');
  //        $('.you').addClass('hide');
  //        $('.zuo').addClass('hide');
  //        $('.xia').addClass('hide');
  //        var div = document.getElementById('shang');
  //        var div1 = document.getElementById('xia');
  //        var div2 = document.getElementById('you');
  //        var div3 = document.getElementById('zuo');
  //        div.style.visibility = 'hidden';
  //        div1.style.visibility = 'hidden';
  //        div2.style.visibility = 'hidden';
  //        div3.style.visibility = 'hidden';
  //         var s = [10,5,6,7,8,9];
  //         var rands = s[Math.floor(Math.random()*6)];
  //         var f = '.s'+rands
  //         var f1 = '.s'+rands+'1'
  //         var f2 = '.s'+rands+'2'
  //         var f3 = '.s'+rands+'3'
  //         var rands1=rands - 4;
  //         var a1 = '.b'+rands1+'1'
  //         var a2 = '.b'+rands1+'2'
  //         var a3 = '.b'+rands1+'3'
  //         setTimeout(function() {
  //         $(f).removeClass('hide');
  //         $(f).addClass('show').css('display', 'block');
  //        }, 500);
  //         setTimeout(function() {
  //          $(f1).removeClass('hide');
  //          $(f1).addClass('show').css('display', 'block');
  //        }, 2000);
  //        setTimeout(function() {
  //          $(f2).removeClass('hide');
  //          $(f2).addClass('show').css('display', 'block');
  //        }, 3500);
  //        setTimeout(function() {
  //          $(f3).removeClass('hide');
  //          $(f3).addClass('show').css('display', 'block');
  //        }, 5000);
 
 
  //         setTimeout(function() {
  //          $(a1).removeClass('hide');
  //          $(a1).addClass('show').css('display', 'block');
  //          $(a2).removeClass('hide');
  //          $(a2).addClass('show').css('display', 'block');
  //          $(a3).removeClass('hide');
  //          $(a3).addClass('show').css('display', 'block');
  //        }, 6000);
   
  //      }
       
  //    } else {
      
  //       if(globalThis.flag==6){
  //           globalThis.r=1
  //           globalThis.s=1
  //           $('.message18').removeClass('hide');
  //           $('.message18').addClass('show').css('display', 'block');
  //           $('.show-card26').removeClass('hide');
  //           $('.show-card26').addClass('show').css('display', 'block');
  //           globalThis.flag=7
  //         }
  //         if(globalThis.flag==5){
  //           $('.message21').removeClass('hide');
  //           $('.message21').addClass('show').css('display', 'block');
  //           setTimeout(function() {
  //             $('.message21j').removeClass('hide');
  //             $('.message21j').addClass('show').css('display', 'block');
  //           }, 1100);
  //           $('.show-card30').removeClass('hide');
  //           $('.show-card30').addClass('show').css('display', 'block');
  //           globalThis.flag=6
  //         }
  //         if(globalThis.flag==4){
  //           $('.message17').removeClass('hide');
  //           $('.message17').addClass('show').css('display', 'block');
  //           setTimeout(function() {
  //             $('.message17j').removeClass('hide');
  //           $('.message17j').addClass('show').css('display', 'block');
  //           }, 1100);
  //           $('.show-card25').removeClass('hide');
  //           $('.show-card25').addClass('show').css('display', 'block');
  //           globalThis.flag=5
  //         }
  //         if(globalThis.flag==3){
  //           $('.message13').removeClass('hide');
  //           $('.message13').addClass('show').css('display', 'block');
  //           setTimeout(function() {
  //             $('.message13j').removeClass('hide');
  //             $('.message13j').addClass('show').css('display', 'block');
  //           }, 1100);
  //           $('.show-card21').removeClass('hide');
  //           $('.show-card21').addClass('show').css('display', 'block');
  //           globalThis.flag=4
  //         }
  //         if(globalThis.flag==2){
  //           setTimeout(function() {
  //             $('.message9j').removeClass('hide');
  //           $('.message9j').addClass('show').css('display', 'block');
  //           }, 1100);
  //           $('.message9').removeClass('hide');
  //           $('.message9').addClass('show').css('display', 'block');
  //           $('.show-card15').removeClass('hide');
  //           $('.show-card15').addClass('show').css('display', 'block');
  //           globalThis.flag=3
  //         }
  //         if(globalThis.flag==1){
  //           $('.message7').removeClass('hide');
  //           $('.message7').addClass('show').css('display', 'block');
  //           setTimeout(function() {
  //             $('.message7j').removeClass('hide');
  //           $('.message7j').addClass('show').css('display', 'block');
  //           }, 1100);
  //           $('.show-card11').removeClass('hide');
  //           $('.show-card11').addClass('show').css('display', 'block');
  //           globalThis.flag=2
  //         }
  //         if(globalThis.flag==0){
  //           $('.message6').removeClass('hide');
  //           $('.message6').addClass('show').css('display', 'block');
  //           setTimeout(function() {
  //             $('.message6j').removeClass('hide');
  //           $('.message6j').addClass('show').css('display', 'block');
  //           }, 1100);
  //           setTimeout(function() {
  //             $('.message6jj').removeClass('hide');
  //           $('.message6jj').addClass('show').css('display', 'block');
  //           }, 2200);
  //           $('.show-card6').removeClass('hide');
  //           $('.show-card6').addClass('show').css('display', 'block');
  //           globalThis.flag=1
  //         }
   
  //    }
     
  //  }

 
//++++++++++++++++++++++++++++++++++++++++++++++++
   
var r=Math.floor(Math.random() * 100) + 1;
if(globalThis.flag==7){
  var div = document.getElementById('shang');
        var div1 = document.getElementById('xia');
        var div2 = document.getElementById('you');
        var div3 = document.getElementById('zuo');
        div.style.visibility = 'hidden';
        div1.style.visibility = 'hidden';
        div2.style.visibility = 'hidden';
        div3.style.visibility = 'hidden';
        $('.shang').addClass('hide');
        $('.you').addClass('hide');
        $('.zuo').addClass('hide');
        $('.xia').addClass('hide');


  if(globalThis.r==0){ 
    if(globalThis.e==2){

  $('.show-card').addClass('hide');
  $('.show-card1').addClass('hide');
  $('.show-card2').addClass('hide');
  $('.show-card3').addClass('hide');
  $('.show-card4').addClass('hide');
  $('.show-card5').addClass('hide');
  $('.show-card6').addClass('hide');
  $('.show-card7').addClass('hide');
  $('.show-card8').addClass('hide');
  $('.show-card9').addClass('hide');
  $('.show-card10').addClass('hide');    
  $('.show-card11').addClass('hide');
  $('.show-card12').addClass('hide');
  $('.show-card13').addClass('hide');
  $('.show-card14').addClass('hide');
  $('.show-card15').addClass('hide');
  $('.show-card16').addClass('hide');
  $('.show-card17').addClass('hide');
  $('.show-card18').addClass('hide');
  $('.show-card19').addClass('hide');
  $('.show-card20').addClass('hide');
  $('.show-card21').addClass('hide');
  $('.show-card22').addClass('hide');
  $('.show-card23').addClass('hide');
  $('.show-card24').addClass('hide');
  $('.show-card25').addClass('hide');
  $('.show-card26').addClass('hide');
  $('.show-card27').addClass('hide');
  $('.show-card28').addClass('hide');
  $('.show-card29').addClass('hide');
  $('.show-card30').addClass('hide');
  $('.show-card31').addClass('hide');
  $('.show-card32').addClass('hide');
  $('.show-card33').addClass('hide');
  $('.show-card34').addClass('hide');
  $('.show-card35').addClass('hide');
  $('.show-card36').addClass('hide');
  $('.show-card37').addClass('hide');
  $('.show-card38').addClass('hide');
  $('.show-card39').addClass('hide');
  $('.show-card40').addClass('hide');
       
  var audio = document.getElementById("indexs");
  var vol1 = 0.50;
    var interval1 = 200; // 200ms interval
  
  var fadeout = setInterval(
    function() {
      // Reduce volume by 0.05 as long as it is above 0
      // This works as long as you start with a multiple of 0.05!
      if (vol1 > 0) {
        vol1 -= 0.05;
        audio.volume = vol1;
      }
      else {
        // Stop the setInterval when 0 is reached
        clearInterval(fadeout);
      }
    }, interval1);     
setTimeout(function(){
var m1 = new Audio('data/se/be.wav');
m1.play();
$('.red').removeClass('hide');
$('.red').addClass('show').css('display', 'block');
},600);
setTimeout(function(){

$('.red1').removeClass('hide');
$('.red1').addClass('show').css('display', 'block');
},2100);
setTimeout(function(){

$('.red2').removeClass('hide');
$('.red2').addClass('show').css('display', 'block');
},3600);

setTimeout(function(){
$('.lbe').addClass('show').css('display', 'block');
$('.lbe').removeClass('hide');
},6500);
setTimeout(function(){
$('.lbe1').addClass('show').css('display', 'block');
$('.lbe1').removeClass('hide');
},8500);
setTimeout(function(){
$('.lbe2').addClass('show').css('display', 'block');
$('.lbe2').removeClass('hide');
},11500);
setTimeout(function(){
$('.lbe3').addClass('show').css('display', 'block');
$('.lbe3').removeClass('hide');
},13000);
setTimeout(function(){
$('.lbe4').addClass('show').css('display', 'block');
$('.lbe4').removeClass('hide');
},14500);
setTimeout(function(){
$('.lbe5').addClass('show').css('display', 'block');
$('.lbe5').removeClass('hide');
},17500);
setTimeout(function(){
$('.lbe6').addClass('show').css('display', 'block');
$('.lbe6').removeClass('hide');
},20500);
setTimeout(function(){
$('.lbe7').addClass('show').css('display', 'block');
$('.lbe7').removeClass('hide');
},26000);
setTimeout(function(){
$('.lbe8').addClass('show').css('display', 'block');
$('.lbe8').removeClass('hide');
},29000);
setTimeout(function(){
$('.lbe9').addClass('show').css('display', 'block');
$('.lbe9').removeClass('hide');
},30500);
setTimeout(function(){
$('.lbe10').addClass('show').css('display', 'block');
$('.lbe10').removeClass('hide');
},36000);


setTimeout(function(){
$('.black').addClass('show').css('display', 'block');
$('.black').removeClass('hide');
var m2 = new Audio('data/se/x.wav');
m2.play();
$('.show-carddc1').addClass('show').css('display', 'block');
$('.show-carddc1').removeClass('hide');
},38500);
    }
    if(globalThis.e<2){
      globalThis.e=globalThis.e +1
      var r=Math.floor(Math.random() * 100) + 1;
      if (r<50) {   
        
         var s = [1,2,3,4];
         var rands = s[Math.floor(Math.random()*4)];
         var f = '.s'+rands
         var f1 = '.s'+rands+'1'
         var f2 = '.s'+rands+'2'
         var f3 = '.s'+rands+'3'
         setTimeout(function() {
          $(f).removeClass('hide');
          $(f).addClass('show').css('display', 'block');
         }, 500);
         setTimeout(function() {
          $(f1).removeClass('hide');
          $(f1).addClass('show').css('display', 'block');
        }, 2000);
        setTimeout(function() {
          $(f2).removeClass('hide');
          $(f2).addClass('show').css('display', 'block');
        }, 3500);
        setTimeout(function() {
          $(f3).removeClass('hide');
          $(f3).addClass('show').css('display', 'block');
        }, 5000);



        setTimeout(function() {
        
          $('.shang').removeClass('hide');
          $('.shang').addClass('show').css('display', 'block');
          $('.xia').removeClass('hide');
          $('.xia').addClass('show').css('display', 'block');
          $('.zuo').removeClass('hide');
          $('.zuo').addClass('show').css('display', 'block');
          $('.you').removeClass('hide');
          $('.you').addClass('show').css('display', 'block');
          div.style.visibility = 'visible';
          div1.style.visibility = 'visible';
          div2.style.visibility = 'visible';
          div3.style.visibility = 'visible';
        }, 6000);
      } else {   
        
         var s = [10,5,6,7,8,9];
         var rands = s[Math.floor(Math.random()*6)];
         var f = '.s'+rands
         var f1 = '.s'+rands+'1'
         var f2 = '.s'+rands+'2'
         var f3 = '.s'+rands+'3'
         var rands1=rands - 4;
         var a1 = '.b'+rands1+'1'
         var a2 = '.b'+rands1+'2'
         var a3 = '.b'+rands1+'3'
         setTimeout(function() {
         $(f).removeClass('hide');
         $(f).addClass('show').css('display', 'block');
        }, 500);
         setTimeout(function() {
          $(f1).removeClass('hide');
          $(f1).addClass('show').css('display', 'block');
        }, 2000);
        setTimeout(function() {
          $(f2).removeClass('hide');
          $(f2).addClass('show').css('display', 'block');
        }, 3500);
        setTimeout(function() {
          $(f3).removeClass('hide');
          $(f3).addClass('show').css('display', 'block');
        }, 5000);


         setTimeout(function() {
          $(a1).removeClass('hide');
          $(a1).addClass('show').css('display', 'block');
          $(a2).removeClass('hide');
          $(a2).addClass('show').css('display', 'block');
          $(a3).removeClass('hide');
          $(a3).addClass('show').css('display', 'block');
        }, 6000);
  
      }


    }
   

  }else{
    if(globalThis.e==0){
      globalThis.start=1
      globalThis.e=globalThis.e+1
      var s = [1,2,3,4];
         var rands = s[Math.floor(Math.random()*4)];
         var f = '.s'+rands
         var f1 = '.s'+rands+'1'
         var f2 = '.s'+rands+'2'
         var f3 = '.s'+rands+'3'
         setTimeout(function() {
          $(f).removeClass('hide');
          $(f).addClass('show').css('display', 'block');
         }, 500);
         setTimeout(function() {
          $(f1).removeClass('hide');
          $(f1).addClass('show').css('display', 'block');
        }, 2000);
        setTimeout(function() {
          $(f2).removeClass('hide');
          $(f2).addClass('show').css('display', 'block');
        }, 3500);
        setTimeout(function() {
          $(f3).removeClass('hide');
          $(f3).addClass('show').css('display', 'block');
        }, 5000);



        setTimeout(function() {
        
          $('.shang').removeClass('hide');
          $('.shang').addClass('show').css('display', 'block');
          $('.xia').removeClass('hide');
          $('.xia').addClass('show').css('display', 'block');
          $('.zuo').removeClass('hide');
          $('.zuo').addClass('show').css('display', 'block');
          $('.you').removeClass('hide');
          $('.you').addClass('show').css('display', 'block');
          div.style.visibility = 'visible';
          div1.style.visibility = 'visible';
          div2.style.visibility = 'visible';
          div3.style.visibility = 'visible';
          if(globalThis.s==1){
      
            $('.sb').removeClass('hide');
            $('.sb').addClass('show').css('display', 'block');
            $('.xcb').removeClass('hide');
            $('.xcb').addClass('show').css('display', 'block');
            $('.zcb').removeClass('hide');
            $('.zcb').addClass('show').css('display', 'block');
            $('.ycb').removeClass('hide');
            $('.ycb').addClass('show').css('display', 'block');
  
          }
          if(globalThis.a==1){
      
            $('.xb').removeClass('hide');
            $('.xb').addClass('show').css('display', 'block');
            $('.scb').removeClass('hide');
            $('.scb').addClass('show').css('display', 'block');
            $('.zcb').removeClass('hide');
            $('.zcb').addClass('show').css('display', 'block');
            $('.ycb').removeClass('hide');
            $('.ycb').addClass('show').css('display', 'block');
  
          }
          if(globalThis.k==1){
      
            $('.zb').removeClass('hide');
            $('.zb').addClass('show').css('display', 'block');
            $('.zbj').removeClass('hide');
            $('.zbj').addClass('show').css('display', 'block');
            $('.xcbb').removeClass('hide');
            $('.xcbb').addClass('show').css('display', 'block');
            $('.scb').removeClass('hide');
            $('.scb').addClass('show').css('display', 'block');
            $('.ycb').removeClass('hide');
            $('.ycb').addClass('show').css('display', 'block');
  
          }

        }, 6000);

    }else{
    if(globalThis.e<3 && globalThis.e>0){
  
      var r=Math.floor(Math.random() * 100) + 1;
      if (r<50) {   
         var s = [1,2,3,4];
         var rands = s[Math.floor(Math.random()*4)];
         var f = '.s'+rands
         var f1 = '.s'+rands+'1'
         var f2 = '.s'+rands+'2'
         var f3 = '.s'+rands+'3'
         setTimeout(function() {
          $(f).removeClass('hide');
          $(f).addClass('show').css('display', 'block');
         }, 500);
         setTimeout(function() {
          $(f1).removeClass('hide');
          $(f1).addClass('show').css('display', 'block');
        }, 2000);
        setTimeout(function() {
          $(f2).removeClass('hide');
          $(f2).addClass('show').css('display', 'block');
        }, 3500);
        setTimeout(function() {
          $(f3).removeClass('hide');
          $(f3).addClass('show').css('display', 'block');
        }, 5000);



        setTimeout(function() {
        
          $('.shang').removeClass('hide');
          $('.shang').addClass('show').css('display', 'block');
          $('.xia').removeClass('hide');
          $('.xia').addClass('show').css('display', 'block');
          $('.zuo').removeClass('hide');
          $('.zuo').addClass('show').css('display', 'block');
          $('.you').removeClass('hide');
          $('.you').addClass('show').css('display', 'block');
          div.style.visibility = 'visible';
          div1.style.visibility = 'visible';
          div2.style.visibility = 'visible';
          div3.style.visibility = 'visible';
          
      if(globalThis.e==1 && globalThis.s==1){
      
        $('.sb1').removeClass('hide');
        $('.sb1').addClass('show').css('display', 'block');
        $('.xcb1').removeClass('hide');
        $('.xcb1').addClass('show').css('display', 'block');
        $('.zcb1').removeClass('hide');
        $('.zcb1').addClass('show').css('display', 'block');
        $('.ycb1').removeClass('hide');
        $('.ycb1').addClass('show').css('display', 'block');

      }
      if(globalThis.e==1 && globalThis.a==1){
      
        $('.sb1').removeClass('hide');
        $('.sb1').addClass('show').css('display', 'block');
        $('.xcb1').removeClass('hide');
        $('.xcb1').addClass('show').css('display', 'block');
        $('.zcb1').removeClass('hide');
        $('.zcb1').addClass('show').css('display', 'block');
        $('.ycb1').removeClass('hide');
        $('.ycb1').addClass('show').css('display', 'block');

      }
      if(globalThis.e==1 && globalThis.k==1){
      
        $('.xb1').removeClass('hide');
        $('.xb1').addClass('show').css('display', 'block');
        $('.scb1').removeClass('hide');
        $('.scb1').addClass('show').css('display', 'block');
        $('.zcb1').removeClass('hide');
        $('.zcb1').addClass('show').css('display', 'block');
        $('.ycb1').removeClass('hide');
        $('.ycb1').addClass('show').css('display', 'block');

      }
      if(globalThis.e==2 && globalThis.s==1){
      
        $('.zb2').removeClass('hide');
        $('.zb2').addClass('show').css('display', 'block');
        $('.xcb2').removeClass('hide');
        $('.xcb2').addClass('show').css('display', 'block');
        $('.scb2').removeClass('hide');
        $('.scb2').addClass('show').css('display', 'block');
        $('.ycb2').removeClass('hide');
        $('.ycb2').addClass('show').css('display', 'block');
        

      }
      if(globalThis.e==2 && globalThis.a==1){
      
        $('.yb2').removeClass('hide');
        $('.yb2').addClass('show').css('display', 'block');
        $('.xcb2').removeClass('hide');
        $('.xcb2').addClass('show').css('display', 'block');
        $('.scb2').removeClass('hide');
        $('.scb2').addClass('show').css('display', 'block');
        $('.zcb2').removeClass('hide');
        $('.zcb2').addClass('show').css('display', 'block');

      }
      if(globalThis.e==2 && globalThis.k==1){
      
        $('.yb2').removeClass('hide');
        $('.yb2').addClass('show').css('display', 'block');
        $('.xcb2').removeClass('hide');
        $('.xcb2').addClass('show').css('display', 'block');
        $('.scb2').removeClass('hide');
        $('.scb2').addClass('show').css('display', 'block');
        $('.zcb2').removeClass('hide');
        $('.zcb2').addClass('show').css('display', 'block');

      }


        globalThis.t=globalThis.t+'4'
      globalThis.e=globalThis.e+1

        }, 6000);
      } else { 
        
        globalThis.t=globalThis.t+'4'  
         var s = [10,5,6,7,8,9];
         var rands = s[Math.floor(Math.random()*6)];
         var f = '.s'+rands
         var f1 = '.s'+rands+'1'
         var f2 = '.s'+rands+'2'
         var f3 = '.s'+rands+'3'
         var rands1=rands - 4;
         var a1 = '.b'+rands1+'1'
         var a2 = '.b'+rands1+'2'
         var a3 = '.b'+rands1+'3'
         setTimeout(function() {
         $(f).removeClass('hide');
         $(f).addClass('show').css('display', 'block');
        }, 500);
         setTimeout(function() {
          $(f1).removeClass('hide');
          $(f1).addClass('show').css('display', 'block');
        }, 2000);
        setTimeout(function() {
          $(f2).removeClass('hide');
          $(f2).addClass('show').css('display', 'block');
        }, 3500);
        setTimeout(function() {
          $(f3).removeClass('hide');
          $(f3).addClass('show').css('display', 'block');
        }, 5000);


         setTimeout(function() {
          $(a1).removeClass('hide');
          $(a1).addClass('show').css('display', 'block');
          $(a2).removeClass('hide');
          $(a2).addClass('show').css('display', 'block');
          $(a3).removeClass('hide');
          $(a3).addClass('show').css('display', 'block');
        }, 6000);
  
      }
    }else{
    if(globalThis.e==3){
      globalThis.t=globalThis.t+'4'
      if(globalThis.k==1){
        if(globalThis.t=='243'){
          $('.sb').addClass('hide');
   $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
$('.xb').addClass('hide');
$('.zbj').addClass('hide');
$('.xb1').addClass('hide');
$('.sb1').addClass('hide');
$('.zb2').addClass('hide');
$('.yb2').addClass('hide');
$('.xcb').addClass('hide');
$('.scb').addClass('hide');
$('.zcb').addClass('hide');
$('.ycb').addClass('hide');
$('.xcbb').addClass('hide');
$('.xcb1').addClass('hide');
$('.scb1').addClass('hide');
$('.zcb1').addClass('hide');
$('.ycb1').addClass('hide');
$('.xcb2').addClass('hide');
$('.scb2').addClass('hide');
$('.zcb2').addClass('hide');
$('.ycb2').addClass('hide');
$('.message22j').addClass('hide');
$('.message22jj').addClass('hide');
$('.message14j').addClass('hide');
$('.message10j').addClass('hide');
$('.message7j').addClass('hide');
$('.message6j').addClass('hide');
$('.message6jj').addClass('hide');
$('.message5j').addClass('hide');
$('.message1j').addClass('hide');
$('.messagej').addClass('hide');
$('.message1').addClass('hide');
 $('.message').addClass('hide');
 $('.message1').addClass('hide');
 $('.message2').addClass('hide');
$('.message2j').addClass('hide');
 $('.message3').addClass('hide');
 $('.message4').addClass('hide');
 $('.message5').addClass('hide');
 $('.message6').addClass('hide');
  $('.message6jj').addClass('hide');
 $('.message7').addClass('hide');
 $('.message8').addClass('hide');
$('.message9').addClass('hide');
  $('.message9j').addClass('hide');
 $('.message10').addClass('hide');    
 $('.message11').addClass('hide');
 $('.message12').addClass('hide');
 $('.message13').addClass('hide');
 $('.message13j').addClass('hide');
 $('.message14').addClass('hide');
 $('.message15').addClass('hide');
 $('.message16').addClass('hide');
 $('.message17').addClass('hide');
 $('.message18').addClass('hide');
 $('.message19').addClass('hide');
 $('.message20').addClass('hide');
 $('.message20j').addClass('hide');
    $('.message21').addClass('hide');
 $('.message21j').addClass('hide');
  $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
 $('.message22j').addClass('hide');
  $('.message22jj').addClass('hide');
  $('.message14j').addClass('hide');
  $('.message10j').addClass('hide');
  $('.message10jj').addClass('hide');
  $('.message7j').addClass('hide');
  $('.message6j').addClass('hide');
$('.message6jj').addClass('hide');
  $('.message5j').addClass('hide');
  $('.message5jj').addClass('hide');
  $('.message1j').addClass('hide');
  $('.message1jj').addClass('hide');
  $('.messagej').addClass('hide');
  $('.messagejj').addClass('hide');
 $('.message23').addClass('hide');
 $('.message24').addClass('hide');
    $('.message21').addClass('hide');
 $('.message21j').addClass('hide');
  $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
 $('.message22j').addClass('hide');
  $('.message22jj').addClass('hide');
  $('.message14j').addClass('hide');
  $('.message10j').addClass('hide');
  $('.message10jj').addClass('hide');
  $('.message7j').addClass('hide');
  $('.message6j').addClass('hide');
$('.message6jj').addClass('hide');
  $('.message5j').addClass('hide');
  $('.message5jj').addClass('hide');
  $('.message1j').addClass('hide');
  $('.message1jj').addClass('hide');
  $('.messagej').addClass('hide');
  $('.messagejj').addClass('hide');
 $('.message23').addClass('hide');
 $('.message24').addClass('hide');
 
 $('.s1').addClass('hide');  
 $('.s11').addClass('hide'); 
 $('.s12').addClass('hide');
 $('.s2').addClass('hide');  
 $('.s21').addClass('hide'); 
 $('.s22').addClass('hide');
 $('.s3').addClass('hide');
 $('.s31').addClass('hide');
 $('.s32').addClass('hide');
 $('.s4').addClass('hide');
 $('.s41').addClass('hide');
 $('.s42').addClass('hide');
 $('.s43').addClass('hide');
 $('.s5').addClass('hide');
$('.s51').addClass('hide');
$('.s52').addClass('hide');  
$('.s53').addClass('hide');
$('.s6').addClass('hide');
$('.s61').addClass('hide');
$('.s62').addClass('hide');
$('.s7').addClass('hide');
$('.s71').addClass('hide');
$('.s72').addClass('hide');
$('.s83').addClass('hide');
$('.s8').addClass('hide');
$('.s81').addClass('hide');
$('.s82').addClass('hide');
$('.s9').addClass('hide');
$('.s91').addClass('hide');
$('.s92').addClass('hide');
$('.s10').addClass('hide');
$('.s101').addClass('hide');
$('.s102').addClass('hide');


$('.b11').addClass('hide');
$('.b12').addClass('hide');
$('.b21').addClass('hide');
$('.b22').addClass('hide');
$('.b31').addClass('hide');
$('.b32').addClass('hide');
$('.b41').addClass('hide');
$('.b42').addClass('hide');
$('.b51').addClass('hide');
$('.b52').addClass('hide');
$('.b53').addClass('hide');
$('.b54').addClass('hide');
$('.b55').addClass('hide');
$('.b56').addClass('hide');
$('.b57').addClass('hide');
$('.b58').addClass('hide');
$('.b61').addClass('hide');
$('.b62').addClass('hide');
$('.sb').addClass('hide');
   $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
$('.xb').addClass('hide');
$('.yb').addClass('hide');
$('.xb').addClass('hide');
$('.show-card').addClass('hide');
  $('.show-card1').addClass('hide');
  $('.show-card2').addClass('hide');
  $('.show-card3').addClass('hide');
  $('.show-card4').addClass('hide');
  $('.show-card5').addClass('hide');
  $('.show-card6').addClass('hide');
  $('.show-card7').addClass('hide');
  $('.show-card8').addClass('hide');
  $('.show-card9').addClass('hide');
  $('.show-card10').addClass('hide');    
  $('.show-card11').addClass('hide');
  $('.show-card12').addClass('hide');
  $('.show-card13').addClass('hide');
  $('.show-card14').addClass('hide');
  $('.show-card15').addClass('hide');
  $('.show-card16').addClass('hide');
  $('.show-card17').addClass('hide');
  $('.show-card18').addClass('hide');
  $('.show-card19').addClass('hide');
  $('.show-card20').addClass('hide');
  $('.show-card21').addClass('hide');
  $('.show-card22').addClass('hide');
  $('.show-card23').addClass('hide');
  $('.show-card24').addClass('hide');
  $('.show-card25').addClass('hide');
  $('.show-card26').addClass('hide');
  $('.show-card27').addClass('hide');
  $('.show-card28').addClass('hide');
  $('.show-card29').addClass('hide');
  $('.show-card30').addClass('hide');
  $('.show-card31').addClass('hide');
  $('.show-card32').addClass('hide');
  $('.show-card33').addClass('hide');
  $('.show-card34').addClass('hide');
  $('.show-card35').addClass('hide');
  $('.show-card36').addClass('hide');
  $('.show-card37').addClass('hide');
  $('.show-card38').addClass('hide');
  $('.show-card39').addClass('hide');
  $('.show-card40').addClass('hide');
         

          setTimeout(function(){
            $(".jsh").removeClass('hide');
            $(".jsh").addClass('show').css('display', 'block');
          },3000); 
          setTimeout(function(){
            $(".jsh1").removeClass('hide');
            $(".jsh1").addClass('show').css('display', 'block');
          },6000);
          setTimeout(function(){
            $(".jsh2").removeClass('hide');
            $(".jsh2").addClass('show').css('display', 'block');
          },9000);
          setTimeout(function(){
            $(".jsh3").removeClass('hide');
            $(".jsh3").addClass('show').css('display', 'block');
          },14500);
      
      
      }else{
        
  $('.show-card').addClass('hide');
  $('.show-card1').addClass('hide');
  $('.show-card2').addClass('hide');
  $('.show-card3').addClass('hide');
  $('.show-card4').addClass('hide');
  $('.show-card5').addClass('hide');
  $('.show-card6').addClass('hide');
  $('.show-card7').addClass('hide');
  $('.show-card8').addClass('hide');
  $('.show-card9').addClass('hide');
  $('.show-card10').addClass('hide');    
  $('.show-card11').addClass('hide');
  $('.show-card12').addClass('hide');
  $('.show-card13').addClass('hide');
  $('.show-card14').addClass('hide');
  $('.show-card15').addClass('hide');
  $('.show-card16').addClass('hide');
  $('.show-card17').addClass('hide');
  $('.show-card18').addClass('hide');
  $('.show-card19').addClass('hide');
  $('.show-card20').addClass('hide');
  $('.show-card21').addClass('hide');
  $('.show-card22').addClass('hide');
  $('.show-card23').addClass('hide');
  $('.show-card24').addClass('hide');
  $('.show-card25').addClass('hide');
  $('.show-card26').addClass('hide');
  $('.show-card27').addClass('hide');
  $('.show-card28').addClass('hide');
  $('.show-card29').addClass('hide');
  $('.show-card30').addClass('hide');
  $('.show-card31').addClass('hide');
  $('.show-card32').addClass('hide');
  $('.show-card33').addClass('hide');
  $('.show-card34').addClass('hide');
  $('.show-card35').addClass('hide');
  $('.show-card36').addClass('hide');
  $('.show-card37').addClass('hide');
  $('.show-card38').addClass('hide');
  $('.show-card39').addClass('hide');
  $('.show-card40').addClass('hide');
       
  var audio = document.getElementById("indexs");
  var vol1 = 0.50;
    var interval1 = 200; // 200ms interval
  
  var fadeout = setInterval(
    function() {
      // Reduce volume by 0.05 as long as it is above 0
      // This works as long as you start with a multiple of 0.05!
      if (vol1 > 0) {
        vol1 -= 0.05;
        audio.volume = vol1;
      }
      else {
        // Stop the setInterval when 0 is reached
        clearInterval(fadeout);
      }
    }, interval1);     
setTimeout(function(){
var m1 = new Audio('data/se/be.wav');
m1.play();
$('.red').removeClass('hide');
$('.red').addClass('show').css('display', 'block');
},600);
setTimeout(function(){

$('.red1').removeClass('hide');
$('.red1').addClass('show').css('display', 'block');
},2100);
setTimeout(function(){

$('.red2').removeClass('hide');
$('.red2').addClass('show').css('display', 'block');
},3600);

setTimeout(function(){
$('.lbe').addClass('show').css('display', 'block');
$('.lbe').removeClass('hide');
},6500);
setTimeout(function(){
$('.lbe1').addClass('show').css('display', 'block');
$('.lbe1').removeClass('hide');
},8500);
setTimeout(function(){
$('.lbe2').addClass('show').css('display', 'block');
$('.lbe2').removeClass('hide');
},11500);
setTimeout(function(){
$('.lbe3').addClass('show').css('display', 'block');
$('.lbe3').removeClass('hide');
},13000);
setTimeout(function(){
$('.lbe4').addClass('show').css('display', 'block');
$('.lbe4').removeClass('hide');
},14500);
setTimeout(function(){
$('.lbe5').addClass('show').css('display', 'block');
$('.lbe5').removeClass('hide');
},17500);
setTimeout(function(){
$('.lbe6').addClass('show').css('display', 'block');
$('.lbe6').removeClass('hide');
},20500);
setTimeout(function(){
$('.lbe7').addClass('show').css('display', 'block');
$('.lbe7').removeClass('hide');
},26000);
setTimeout(function(){
$('.lbe8').addClass('show').css('display', 'block');
$('.lbe8').removeClass('hide');
},29000);
setTimeout(function(){
$('.lbe9').addClass('show').css('display', 'block');
$('.lbe9').removeClass('hide');
},30500);
setTimeout(function(){
$('.lbe10').addClass('show').css('display', 'block');
$('.lbe10').removeClass('hide');
},36000);


setTimeout(function(){
$('.black').addClass('show').css('display', 'block');
$('.black').removeClass('hide');
var m2 = new Audio('data/se/x.wav');
m2.play();
$('.show-carddc1').addClass('show').css('display', 'block');
$('.show-carddc1').removeClass('hide');
},38500);


        }
      }
      if(globalThis.a==1){
        

         if(globalThis.t=='413'){
          $('.sb').addClass('hide');
   $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
$('.xb').addClass('hide');
$('.zbj').addClass('hide');
$('.xb1').addClass('hide');
$('.sb1').addClass('hide');
$('.zb2').addClass('hide');
$('.yb2').addClass('hide');
$('.xcb').addClass('hide');
$('.scb').addClass('hide');
$('.zcb').addClass('hide');
$('.ycb').addClass('hide');
$('.xcbb').addClass('hide');
$('.xcb1').addClass('hide');
$('.scb1').addClass('hide');
$('.zcb1').addClass('hide');
$('.ycb1').addClass('hide');
$('.xcb2').addClass('hide');
$('.scb2').addClass('hide');
$('.zcb2').addClass('hide');
$('.ycb2').addClass('hide');
$('.message22j').addClass('hide');
$('.message22jj').addClass('hide');
$('.message14j').addClass('hide');
$('.message10j').addClass('hide');
$('.message7j').addClass('hide');
$('.message6j').addClass('hide');
$('.message6jj').addClass('hide');
$('.message5j').addClass('hide');
$('.message1j').addClass('hide');
$('.messagej').addClass('hide');
$('.message1').addClass('hide');
 $('.message').addClass('hide');
 $('.message1').addClass('hide');
 $('.message2').addClass('hide');
$('.message2j').addClass('hide');
 $('.message3').addClass('hide');
 $('.message4').addClass('hide');
 $('.message5').addClass('hide');
 $('.message6').addClass('hide');
  $('.message6jj').addClass('hide');
 $('.message7').addClass('hide');
 $('.message8').addClass('hide');
$('.message9').addClass('hide');
  $('.message9j').addClass('hide');
 $('.message10').addClass('hide');    
 $('.message11').addClass('hide');
 $('.message12').addClass('hide');
 $('.message13').addClass('hide');
 $('.message13j').addClass('hide');
 $('.message14').addClass('hide');
 $('.message15').addClass('hide');
 $('.message16').addClass('hide');
 $('.message17').addClass('hide');
 $('.message18').addClass('hide');
 $('.message19').addClass('hide');
 $('.message20').addClass('hide');
 $('.message20j').addClass('hide');
    $('.message21').addClass('hide');
 $('.message21j').addClass('hide');
  $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
 $('.message22j').addClass('hide');
  $('.message22jj').addClass('hide');
  $('.message14j').addClass('hide');
  $('.message10j').addClass('hide');
  $('.message10jj').addClass('hide');
  $('.message7j').addClass('hide');
  $('.message6j').addClass('hide');
$('.message6jj').addClass('hide');
  $('.message5j').addClass('hide');
  $('.message5jj').addClass('hide');
  $('.message1j').addClass('hide');
  $('.message1jj').addClass('hide');
  $('.messagej').addClass('hide');
  $('.messagejj').addClass('hide');
 $('.message23').addClass('hide');
 $('.message24').addClass('hide');
    $('.message21').addClass('hide');
 $('.message21j').addClass('hide');
  $('.message22').addClass('hide');
$('.message22jjj').addClass('hide');
 $('.message22j').addClass('hide');
  $('.message22jj').addClass('hide');
  $('.message14j').addClass('hide');
  $('.message10j').addClass('hide');
  $('.message10jj').addClass('hide');
  $('.message7j').addClass('hide');
  $('.message6j').addClass('hide');
$('.message6jj').addClass('hide');
  $('.message5j').addClass('hide');
  $('.message5jj').addClass('hide');
  $('.message1j').addClass('hide');
  $('.message1jj').addClass('hide');
  $('.messagej').addClass('hide');
  $('.messagejj').addClass('hide');
 $('.message23').addClass('hide');
 $('.message24').addClass('hide');
 
 $('.s1').addClass('hide');  
 $('.s11').addClass('hide'); 
 $('.s12').addClass('hide');
 $('.s2').addClass('hide');  
 $('.s21').addClass('hide'); 
 $('.s22').addClass('hide');
 $('.s3').addClass('hide');
 $('.s31').addClass('hide');
 $('.s32').addClass('hide');
 $('.s4').addClass('hide');
 $('.s41').addClass('hide');
 $('.s42').addClass('hide');
 $('.s43').addClass('hide');
 $('.s5').addClass('hide');
$('.s51').addClass('hide');
$('.s52').addClass('hide');  
$('.s53').addClass('hide');
$('.s6').addClass('hide');
$('.s61').addClass('hide');
$('.s62').addClass('hide');
$('.s7').addClass('hide');
$('.s71').addClass('hide');
$('.s72').addClass('hide');
$('.s83').addClass('hide');
$('.s8').addClass('hide');
$('.s81').addClass('hide');
$('.s82').addClass('hide');
$('.s9').addClass('hide');
$('.s91').addClass('hide');
$('.s92').addClass('hide');
$('.s10').addClass('hide');
$('.s101').addClass('hide');
$('.s102').addClass('hide');


$('.b11').addClass('hide');
$('.b12').addClass('hide');
$('.b21').addClass('hide');
$('.b22').addClass('hide');
$('.b31').addClass('hide');
$('.b32').addClass('hide');
$('.b41').addClass('hide');
$('.b42').addClass('hide');
$('.b51').addClass('hide');
$('.b52').addClass('hide');
$('.b53').addClass('hide');
$('.b54').addClass('hide');
$('.b55').addClass('hide');
$('.b56').addClass('hide');
$('.b57').addClass('hide');
$('.b58').addClass('hide');
$('.b61').addClass('hide');
$('.b62').addClass('hide');
$('.sb').addClass('hide');
   $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
$('.xb').addClass('hide');
$('.yb').addClass('hide');
$('.xb').addClass('hide');
$('.show-card').addClass('hide');
  $('.show-card1').addClass('hide');
  $('.show-card2').addClass('hide');
  $('.show-card3').addClass('hide');
  $('.show-card4').addClass('hide');
  $('.show-card5').addClass('hide');
  $('.show-card6').addClass('hide');
  $('.show-card7').addClass('hide');
  $('.show-card8').addClass('hide');
  $('.show-card9').addClass('hide');
  $('.show-card10').addClass('hide');    
  $('.show-card11').addClass('hide');
  $('.show-card12').addClass('hide');
  $('.show-card13').addClass('hide');
  $('.show-card14').addClass('hide');
  $('.show-card15').addClass('hide');
  $('.show-card16').addClass('hide');
  $('.show-card17').addClass('hide');
  $('.show-card18').addClass('hide');
  $('.show-card19').addClass('hide');
  $('.show-card20').addClass('hide');
  $('.show-card21').addClass('hide');
  $('.show-card22').addClass('hide');
  $('.show-card23').addClass('hide');
  $('.show-card24').addClass('hide');
  $('.show-card25').addClass('hide');
  $('.show-card26').addClass('hide');
  $('.show-card27').addClass('hide');
  $('.show-card28').addClass('hide');
  $('.show-card29').addClass('hide');
  $('.show-card30').addClass('hide');
  $('.show-card31').addClass('hide');
  $('.show-card32').addClass('hide');
  $('.show-card33').addClass('hide');
  $('.show-card34').addClass('hide');
  $('.show-card35').addClass('hide');
  $('.show-card36').addClass('hide');
  $('.show-card37').addClass('hide');
  $('.show-card38').addClass('hide');
  $('.show-card39').addClass('hide');
  $('.show-card40').addClass('hide');
         

          setTimeout(function(){
            $(".jsh").removeClass('hide');
            $(".jsh").addClass('show').css('display', 'block');
          },3000); 
          setTimeout(function(){
            $(".jsh1").removeClass('hide');
            $(".jsh1").addClass('show').css('display', 'block');
          },6000);
          setTimeout(function(){
            $(".jsh2").removeClass('hide');
            $(".jsh2").addClass('show').css('display', 'block');
          },9000);
          setTimeout(function(){
            $(".jsh31").removeClass('hide');
            $(".jsh31").addClass('show').css('display', 'block');
          },14500);
        }else{
          
          
  $('.show-card').addClass('hide');
  $('.show-card1').addClass('hide');
  $('.show-card2').addClass('hide');
  $('.show-card3').addClass('hide');
  $('.show-card4').addClass('hide');
  $('.show-card5').addClass('hide');
  $('.show-card6').addClass('hide');
  $('.show-card7').addClass('hide');
  $('.show-card8').addClass('hide');
  $('.show-card9').addClass('hide');
  $('.show-card10').addClass('hide');    
  $('.show-card11').addClass('hide');
  $('.show-card12').addClass('hide');
  $('.show-card13').addClass('hide');
  $('.show-card14').addClass('hide');
  $('.show-card15').addClass('hide');
  $('.show-card16').addClass('hide');
  $('.show-card17').addClass('hide');
  $('.show-card18').addClass('hide');
  $('.show-card19').addClass('hide');
  $('.show-card20').addClass('hide');
  $('.show-card21').addClass('hide');
  $('.show-card22').addClass('hide');
  $('.show-card23').addClass('hide');
  $('.show-card24').addClass('hide');
  $('.show-card25').addClass('hide');
  $('.show-card26').addClass('hide');
  $('.show-card27').addClass('hide');
  $('.show-card28').addClass('hide');
  $('.show-card29').addClass('hide');
  $('.show-card30').addClass('hide');
  $('.show-card31').addClass('hide');
  $('.show-card32').addClass('hide');
  $('.show-card33').addClass('hide');
  $('.show-card34').addClass('hide');
  $('.show-card35').addClass('hide');
  $('.show-card36').addClass('hide');
  $('.show-card37').addClass('hide');
  $('.show-card38').addClass('hide');
  $('.show-card39').addClass('hide');
  $('.show-card40').addClass('hide');
       
  var audio = document.getElementById("indexs");
  var vol1 = 0.50;
    var interval1 = 200; // 200ms interval
  
  var fadeout = setInterval(
    function() {
      // Reduce volume by 0.05 as long as it is above 0
      // This works as long as you start with a multiple of 0.05!
      if (vol1 > 0) {
        vol1 -= 0.05;
        audio.volume = vol1;
      }
      else {
        // Stop the setInterval when 0 is reached
        clearInterval(fadeout);
      }
    }, interval1);     
setTimeout(function(){
var m1 = new Audio('data/se/be.wav');
m1.play();
$('.red').removeClass('hide');
$('.red').addClass('show').css('display', 'block');
},600);
setTimeout(function(){

$('.red1').removeClass('hide');
$('.red1').addClass('show').css('display', 'block');
},2100);
setTimeout(function(){

$('.red2').removeClass('hide');
$('.red2').addClass('show').css('display', 'block');
},3600);

setTimeout(function(){
$('.lbe').addClass('show').css('display', 'block');
$('.lbe').removeClass('hide');
},6500);
setTimeout(function(){
$('.lbe1').addClass('show').css('display', 'block');
$('.lbe1').removeClass('hide');
},8500);
setTimeout(function(){
$('.lbe2').addClass('show').css('display', 'block');
$('.lbe2').removeClass('hide');
},11500);
setTimeout(function(){
$('.lbe3').addClass('show').css('display', 'block');
$('.lbe3').removeClass('hide');
},13000);
setTimeout(function(){
$('.lbe4').addClass('show').css('display', 'block');
$('.lbe4').removeClass('hide');
},14500);
setTimeout(function(){
$('.lbe5').addClass('show').css('display', 'block');
$('.lbe5').removeClass('hide');
},17500);
setTimeout(function(){
$('.lbe6').addClass('show').css('display', 'block');
$('.lbe6').removeClass('hide');
},20500);
setTimeout(function(){
$('.lbe7').addClass('show').css('display', 'block');
$('.lbe7').removeClass('hide');
},26000);
setTimeout(function(){
$('.lbe8').addClass('show').css('display', 'block');
$('.lbe8').removeClass('hide');
},29000);
setTimeout(function(){
$('.lbe9').addClass('show').css('display', 'block');
$('.lbe9').removeClass('hide');
},30500);
setTimeout(function(){
$('.lbe10').addClass('show').css('display', 'block');
$('.lbe10').removeClass('hide');
},36000);


setTimeout(function(){
$('.black').addClass('show').css('display', 'block');
$('.black').removeClass('hide');
var m2 = new Audio('data/se/x.wav');
m2.play();
$('.show-carddc1').addClass('show').css('display', 'block');
$('.show-carddc1').removeClass('hide');
},38500);


        }

      }
      if(globalThis.s==1){

        if(globalThis.t=='112'){
          $('.sb').addClass('hide');
             $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
          $('.xb').addClass('hide');
          $('.zbj').addClass('hide');
          $('.xb1').addClass('hide');
          $('.sb1').addClass('hide');
          $('.zb2').addClass('hide');
          $('.yb2').addClass('hide');
          $('.xcb').addClass('hide');
          $('.scb').addClass('hide');
          $('.zcb').addClass('hide');
          $('.ycb').addClass('hide');
          $('.xcbb').addClass('hide');
          $('.xcb1').addClass('hide');
          $('.scb1').addClass('hide');
          $('.zcb1').addClass('hide');
          $('.ycb1').addClass('hide');
          $('.xcb2').addClass('hide');
          $('.scb2').addClass('hide');
          $('.zcb2').addClass('hide');
          $('.ycb2').addClass('hide');
          $('.message22j').addClass('hide');
          $('.message22jj').addClass('hide');
          $('.message14j').addClass('hide');
          $('.message10j').addClass('hide');
          $('.message7j').addClass('hide');
          $('.message6j').addClass('hide');
          $('.message6jj').addClass('hide');
          $('.message5j').addClass('hide');
          $('.message1j').addClass('hide');
          $('.messagej').addClass('hide');
          $('.message1').addClass('hide');
           $('.message').addClass('hide');
           $('.message1').addClass('hide');
           $('.message2').addClass('hide');
        $('.message2j').addClass('hide');
           $('.message3').addClass('hide');
           $('.message4').addClass('hide');
           $('.message5').addClass('hide');
           $('.message6').addClass('hide');
            $('.message6jj').addClass('hide');
           $('.message7').addClass('hide');
           $('.message8').addClass('hide');
          $('.message9').addClass('hide');
            $('.message9j').addClass('hide');
           $('.message10').addClass('hide');    
           $('.message11').addClass('hide');
           $('.message12').addClass('hide');
           $('.message13').addClass('hide');
           $('.message13j').addClass('hide');
           $('.message14').addClass('hide');
           $('.message15').addClass('hide');
           $('.message16').addClass('hide');
           $('.message17').addClass('hide');
           $('.message18').addClass('hide');
           $('.message19').addClass('hide');
           $('.message20').addClass('hide');
           $('.message20j').addClass('hide');
              $('.message21').addClass('hide');
           $('.message21j').addClass('hide');
            $('.message22').addClass('hide');
        $('.message22jjj').addClass('hide');
           $('.message22j').addClass('hide');
            $('.message22jj').addClass('hide');
            $('.message14j').addClass('hide');
            $('.message10j').addClass('hide');
            $('.message10jj').addClass('hide');
            $('.message7j').addClass('hide');
            $('.message6j').addClass('hide');
          $('.message6jj').addClass('hide');
            $('.message5j').addClass('hide');
            $('.message5jj').addClass('hide');
            $('.message1j').addClass('hide');
            $('.message1jj').addClass('hide');
            $('.messagej').addClass('hide');
            $('.messagejj').addClass('hide');
           $('.message23').addClass('hide');
           $('.message24').addClass('hide');
              $('.message21').addClass('hide');
           $('.message21j').addClass('hide');
            $('.message22').addClass('hide');
        $('.message22jjj').addClass('hide');
           $('.message22j').addClass('hide');
            $('.message22jj').addClass('hide');
            $('.message14j').addClass('hide');
            $('.message10j').addClass('hide');
            $('.message10jj').addClass('hide');
            $('.message7j').addClass('hide');
            $('.message6j').addClass('hide');
          $('.message6jj').addClass('hide');
            $('.message5j').addClass('hide');
            $('.message5jj').addClass('hide');
            $('.message1j').addClass('hide');
            $('.message1jj').addClass('hide');
            $('.messagej').addClass('hide');
            $('.messagejj').addClass('hide');
           $('.message23').addClass('hide');
           $('.message24').addClass('hide');
           
           $('.s1').addClass('hide');  
           $('.s11').addClass('hide'); 
           $('.s12').addClass('hide');
           $('.s2').addClass('hide');  
           $('.s21').addClass('hide'); 
           $('.s22').addClass('hide');
           $('.s3').addClass('hide');
           $('.s31').addClass('hide');
           $('.s32').addClass('hide');
           $('.s4').addClass('hide');
           $('.s41').addClass('hide');
           $('.s42').addClass('hide');
           $('.s43').addClass('hide');
           $('.s5').addClass('hide');
          $('.s51').addClass('hide');
          $('.s52').addClass('hide');  
          $('.s53').addClass('hide');
          $('.s6').addClass('hide');
          $('.s61').addClass('hide');
          $('.s62').addClass('hide');
          $('.s7').addClass('hide');
          $('.s71').addClass('hide');
          $('.s72').addClass('hide');
          $('.s83').addClass('hide');
          $('.s8').addClass('hide');
          $('.s81').addClass('hide');
          $('.s82').addClass('hide');
          $('.s9').addClass('hide');
          $('.s91').addClass('hide');
          $('.s92').addClass('hide');
          $('.s10').addClass('hide');
          $('.s101').addClass('hide');
          $('.s102').addClass('hide');
        
          
          $('.b11').addClass('hide');
          $('.b12').addClass('hide');
          $('.b21').addClass('hide');
          $('.b22').addClass('hide');
          $('.b31').addClass('hide');
          $('.b32').addClass('hide');
          $('.b41').addClass('hide');
          $('.b42').addClass('hide');
          $('.b51').addClass('hide');
          $('.b52').addClass('hide');
          $('.b53').addClass('hide');
          $('.b54').addClass('hide');
          $('.b55').addClass('hide');
          $('.b56').addClass('hide');
          $('.b57').addClass('hide');
          $('.b58').addClass('hide');
          $('.b61').addClass('hide');
          $('.b62').addClass('hide');
          $('.sb').addClass('hide');
             $('.zb').addClass('hide');
  $('.zbj').addClass('hide');
          $('.xb').addClass('hide');
          $('.yb').addClass('hide');
          $('.xb').addClass('hide');
          $('.show-card').addClass('hide');
            $('.show-card1').addClass('hide');
            $('.show-card2').addClass('hide');
            $('.show-card3').addClass('hide');
            $('.show-card4').addClass('hide');
            $('.show-card5').addClass('hide');
            $('.show-card6').addClass('hide');
            $('.show-card7').addClass('hide');
            $('.show-card8').addClass('hide');
            $('.show-card9').addClass('hide');
            $('.show-card10').addClass('hide');    
            $('.show-card11').addClass('hide');
            $('.show-card12').addClass('hide');
            $('.show-card13').addClass('hide');
            $('.show-card14').addClass('hide');
            $('.show-card15').addClass('hide');
            $('.show-card16').addClass('hide');
            $('.show-card17').addClass('hide');
            $('.show-card18').addClass('hide');
            $('.show-card19').addClass('hide');
            $('.show-card20').addClass('hide');
            $('.show-card21').addClass('hide');
            $('.show-card22').addClass('hide');
            $('.show-card23').addClass('hide');
            $('.show-card24').addClass('hide');
            $('.show-card25').addClass('hide');
            $('.show-card26').addClass('hide');
            $('.show-card27').addClass('hide');
            $('.show-card28').addClass('hide');
            $('.show-card29').addClass('hide');
            $('.show-card30').addClass('hide');
            $('.show-card31').addClass('hide');
            $('.show-card32').addClass('hide');
            $('.show-card33').addClass('hide');
            $('.show-card34').addClass('hide');
            $('.show-card35').addClass('hide');
            $('.show-card36').addClass('hide');
            $('.show-card37').addClass('hide');
            $('.show-card38').addClass('hide');
            $('.show-card39').addClass('hide');
            $('.show-card40').addClass('hide');
                   
        
                    setTimeout(function(){
                      $(".jsh").removeClass('hide');
                      $(".jsh").addClass('show').css('display', 'block');
                    },3000); 
                    setTimeout(function(){
                      $(".jsh1").removeClass('hide');
                      $(".jsh1").addClass('show').css('display', 'block');
                    },6000);
                    setTimeout(function(){
                      $(".jsh2").removeClass('hide');
                      $(".jsh2").addClass('show').css('display', 'block');
                    },9000);
                    setTimeout(function(){
                      $(".jsh32").removeClass('hide');
                      $(".jsh32").addClass('show').css('display', 'block');
                    },14500);
      
      }else{
          
        
  $('.show-card').addClass('hide');
  $('.show-card1').addClass('hide');
  $('.show-card2').addClass('hide');
  $('.show-card3').addClass('hide');
  $('.show-card4').addClass('hide');
  $('.show-card5').addClass('hide');
  $('.show-card6').addClass('hide');
  $('.show-card7').addClass('hide');
  $('.show-card8').addClass('hide');
  $('.show-card9').addClass('hide');
  $('.show-card10').addClass('hide');    
  $('.show-card11').addClass('hide');
  $('.show-card12').addClass('hide');
  $('.show-card13').addClass('hide');
  $('.show-card14').addClass('hide');
  $('.show-card15').addClass('hide');
  $('.show-card16').addClass('hide');
  $('.show-card17').addClass('hide');
  $('.show-card18').addClass('hide');
  $('.show-card19').addClass('hide');
  $('.show-card20').addClass('hide');
  $('.show-card21').addClass('hide');
  $('.show-card22').addClass('hide');
  $('.show-card23').addClass('hide');
  $('.show-card24').addClass('hide');
  $('.show-card25').addClass('hide');
  $('.show-card26').addClass('hide');
  $('.show-card27').addClass('hide');
  $('.show-card28').addClass('hide');
  $('.show-card29').addClass('hide');
  $('.show-card30').addClass('hide');
  $('.show-card31').addClass('hide');
  $('.show-card32').addClass('hide');
  $('.show-card33').addClass('hide');
  $('.show-card34').addClass('hide');
  $('.show-card35').addClass('hide');
  $('.show-card36').addClass('hide');
  $('.show-card37').addClass('hide');
  $('.show-card38').addClass('hide');
  $('.show-card39').addClass('hide');
  $('.show-card40').addClass('hide');
       
  var audio = document.getElementById("indexs");
  var vol1 = 0.50;
    var interval1 = 200; // 200ms interval
  
  var fadeout = setInterval(
    function() {
      // Reduce volume by 0.05 as long as it is above 0
      // This works as long as you start with a multiple of 0.05!
      if (vol1 > 0) {
        vol1 -= 0.05;
        audio.volume = vol1;
      }
      else {
        // Stop the setInterval when 0 is reached
        clearInterval(fadeout);
      }
    }, interval1);     
setTimeout(function(){
var m1 = new Audio('data/se/be.wav');
m1.play();
$('.red').removeClass('hide');
$('.red').addClass('show').css('display', 'block');
},600);
setTimeout(function(){

$('.red1').removeClass('hide');
$('.red1').addClass('show').css('display', 'block');
},2100);
setTimeout(function(){

$('.red2').removeClass('hide');
$('.red2').addClass('show').css('display', 'block');
},3600);

setTimeout(function(){
$('.lbe').addClass('show').css('display', 'block');
$('.lbe').removeClass('hide');
},6500);
setTimeout(function(){
$('.lbe1').addClass('show').css('display', 'block');
$('.lbe1').removeClass('hide');
},8500);
setTimeout(function(){
$('.lbe2').addClass('show').css('display', 'block');
$('.lbe2').removeClass('hide');
},11500);
setTimeout(function(){
$('.lbe3').addClass('show').css('display', 'block');
$('.lbe3').removeClass('hide');
},13000);
setTimeout(function(){
$('.lbe4').addClass('show').css('display', 'block');
$('.lbe4').removeClass('hide');
},14500);
setTimeout(function(){
$('.lbe5').addClass('show').css('display', 'block');
$('.lbe5').removeClass('hide');
},17500);
setTimeout(function(){
$('.lbe6').addClass('show').css('display', 'block');
$('.lbe6').removeClass('hide');
},20500);
setTimeout(function(){
$('.lbe7').addClass('show').css('display', 'block');
$('.lbe7').removeClass('hide');
},26000);
setTimeout(function(){
$('.lbe8').addClass('show').css('display', 'block');
$('.lbe8').removeClass('hide');
},29000);
setTimeout(function(){
$('.lbe9').addClass('show').css('display', 'block');
$('.lbe9').removeClass('hide');
},30500);
setTimeout(function(){
$('.lbe10').addClass('show').css('display', 'block');
$('.lbe10').removeClass('hide');
},36000);


setTimeout(function(){
$('.black').addClass('show').css('display', 'block');
$('.black').removeClass('hide');
var m2 = new Audio('data/se/x.wav');
m2.play();
$('.show-carddc1').addClass('show').css('display', 'block');
$('.show-carddc1').removeClass('hide');
},38500);

        }
      }

    }
  }}}


}else{

  if (r<50) {
    if (r<25) {   
      var div = document.getElementById('shang');
      var div1 = document.getElementById('xia');
      var div2 = document.getElementById('you');
      var div3 = document.getElementById('zuo');
      div.style.visibility = 'hidden';
      div1.style.visibility = 'hidden';
      div2.style.visibility = 'hidden';
      div3.style.visibility = 'hidden';
      $('.shang').addClass('hide');
      $('.you').addClass('hide');
      $('.zuo').addClass('hide');
      $('.xia').addClass('hide');
       var s = [1,2,3,4];
       var rands = s[Math.floor(Math.random()*4)];
       var f = '.s'+rands
       var f1 = '.s'+rands+'1'
       var f2 = '.s'+rands+'2'
       var f3 = '.s'+rands+'3'
       setTimeout(function() {
        $(f).removeClass('hide');
        $(f).addClass('show').css('display', 'block');
       }, 500);
       setTimeout(function() {
        $(f1).removeClass('hide');
        $(f1).addClass('show').css('display', 'block');
      }, 2000);
      setTimeout(function() {
        $(f2).removeClass('hide');
        $(f2).addClass('show').css('display', 'block');
      }, 3500);
      setTimeout(function() {
        $(f3).removeClass('hide');
        $(f3).addClass('show').css('display', 'block');
      }, 5000);



      setTimeout(function() {
      
        $('.shang').removeClass('hide');
        $('.shang').addClass('show').css('display', 'block');
        $('.xia').removeClass('hide');
        $('.xia').addClass('show').css('display', 'block');
        $('.zuo').removeClass('hide');
        $('.zuo').addClass('show').css('display', 'block');
        $('.you').removeClass('hide');
        $('.you').addClass('show').css('display', 'block');
        div.style.visibility = 'visible';
        div1.style.visibility = 'visible';
        div2.style.visibility = 'visible';
        div3.style.visibility = 'visible';
      }, 6000);
    } else {   
      $('.shang').addClass('hide');
      $('.you').addClass('hide');
      $('.zuo').addClass('hide');
      $('.xia').addClass('hide');
      var div = document.getElementById('shang');
      var div1 = document.getElementById('xia');
      var div2 = document.getElementById('you');
      var div3 = document.getElementById('zuo');
      div.style.visibility = 'hidden';
      div1.style.visibility = 'hidden';
      div2.style.visibility = 'hidden';
      div3.style.visibility = 'hidden';
       var s = [10,5,6,7,8,9];
       var rands = s[Math.floor(Math.random()*6)];
       var f = '.s'+rands
       var f1 = '.s'+rands+'1'
       var f2 = '.s'+rands+'2'
       var f3 = '.s'+rands+'3'
       var rands1=rands - 4;
       var a1 = '.b'+rands1+'1'
       var a2 = '.b'+rands1+'2'
       var a3 = '.b'+rands1+'3'
       setTimeout(function() {
       $(f).removeClass('hide');
       $(f).addClass('show').css('display', 'block');
      }, 500);
       setTimeout(function() {
        $(f1).removeClass('hide');
        $(f1).addClass('show').css('display', 'block');
      }, 2000);
      setTimeout(function() {
        $(f2).removeClass('hide');
        $(f2).addClass('show').css('display', 'block');
      }, 3500);
      setTimeout(function() {
        $(f3).removeClass('hide');
        $(f3).addClass('show').css('display', 'block');
      }, 5000);


       setTimeout(function() {
        $(a1).removeClass('hide');
        $(a1).addClass('show').css('display', 'block');
        $(a2).removeClass('hide');
        $(a2).addClass('show').css('display', 'block');
        $(a3).removeClass('hide');
        $(a3).addClass('show').css('display', 'block');
      }, 6000);

    }
    
  } else {
         
    if(globalThis.flag==6){
      globalThis.r=1
      globalThis.s=1
      $('.message18').removeClass('hide');
      $('.message18').addClass('show').css('display', 'block');
      $('.show-card26').removeClass('hide');
      $('.show-card26').addClass('show').css('display', 'block');
      globalThis.flag=7
    }
    if(globalThis.flag==5){
      $('.message21').removeClass('hide');
      $('.message21').addClass('show').css('display', 'block');
      setTimeout(function() {
        $('.message21j').removeClass('hide');
        $('.message21j').addClass('show').css('display', 'block');
      }, 1100);
      $('.show-card30').removeClass('hide');
      $('.show-card30').addClass('show').css('display', 'block');
      globalThis.flag=6
    }
    if(globalThis.flag==4){
      $('.message17').removeClass('hide');
      $('.message17').addClass('show').css('display', 'block');
      setTimeout(function() {
        $('.message17j').removeClass('hide');
      $('.message17j').addClass('show').css('display', 'block');
      }, 1100);
      $('.show-card25').removeClass('hide');
      $('.show-card25').addClass('show').css('display', 'block');
      globalThis.flag=5
    }
    if(globalThis.flag==3){
      $('.message13').removeClass('hide');
      $('.message13').addClass('show').css('display', 'block');
      setTimeout(function() {
        $('.message13j').removeClass('hide');
        $('.message13j').addClass('show').css('display', 'block');
      }, 1100);
      $('.show-card21').removeClass('hide');
      $('.show-card21').addClass('show').css('display', 'block');
      globalThis.flag=4
    }
    if(globalThis.flag==2){
      setTimeout(function() {
        $('.message9j').removeClass('hide');
      $('.message9j').addClass('show').css('display', 'block');
      }, 1100);
      $('.message9').removeClass('hide');
      $('.message9').addClass('show').css('display', 'block');
      $('.show-card15').removeClass('hide');
      $('.show-card15').addClass('show').css('display', 'block');
      globalThis.flag=3
    }
    if(globalThis.flag==1){
      $('.message7').removeClass('hide');
      $('.message7').addClass('show').css('display', 'block');
      setTimeout(function() {
        $('.message7j').removeClass('hide');
      $('.message7j').addClass('show').css('display', 'block');
      }, 1100);
      $('.show-card11').removeClass('hide');
      $('.show-card11').addClass('show').css('display', 'block');
      globalThis.flag=2
    }
    if(globalThis.flag==0){
      $('.message6').removeClass('hide');
      $('.message6').addClass('show').css('display', 'block');
      setTimeout(function() {
        $('.message6j').removeClass('hide');
      $('.message6j').addClass('show').css('display', 'block');
      }, 1100);
      setTimeout(function() {
        $('.message6jj').removeClass('hide');
      $('.message6jj').addClass('show').css('display', 'block');
      }, 2200);
      $('.show-card6').removeClass('hide');
      $('.show-card6').addClass('show').css('display', 'block');
      globalThis.flag=1
    }
   
  }
  
}

  
  
});

$('.show-card18').click(function(e) {
  $(this).attr("disabled","disabled"); 
  var music = new Audio('data/se/se.wav');
  music.volume=0.3;
  music.play();
  
  $('.show-card18').addClass('hide');

  $('.card17').addClass('hide');
  setTimeout(function() {
    $('.show-card18').css('display', 'none').removeClass('show').removeClass('hide');
    $('.card17').css('display', 'none').removeClass('show').removeClass('hide');
  }, 600);
  $('.card18').addClass('show').css('display', 'block');
  $('.show-card19').removeClass('hide');
  $('.show-card19').addClass('show').css('display', 'block');
  });

  
  $('.show-card19').click(function(e) {
    $(this).attr("disabled","disabled"); 
    var music = new Audio('data/se/se.wav');
    music.volume=0.3;
    music.play();
    
    $('.show-card19').addClass('hide');
    setTimeout(function() {
      $('.show-card19').css('display', 'none').removeClass('show').removeClass('hide');
    }, 600);
    $('.card18').addClass('hide');
    setTimeout(function() {
      $('.card18').css('display', 'none').removeClass('show').removeClass('hide');
    }, 600);
    $('.card19').addClass('show').css('display', 'block');
    });
  


$('.st').click(function(e) {
  $(this).attr("disabled","disabled"); 
    var music = new Audio('data/se/se.wav');
    music.volume=0.3;
    music.play();
  $(".st span").addClass("stop");
  $(".st").addClass("hide");
  globalThis.r=0
  globalThis.e=0
  globalThis.t=''




setTimeout(function(){
  $('.r4').removeClass('hide');
  $('.r4').addClass('show').css('display', 'block');
  $('.r5').removeClass('hide');
  $('.r5').addClass('show').css('display', 'block');
  $('.r1').removeClass('hide');
  $('.r1').addClass('show').css('display', 'block');
  $('.r3').removeClass('hide');
  $('.r3').addClass('show').css('display', 'block');
  $('.r2').removeClass('hide');
  $('.r2').addClass('show').css('display', 'block');
  $('.bin').removeClass('hide');
  $('.bin').addClass('show').css('display', 'block');
  $('.bin1').removeClass('hide');
  $('.bin1').addClass('show').css('display', 'block');
  $('.q').removeClass('hide');
  $('.q').addClass('show').css('display', 'block');
  $('.q1').removeClass('hide');
  $('.q1').addClass('show').css('display', 'block');
  $('.yin2').removeClass('hide');
  $('.yin').removeClass('hide');
  $('.yin').addClass('show').css('display', 'block');
  $('.yin2').addClass('show').css('display', 'block');
}, 600);
 




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
     $('.show-card2').removeClass('hide');
     $('.show-card').addClass('show').css('display', 'block');
     $('.show-card1').addClass('show').css('display', 'block');
     $('.show-card2').addClass('show').css('display', 'block');
   }, 1000);
  });

 
  
      

$('.openm').click(function(e) {
  this.style.visibility='hidden'
  globalThis.flag=0
  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  // var music = new Audio('data/se/open.mp3');
  // music.volume=0.5;
  // music.play();
 
  $('.open').addClass('hide');
  $('.openm').addClass('hide');
    $('.open').css('display', 'none').removeClass('show').removeClass('hide');
    $('.openm').css('display', 'none').removeClass('show').removeClass('hide');
    // var $bgm = new Audio('data/se/indexs.wav'); 
    // if (typeof $bgm.loop == 'boolean')
    // {
    //     $bgm.loop = true;
    // }
    // else
    // {
    //     $bgm.addEventListener('ended', function() {
    //         this.currentTime = 0;
    //         this.play();
    //     }, false);
    // }
    // $bgm.volume = 0.2;
  
    //$bgm.play();
    
    setTimeout(function(){
      $('h1').addClass('show').css('display', 'block');
      $('.span2').addClass('show').css('display', 'block');  
      $('.span1').addClass('show').css('display', 'block');
      $('.st').addClass('show').css('display', 'block');

    
    }, 1000);

    
 
});


$('.openn').click(function(e) {
  var audio = document.getElementById("indexs");
  var vol1 = 0.50;
    var interval1 = 200; // 200ms interval
  
  var fadeout = setInterval(
    function() {
      // Reduce volume by 0.05 as long as it is above 0
      // This works as long as you start with a multiple of 0.05!
      if (vol1 > 0) {
        vol1 -= 0.05;
        audio.volume = vol1;
      }
      else {
        // Stop the setInterval when 0 is reached
        clearInterval(fadeout);
      }
    }, interval1);

  var music = new Audio('data/se/open.mp3');
  music.volume=0.5;
  music.play();
  setTimeout(function(){
    $('.black').removeClass('hide');
    $('.black').addClass('show').css('display', 'block');
  },600);
  


    
 
});









  