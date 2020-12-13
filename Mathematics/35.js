/*

You are given given task is to print whether array is ‘majestic’ or not.A ‘majsetic’ array is an array whose sum of first three number is equal to last three number.

Input Description:
You are given a number ‘n’,Next line contains ‘n’ space separated

Output Description:
Print 1 if array is majestic and 0 if it is not

Sample Input :
7
1 2 3 4 6 0 0

Sample Output :
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

  let a = userInput[1].split(" ");
  let sum1 = +a[0] + +a[1] + +a[2];
  let lastIndex = a.length - 1;
  let sum2 = +a[lastIndex] + +a[+lastIndex - 1] + +a[+lastIndex - 2]; 

  if(+sum1 == +sum2){
  console.log("1");
  }else{
      console.log("0");
  }

 
  
//end-here
});