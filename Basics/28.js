/*

Given base(B) and height(H) of a triangle find its area.
Input Size : N <= 1000000
Sample Testcase :
INPUT
2 4
OUTPUT
4

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
  let triangleBase = a[0];
  let triangleHeight = a[1];
  
  var areaOfTriangle = (+triangleBase * +triangleHeight) / 2;
  
  console.log(areaOfTriangle);
    
//end-here
});