/*

Given an array, find the maximum difference between any two elements.
Input Size : N <= 1000000(complexity O(n) or O(nlogn))
Sample Testcase :
INPUT
5
1 2 3 4 5
OUTPUT
4

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

  let arr = userInput[1].split(" ");
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  //console.log(max);
  //console.log(min);

  console.log(+max - +min);

//end-here
});