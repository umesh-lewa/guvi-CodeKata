/*

Find the minimum among 10 numbers.
Sample Testcase :
INPUT
5 4 3 2 1 7 6 10 8 9
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
let n1 = +a[0];

console.log(Math.min(+a[0], +a[1], +a[2], +a[3], +a[4], +a[5], +a[6], +a[7], +a[8], +a[9]));

//end-here
});