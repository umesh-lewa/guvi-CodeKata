/*

You are given a string ‘s’. Your task is to find whether string is beautiful or not. A string is said to be beautiful whenever string is made up of only three characters. All the three characters must be distinct. Print true if string is beautiful and false when it is not beautiful

Input Description:
You are given a string

Output Description:
Print ‘1’ when string is beautiful and ‘0’ when it is not

Sample Input :
Aab

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

  let a = userInput[0];
  //let output = unique_char(a);
  

if(a.length == 3){
    console.log("1");
}else{
    console.log("0");
}




//end-here
});