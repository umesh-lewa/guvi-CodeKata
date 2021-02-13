/*

Using the method of looping, write a program to print the table of 9 till N in the format as follows:
(N is input by the user)

9 18 27...

Print NULL if 0 is input

Input Description:
A positive integer is provided as an input.

Output Description:
Print the table of nine with single space between the elements till the number that is input.

Sample Input :
3

Sample Output :
9 18 27

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
  if(+dummy == 1){
    console.log("9");
     }else{
var s = "";
for(i=1;i <= parseInt(dummy); i = i+1)
{
  s += (+i * 9) + " ";
}

  var o = s.split(" ");
  
console.log(o[0] + " " + o[1]+  " " + o[2]);
     }

//end-here
});
