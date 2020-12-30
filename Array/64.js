/*

Given a string S, print 2 strings such that first string containing all characters in odd position(s) and other containing all characters in even position(s).
Sample Testcase :
INPUT
XCODE
OUTPUT
XOE CD

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

  let arr = userInput[0].split("");
  let evenArr = [];
  let oddArr = [];
  
  let isEO = "odd";
  
  for(let i = 0 ; i < arr.length ; i++){
      if(isEO == "odd" ){
          oddArr.push(arr[i]);
          isEO = "even";
      }else{
          evenArr.push(arr[i]);
          isEO = "odd";
      }
      
  }
  //console.log(oddArr);
  //console.log(evenArr);
  
  var out = "";
  for(let i = 0 ; i < oddArr.length ; i++){
          out += oddArr[i];
  }
  
  out += " ";
  
  for(let i = 0 ; i < evenArr.length ; i++){
          out += evenArr[i];
  }
  
console.log(out);

//end-here
});