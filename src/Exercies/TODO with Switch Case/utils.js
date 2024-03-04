const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    terminal: false
})
let tsk = [];
const fs = require('fs');

const loadTask = () => {
 try{
  const data = fs.readFileSytnc('task.json')
  tsk = JSON.parse(data)
 }catch(error){
  console.log('No Task Found')
 }
}

const saveTask = () => {
    const tskObj = {tsk:tsk}
    const data = JSON.stringify(tskObj,null,4)
    fs.writeFileSync('task.json', data);
    console.log("Tasks saved successfully.");
}

const readTask = () =>{
    for (const task of tsk) //for..of
    {
      console.log(`Task: '${task.task}' | Date: ${task.date} | Time: ${task.time} `);
    }

}

const addTask = () => {
  rl.question('Enter Task Name : \n', (task) => {
    rl.question('Enter Task start Time : \n', (time) => {
        rl.question('Enter Date of Task : \n', (date) => {
            tsk.push({ task, time, date });
            console.log('Task successfully saved! \n');
            saveTask()
            processTask()
        });
    });
});

}


const updateTask = (i,newtask,newtime,newdate) =>{
  switch(true){
    case(i>=0 && i<tsk.length):
    tsk[i] = tsk[i] || {};
    tsk[i].task = newtask 
    tsk[i].time = newtime
    tsk[i].date = newdate
    console.log(`Task at index ${i+1} has Updated to task:${newtask}, time:${newtime}, date:${newdate} `);
    saveTask();
    break;
    case(false):
    console.log('Invalid index : ',i);
    break;
  }
}

const deleteTask = (i) => {
  let id = i-1

  switch(true){
    case(tsk.hasOwnProperty(id)):
    const i = tsk[id];
    delete tsk[id]
    console.log(`Task ${id+1} deleted successfully : `,i);  
    saveTask();
    break;

    case(false):
    console.log('invalid index : ',i)
    break;
  }

  
}


const processTask = () => {
  rl.question('Enter your action (read | delete | update | add | E for END ): \n', (action) => {
    switch(true){
      case( action.toLowerCase() == 'read'):
        readTask();
        processTask();
      break;
      
      case(action.toLowerCase() == 'delete'):
        rl.question(`Type a task number to delete the task : \n`, (i) => {
        deleteTask(i)
        saveTask()
        })
      break;
      
      case(action.toLowerCase() == 'update'):
        rl.question("Which Task do yu want to update ? (Type task number) : \n",(i) => {
          rl.question("Plese type the Task name :",(newtask) => {
            rl.question("Plese type the Task time :", (newtime)=> {
                rl.question("Plese type the Task date :", (newdate) =>{
                    updateTask(i-1, newtask,newtime,newdate);
                    saveTask()
                })
            })
          })
        })
      break;
      
      case(action.toLowerCase() == 'add'):
        rl.question("Type 'MENU' to add a Task: \n ",(i) => {
        switch(true){
        default: addTask();
        
        }
          
        })
      break;
      
      case(action.toLowerCase() == 'e'):
      console.log('BYE BYE....! \n');
      rl.close();
      break;

      case(action.toLowerCase() != 'read'|| 'delete' || 'update' || 'add' || 'e' ):
        console.log('Invalid Input....! \n');
        
    break;
    
    } 
  }
  
)}

module.exports = {loadTask,addTask,processTask}