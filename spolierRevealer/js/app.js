//Have spoilers hidden
//Reveal upon click

//hide spoiler
$(".spoiler span").hide();
//add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>");
//on button press
$(".spoiler button").click(function() {
	//show spoiler next to the button clicked
	$(this).prev().show();
	//get rid of button
	$(this).remove();
});
	