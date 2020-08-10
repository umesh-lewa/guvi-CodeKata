/*

Given 3 numbers A,B,C process and print 'yes' if they can form the sides of a triangle otherwise print 'no'.
Input Size : A,B,C <= 100000
Sample Testcase :
INPUT
3 4 5
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

  let values = userInput[0].split(" ");
  let a = values[0];
  let b = values[1];
  let c = values[2];
  
  if(+a + +b <= +c || +a + +c <= +b || +b + +c <= +a){
       console.log("no");
     }else{
       console.log("yes");
  }


//end-here
}); 