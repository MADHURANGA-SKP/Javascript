const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
/*
Readline allows the reading of input 
stream line by line. it wraps up the process 
standard output and process standard input objects. 
The Readline module makes it easier to input and read 
the output given by the user.

*/



let tsk = [];

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
                        /*---object with an object literal--
                        means if car is object, har has its own props
                        to be unique and identify it, so object have props
                        so we store it with its own complex values
                        (even methods)*/
                        console.log('Task successfully saved! \n');
                        processTask()
                    })
                })
            })
        }
    })
}
 
  const readTask = () =>{
      for (const task of tsk) //for..of
      {
        console.log(`Task: '${task.task}' | Date: ${task.date} | Time: ${task.time} \n`);
      }
    processTask();
  }
  
  
  const updateTask = (i) =>{
    if(i>=0 && i<tsk.length)
    {
        let tk = tsk[i].task 
        let tt = tsk[i].time
        let dd = tsk[i].date 
        console.log(`Task at index ${i} has Updated to task:${tk}, time:${tt}, date:${dd} `);
        processTask();
    }
    else
    {
        console.log('Invalid index : ',i);
    }
  }
  
  const deleteTask = (i) => {
    let id = i-1

    if(tsk.hasOwnProperty(id))
    {
        const i = tsk[id];
        delete tsk[id]
        console.log(`Task ${id+1} deleted successfully : `,i);
        processTask();
    }
    else
    {
        console.log('invalid index : ',i)
        processTask();
    }
  }
  
  const processTask = () => {
    rl.question('Enter your action (read | delete | update | add | E for END ): \n', (action) => {
      if( action.toLowerCase() == 'read'){
        readTask();
      }
      
      else if (action.toLowerCase() == 'delete'){
        rl.question(`Type a task number to delete the task : \n`, (i) => {
        deleteTask(i)
        })
      }
      
      else if (action.toLowerCase() == 'update'){
        rl.question("Which Task do yu want to update ? (Type task number) : \n",(i) => {
          rl.question("Plese type the Task name :",(task) => {
            rl.question("Plese type the Task time :", (time)=> {
                rl.question("Plese type the Task date :", (date) =>{
                    updateTask(parseInt(i), task,time,date);
                processTask();
                })
            })
          })
        })
      }
      
      else if (action.toLowerCase() == 'add'){
        rl.question("Type 'MENU' to add a Task: \n ",(i) => {
        if(i.toLowerCase() == 'menu'){
            important(i);
            processTask();
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
      important();
    }
    
  )}

  important()
  
