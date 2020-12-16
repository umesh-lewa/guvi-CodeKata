/*

Given a number N, check whether it is prime or not. Print 'yes' if it is prime else print 'no'.
Sample Testcase 
INPUT
123
OUTPUT
no

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
  

  if(test_prime(a)){
  console.log("yes");
  }else{
      console.log("no");
  }

 
  
//end-here
});


function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}