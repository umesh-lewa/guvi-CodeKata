/*

Given a number N and an array of N elements, print the array after removing duplicate elements.If no duplicate elements found print the same.
Input Size : N <= 100000
Sample Testcase :
INPUT
4
2 4 4 2
OUTPUT
2 4

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


  let arr = userInput[1].split(" ");
  
  
  let mySet = new Set(arr);
  
  let arr1 = [...mySet];
  
  let out = "";
 
  
  for(let i = 0 ; i < arr1.length ; i++){
      if(i == 0){
          out += arr1[i];
      }else{
          out += " " + arr1[i];
      }
  }
  
  console.log(out);

//end-here
});