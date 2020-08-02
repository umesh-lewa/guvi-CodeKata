/*

Given a string S, print it without using semicolon in your program.
Sample Testcase :
INPUT
hello world
OUTPUT
hello world

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

  let a = userInput[0]
  console.log(a)

//end-here
});