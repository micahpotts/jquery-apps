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
	
	//option's value is href of the link
	$option.val($anchor.attr("href"));
	//option text is text of the link
	$option.text($anchor.text());
	//append option to select	
	$select.append($option);
});
	
//create button
//bind click to button
	//go to select's location
//modify css to hide big nav on small widths and show button and select
	//modify css to hide select and button on larger widths
//deal with selected options depending on current page