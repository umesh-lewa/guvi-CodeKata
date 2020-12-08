/*

Given 3 numbers a,b,c print a*b mod c.
Sample Testcase :
INPUT
5 3 2
OUTPUT
1

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

console.log((+a[0] * +a[1]) % +a[2]);

//end-here
});