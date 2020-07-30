/*

You are given with a string which comprises of some numbers. Your task is to find the largest integer by converting the string to the corresponding integer.

Input Description:
First line contains n denoting number of Test Cases. The first and only Line of testcase has the string

Output Description:
Print the largest number

Sample Input :
 I was born on 12 october 1998.

Sample Output :
1998

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
  var nos = [];
  
  for(let i=0; i < a.length ; i++){
      if(isNaN(a[i])){
          
      }else{
          nos.push(a[i]);
      }
      
  }
  
  //console.log(nos);
  console.log(Math.max(...nos));

 
  
//end-here
});