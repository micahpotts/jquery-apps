//Problem - Goes to dead end when images clicked
//Solution - Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// An image to overlay
$overlay.append($image);

// A caption in overlay
$overlay.append($caption);

// Add overlay
$("body").append($overlay);


// Capture click event on a link to an image
$("#imageGallery a").click(function(event) {
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	// Update overlay with image in link
	$image.attr("src", imageLocation);

	// Show overlay
	$overlay.show();
	
	// Get child's alt attribute and set caption
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
});
	

// When overlay clicked
$overlay.click(function() {
	//  hide overlay
	$(this).hide();
});
	

	