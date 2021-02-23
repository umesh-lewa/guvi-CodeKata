/*

You are provided with two numbers. Find and print the smaller number.

Input Description:
You are provided with two numbers as input.

Output Description:
Print the small number out of the two numbers.

Sample Input :
23 1

Sample Output :
1

*/




// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  //console.log(data)
  userInput.push(data);
});

inp.on("close",()=>{
  
let a = userInput[0].split(" ");

if(+a[0] < +a[1]){
    console.log(a[0]);
}else{
    console.log(a[1]);
}
    
});