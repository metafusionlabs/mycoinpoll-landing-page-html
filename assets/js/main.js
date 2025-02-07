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
// counter
  document.addEventListener("DOMContentLoaded", () => {
    const targetDate = new Date(Date.now() + (23 * 864e5) + (9 * 36e5) + (25 * 6e4) + (45 * 1e3));
    const labels = ["D", "h", "m", "s"];
    const updateTimer = () => {
      let timeLeft = targetDate - Date.now();
      if (timeLeft <= 0) return document.querySelector(".remain-time").innerHTML = "<span>Time's up!</span>";

      const values = [864e5, 36e5, 6e4, 1e3].map(unit => {
            let value = Math.floor(timeLeft / unit);
            timeLeft %= unit;
            return value;
      });

      document.querySelectorAll(".counter-item").forEach((el, i) => {
            el.textContent = `${values[i]}${labels[i]}`;
      });
    };
    setInterval(updateTimer, 1000);
    updateTimer();
  });
  // scroll ScrollSpy
  document.addEventListener("DOMContentLoaded", () => {
    const offset = 120;
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    // Smooth scroll
    navLinks.forEach(link =>
       link.addEventListener("click", e => {
             e.preventDefault();
             window.scrollTo({
                top: document.getElementById(link.dataset.target).offsetTop - offset,
                behavior: "smooth"
             });
       })
    );
    // ScrollSpy
    const observer = new IntersectionObserver(entries =>
       entries.forEach(entry => {
             if (entry.isIntersecting)
                navLinks.forEach(link =>
                   link.classList.toggle("active", link.dataset.target === entry.target.id)
                );
       }), { threshold: 0.6, rootMargin: `-${offset}px 0px 0px` });
    sections.forEach(section => observer.observe(section));
    // Set "About" active on load
    document.querySelector(`.nav-link[data-target="about"]`)?.classList.add("active");
       });