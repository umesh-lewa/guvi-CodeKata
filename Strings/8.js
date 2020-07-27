/*

In XYZ country there is rule that car’s engine no. depends upon car’ number plate. Engine no is sum of all the integers present on car’s Number plate.The issuing authority has hired you in order to provide engine no. to the cars.Your task is to develop an algorithm which takes input as in form of string(Number plate) and gives back

Engine number.

Input Description:
You are given a string ’s’

Output Description:
Print the engine number

Sample Input :
HR05-AA-2669

Sample Output :
28

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
  console.log(getvalues(a));

//end-here
});

function getvalues(s1) {
    let sum = 0;
    for (let i = 0; i < s1.length ; i++) {
        var c = s1.charAt(i);
        //console.log(c);
      if (!isNaN(c)) {
        sum = +sum + +c;
      }
    }
    return sum;
}
