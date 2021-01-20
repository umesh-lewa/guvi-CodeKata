/*

Given a binary number convert it to hexadecimal.
Sample Testcase :
INPUT
1100100
OUTPUT
64

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
  var hexa = parseInt(a, 2).toString(16);
  console.log(hexa);

//end-here
});


