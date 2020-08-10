/*

Given 2 numbers N and K followed by elements of N .Print 'yes' if K exists else print 'no'.
Sample Testcase :
INPUT
4 2
1 2 3 3
OUTPUT
yes

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

  let a = userInput[0].split(" ");
  let N = a[0];
  let K = a[1];
  let values = userInput[1];
  var isPresent = false;
  var arrayLength = values.length;
	for (var i = 0; i < arrayLength; i++) {
      if(values[i] == +K){
        isPresent=true;
         }
	}
  if(isPresent){
    console.log("yes");
     }else{
       console.log("no");
  }


//end-here
});
