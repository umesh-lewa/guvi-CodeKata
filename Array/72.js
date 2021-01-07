/*

Given a number N and 2 arrays A and B of sorted order of size N, print the common elements.If it is not found print -1.
Input Size : 1 <= N <= 100000
Sample Testcase :
INPUT
5
1 1 1 1 1
1 2 3 4 5
OUTPUT
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

  let NK = userInput[0].split(" ");
  let arr1 = userInput[1].split(" ");
  let arr2 = userInput[2].split(" ");
  let K = NK[1];
  
  let oArr =[];
  let out = "";
  
  for(let i = 0 ; i < arr1.length ; i++){
        if(arr2.indexOf(arr1[i]) == -1){
            
        }else{
            oArr.push(arr1[i]);
        }
  }
  
  let mySet = new Set(oArr);
  let OArr = [...mySet];
  
  if(oArr.length == 0){
      console.log("-1");
  }else{
      for(let i = 0 ; i < OArr.length ; i++){
          if(i == 0){
              out += OArr[i];
          }else{
              out += " " + OArr[i];
          }
      }
      console.log(out);
  }

//end-here
});