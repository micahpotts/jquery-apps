//Problem - Goes to dead end when images clicked
//Solution - Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
// Add overlay
$("body").append($overlay);
	// An image
	// A caption


// Capture click event on a link to an image
$("#imageGallery a").click(function(event) {
	event.preventDefault();
	var href = $(this).attr("href");
	$overlay.show();
	// Show overlay
	// Update overlay with image in link
	// Get child's alt attribute and set caption
});
	

// When overlay clicked
	//  hide overlay