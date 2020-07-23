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

  let fullnames = userInput[1].split(" ");
  
//  var fullnames = ['Karri', 'Ismo', 'Grigori', 'Ahmed', 'Roope', 'Arto' ];

var occurences = { };
for (var i = 0; i < fullnames.length; i++) {
    if (typeof occurences[fullnames[i]] == "undefined") {
        occurences[fullnames[i]] = 1;
    } else {
        occurences[fullnames[i]]++;
    }
}

//console.log(occurences);

for (let key in occurences) {
    if(parseInt(occurences[key]) == 2){
        console.log(key);
    }
  //console.log(key, occurences[key]);
}
//end-here
});