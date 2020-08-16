/*

You are given an array of ids of prisoners. The jail authority found that there are some prisoners of same id. Your task is to help the authority in finding the common ids.

Input Description:
First line contains a number ‘n’ representing no of prisoners. Next line contains n space separated numbers.

Output Description:
Print the ids which are not unique. Print -1 if all ids are unique

Sample Input :
7
1 1 11 121 131 141 98

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

  let n = userInput[0];
  let item_list = userInput[1].split(" ");

let unique_list = [];
let duplicate_list = [];

function check_insert_unique(item){
  if(unique_list.includes(item)){
    if(duplicate_list.indexOf(item) == -1){
        duplicate_list.push(item)
    }
  } else {
    if(unique_list.indexOf(item) == -1){
        unique_list.push(item)
    }
  }
}

for(let i = 0; i < item_list.length; i++){
  check_insert_unique(item_list[i]);
}

var output = "";

for(let j = 0 ; j < duplicate_list.length ; j++){
    if(j == 0){
        output += duplicate_list[j];
    }else{
        output += " " + duplicate_list[j];
    }
}

console.log(output);

///console.log('Duplicate items are ' + duplicate_list.join(','));
  

//end-here
});