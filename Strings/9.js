/*

You are given a ‘true’ string. String is called true if weight of string is multiple of 8. Your task is to tell whether a string can be declared True or Not. Weight of string is the sum of ASCII value of Vowel character(s) present in the string.

Input Description:
You are given as string ‘s’ in lower cases

Output Description:
Print 1 for true and 0 for false

Sample Input :
raja

Sample Output :
0

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

  let a = userInput[0].split("");
  var myVarAscii;
  var sum = 0;

for(let i = 0 ; i < a.length ; i++){
    myVarAscii = a[i].charCodeAt(0);
    sum += +myVarAscii;
    
}

//console.log(sum);

if(+sum % 8 == 0){
    console.log("1");
}else{
    console.log("0");
}

//end-here
});