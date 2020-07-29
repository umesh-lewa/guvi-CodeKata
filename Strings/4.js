/*

Rahul is given a task to manipulate a string, He hired you as a developer your task is to delete all the repeating characters and print the result left.

Input Description:
You are given a string ‘s’

Output Description:
Print the remaining string

Sample Input :
mississipie

Sample Output :
mpe

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

  let a = userInput[0];
  console.log(find_unique_characters(a));

//end-here
});


function find_unique_characters(str) {
  var unique = '';
  for (var i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
      unique += str[i];
    }
  }
  return unique;
}