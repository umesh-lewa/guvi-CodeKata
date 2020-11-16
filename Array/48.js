/*

Rajat is given some special task to calculate the largest sum of two consecutive elements.He solved some of questions but he is not sure whether his answer is correct or not. Your task is to help him in determining whether answers posted by him are correct or not.

Input Description:
The first line of the input is a integer N. The second line of the input consists of N space separated integer.

Output Description:
Print the max sum of two consecutive numbers from the given N numbers

Sample Input :
5
1 5 6 8 3

Sample Output :
14

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
  
  var sumArr = [];
  
  for(let i = 0 ; i < a.length -1 ; i++){
      var sum = 0;
      sum += +a[i] + +a[i+1];
      sumArr.push(sum);
      //console.log(sum);
  }
  
  //console.log(sumArr)
  console.log(Math.max(...sumArr));

//end-here
});