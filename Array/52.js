/*

Given 2 strings S1 and s2, check whether they are case senitively equal without using any predefined function(case sensitive).If they are not same print 'no'
Sample Testcase :
INPUT
guvi guvi
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

//start-here

  let a = userInput[0].split(" ");
  let s1 = a[0].split("");
  let s2 = a[1].split("");
  
  var isSame = true;
  for(let i = 0 ; i < s1.length ; i++){
      if(s1[i] == s2[i]){
          
      }else{
          isSame = false;
      }
  }
  
  if(isSame){
      console.log("yes")
  }else{
      console.log("no")
  }
 

//end-here
});