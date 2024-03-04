let tsk = [];

const readTask = () =>{
    for (const task of tsk) //for..of
    {
      console.log(`Task: '${task.task}' | Date: ${task.date} | Time: ${task.time} `);
    }

}


const updateTask = (i,newtask,newtime,newdate) =>{
  if(i>=0 && i<tsk.length)
  {
    tsk[i].task = newtask 
    tsk[i].time = newtime
    tsk[i].date = newdate
      console.log(`Task at index ${i+1} has Updated to task:${newtask}, time:${newtime}, date:${newdate} `);
     
  }
  else
  {
      console.log('Invalid index : ',i);
  }
}

const deleteTask = (i) => {
  let id = i-1

  if(tsk.hasOwnProperty(id))
  {
      const i = tsk[id];
      delete tsk[id]
      console.log(`Task ${id+1} deleted successfully : `,i);
      
  }
  else
  {
      console.log('invalid index : ',i)
      
  }
}


module.exports = {readTask,updateTask,deleteTask,tsk}