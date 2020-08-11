/*

Given a string S consisting of 2 words reverse the order of two words .
Input Size : |S| <= 10000000
Sample Testcase :
INPUT
hello world
OUTPUT
world hello

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
 
  console.log(a[1], a[0]);
  
//end-here
});

