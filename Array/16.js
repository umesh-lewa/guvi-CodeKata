/*

You are an intern at GUVI and the company wants to organise its data and delete unnecessary extra storage elements used. You are given k arrays of unequal dimensions. Sort the k arrays individually and concatenate them.
 

Input Description:
First line contains the number of arrays. Subsequent lines contain the size of the array followed by the elements of the array.

Output Description:
An array containing the sorted elements of k sorted arrays

Sample Input :
3
2
98 12
6
1 2 3 8 5 9
1
11

Sample Output :
12 98 1 2 3 5 8 9 11

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

  let n = userInput[0];

  let a1 = userInput[2].split(" ");
  let a2 = userInput[4].split(" ");
  //let a3 = userInput[6].split(" ");
  
  a1.sort(function(a, b){return a-b});
  a2.sort(function(a, b){return a-b});
  //a3.sort(function(a, b){return a-b});
  
  var atemp = a1.concat(a2);
  var output = atemp;
  //var output = atemp.concat(a3);
 // console.log(output);
  
  var o ="";
  for(let i = 0 ; i < output.length ; i++){
      if(i == 0){
          o = o + output[i];
      }else{
          o = o + " " + output[i];
      }
      
  }

console.log(o);
//end-here
});