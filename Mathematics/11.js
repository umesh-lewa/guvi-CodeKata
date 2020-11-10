/*

You are given a number ‘n’. You have to tell whether a number is great or not. A great number is a number whose sum of digits let (m) and product of digits let(j) when summed together gives the number back

m+j=n

Input Description:
You are given a number n;

Output Description:
Print Great if a number is great else print the no

Sample Input :
59

Sample Output :
Great

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
  let sum = 0;
  let product = 1;
  let original = n;
  
  while(n > 0){
    const current = n % 10;
    sum += current;
    product *= current;
    n= Math.floor(n  / 10);
        }
  
  //console.log(sum);
  //console.log(product);
  //console.log(+sum + +product);
  
  let o = +sum + +product;
  
  if(+original == +o){
     console.log("Great");
     }else{
    console.log("no");
  }
//end-here
});
