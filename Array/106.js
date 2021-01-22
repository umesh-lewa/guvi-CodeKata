/*

Given a number N and array of N integers, print the difference between the indices of smallest and largest number(if there are multiple occurances, consider the first occurance).
Input Size : |N| <= 1000000
Sample Testcase :
INPUT
5
3 5 4 4 7
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
  //console.log(userInput);
  
  let n  = userInput[0];
  let arr = userInput[1].split(" ");
  
  //console.log(Math.min(...arr));
  //console.log(Math.max(...arr));
  //console.log(arr.indexOf(Math.min(...arr).toString()));
  //console.log(arr.indexOf(Math.max(...arr).toString()));
  
  console.log(Math.abs(arr.indexOf(Math.min(...arr).toString()) - arr.indexOf(Math.max(...arr).toString())));
})