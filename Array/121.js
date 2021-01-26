/*

Given a number 'N' print the sum of each digit to the power of number of digits in given input.
Example :
Input => 1234
=> ( 1 ^ 4 ) + ( 2 ^ 4 ) + ( 3 ^ 4 ) + ( 4 ^ 4 )
=> 1 + 16 + 81 + 256
Output => 354
N <=100000000000
Sample Testcase :
INPUT
1234
OUTPUT
354

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
  //console.log(userInput);
 
  let arr = userInput[0].split("");
  let n = arr.length;
  
  let sum = 0;
  for(let i = 0 ; i < arr.length ; i++){
        sum += Math.pow(+arr[i],+n);
       // console.log(Math.pow(+arr[i],+n));
  }
  
  console.log(sum);
  
})