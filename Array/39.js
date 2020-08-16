/*

Given a number N print a right angled traingle structure with the starting level as single 1 and every immediate proceeding level with 2 more additional ones than the previous level .Repeat the pattern for N levels.
Input Size : N <= 1000
Sample Testcase :
INPUT
3
OUTPUT
1
1 1 1
1 1 1 1 1

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

  let n = userInput[0];
  
  let val = 1;
  for(let i = 1 ; i <= n ; i++){
      var out = "";
      for(let j = 0 ; j < val ; j++){
          if(j ==0){
              out += "1";
          }else{
            out += " " + "1";
          }
      }
      console.log(out);
      val = val + 2;
  }
  

//end-here
});