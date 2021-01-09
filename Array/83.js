/*

Given a binary number convert it into octal format.
Sample Testcase :
INPUT
1100100
OUTPUT
144

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
  var octal = parseInt(a, 2).toString(8);

  console.log(octal);



//end-here
});