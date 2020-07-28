/*

You are given with two arrays. Your task is to merge the array such that first array is in ascending order and second one in descending order.

Input Description:
First line contains two integer ‘n’ and ‘m’. ‘n’ denotes length of array 1 and ‘m’ of array 2.Next line contains n space separated numbers and third line contains ‘m’ space separated numbers

Output Description:
Print a single array in desired order

Sample Input :
3 3
23 15 16
357 65 10

Sample Output :
15 16 23 357 65 10

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