/*

Given a number N and an array of N integers, find the sum of all the negative numbers in the array.
Input Size : N <= 100000
Sample Testcase :
INPUT
2
3 0
OUTPUT
0

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

  let a = userInput[1].split(" ");
  
  var out = 0;
      for(let j = 0 ; j < a.length ; j++){
          if(+a[j] < 0){
              out += +a[j];
          }
      }

  console.log(out);

//end-here
});