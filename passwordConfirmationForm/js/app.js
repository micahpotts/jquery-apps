//Problem: Hints are shown all the time
//Solution: Hide hints and show them at the right time

//hide hints
$("form span").hide();

function passwordEvent() {
	//find out if password is valid
	if ($(this).val().length > 8) {
		//hide hint if valid
		$(this).next().hide();
	} else {
		//else show hint
		$(this).next().show();
	}
}

//when event happens on password input
$("#password").focus(passwordEvent).keyup(passwordEvent);
	

//when event happens on confirmation input
	//find out if password and confirmation match
		//hide hint if matched
		//else show hint 