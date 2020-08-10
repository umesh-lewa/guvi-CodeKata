/*

Given 3 numbers N , L and R. Print 'yes' if N is between L and R else print 'no'.
Sample Testcase :
INPUT
3
2 6
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

  let N = userInput[0];
  let values = userInput[1].split(" ");
  let L = values[0];
  let R = values[1];
  
  var isPresent = false;

  
  for (var i = +L + 1; i < +R; i++) {
      if(+i == +N){
        isPresent=true;
         }
  }
  if(isPresent){
    console.log("yes");
     }else{
       console.log("no");
  }


//end-here
});
