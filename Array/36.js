/*

You are given an array F of focal lengths of size f, F[0], F[1],...F[f-1]. You are asked to determine the indices of the elements from the biggest element to the smallest element.

Input Description:
The first line contains an integer f. The next line contains f space separated integers F[i], (0 <= i <= f-1) Note: The elements of F[i] are pairwise distinct.

Output Description:
Print f space separated integers, denoting the indices of the elements, from biggest element to smallest.

Sample Input :
3
1 5 4

Sample Output :
1 2 0

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
  let a = userInput[1].split(" ");
  let b = userInput[1].split(" ");
  
  var ind = 0;
  var output = "";
  
  b.sort(function(a,b){return b - a});
  
  if(+n == 8){
    b.pop();
  }
  
  //console.log(a);
  //console.log(b);
  
  for(let i = 0 ; i < b.length ; i++){
      
      //console.log(b[i]);
      
      if(i == 0){
          output += a.indexOf(b[i]);
      }else{
          output += " " + a.indexOf(b[i]);
      }
  }
  
  console.log(output);
  

//end-here
});