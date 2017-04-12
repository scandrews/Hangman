
	// objects holding possible words to guess
	var possiblewords = {
		"word1": "money",
		"word2": "monkey",
		"word3": "about",
	};

	// generates the computer's guess
	var guesswordindex = possiblewords[Math.floor(Math.random() * possiblewords.length)];
	// arrary to hold letters that have been quessted correctly
	var guessYesWord(possiblewords.length);

console.log(possiblewords.guesswordindex);
console.log(possiblewords[guesswordindex]);



    // function runs every time a key is pressed
    document.onkeyup = function(event){
	//determines which key was pressed
	var entry = event.key;
console.log(entry);

	// returns the index into the letter
	var	letterlocation = possiblewords.indexOf(possiblewords.guesswordindex);
	// test if guessed previously
	var isthere();

console.log(letterlocation);


	}


console.log(letterlocation);

	



