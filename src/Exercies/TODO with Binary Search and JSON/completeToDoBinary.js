const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let tsk = [];

// Read existing tasks from the JSON file
const readFromFile = (filename) => {
  if (fs.existsSync(filename)) {
      const data = fs.readFileSync(filename, 'utf8');
      tsk = JSON.parse(data);
      console.log('tasks exits');
  } else {
      console.log('No existing tasks found. Starting with an empty task list.');
  }
};

readFromFile('tasks.json'); // Read existing tasks before starting the program


const important = () => {
    rl.question(`Please enter 'T' to continue TODO or type 'E' to END the process) : \n`, (input) => {
        if (input.toLowerCase() == 'e') {
            console.log('BYE BYE, have a nice day..................');
            rl.close();
        } else if (input.toLowerCase() == 't') {
            rl.question('Enter Task Name : \n', (task) => {
                rl.question('Enter Task start Time : \n', (time) => {
                    rl.question('Enter Date of Task : \n', (date) => {
                        tsk.push({ task, time, date });
                        console.log('Task successfully saved! \n');
                        // Sort tasks based on task names for binary search
                        tsk.sort((a, b) => a.task.localeCompare(b.task));
                        processTask();
                    });
                });
            });
        }
    });
};

// Binary search to find a task by task name
const findTaskByName = (name) => {
    let left = 0;
    let right = tsk.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (tsk[mid].task === name) {
            return mid; // Task found, return index
        } else if (tsk[mid].task < name) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Task not found
};

const readTask = () => {
    for (const task of tsk) {
        console.log(`Task: '${task.task}' | Date: ${task.date} | Time: ${task.time} \n`);
    }
    processTask();
};

const updateTask = (i, task, time, date) => {
    if (i >= 0 && i < tsk.length) {
      tsk[i].task = task;
      tsk[i].time = time;
      tsk[i].date = date;
        console.log(`Task at index ${i} has Updated.`);
        processTask();
    } else {
        console.log('Invalid index : ', i);
    }
};

const deleteTask = (i) => {
    let id = i - 1;

    if (tsk.hasOwnProperty(id)) {
        const deletedTask = tsk[id];
        tsk.splice(id, 1);
        console.log(`Task ${id + 1} deleted successfully : `, deletedTask);
        processTask();
    } else {
        console.log('Invalid index : ', i);
        processTask();
    }
};

const processTask = () => {
    rl.question('Enter your action (read | delete | update | add | find | E for END ): \n', (action) => {
        if (action.toLowerCase() == 'read') {
            readTask();
        } else if (action.toLowerCase() == 'delete') {
            rl.question(`Type a task number to delete the task : \n`, (i) => {
                deleteTask(parseInt(i));
            });
        } else if (action.toLowerCase() == 'update') {
            rl.question("Which Task do you want to update ? (Type task number) : \n", (i) => {
                rl.question("Please type the Task name :", (task) => {
                    rl.question("Please type the Task time :", (time) => {
                        rl.question("Please type the Task date :", (date) => {
                            updateTask(parseInt(i), task, time, date);
                            processTask();
                        });
                    });
                });
            });
        } else if (action.toLowerCase() == 'add') {
            rl.question("Type 'MENU' to add a Task: \n ", (i) => {
                if (i.toLowerCase() == 'menu') {
                    important(i);
                    processTask();
                } else {
                    console.log('Try Again');
                    important();
                }
            });
        } else if (action.toLowerCase() == 'find') {
            rl.question("Enter the task name to find: \n", (name) => {
                const index = findTaskByName(name);
                if (index !== -1) {
                    console.log(`Task '${name}' found at index ${index}.\n`);
                } else {
                    console.log(`Task '${name}' not found.\n`);
                }
                processTask();
            });
        } else if (action.toLowerCase() == 'e') {
            saveToFile('tasks.json'); // Save tasks to a JSON file before exiting
            console.log('BYE BYE....! \n');
            rl.close();
        } else {
            console.log('Invalid Input....! \n');
            processTask();
        }
        important();
    });
};

// Save tasks to a JSON file
const saveToFile = (filename) => {
    fs.writeFileSync(filename, JSON.stringify(tsk, null, 2));
    console.log('Tasks saved to', filename);
};

// Start the program
important();
