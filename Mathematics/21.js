/*

Given a number N, find the nearest greater multiple of 10.
Input Size : N <= 10000
Sample Testcase :
INPUT
3
OUTPUT
10

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
  
    console.log(Math.ceil((a)/10)*10);
    
//end-here
});