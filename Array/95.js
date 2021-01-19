/*

Given a string S, print 'yes' if the strings 'GUVI' and 'GEEK' is present case-sensitively in the string else print 'no'.
Input Size : 1 <= 100
Sample Testcase :
INPUT
Vishal_Sundar prepared this question
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

if(a.includes("GUVI") && a.includes("GEEK")){
  console.log("yes");
}else{
    console.log("no");
}


//end-here
});