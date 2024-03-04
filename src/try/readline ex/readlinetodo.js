const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let todolist = [];

function getTasks() {
  rl.question('Enter a task (type "done" to finish): ', (input) => {
    switch (input.toLowerCase()) {
      case 'done':
        console.log('Tasks entered:', todolist);
        executeAction();
        break;
      default:
        addTask(input);
        break;
    }
  });
}

function addTask(task, i = null) {
  if (i !== null && i >= 0 && i <= todolist.length) {
    todolist.splice(i, 0, task);
  } else {
    todolist.push(task);
  }
  console.log(`Task "${task}" added successfully.`);
  getTasks(); 
}

function displayTasks() {
  console.log("To do list -");
  for (let i = 0; i < todolist.length; i++) {
    const task = todolist[i];
    console.log(`${i + 1} - ${task}`);
  }
  executeAction();
}

function deleteTask(i) {
  try {
    if (i < 0 || i >= todolist.length) {
      throw new Error("Invalid index");
    }
    const deletedTask = todolist.splice(i, 1);
    console.log("Task deleted successfully:", deletedTask);
    executeAction();
  } catch (error) {
    console.log(error.message);
    executeAction();
  }
}

function deleteAllTasks() {
  todolist = []; 
  console.log("All tasks deleted.");
  executeAction();
}

function updateTask(i, newTask) {
  try {
    if (i < 0 || i >= todolist.length) {
      throw new Error("Invalid index");
    }
    todolist[i] = newTask;
    console.log(`Task at index ${i + 1} updated to "${newTask}"`);
    executeAction();
  } catch (error) {
    console.log(error.message);
    executeAction();
  }
}

function executeAction() {
  rl.question('Enter action (display/delete/deleteAll/update/add/done): ', (action) => {
    switch (action.toLowerCase()) {
      case 'display':
        displayTasks();
        break;
      case 'delete':
        rl.question('Enter the index of the task to delete: ', (i) => {
          deleteTask(parseInt(i) - 1);
        });
        break;
      case 'deleteall':
        deleteAllTasks();
        break;
      case 'update':
        rl.question('Enter the index of the task to update: ', (i) => {
          rl.question('Enter the new task: ', (newTask) => {
            updateTask(parseInt(i) - 1, newTask);
          });
        });
        break;
      case 'add':
        rl.question('Enter the task to add: ', (task) => {
          rl.question('Enter the index to add the task (leave blank to add at the end): ', (index) => {
            addTask(task, parseInt(index) - 1);
          });
        });
        break;
      case 'done':
        console.log('Exiting ');
        rl.close();
        break;
      default:
        console.log('Invalid action.');
        executeAction();
        break;
    }
  });
}

getTasks();