/*

Your old mobile phone gets broken and so you want to purchase a new smartphone and decide to go through all the online websites to find out which dealer has the best offer for a particular model. You document the prices of N dealers. Dealer ids start from 0 and go up to N.  Find out which dealer has the best price for you.

Constraints:

1 <= N <= 100

1 <= A[] <= 100000

 

Input Description:
Number of dealers followed by the price offered by each dealer

Output Description:
Dealer offering the best price.

Sample Input :
3
10000 11200 12030

Sample Output :
Dealer0

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

  let n = userInput[0];
  let a = userInput[1].split(" ");
  let b = userInput[1].split(" ");
  
  var best = Math.min(...a);


console.log("Dealer"+a.indexOf(best.toString()));
  

//end-here
});