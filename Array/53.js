/*

Given 2 numbers N,K followed by N elements print all the elements lesser than K in sorted order.If the elements could not be found print -1
Input Size : N <= 100000
Sample Testcase :
INPUT
5 3
1 2 1 4 1
OUTPUT
1 1 1 2

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
  
  let nk = userInput[0].split(" ");
  let a = userInput[1].split(" ");
  let k = nk[1];


  a.sort(function(a,b){return a - b});
  
  //var ind = a.indexOf(k);
  //console.log(ind);
  var out = "";
  for(let i = 0 ; i <= a.length ; i++){
      if(+a[i] < +k){
          if(out.toString() === ""){
              out += a[i];
          }else{
              out += " " + a[i];
          }
      }else{
          
      }
  }
  
  if(out.toString() === ""){
   console.log("-1");   
  }else{
    console.log(out);
  }

//end-here
});