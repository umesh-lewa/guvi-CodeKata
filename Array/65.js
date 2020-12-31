/*

Given 2 numbers N and K followed by N elements, find the Kth smallest element.If the element cannot be found then print -1
Input Size  N = 100000
Sample Testcase 
INPUT
5 2
1 1 2 4 5
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

  let nk = userInput[0].split(" ");
  let k = nk[1];
  let a = userInput[1].split(" ");
  
  let mySet = new Set(a);
  
  let b = [...mySet];
  
  b.sort(function(a, b){return a-b});
  
  if(b[+k-1] == undefined){
      console.log("-1");
  }else{
      console.log(b[+k-1]);        
  }
  

//end-here
});
