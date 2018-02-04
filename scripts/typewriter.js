//Requires an array of strings as a parameter, we have a default one set if no array is specified

//Requires the id of the DOM element where you want the typed text to appear.
//default is #twe-typed-text

//Will run infinitely, unless time is specified

var typeWriterEffect = function(textArray = ["Clean, hand-written code.", "Creative ideas.", "Beautiful design.", "User-friendly interface."], domelement = "twe-typed-text", time = "Infinite") {
	
	let textInputField = document.getElementById(domelement);
	console.log(domelement); //check if right DOM element is selected
	let textInput = "";
	let arrayPosition = 0;
	let currentLetter;
	
	
	function changeArray(){
		(function chooseText() {
			textInput = textArray[arrayPosition];
		}());
		(function moveArrayPosition() {
			if (arrayPosition < textArray.length - 1) {
				arrayPosition++;
			}
			else {
				arrayPosition = 0;
			}
		}());
		direction = "forwards";
		console.log(textInput); //check if this is working
	};

	let stringArrayPosition = 0;
	let typedText = [];
	let direction = "forwards";
	
	changeArray();
	function typeString() {
		let stringArray = textInput.split("");
		console.log(stringArray); //check if this is working
		
		(function chooseLetter() {
			currentLetter = stringArray[stringArrayPosition];
			console.log(currentLetter); //check if its choosing the right letter
		}());

		(function typeLetter() {
			console.log(typeof typedText);
			if(direction === "forwards"){
				typedText.push(currentLetter);
				textInputField.textContent = typedText.join("");
				stringArrayPosition++;
				if(stringArrayPosition < textInput.length) {
					direction = "forwards";
				}
				else{
					direction = "backwards";
				}
			}
			else {
				if(stringArrayPosition > 0) {
					typedText.pop();
					textInputField.textContent = typedText.join("");
					stringArrayPosition--;
				}
				else {
					changeArray();
				}
			}
			
		}());
	}

	setInterval(typeString, 100);

};
