

$(function() {

  var time = 30;
  var $bar,
  $slick,
  isPause,
  tick,
  percentTime;



  $bar = $('.progress .slide-progress');
  $slick = $('.carousel');

  $slick.slick({
      infinite: true,
      slidesToShow: 2,
      autoplay: false,
      autoplaySpeed: 4000,
      centerMode: false,
      arrows: false,
      centerPadding: 0,
      cssEase: 'linear',
      variableWidth: true,
    });


      //
      // $('.big-container').on({
      //   mouseenter: function() {
      //     isPause = true;
      //   },
      //   mouseleave: function() {
      //     isPause = false;
      //   }
      // })
      //
      // function startProgressbar() {
      //   resetProgressbar();
      //   percentTime = 0;
      //   isPause = false;
      //   tick = setInterval(interval, 10);
      // }
      //
      // function interval() {
      //   if(isPause === false) {
      //     percentTime += 1 / (time+0.1);
      //     $bar.css({
      //       width: percentTime+"%"
      //     });
      //     if(percentTime >= 100)
      //       {
      //         $slick.slick('slickNext');
      //         startProgressbar();
      //       }
      //   }
      // }
      //
      //
      // function resetProgressbar() {
      //   $bar.css({
      //    width: 0+'%'
      //   });
      //   clearTimeout(tick);
      // }
      //
      // startProgressbar();






      var navMenu = $("#menu");

        $( ".mobile-icon" ).click(function() {
      if ($(navMenu).is(":hidden")) {
        $(navMenu).slideDown(200);
      }
        });


      $(".dropdown-item").click(function(){
       $(this).next().slideToggle(200);
      })




        $(document).mouseup(function (e){
          if ( $(window).width() <= 768 ) {
            if (navMenu.has(e.target).length === 0) {
                navMenu.slideUp(200);
            }
        }

        });














    });
