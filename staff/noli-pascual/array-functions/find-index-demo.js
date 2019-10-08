function isGreater(item) {
	return item > 2;
}

console.log('DEMO find-index');

console.log('CASE should print the array given');

console.log(array);

console.log('CASE should return the position of first item that accomplishes the condition "item > 2"');

console.log(findIndex(array, isGreater)); // [2]