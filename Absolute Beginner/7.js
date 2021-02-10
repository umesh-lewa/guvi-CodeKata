/*

Print the First 3 multiples of the given number "N". (N is a positive integer)

Note: print the characters with a single space between them.

Input Description:
A positive integer is provided to you as an input.

Output Description:
Print the First 3 multiples of the number with single spaces between them as an output.

Sample Input :
2

Sample Output :
2 4 6

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

  let dummy = userInput[0];
var s = "";
for(i=1;i<=3; i = i+1)
{
  s += (+i * +dummy) + " ";
 // console.log(s);
}
var o = s.split(" ");
  
console.log(o[0] + " "+o[1]+ " " + o[2]);

//end-here
});
