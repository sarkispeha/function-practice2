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

