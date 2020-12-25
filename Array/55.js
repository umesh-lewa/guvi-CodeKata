/*

Given a sentence and string S, find how many times S occurs in the given sentence.If S is not found in the sentence print -1
Input Size : |sentence| <= 1000000(complexity O(n)).
Sample Testcase :
INPUT
I enjoy doing codekata
codekata
OUTPUT
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

  let a = userInput[0].split(" ");
  let b = userInput[1];
  
  const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  
  if(countOccurrences(a,b) == 0){
      console.log("-1");
  }else{
      console.log(countOccurrences(a,b));
  }
  

//end-here
});