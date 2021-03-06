$(document).ready(function() {

/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

$('header').css({ 'height': $(window).height() });
$(window).on('resize', function() {

    $('header').css({ 'height': $(window).height() });
    $('body').css({ 'width': $(window).width() })
});

/* Smooth Scroll
------------------------------------------------------ */

$('.smoothscroll').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
        window.location.hash = target;
    });
});


/*	Fade In/Out Navigation
------------------------------------------------------*/

$(window).on('scroll', function() {
    var h = $('header').height();
    var y = $(window).scrollTop();
  var nav = $('#nav-wrap');

   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
      nav.fadeOut('fast');
   }
  else {
     if (y < h*.20) {
        nav.removeClass('opaque').fadeIn('fast');
     }
     else {
        nav.addClass('opaque').fadeIn('fast');
     }
  }

});

checkWidth(true);

$(window).resize(function() {
    checkWidth(false);
})

});

/*	Resize for mobile
------------------------------------------------------*/

function checkWidth(init) {
    if($(window).width() < 710) {
        $("#portfolio-wrapper").removeClass("bgrid-quarters");
        $("#portfolio-wrapper").removeClass("s-bgrid-thirds");
        $("#portfolio-wrapper").removeClass("cf");
        $("#portfolio-wrapper").addClass("one");
        $("#portfolio-wrapper").css("margin-left", "15%");
    } else {
        if(!init) {
            $("#portfolio-wrapper").removeClass("one");
            $("#portfolio-wrapper").addClass("bgrid-quarters");
            $("#portfolio-wrapper").addClass("s-bgrid-thirds");
            $("#portfolio-wrapper").addClass("cf");
            $("#portfolio-wrapper").css("margin-left", "0%");
        }
    }
}