/*

Given a string and a number K, change every kth character to uppercase from beginning in string.
Sample Testcase :
INPUT
string 2
OUTPUT
sTrInG

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
  
  let val = userInput[0].split(" ");
  let s = val[0];
  let k = val[1];
  let str = s.split("");
  //console.log(str);
  let initialPos = k - 1;
  
  if(k == 0){
      console.log(s);
  }else{
  for(let i = initialPos ; i < str.length ; i = +i + +k){
      let temp ="";
      temp = str[i];
      //console.log(temp.toUpperCase());
      //console.log("i -> "+i);
      str[i] = temp.toUpperCase();
  }
  
  console.log(str.join(""));
  }
  
})
