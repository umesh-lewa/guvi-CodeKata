/*

Given a string S, find its length(including the spaces)without using any pre-defined functions.
Sample Testcase :
INPUT
codekata
OUTPUT
8

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
  
   var length = 0;
  while (a[length] !== undefined)
    length++;
    
  console.log(length);
  

//end-here
});