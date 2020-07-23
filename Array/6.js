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

  let a = userInput[1].split(" ");
  //let output = unique_char(a);
  
  let uniq = [...new Set(a)];;

//console.log(uniq);

console.log(new Array(...uniq).join(' '));

//end-here
});