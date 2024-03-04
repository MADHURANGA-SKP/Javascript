const {loadTask,addTask,processTask} = require('./utils')
const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    terminal: false
})
loadTask()

const important = () => {
  rl.question(`Please enter 'T' to continue TODO or type 'E' to END the process) : \n`, (input) => {
      switch(true) {
          case (input.toLowerCase() === 'e'):
            console.log('BYE BYE, have a nice day..................');
              // saveTask()
            rl.close();
            break;
      
          case (input.toLowerCase() === 't'):
            addTask()
            break;

          default:
            console.log('Invalid Input....! \n');
            important();
            break;
      }
      processTask()
  });
} 
important()

  
