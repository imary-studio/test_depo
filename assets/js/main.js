$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoHeight: false,
    onInitialized: startProgressBar,
    onTranslate: resetProgressBar,
    onTranslated: startProgressBar,
    dots: false,
    responsive: {
      0: {
        items: 1,
        margin: 0,
        center: true,
        stagePadding: 0,
        autoWidth: false,
      },
      769: {
        items: 3,
        margin: 45,
        autoWidth: false,
      }
    }
  });

  function startProgressBar() {
    $(".slide-progress").css({
      width: "1200px",
      transition: "width 5000ms"
    });
  }

  function resetProgressBar() {
    $(".slide-progress").css({
      width: 0,
      transition: "width 0s"
    });
  }

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
