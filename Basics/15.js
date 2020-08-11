/*

Let P represent Paper, R represent Rock and S represent Scissors. Given 2 out of the 3 determine which one wins. If its a draw print 'D'.
Sample Testcase :
INPUT
R P
OUTPUT
P

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
  choice1 = a[0];
  choice2 = a[1];
  if(choice1 === choice2){
    console.log("D");
  }else{
  if (choice1 === "P") {
    if (choice2 === "R") {
        console.log("P");
    } else {
        if (choice2 === "S") {
            console.log("S");
        }
    }
  }
    if (choice1 === "S") {
        if (choice2 === "R") {
            console.log("R");
        } else {
            if (choice2 === "P") {
                console.log("P");
            }
        }
    }
  if(choice1==="R"){
        if(choice2==="S"){
            console.log("R");
        }
        else{
            console.log("P");
        }
    }
  }
  
//end-here
});

