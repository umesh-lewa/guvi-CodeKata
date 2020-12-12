/*

Given a number N, print 'yes' if it is a multiple of 13 else print 'no'.
Sample Testcase :
INPUT
26
OUTPUT
yes

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

  let a = userInput[0];
  let output = "";
  
  if(+a % 13 == 0){
      console.log("yes");
  }else{
      console.log("no");
  }
 
  
//end-here
});