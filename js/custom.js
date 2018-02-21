// My custom js
// SmoothScroll
var scroll = new SmoothScroll('a[href*="#"]');
// scrollspy


//button
	// $("button").not(".navbar-toggler").click(function() {
	// 	alert("You have clicked the button")/* Act on the event */
	// });
//button
//addclass removeclass practice
$("#top").click(function(){
    $(this).toggleClass("btn-warning");
});
$(".nav-item").click(function(){
    $(this).addClass("active");
    $(".nav-item").not(this).removeClass("active");
});