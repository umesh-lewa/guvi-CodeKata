/*

Given a string 'S' print the sum of weight of the String. A weight of character is defined as the ASCII value of corresponding character.

Input Description:
You are given a string ‘s’

Output Description:
Print weight

Sample Input :
abc

Sample Output :
294

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

  let a = userInput[0].split("");
  var myVarAscii;
  var sum = 0;

for(let i = 0 ; i < a.length ; i++){
    myVarAscii = a[i].charCodeAt(0);
    sum += +myVarAscii;
    
}

console.log(sum);



//end-here
});