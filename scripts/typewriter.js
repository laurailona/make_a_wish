//Requires an array of strings as a parameter, we have a default one set if no array is specified

//Requires the id of the DOM element where you want the typed text to appear.
//default is #twe-typed-text

//Will run infinitely, unless time is specified

var typeWriterEffect = function(textArray = ["Clean, hand-written code.", "Creative ideas.", "Beautiful design.", "User-friendly interface."], domelement = "twe-typed-text", time = "Infinite") {
	
	let textInputField = document.getElementById(domelement);
	let textInput;
	let arrayPosition = 0;
	
	
	function changeText(){
		(function chooseText() {
			textInput = textArray[arrayPosition];
		}());
		(function addText() {
			textInputField.textContent = textInput;
		}());
		(function moveArrayPosition() {
			if (arrayPosition < textArray.length - 1) {
				arrayPosition++;
			}
			else {
				arrayPosition = 0;
			}
		}());
	};

	setInterval(changeText, 3000);
















};
