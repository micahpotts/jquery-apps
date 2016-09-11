//Problem - Goes to dead end when images clicked
//Solution - Create an overlay with the large image - Lightbox

//1. Capture click event on a link to an image
$("#imageGallery a").click(function(event) {
	event.preventDefault();
	var href = $(this).attr("href");
	console.log(href);
	// Show overlay
	// Update overlay with image in link
	// Get child's alt attribute and set caption
});
	
//2 Add overlay
	// An image
	// A caption
//3 When overlay clicked
	//  hide overlay