// My custom js
// ==SmoothScroll==
var scroll = new SmoothScroll('a[href*="#"]');
// scrollspy
$('body').scrollspy({ target: '#navbarSupportedContent' })

//==addclass removeclass practice==
$("#top").click(function(){
    $(this).toggleClass("btn-warning");
});
$(".nav-item").click(function(){
    $(this).addClass("bg-info");
    $(".nav-item").not(this).removeClass("bg-info");
});

//==wow==
new WOW().init();

// site preloader -- also uncomment the div in the header and the css style for #preloader
// site preloader -- also uncomment the div in the header and the css style for #preloader
