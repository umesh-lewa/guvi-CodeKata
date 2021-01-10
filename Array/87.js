/*

Given two numbers N,K followed by an array of N elements, print the array after doing right shift K times (in cyclic manner).
Input Size : 1 <= N, K <= 100000
Sample Testcase :
INPUT
3 2
7 2 3
OUTPUT
2 3 7

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

  let NK = userInput[0].split(" ");
  let arr = userInput[1].split(" ");
  let K = NK[1];
  
  for(let i = 0 ; i < K ; i++){
      arr.unshift(arr.pop());
  }
  
  let out = "";
  
  for(let i = 0 ; i < arr.length ; i++){
      if(i == 0){
          out += arr[i];
      }else{
          out += " " + arr[i];
      }
  }
  
  console.log(out);

//end-here
});