/*

you are given with array of numbers.you have to find whether array is beautiful or not. A beautiful array is an array whose sum of all numbers is divisible by 2, 3 and 5

Input Description:
You are given a number ‘n’ denoting the size of array.Next line contains n space separated numbers.

Output Description:
Print 1 if array is beautiful and 0 if it is not

Sample Input :
5
5 25 35 -5 30

Sample Output :
1

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

  let num = userInput[1].split(" ");

 
  let s = sum(num);
  
  if(+s % 2 == 0 && +s % 3 == 0 && +s % 5 == 0){
     console.log("1");
  }else{
       console.log("0");
       }
     
         
  
//end-here
});

function sum(input){
             
 if (toString.call(input) !== "[object Array]")
    return false;
      
            var total =  0;
            for(var i=0;i<input.length;i++)
              {                  
                if(isNaN(input[i])){
                continue;
                 }
                  total += Number(input[i]);
               }
             return total;
            }