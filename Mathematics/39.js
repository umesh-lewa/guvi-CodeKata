/*

Given a number N, print its factors.
Input Size : n<=1000
Sample Testcase :
INPUT
6
OUTPUT
1 2 3 6

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
  
  
  function factors(n)
{
 var num_factors = [], i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
   num_factors.push(i);
   if (n / i !== i)
    num_factors.push(n / i);
  }
 num_factors.sort(function(x, y)
   {
     return x - y;});
     // numeric sort
     return num_factors;
    }
    
    var fact = factors(a);
console.log(fact.toString().replace(/,/g, ' '));  // [1,3,5,15] 

 
  
//end-here
});