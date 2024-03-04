const fs = require('fs');

let taskArr = [];

const loadTasks = () => {
    try {
        const data = fs.readFileSync('task.json');
        const parsedData = JSON.parse(data);
        taskArr = Array.isArray(parsedData) ? parsedData : [];
        console.log("Tasks loaded successfully.");
    } catch (error) {
        console.log("No tasks found. Please add Tasks.");
    }
}

const saveTasks = () =>  {
    const tasksObject = { tasks: taskArr }; 
    const tasksJSON = JSON.stringify(tasksObject, null, 4); 
    fs.writeFileSync('task.json', tasksJSON); 
    console.log("Tasks saved successfully.");
}

const addTask = (task,date,time) => {
    taskArr.push({ task,date,time }); 
    console.log("Task added successfully.!");
    saveTasks();
}

const viewTasks = () =>  {
    for (let task of taskArr) //for..of
    {
      console.log(`Task: '${task.task}' | Date: ${task.date} | Time: ${task.time} `);
    }
}


const deleteTask = (index) =>  {
    if (index >= 1 && index <= taskArr.length) {
        const deletedTask = taskArr.splice(index - 1, 1);
        console.log("Task deleted successfully:", deletedTask);
        saveTasks();
    } else {
        console.log("Invalid index:", index);
    }
}

const updateTask = (index, newTask,newDate,newTime) =>  {
    if (index >= 1 && index <= taskArr.length) {
        taskArr[index - 1].task = newTask;
        taskArr[index - 1].task = newDate;
        taskArr[index - 1].task = newTime;
        console.log(`Task at index ${index}`,`has Updated, Name:${newTask} Date:${newDate} Time:${newTime}`);
        saveTasks();
    } else {
        console.log("Invalid index:", index);
    }
}

const sortTask = () => {
    taskArr.sort((a, b) => {
        sortedArr = [] = a -b
    })
}

const findTask = (n) => {
    let number = n-1
    let lower = 0, upper = taskArr.length-1
    while(lower <= upper){
        //console.log('try')
        const middle = lower + Math.floor((upper-lower)/2)
        if(number === taskArr[middle])  {console.log(`Task at index ${number} Name:${number.task} Date:${number.date} Time:${number.time}`)}
        number < taskArr[middle] ? (upper = middle -1) : (lower = middle+1)
    }

}

module.exports = { addTask, viewTasks, deleteTask, updateTask, loadTasks, findTask }; 