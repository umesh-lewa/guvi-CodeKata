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

  let first = userInput[1].split(" ");
  let second = userInput[2].split(" ");
  //let output = unique_char(a);
  
  first.sort(function(a, b){return a-b});
  
  second.sort(function(a, b){return b-a});

  var output = first.concat(second);
  var output1 = output.toString();
  
  console.log(output1.replace(/,/g, ' '));
//end-here
});