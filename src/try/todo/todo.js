let tasks=[];

function addtask(task){
    tasks.push(task);//put task into the array
    console.log('Task Added :', task);//show added task
}

function viewTask(task){
    console.log('Tasks :') //show Task:
    tasks.forEach((task, index) => { // //go to the array an look for the task accroding to the index
        console.log(index + 1 + '. ' + task);// add index to 1 and show 1. then shows athe added task
    });
}

function deleteTask(index){
    if(index>=0 && index < tasks.length){// decide wheather index = 0 and index in smaller than to the length of the array
        const deletedtask =  tasks.splice(index,1);// initialize an variable called deletedtask and splice it from the index+1
        console.log('Task Deleted:', deletedtask);//show task deleted on the terminal and show the deleted task
    }else{
        console.log('Invalid Task.!', task);//if is there any error occored show invalied task 
    }
}

function updateTask(index,newtask){
    if(index>=0 && index < tasks.length){//check wheather index equals to 0 and index smaller to the task arrays length
        tasks[index] = newtask;//get desired task index from the array
        console.log('Task Updated:', newtask);//show task updaed on the terminal and show the updaed task
    }else{
        console.log('Invalid Index.!', index);//show invalied index if is there any error occred, and index that needed to be change
    }
}

addtask('JavaScript');
addtask('Java');
addtask('Go Lang');

viewTask();
deleteTask(1);
updateTask(1,'Python');

viewTask();