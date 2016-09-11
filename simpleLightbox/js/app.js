//Problem - Goes to dead end when images clicked
//Solution - Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

// An image to overlay
$overlay.append($image);

// Add overlay
$("body").append($overlay);
	// A caption


// Capture click event on a link to an image
$("#imageGallery a").click(function(event) {
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	// Update overlay with image in link
	$image.attr("src", imageLocation);

	// Show overlay
	$overlay.show();
	
	
	// Get child's alt attribute and set caption
});
	

// When overlay clicked
$overlay.click(function() {
	//  hide overlay
	$(this).hide();
});
	

	