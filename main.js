$(document).on('ready', function() {

});



var getName = function(obj){
	return obj["name"];
};


var totalLetters = function(arr) {
	return arr.join('').length;
};

var keyValue = function(key, value){
	var obj = {};
	return obj[key] = value;
}

var negativeIndex = function(arr, neg) {

	thefucker = (arr.length)+neg;
	return arr[thefucker];
}

var removeM = function(str) {
	finalWord = [];
	arr = str.split('');
	console.log(arr);
	for(var i = 0; i < str.length; i++){
		if (arr[i].toUpperCase() !== 'M') {
			finalWord.push(arr[i]);
		}
	}
	finalWord = finalWord.join('');
	console.log(finalWord);
	return finalWord;
};

var printObject = function(obj) {
	// 1. for in loop
	// 2. console.log 

	for (var letr in obj) {
		console.log(letr + ' is ' + obj[letr]);
	}
};

var vowels = function(str) {
	finalVowels = [];
	vocales = str.split('');
	for(var i = 0; i < vocales.length; i++) {
		currentLetr = vocales[i].toUpperCase();
		if (currentLetr === 'A' || currentLetr === 'E' || currentLetr === 'I' || currentLetr === 'O' || currentLetr === 'U') {
			finalVowels.push(vocales[i]);
		}
	}
	console.log(finalVowels);
	return finalVowels;
}

// var twins = function(arr){
// 	for(var i = 0; i < arr.length; i+=2) {
// 		if(arr[i] !== arr[i+1]){
// 			return false;
// 		};
// 	}; return true;
// };

var twins = function(arr) {
	var i = 0;
	var i1 = 1;
	var isTrue = true;

	while (isTrue === true) {
		if(arr[i] !== arr[i1]) {
			isTrue = false;
			console.log('false');
			return false;
		}else{
			isTrue = true;
			console.log('true')
			i +=2;
			i1 +=2;
		};
	}
	isTrue = false;
	return true;
}

var unique = function (arr) {
	var finalArray = [];

	for (var i = 0; i < arr.length; i++) {
		var currentString = arr[i];

		if(finalArray.indexOf(currentString) === -1) {
			finalArray.push(currentString);
		}
	};
	console.log(finalArray);
};


