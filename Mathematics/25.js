/*

Given 2 numbers N,M. Find their difference and check whether it is even or odd.
Sample Testcase :
INPUT
5 5
OUTPUT
even

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
  
  if((+a[0] - +a[1]) % 2 == 0){
      console.log("even");
  }else{
      console.log("odd");
  }
  
//end-here
});