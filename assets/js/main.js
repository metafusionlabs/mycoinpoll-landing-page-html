jQuery(document).ready(function ($) {
    $(document).on("click", function (event) {
      const $div = $("#outside-click");
      const $navbarText = $("#navbarText");
      if (!$div.is(event.target) && $div.has(event.target).length === 0) {
        $navbarText.removeClass("show");
      }
    });
  // menu bg add
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 300) {
          $('header').addClass('menu-bg-fixed');
      } else {
          $('header').removeClass('menu-bg-fixed');
      }
  });
})
// loader
$(window).on("load", function () {
  $("#preloader").fadeOut();
  $("#preloader").delay(500).fadeOut("slow");
  $("body").delay(500).css({ opacity:1 });
 });
