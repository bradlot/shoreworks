$(document).ready(function() {
  $(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();

    // Check if the current section is "home" or "about"
    if ($("#home").length || $("#about").length) {
      var homeSection = $("#home");
      var aboutSection = $("#about");
      if ((scrollTop >= homeSection.offset().top && scrollTop < homeSection.offset().top + homeSection.outerHeight()) ||
          (scrollTop >= aboutSection.offset().top && scrollTop < aboutSection.offset().top + aboutSection.outerHeight())) {
        $(".navbar").addClass("transparent");
        $(".navbar .nav-link").removeClass("black-text").addClass("white-text");
        $(".navbar-toggler").removeClass("black-text").addClass("white-text");
      } else {
        $(".navbar").removeClass("transparent");
        $(".navbar .nav-link").removeClass("black-text").addClass("white-text");
        $(".navbar-toggler").removeClass("black-text").addClass("white-text");
      }

      // Additional check to keep navbar text white when scrolling up within the "home" section
      if (scrollTop < homeSection.offset().top) {
        $(".navbar .nav-link").removeClass("black-text").addClass("white-text");
        $(".navbar-toggler").removeClass("black-text").addClass("white-text");
      }
    }

    // Check if the current section is "services"
    if ($("#services").length) {
      var servicesSection = $("#services");
      if (scrollTop >= servicesSection.offset().top && scrollTop < servicesSection.offset().top + servicesSection.outerHeight()) {
        $(".navbar .nav-link").removeClass("white-text").addClass("black-text");
        $(".navbar-toggler").removeClass("white-text").addClass("black-text");
      }
    }

    // Check if the current section is "inquire"
    if ($("#inquire").length) {
      var inquireSection = $("#inquire");
      if (scrollTop >= inquireSection.offset().top && scrollTop < inquireSection.offset().top + inquireSection.outerHeight()) {
        $(".navbar .nav-link").removeClass("white-text").addClass("black-text");
        $(".navbar-toggler").removeClass("white-text").addClass("black-text");
      }
    }
  });

  // Disable right-click on the home section background
  var homeSection = document.getElementById('home');
  homeSection.addEventListener('contextmenu', function(e) {
    var isTextClicked = e.target.closest('#home h1, #home p, #home a');
    if (!isTextClicked) {
      e.preventDefault();
    }
  });

  $(".nav-link").on("click", function() {
    $(".navbar-collapse").collapse("hide");
  });
});