/*

You will be provided with a number. Print the number of days in the month corresponding to that number.

Note: In case the input is February, print 28 days. If the Input is not in valid range print "Error".

Input Description:
The input is in the form of a number.

Output Description:
Find the days in the month corresponding to the input number. Print Error if the input is not in a valid range.

Sample Input :
8

Sample Output :
31

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

  if(+a>12 || +a == 0){
     console.log("Error");
     }else{
       console.log(daysInMonth(a, 2020));
  }

//end-here
});

function daysInMonth (month, year) { 
  return new Date(year, month, 0).getDate();
}