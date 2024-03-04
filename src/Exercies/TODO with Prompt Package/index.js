const prompt = require('prompt-sync')({ sigint: true });
const { addTask, viewTasks, deleteTask, updateTask, loadTasks } = require("./taskFunctions");

// Load tasks when the program starts
loadTasks();

let operation;

do {
    operation = prompt("What do you want to do?  add task/view tasks/delete Task/update task/exit");

    switch (operation) {
        case ("add task"):
            var task = prompt("What is the task? ");
            addTask(task);
            break;
        case "view tasks":
            viewTasks();
            break;
        case "delete Task":
            var index = parseInt(prompt("Which task do you want to delete? Enter the number :-  "));
            deleteTask(index);
            break;
        case "update task":
            var newTask = prompt("What is the new task? ");
            var index = parseInt(prompt("What is the index of the new task? "));
            updateTask(index, newTask);
            break;
        case "exit":
            console.log("Thank you");
            break;
        default:
            console.error("Unknown operation:", operation);
    }
} while (operation !== "exit");