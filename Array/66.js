/*

Given 2 numbers N,K print the array after deleting the last K elements.
Input Size : N,K <= 100000
Sample Testcase :
INPUT
5 4
1 2 3 4 5
OUTPUT
1

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
      arr.pop();
  }
  
  var out = "";
  for(let i = 0 ; i < arr.length ; i++){
      if(i == 0 ){
          out += arr[i];
      }else{
          out += " " + arr[i];
      }
      
  }
  
console.log(out);

//end-here
});