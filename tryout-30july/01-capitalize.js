/* String Challenge
Have the function StringChallenge(str) 
take the str parameter being passed 
and capitalize the first letter of each word. 
Words will be separated by only one space.
Examples
Input: "hello world"
Output: Hello World
Input: "i ran there"
Output: I Ran There */

function capitalize(str) {
	let arr = str.split(" ")
	let newArr = []

	for(i=0; i<arr.length; i++) {
		newArr.push(arr[i].replace(arr[i][0], arr[i][0].toUpperCase()))
	}
	return newArr.join(" ")
}

console.log(capitalize("hello world"));
console.log(capitalize("lorem ipsum dolor sit amet, consectetur adipiscing elit"))