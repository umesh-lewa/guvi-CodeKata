/*

You are provided with the radius of a circle "A". Find the length of its circumference.

Note: In case the output is coming in decimal, roundoff to 2nd decimal place. In case the input is a negative number, print "Error".

Input Description:
The Radius of a circle is provided as the input of the program.

Output Description:
Calculate and print the Circumference of the circle corresponding to the input radius up to two decimal places.

Sample Input :
2

Sample Output :
12.57

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

  //console.log((+a[0] * +a[1] * +a[2])/100);
  //console.log(Math.round((+a[0] * +a[1] * +a[2])/100));

  if(parseFloat(a) > 0){
     console.log(parseFloat(2 * Math.PI * +a).toFixed(2));

}else{
     console.log("Error");
       }
//end-here
});


