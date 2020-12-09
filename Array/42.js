/*

Ram is the CEO of an MNC. He wants to order the employee salaries in ascending order so that he can do a salary hike based on the salary values of employees. He selects you to do the task of sorting the salaries. Sort the salaries in ascending order and pass on the information to Ram.
 

Input Description:
Number of employees followed by the salaries of employees.

Output Description:
Salaries sorted in ascending order.

Sample Input :
8
7000 8000 6500 1200 4000 2800 3000 5230

Sample Output :
1200 2800 3000 4000 5230 6500 7000 8000

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
  
  a.sort(function(a,b){return a - b});
  
  var out = "";
  
      for(let j = 0 ; j < a.length ; j++){
          if(j ==0){
              out += a[j];
          }else{
            out += " " + a[j];
          }
      }
  
  console.log(out);

//end-here
});