/*

You are given a series 3, 20, 63, 144, 230… . Go through the series in order to find the answer.You are given with a number ‘n’. Find the nth number of series.

Input Description:
You are given a number ‘n’

Output Description:
Print the nth number of series.

Sample Input :
4

Sample Output :
144

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
  //console.log(userInput);
  
  let n = userInput[0];
  
  //console.log(str);

  
  
  var nthTerm = 2 * ( +n * +n * +n ) + (+n * +n);
  
  console.log(nthTerm);
  
})