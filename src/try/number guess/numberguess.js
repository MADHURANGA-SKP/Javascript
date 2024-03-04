const prompt = require('prompt-sync')({sigint: true});


//random number from 1-10
const numberToGuess = Math.floor(Math.random()*10)+1;

let foundCorrectNumber = false;

while(!foundCorrectNumber){
  //get user input

  let guess = prompt('guess a number from  1 to 10');


  //convert string to number
  guess = number(guess);


  //compare the guessed number and let user know it
  if(guess === numberToGuess){
    console.log('congrats, you got it!');
    foundCorrectNumber=true;
  }else{
    console.log('sorry, guess again');
  }
}

