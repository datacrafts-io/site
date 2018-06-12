//= require jquery-3.3.1.min
//= require popper
//= require bootstrap-sprockets

$(function() {
  $('.js-nav-link').on('click', function(e) {
    e.preventDefault();

    var href = $.attr(this, 'href');

    $('html, body').animate({
        scrollTop: $(href).offset().top - 100
    }, 400);
  });
});
