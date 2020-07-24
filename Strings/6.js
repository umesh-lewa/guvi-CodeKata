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

  let a = userInput[1].split(" ");
  
  a.sort();
  

      var out = "";
      for(let j = 0 ; j < a.length ; j++){
          if(j ==0){
              out += a[j];
          }else{
            out += " " + a[j];
          }
      }

  console.log(out);

//end-here
});