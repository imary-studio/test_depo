$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoHeight: true,
    margin: 45,
    autoWidth:false,
    items: 3,
    onInitialized: startProgressBar,
    onTranslate: resetProgressBar,
    onTranslated: startProgressBar
  });

  function startProgressBar() {
    // apply keyframe animation
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


});
