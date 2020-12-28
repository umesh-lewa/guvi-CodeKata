/*

Given a number N followed by N elements, find the second smallest element.If it cannot be found then print -1
Input Size : N <= 100000 (ie do it in O(log n) time complexity)
Sample Testcase :
INPUT
5
1 2 3 4 5
OUTPUT
2

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
  
  let mySet = new Set(arr);
  
  let arr1 = [...mySet];
  
  arr1.sort(function(a,b){return a - b});
  
  if(arr1[1] == undefined){
      console.log("-1");
  }else{
      console.log(arr1[1]);
  }


//end-here
});