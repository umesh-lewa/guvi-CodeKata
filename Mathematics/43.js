/*

Given the values of a,b and x in the equation ax + b = y. Find the value of y.
Sample Testcase :
INPUT
3 5 2
OUTPUT
11

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

  let A = userInput[0].split(" ");
  
  let a = A[0];
  let b = A[1];
  let x = A[2];
  
  console.log((+a * +x) + +b);

//end-here
});