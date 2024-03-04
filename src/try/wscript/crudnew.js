let arr=[]

WScript.StdOut.Write('Please enter you Pending/Unfinished Tasks Here : ');
var task = WScript.StdIn.ReadLine();
arr.push(task);
console.log(task);

// WScript.StdOut.Write('Do you want to enter another Task .? ');
// var task1 = WScript.StdIn.ReadLine();

// function option(){
//     if(task1 == 'Yes'||'yes'||'YES')
//     {
//         WScript.StdOut.Write('Please enter you Pending/Unfinished Tasks Here : ' );
//         var task = WScript.StdIn.ReadLine();
//         arr.push(task);
        
//         }
//         else if(task1 == 'No'||'no'||'NO')
//             {
//             WScript.StdOut.Write('Please enter Options to, make Settings in your tasks(Update/Delete) : ' );
//             var option = WScript.StdIn.ReadLine(); 
//             if(option == 'Read')
//                 {
//                     arr.forEach((task,index)=>{
//                         console.log(index + 1 + '. ', task);
//                     })
//                 }
//         else if (option == 'Update')
//             {
//                 WScript.StdOut.Write('Please enter which Task do you want to Update : ' );
//                 var taskNumber = WScript.StdIn.ReadLine(); 
//                     if(index>=0 && index<arr.length)
//                         {
//                             arr[index.taskNumber] = newTask;
//                             console.log('New Task Updated: ', newTask);
//                         }S
//                     else
//                         {
//                             console.log('Invalid index: ',index)
//                         }
//             }
//         else if (option == 'Delete')
//             {
//                 WScript.StdOut.Write('Please enter which Task do you want to Delete : ' );
//                 var taskNumber = WScript.StdIn.ReadLine();
//                     if(index>=0 && index<arr.length)
//                         {
//                             const deletedTask = data.splice(index.taskNumber);
//                             console.log('Task deleted: ',deletedTask);
//                         }
//                     else
//                         {
//                             console.log('Invalid index: ',index);
//                         }
//             }
//     }
//     else
//     {
//         WScript.StdOut.Write('Please Enter YES to END the process : ' );
//         var end = WScript.StdIn.ReadLine();
//         if(end == 'Yes'||'yes'||'YES')
//             {
//                 throw new Error();
//             }
//     } 
// }

