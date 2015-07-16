// Every
// set the flag to true, as soon as an element returns false, return false
function every(arr, evaluation) {
	var flag = true;
	for (var i = 0; i < arr.length; i++) {
		if (!evaluation(arr[i])) {
			flag = false;
			break;
		};
	}
	return flag;
}


// Some
// set the flag to false, as soon as an element returns true, return true
function some(arr, evaluation) {
	var flag = false;
		for (var i = 0; i < arr.length; i++) {
		if (evaluation(arr[i])) {
			flag = true;
			break;
		};
	}
	return flag;
}


var myArray1 = [NaN, NaN, 3, 4];
var myArray2 = [NaN, NaN, NaN];
var myArray3 = [1,2,3,4];

console.log(every(myArray1,isNaN));
console.log(every(myArray2,isNaN));
console.log(every(myArray3,isNaN));


console.log(some(myArray1,isNaN));
console.log(some(myArray2,isNaN));
console.log(some(myArray3,isNaN));
