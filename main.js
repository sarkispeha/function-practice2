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




