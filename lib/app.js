
let readline = require ('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log('Give me a number I\'ll give you the corresponding letter of the Alphabet!!');
console.log('Give me a letter of the Alphabet I\'ll give you the corresponding number!!');

  rl.question("Enter here: ", (inp)=> {
    if(isNaN(inp)){
      console.log('This is not a number');
    }else {
      console.log('You entered a number');
    }
    rl.close();
    //readLoop();
  });
