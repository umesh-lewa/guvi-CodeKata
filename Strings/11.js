/*

Given a string S, print 'yes' if it has a vowel in it else print 'no'.
Sample Testcase :
INPUT
codekata
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

  let a = userInput[0];
  
  

function vowelsCounter(text) {
    // Initialize counter
    let counter = 0;
    let hasVowel = false;
    const vowels = ["a", "e", "i", "o", "u"]
    // Loop through text to test if each character is a vowel
    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            hasVowel = true;
        }
    }

    // Return number of vowels
    return hasVowel
}

if(vowelsCounter(a)){
console.log("yes");
}else{
    console.log("no");
}

//end-here
});