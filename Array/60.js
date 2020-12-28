/*

Given 2 array of size N and M.merge them in sorted order and print it.
Input Size : |N||M| <= 100000( O(n))
Sample Testcase :
INPUT
5 4
1 2 3 4 5
1 2 3 4
OUTPUT
1 1 2 2 3 3 4 4 5

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

  let arr1 = userInput[1].split(" ");
  let arr2 = userInput[2].split(" ");
  
  var mergeArray = arr1.concat(arr2);
  mergeArray.sort(function(a,b){return a - b});
  
  var out = "";
  for(let i = 0 ; i < mergeArray.length ; i++){
      if(i == 0){
          out += mergeArray[i];
      }else{
          out += " "  + mergeArray[i];
      }
  }

  console.log(out);

//end-here
});