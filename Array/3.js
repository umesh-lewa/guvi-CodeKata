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