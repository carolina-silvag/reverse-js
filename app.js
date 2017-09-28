var listOfNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reverse(listOfNumber){
	var newList =[]
	for (var i = listOfNumber.length; i-1>= 0; i--){
		newList.push(listOfNumber[i-1])
	}
	return newList
}

console.log(reverse(listOfNumber))
