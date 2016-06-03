
/*
** LINE ANIMATION
*/

// For every element with class .line
$(".line").waypoint(function() {

	// Set the line's width to 50%;
    $(this)[0].element.style.width = '50%';
}, 
{
	// When the element is 90% from the top
    offset: "90%"
});


/** HAMBURGER MENU TOGGLE **/
// $('body').click(function() {
// 	$('#main-menu').removeClass('open');
// 	$('#hamburger').removeClass('open');
// })


$('#hamburger').click(function() {
	$('#main-menu').toggleClass('open');
	$('#hamburger').toggleClass('open');
});

