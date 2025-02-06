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
// preloader 
document.addEventListener('DOMContentLoaded', function () { 
  const preloader = document.getElementById('preloader');
  // Ensure preloader hides after 3 seconds (fallback)
  setTimeout(() => {
     preloader.style.opacity = '0';
     setTimeout(() => {
           preloader.style.display = 'none';
     }, 500); // Allow fade-out transition
  }, 3000);
  window.addEventListener('load', function () {
     preloader.style.opacity = '0';
     setTimeout(() => {
           preloader.style.display = 'none';
     }, 500);
     });
  });
