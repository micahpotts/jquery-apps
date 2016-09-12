//Problem - looks bad in small browsers and devices
//Solution - hide text links and swap them for smaller nav

//create a selecct and append to menu
var $select = $("<select></select>");
$("#menu").append($select);
//cycle over menu links
$("#menu a").each(function() {
	var $anchor = $(this);
	//create an option
	var $option = $("<option></option>");

	//deal with selected options depending on current page
	if($anchor.parent().hasClass("selected")) {
		$option.prop("selected", true);
	}
	//option's value is href of the link
	$option.val($anchor.attr("href"));
	//option text is text of the link
	$option.text($anchor.text());
	//append option to select	
	$select.append($option);
});
	
		/////////OLD CODE From Nav Button
		//create button
		//var $button = $("<button>Go</button>");
		//$("#menu").append($button);

		//bind click to button
		//$button.click(function() {
			//go to select's location
		//	window.location = $select.val();
		//});
	
////////NEW CODE Removing Nav Button
//Bind change listener to the select
$select.change(function() {
	//Go to the select's location
	window.location = $select.val();
});