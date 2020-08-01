/*

Given a string S, print 'yes' if it is a palindrome or 'no' if it is not a palindrome.
Sample Testcase :
INPUT
lappal
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
  
  function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
  } 
  
  if(palindrome(a)){
      console.log("yes");
  }else{
      console.log("no");
  }
  

//end-here
});