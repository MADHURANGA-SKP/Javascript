const fs = require('fs');
let tasks = [];
function loadTasks() {
    try {
        const data = fs.readFileSync('task-v2.json');
        tasks = JSON.parse(data);
        console.log("Tasks loaded successfully.");
    } catch (error) {
        console.log("No tasks found. Starting with an empty task list.");
    }
}

function saveTasks() {
    fs.writeFileSync('task-v2.json', JSON.stringify(tasks, null, 4));
    console.log("Tasks saved successfully.");
}



function addTask(task) {
    tasks.push(task);
    console.log("Task added:", task);
    saveTasks();
}

function viewTasks() {
    console.log("Tasks:");
    tasks.forEach((task, index) => {
        console.log(index + 1 + ". " + task);
    });
}

function deleteTask(index) {
    if (index >= 1 && index <= tasks.length) {
        const deletedTask = tasks.splice(index - 1, 1);
        console.log("Task deleted:", deletedTask);
        saveTasks();
    } else {
        console.log("Invalid index:", index);
    }
}

function updateTask(index, newTask) {
    if (index >= 1 && index <= tasks.length) {
        tasks[index - 1] = newTask;
        console.log("Task updated:", newTask);
        saveTasks();
    } else {
        console.log("Invalid index:", index);
    }
}

module.exports = { addTask, viewTasks, deleteTask, updateTask, loadTasks }; // Export the functions