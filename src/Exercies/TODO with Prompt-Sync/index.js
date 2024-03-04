const prompt = require('prompt-sync')({ sigint: true });
const { addTask, viewTasks, deleteTask, updateTask, loadTasks } = require("./utils");


loadTasks();

let operation;

do {
    operation = prompt("Enter your action (read | delete | update | add | find for Binary Search | E for END  ):");
    let temp = operation.toLowerCase()
    switch (temp) {
        case"add" :
            var task = prompt("Enter Task Name : ");
            var date = prompt("Enter Task Date : ");
            var time = prompt("Enter Task Time : ");
            addTask(task,date,time);
            break;
        case "read":
            viewTasks();
            break;
        case "delete":
            var index = parseInt(prompt("Which task do you want to delete? Enter the number :-  "));
            deleteTask(index);
            break;
        case "update":
            var newTask = prompt("Plese type the Task Name : ");
            var newDate = prompt("Plese type the Task Date : ");
            var newTime = prompt("Plese type the Task Time : ");
            var index = parseInt(prompt("Which Task do yu want to update ? (Type task number) :"));
            updateTask(index, newTask,newDate,newTime);
            break;
        case "find":
            var n = prompt("Enter Task Number to find task using Binary Search : ");
            findTask(n);
            break;
        case "e":
            console.log("Thank you");
            return
            
        default:
            console.error("Invalid Input....!", operation);
    }
} while (operation !== "exit");