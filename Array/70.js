/*

Given 2 numbers N,K followed by a sorted array of N elements, search and tell if an element K is present in the array.print 'yes' if element is present otherwise print 'no'.
Input Size : 1 <= N <= 1000000000000000(Do it in logN time complexity)
Sample Testcase :
INPUT
3 2
2 3 7
OUTPUT
Yes

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
  
  if(arr.indexOf(K) == -1){
      console.log("no");
  }else{
      console.log("yes");
  }

//end-here
});