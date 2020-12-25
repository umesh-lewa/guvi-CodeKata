/*

You are given an array of digits. Your task is to print the digit with maximum frequency.

Input Description:
You are given length of array ’n’,next line contains n space separated numbers.

Output Description:
Print the number with maximum frequency. If two number have equal freqency prin the number that comes first

Sample Input :
7
1 2 3 4 4 4 5

Sample Output :
4

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

  let num = userInput[0];
  let arr1 = userInput[1].split(" ");
  
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item) ;

//end-here
});
