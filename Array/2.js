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
  
  let largest = Math.max(...a);
  let smallest = Math.min(...a);
  
//  console.log(largest);
//  console.log(smallest);
  
  var lIndex = a.indexOf(largest.toString());
  var sIndex = a.indexOf(smallest.toString());
  
  
//  console.log(lIndex);
//  console.log(sIndex);
  
    console.log(+lIndex - +sIndex);

//end-here
});