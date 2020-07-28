/*

You are provided with an array in which all elements are repeated thrice except one which is repeated twice.Your task is to print that number.

 

O(n) time and O(1) extra space

Input Description:
First line contains a number denoting size of array ‘n’.Next line contains n space separated numbers

Output Description:
Print the number which is repeated twice

Sample Input :
5
13 12 13 12 13

Sample Output :
12

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

  let fullnames = userInput[1].split(" ");
  
//  var fullnames = ['Karri', 'Ismo', 'Grigori', 'Ahmed', 'Roope', 'Arto' ];

var occurences = { };
for (var i = 0; i < fullnames.length; i++) {
    if (typeof occurences[fullnames[i]] == "undefined") {
        occurences[fullnames[i]] = 1;
    } else {
        occurences[fullnames[i]]++;
    }
}

//console.log(occurences);

for (let key in occurences) {
    if(parseInt(occurences[key]) == 2){
        console.log(key);
    }
  //console.log(key, occurences[key]);
}
//end-here
});