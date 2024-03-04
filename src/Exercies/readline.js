const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];
var newInput;

const createTask = () => {
  // console.log('TODO APP, Please add you details to to proceed forward.!\n')
  rl.question("What is your Task ? (Type 'e' to  END the process) : ",(input) => {
    if(input!= 'e'){
      arr.push(input);
      console.log(`Your Task '${input}' is  added succesfully \n`);
      processTask();
    }else if(input == 'e'){
      console.log('BYE BYE, have a nice day..................');
      rl.close();
    } 
    
}) 
}

const addTask = (i) => {
  
  arr.push(i);
  console.log(`Your Task '${i}' is  added succesfully\n`);

}

const readTask = (i) =>{
    for (let i = 0; i < arr.length; i++) {
      const task = arr[i];
      console.log(`${i + 1} . ${task}`);
    }
  processTask();
}

const updateTask = (i,task) =>{
  if(i>=0 && i<arr.length){
      arr[i]= task;
      console.log(`Task at index ${i+1} has Updated to ${task}: `);
      processTask();
  }else{
      console.log('Invalid index : ',i);
      
  }
}

const deleteTask = (i) => {
  if(i>=0 && i<arr.length){
      const deletedTask = arr.splice(i,1);
      console.log(`Task at index ${i+1}  deleted successfully : `,deletedTask);
      processTask();
  }else{
      console.log('invalid index : ',i)
      processTask();
  }
}

const processTask = () => {
  rl.question('Enter your action (read | delete | update | add ): \n', (action) => {
    if( action == 'read'){
        readTask();
    }else if (action == 'delete'){
      rl.question(`Type a task number to delete the task : \n`, (i) => {
        deleteTask(i)
      })
    }else if (action == 'update'){
      rl.question("What Task do yu want to update ? (Type task number) : \n",(i) => {
        rl.question("Plese type the Task name :",(task) => {
          updateTask(parseInt(i) - 1, task);
        })
      })
    }else if (action == 'add'){
      rl.question("What is your Task ? (Type 'e' to  END the process) : \n ",(i) => {
        addTask(i);
        processTask();
      })
    }
    createTask();
  }
  
)}

createTask();

