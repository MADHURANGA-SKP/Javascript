const fs = require('fs');
const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
//define nodeclass to represent each task
class TaskNode {
  constructor(task,time,date){
    this.task = task;
    this.time = time;
    this.date = date;
    this.next = null;
  }
}

class TaskList{
  constructor(){
    this.head = null;
  }

  //add new task to the linked list
  addTask(task,time,date){
    const newNode = new TaskNode(task,time,date)
    newNode.next = this.head
    this.head = newNode
  }

  deleteTask(index) {
    if (index === 0) {
        this.head = this.head.next;
        return;
    }

    let current = this.head;
    let prev = null;
    let i = 0;

    while (current && i < index) {
        prev = current;
        current = current.next;
        i++;
    }

    if (current) {
        prev.next = current.next;
    } else {
        console.log('Invalid index for delete');
    }
}

  //display all tasks in the linked list
  displayTasks(){
    if(!this.head){
      console.log('task list empty')
      return;
    }

    let current = this.head;
    while(current){
      console.log(`task: ${current.task} time: ${current.time} date: ${current.date} `)
      current = current.next
    }
  }

  updateTask(index, task, time, date) {
    let current = this.head;
    for (let i = 0; i < index && current; i++) {
        current = current.next;
    }

    if (current) {
        current.task = task;
        current.time = time;
        current.date = date;
    } else {
        console.log('Invalid index for update');
    }
  }

  saveToFile(filename){
    const task =[]
    let current = this.head

    while(current){
      task.push({task: current.task, time:current.time, date:current.date})
      current = current.next
    }
    fs.writeFileSync(filename,JSON.stringify(task,null,2))
    console.log('tasks saved ')
  }
}

const taskList = new TaskList()

const addTask = () => {
  rl.question('Enter Task Name : \n', (task) => {
      rl.question('Enter Task start Time : \n', (time) => {
          rl.question('Enter Date of Task : \n', (date) => {
              taskList.addTask(task, time, date);
              console.log('Task successfully added!\n');
              processTask();
          });
      });
  });
};

const deleteTask = (i) => {
  let indx = i-1
  if (indx >= 1 && indx <= taskList.length) {
      taskList.deleteTask(indx);
      console.log(`Task ${indx} deleted successfully.\n`);
  } else {
      console.log('Invalid index: ', indx);
  }
  processTask();
};
 
// Function to read tasks
const readTask = () => {
  taskList.displayTasks();
  processTask();
};

// Function to update tasks
const updateTask = (i, task, time, date) => {
  taskList.updateTask(i, task, time, date);
  console.log(`Task at index ${i} has been updated.\n`);
};
  
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
      
      else if (action.toLowerCase() === 'add') {
        rl.question("Type 'MENU' to add a Task: \n ", (i) => {
            if (i.toLowerCase() === 'menu') {
                addTask();
            } else {
                console.log('Try Again');
                processTask();
            }
        });
    } 
      
    else if (action.toLowerCase() === 'e') {
      taskList.saveToFile('tasks.json'); // Save tasks to a JSON file before exiting
      console.log('BYE BYE....! \n');
      rl.close();
    } else {
      console.log('Invalid Input....! \n');
      processTask();
    }  
  }  
)}

processTask()
  
