// My custom js 
// navbar click fixed
$(".nav-item").on("click",function(){
  $(".navbar-collapse").removeClass('show');
});
// ==SmoothScroll==
var scroll = new SmoothScroll('a[href*="#"]');
// scrollspy
$('body').scrollspy({ target: '#navbarSupportedContent' })

//==addclass removeclass practice==
$(".nav-item").click(function(){
    $(this).addClass("bg-info");
    $(".nav-item").not(this).removeClass("bg-info");
});

//==wow==
new WOW().init();


// custom dataspy
$("#home").on("mouseenter", function(){
	$("a[href='#home']").parent().addClass('bg-info');
	$(".nav-item").not(".nav-item:nth-child(1)").removeClass('bg-info');
});
$("#about").on("mouseenter", function(){
	$("a[href='#about']").parent().addClass('bg-info');
	$(".nav-item").not(".nav-item:nth-child(2)").removeClass('bg-info');
});
$("#services").on("mouseenter", function(){
	$("a[href='#services']").parent().addClass('bg-info');
	$(".nav-item").not(".nav-item:nth-child(3)").removeClass('bg-info');
});
$("#design").on("mouseenter", function(){
	$("a[href='#design']").parent().addClass('bg-info');
	$(".nav-item").not(".nav-item:nth-child(4)").removeClass('bg-info');
});
$("#team").on("mouseenter", function(){
	$("a[href='#team']").parent().addClass('bg-info');
	$(".nav-item").not(".nav-item:nth-child(5)").removeClass('bg-info');
});
$("#portfolio").on("mouseenter", function(){
	$("a[href='#portfolio']").parent().addClass('bg-info');
	$(".nav-item").not(".nav-item:nth-child(6)").removeClass('bg-info');
});
$("#package").on("mouseenter", function(){
	$("a[href='#package']").parent().addClass('bg-info');
	$(".nav-item").not(".nav-item:nth-child(7)").removeClass('bg-info');
});
$("#address").on("mouseenter", function(){
	$("a[href='#address']").parent().addClass('bg-info');
	$(".nav-item").not(".nav-item:nth-child(8)").removeClass('bg-info');
});


// navbar click fixed [news page]

$(".sidebar-nav").on("click",function(){
  $("#wrapper").removeClass('toggled');
});
