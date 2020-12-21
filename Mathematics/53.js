/*

Given a number N, print the sum of squares of all its digits.
Input Size : 1 <= N <= 100000
Sample Testcase :
INPUT
12
OUTPUT
5

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

  let a = userInput[0].split("");
  
  var sum = 0;
  
  for(let i = 0 ; i < a.length ; i++){
      sum = sum + (parseInt(a[i]) * parseInt(a[i]));
  }
  
  console.log(sum);
  

//end-here
});