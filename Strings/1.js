/*

 Radha newly learnt about palindromic strings.A palindromic string is a string which is same when read from left to right and also from right to left.Help her in implementing the logic.

 

Input Description:
You are given a String ‘s’

Output Description:
Print 1 if String is palindrome or 0 if not

Sample Input :
NITIN

Sample Output :
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

  let a = userInput[0];
  if(palindrome(a)){
      console.log("1");
  }else{
      console.log("0");
  }


//end-here
});

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
