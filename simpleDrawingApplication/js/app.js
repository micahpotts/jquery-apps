//Problem: No user interaction. No change to application
//Solution: When user interacts, cause changes appropriately
var color = $(".selected").css("background-color");

//when clicking on the control list items
$(".controls li").click(function() {
	//deselect sibling element
	$(this).siblings().removeClass("selected");
	//select clicked element
	$(this).addClass("selected");
	//cache current color
	color = $(this).css("background-color");
});
	

//when new color clicked
	//show or hide colorSelect

//when color sliders change
	//update new color span

//when add color is pressed
	//append the color to the controls
	//select the new color

//on mouse events on the canvas
	//draw lines

















	