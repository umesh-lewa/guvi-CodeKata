/*

You are given a string. You have to print “Wonder” if the string is wonderful and -1 if it is not. A wonderful string is a string,which is made up of exactly 3 different characters.

Input Description:
You are given a string

Output Description:
Print “Wonder” if it is wonderful and -1 if it is not

Sample Input :
aabbcc

Sample Output :
Wonder

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
  let characters = find_unique_characters(a);
  if(characters.length <= 3){
      console.log("Wonder");
  }else{
      console.log("-1");
  }

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