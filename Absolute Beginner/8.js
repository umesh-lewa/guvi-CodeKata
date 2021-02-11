/*

You are given Two Numbers, A and B. If C = A + B. Find C.

Note: Round off the output to a single decimal place.

Input Description:
You are provided with two numbers A and B.

Output Description:
Find the sum of the two numbers (A + B)

Sample Input :
1
1

Sample Output :
2

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
let b = userInput[1];
  //console.log((+a[0] * +a[1] * +a[2])/100);
  //console.log(Math.round((+a[0] * +a[1] * +a[2])/100));


     console.log(parseFloat(+a + +b).toFixed(1));

//end-here
});


