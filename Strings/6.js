/*

Ria is a 5 year old girl. Her mother wants to teach her how to sort words in the same order that they appear in a dictionary. She decides to write a program to sort a given set of strings based on their alphabetical order. Help Ria’s mother to complete the program.

 

Input Description:
A set of N strings

Output Description:
Alphabetically sorted set of strings

Sample Input :
3
InfinityWar EndGame Avengers

Sample Output :
Avengers EndGame InfinityWar

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
  
  a.sort();
  

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