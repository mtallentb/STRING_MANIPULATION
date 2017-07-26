function testFunctions() {

	let testString = document.getElementById("inputField").value;
	let targetDiv = document.getElementById("targetDiv");

	function reversal() {
		let testArray = testString.split("");
		console.log(testArray);
		let reverseTestArray = testArray.reverse();
		console.log(reverseTestArray);
		let reverseString = testArray.join("");
		console.log(reverseString);
		targetDiv.innerHTML = `<p>Reversed: ${reverseString}</p>`;
		return reverseString;
	}

	function alphabits() {
		let testArray = testString.split(" ");
		let sortedArray = testArray.sort();
		let sortedString = sortedArray.join();
		targetDiv.innerHTML += `<p>Sorted: ${sortedString}</p>`;
		return sortedString;
	}

	function palindrome() {
		if (reversal() === alphabits()) {
			targetDiv.innerHTML += `<p>Your string is a palindrome</p>`;
		}
	}

	reversal(testString);
	alphabits(testString);
	palindrome(testString);

}

let button = document.getElementById("btn");
button.addEventListener("click", testFunctions);

function pressEnterKey(selectedField) {

	document.querySelector(selectedField).addEventListener('keypress', function (e) {
	    let key = e.which || e.keyCode;
	    if (key === 13) { 
	    	e.preventDefault();
	        testFunctions();
    	}
	});	
	
}

pressEnterKey("#inputField");