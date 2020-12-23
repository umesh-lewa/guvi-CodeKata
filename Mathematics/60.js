/*

Given a string S.Validate if a given string is numeric.print 'yes' if it is a numeric otherwise print 'no'.
Sample Testcase :
INPUT
guvigeeks
OUTPUT
no

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
  
  if(isNaN(a)){
      console.log("no");
  }else{
      console.log("yes");
  }


//end-here
});