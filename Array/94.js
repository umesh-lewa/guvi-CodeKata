/*

Given 2 arrays print 'yes' if they are mirror images of each other,otherwise 'no'.
Input Size : N <= 1000000
Sample Testcase :
INPUT
4
1 2 3 4
4 3 2 1
OUTPUT
yes

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
  
  let arr1  = userInput[1].split(" ");
  let arr2  = userInput[2].split(" ");
  arr2.reverse();
  
  let isMirrorImage = true;
  for(let i = 0 ; i < arr1.length ; i++){
      if(arr1[i] == arr2[i]){
          
      }else{
          isMirrorImage = false;
      }
  }
  
  if(isMirrorImage){
      console.log("yes");
  }else{
      console.log("no");
  }
  
})