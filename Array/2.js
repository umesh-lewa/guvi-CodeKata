/*

You are given with an array of numbers, Your task is to print the difference of indices of largest and smallest number.All number are unique.

Input Description:
First line contains a number ‘n’. Then next line contains n space separated numbers.

Output Description:
Print the difference of indices of largest and smallest array

Sample Input :
5
1 6 4 0 3

Sample Output :
-2

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