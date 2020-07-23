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

  let a = userInput[0].split("");
  let output = "";
  let oCount = 0;
for(let i = 0 ; i < a.length ; i++){
    if(+a[i] % 2 == 0){
    
    }else{
    
            output = output + a[i] + " ";
        
        oCount++;
    }
}
1

if(oCount == 0){
    console.log("-1");
}else{
console.log(output.substring(0, output.length - 1));
}
//end-here
});