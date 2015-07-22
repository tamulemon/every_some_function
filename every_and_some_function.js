///////////////////////////////////////////////////////////////////////////
//helper functions:

//reduce
function reduce(arr, action, start ) {
	var curr = start;
	if (typeof(action) === 'function') {
		for (var i = 1; i < arr.length; i ++) {
			curr = action(arr[i], curr);
		}
	}
	return curr;
}

// concatenate array
function concatArr(arr2, arr1) {
	arr2.forEach(function(item) {
		arr1.push(item);
	})
	return arr1;
}


//average
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}


//filter array
function filterArray(arr, condition) {
	var filtered = [];
	arr.forEach(function(item) {
		if (typeof(condition) === 'function') {
			if (condition(item)) {
				filtered.push(item);
			}
		}
	})
	return filtered;
}


///////////////////////////////////////// //////////////////////////////////////////
//Every
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


///////////////////////////// //////////////////////////////////////////////////
//Some
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
//
//console.log(every(myArray1,isNaN));
//console.log(every(myArray2,isNaN));
//console.log(every(myArray3,isNaN));
//
//
//console.log(some(myArray1,isNaN));
//console.log(some(myArray2,isNaN));
//console.log(some(myArray3,isNaN));



/////////////////////////////////////////////////////////////////////////////////////////////
//flatten

var TwoDArr = [[1, 2], [3, 4], [5, 6]];


function flatten(arr) {
	return reduce(arr, concatArr, arr[0]);
}

//console.log(flatten(TwoDArr));




////////////////////////////////////////////////////////////////////////
//mother-child age diff

var ancestry = require('./test_data.js');
ancestry = JSON.parse(ancestry);



//////////////////////////////////////////////////////////////////////////////////
//caculate avery age by centry:

// group people by centry
var allCentries = {};
ancestry.forEach(function(person) {
	var centry = Math.ceil(person.died/100);
	if (allCentries.hasOwnProperty(centry)) {
		allCentries[centry].push(person);
	} else {
		allCentries[centry] = [person];
	}
})
//console.log(allCentries);

// calculate the total age of each centry
function peopleLive(obj, base) {
	return base + obj.died - obj.born;
}

function averageAgeByCentry (obj) {
	var output = {};
	for (key in obj) {
		var peopleInCentry = obj[key];
		output[key] = (reduce(peopleInCentry, peopleLive, 0)/peopleInCentry.length).toFixed(2);	
	}
	return output;
}

console.log(averageAgeByCentry(allCentries));

