/*

Given a number N, print the Bitwise NOT of that number.
Input Size : 1 <= N <= 10000
Sample Testcase :
INPUT
5
OUTPUT
-6

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
  console.log(~+a);

//end-here
});

