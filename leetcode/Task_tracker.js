/*You have an array of task objects. Each task has a taskName, a completed status (boolean), and a priority (numerical value where lower numbers indicate higher priority). Your tasks are:
1. find: Identify the first task with a high priority (for example, priority less than 3).
2. findIndex: Find the index of the first task that is not completed.
3. reduce: Count how many tasks have been completed.
4. (forEach): Print all task names.*/


const tasks = [   { taskName: "Write report", completed: true, priority: 2 },   { taskName: "Attend meeting", completed: false, priority: 3 },   { taskName: "Fix bug", completed: false, priority: 1 },   { taskName: "Update website", completed: true, priority: 4 } ];

//find
const found= tasks.find(task=>task.priority<3);
console.log(found);

//find index
const index= tasks.findIndex(task=>task.completed==false);
console.log("Index of task which is not completed : ")
console.log(index);

//reduce
const reduced=tasks.reduce((acc, task) => acc + task.completed, 0);
console.log(reduced);

//for each
tasks.forEach((task)=>{
    console.log(task.taskName);
})