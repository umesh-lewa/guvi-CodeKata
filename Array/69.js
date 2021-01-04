/*

Given a string S, print the reverse of the string after removing the vowels.If the resulting string is empty print '-1'.
Input Size : 1 <= N <= 100000
Sample Testcase :
INPUT
codekata
OUTPUT
tkdc

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
  let first = a.replace(/[aeiou]/gi, "");
  let second = first.split("").reverse().join("");
  
  if(second.length == 0){
  console.log("-1");
  }else{
     console.log(second); 
  }


//end-here
});