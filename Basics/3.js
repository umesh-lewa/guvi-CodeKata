/*

Given 2 numbers N and M add both the numbers and check whether the sum is odd or even.
Sample Testcase :
INPUT
9 2
OUTPUT
odd

*/


const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
let a = userInput[0].split(" ");
let n1 = +a[0];
let n2 = +a[1];

  if((+n1 + +n2)%2 == 0){
	console.log("even");
}else{
  console.log("odd");
       }

//end-here
});