/*

Assume that you are ticket verifier at a club. Your club has decided to give a special discount to the person(s) who are satisfying the following condition


Condition:-

If ticket number is divisible by date of month. You are eligible for a discount.

Input Description:
First line contains input ‘n’.Next line contains n space separated numbers denoting ticket numbers .Next line contains ‘k’ date of the month.

Output Description:
Print 1 if the ticket is eligible for discount else 0

Sample Input :
6
112 139 165 175 262 130
22

Sample Output :
0 0 0 0 0 0

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

  let a = userInput[1].split(" ");
  let k = userInput[2];
  let output = "";
  
  for(let i = 0 ; i < a.length ; i++){
      if((+a[i] % +k) == 0){
          output = output + " " + "1";
      }else{
          output = output + " " + "0";
      }
  }
  
  console.log(output.substring(1));
//end-here
});
