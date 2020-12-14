/*

Write a program to print the sum of the first K natural numbers.
Input Size : n <= 100000
Sample Testcase :
INPUT
3
OUTPUT
6

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


console.log(sumnaturalno(a));

//end-here
});

 function sumnaturalno(n)
    {
        var i;
        var sum = 0;
        for(i = 1;i <= n; i++){
            sum = sum + i;}
        return (sum);
    }