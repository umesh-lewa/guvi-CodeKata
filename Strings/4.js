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