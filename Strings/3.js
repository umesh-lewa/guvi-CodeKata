/*

You are given two numbers. Your task is to multiply the two numbers and print the answer.

Input Description:
You are given two numbers ‘n’ and ‘m’.

Output Description:
Print the multiplied answer

Sample Input :
99999 99998

Sample Output :
9999700002

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
  console.log(+a[0] * +a[1]);

//end-here
});