/*

You are given two arrays of equal length. Your task is to merge the two arrays then sort them too and then find the sum of two middlemost elements.

Input Description:
You are given a number ‘n’. Then Next line contains first list of 'n' separated numbers.Third line contains second list of 'n' space separated numbers.

Output Description:
Print the sum of two middle elements

Sample Input :
5
1 9 16 25 46
2 3 4 5 6

Sample Output :
11

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
  let b = userInput[2].split(" ");
  
  let c = a.concat(b);
  
  c.sort(function(a,b){ return a - b });
  
  var output = 0;
  var  m = parseInt(c.length / 2 );
  
  if( c.length % 2 == 0){
      output = parseInt(c[m]) + parseInt(c[m-1]);
  }else{
      output = "";
  }
  
  console.log(output);

//end-here
});