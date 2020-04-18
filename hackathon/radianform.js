var form = document.getElementByID("name-form");
form.onsubmit = function(event) {
	event.preventDefault();
	var result = document.getElementByID("result");
	result.innerHTML = form.PatientName.value;
	form.reset();
};