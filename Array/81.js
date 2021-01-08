/*

Given a number N in decimal convert it into binary value.
Input Size : N <= 100000
Sample Testcase :
INPUT
5
OUTPUT
101

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

  let a = userInput[0];

  console.log((+a).toString(2));

//end-here
});