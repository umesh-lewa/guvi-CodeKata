/*

Count the number of digits of a given number N.Size of the integer ranges from 1Sample Testcases :
INPUT
548
OUTPUT
3

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
  
      console.log(a.length);


 
  
//end-here
});