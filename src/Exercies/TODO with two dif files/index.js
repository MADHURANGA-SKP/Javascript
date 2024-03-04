const {readTask,deleteTask,updateTask,tsk} = require('./utils')
const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    terminal: false
})

const important = () => {
    rl.question(`Please enter 'T' to continue TODO or type 'E' to  END the process) : \n`, (input) => {
        if(input.toLowerCase() == 'e')
        {
            console.log('BYE BYE, have a nice day..................');
            rl.close();
        }
        else if
        (input.toLowerCase() == 't')
        {
        rl.question('Enter Task Name : \n', (task) => {
                rl.question('Enter Task start Time : \n', (time) => {
                    rl.question('Enter Date of Task : \n', (date) => {
                    tsk.push({ task, time, date });
                    console.log('Task successfully saved! \n');
                       processTask()
                    })
                })
            })
        }
        else if
        (input.toLowerCase() == 't' || 'e')
        {
            console.log('Invalid Input....! \n');
            important(0)
        }
    })
} 

const processTask = () => {
    rl.question('Enter your action (read | delete | update | add | E for END ): \n', (action) => {
      if( action.toLowerCase() == 'read'){
        readTask();
        processTask();
      }
      
      else if (action.toLowerCase() == 'delete'){
        rl.question(`Type a task number to delete the task : \n`, (i) => {
        deleteTask(i)
        processTask()
        })
      }
      
      else if (action.toLowerCase() == 'update'){
        rl.question("Which Task do yu want to update ? (Type task number) : \n",(i) => {
          rl.question("Plese type the Task name :",(newtask) => {
            rl.question("Plese type the Task time :", (newtime)=> {
                rl.question("Plese type the Task date :", (newdate) =>{
                    updateTask(i-1, newtask,newtime,newdate);
                    processTask()
                })
            })
          })
        })
      }
      
      else if (action.toLowerCase() == 'add'){
        rl.question("Type 'MENU' to add a Task: \n ",(i) => {
        if(i.toLowerCase() == 'menu'){
            important(i);
           
        }else{
            console.log('Try Again')
            important();
        }
        })
      }
      
      else if (action.toLowerCase() == 'e'){
            console.log('BYE BYE....! \n');
            rl.close();
      }
      else if (action.toLowerCase() != 'read'|| 'delete' || 'update' || 'add' || 'e' ){
        console.log('Invalid Input....! \n');
        processTask()
    }
      
    }
    
  )}

important()

module.exports = {processTask}
  
