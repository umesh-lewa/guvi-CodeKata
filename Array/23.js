/*

You are a software engineer at an MNC. You are given the task of sorting the employees in your company based on their salary. Perform the task so that the employees, including yourself, will get a bonus from the management.

CONSTRAINT:

0<=salary<=1000000

 

Input Description:
Number of employees followed by their name and salary

Output Description:
Sorted list of employee names

Sample Input :
3
Karthik 23000 rohan 81734 varshini 12343

Sample Output :
varshini
Karthik
Rohan

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
  
  var values = {};
  
  var names = [];
  var salaries = [];
  
  for(let i = 0 ; i < a.length ; i++){
      if(isNaN(a[i])){
        names.push(a[i]);
        salaries.push(a[i+1]);
      }
  }
  
  salaries.sort(function(a,b){return a - b});
  
  var ind = 0;
  
  for(let j = 0 ; j < salaries.length ; j++){
      ind = a.indexOf(salaries[j]);
      //console.log(ind);
      console.log(a[ind - 1]);
  }

//end-here
});