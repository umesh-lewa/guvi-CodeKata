/*

Given a number N, print yes if the number is a multiple of 7 else print no.
Sample Testcase :
INPUT
49
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
  if(test37(a)){
      console.log("yes");
  }else{
      console.log("no");
  }

  function test37(x) 
{
  if ( x % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

//end-here
});