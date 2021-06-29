function validateForm() {
	let _email = document.getElementById("email-input").value;
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (!_email.match(mailformat) || !_email || _email == "") {
		document.getElementById("invalid-text").style.display = "block"
		return false;
	}
	document.getElementById("invalid-text").style.display = "none"
}