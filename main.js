// global scope variables //
const form = document.getElementById('myForm');
const tasks = [];
// setting up event listeners for submit //
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("form is submitting ...");
    addTask(e.target.taskName.value , e.target.taskType.value);
    createTask();
    } 
)      

// add tasks with the given data to the array//

function addTask(name , type) {
    const task = {
        taskName: name,
        taskType: type       
    }
    tasks.push(task);
    console.table(tasks);
}
// create a task with the given data from the array//

function createTask() {
    const taskList = document.getElementById('taskContainer');
    const task = document.createElement('li');
    const completeBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    completeBtn.innerText = 'Complete Task';
    completeBtn.classList.add('btn','btn-success' ,'mx-2' ,'my-3');
    removeBtn.innerText = 'Remove Task';
    removeBtn.classList.add('btn','btn-danger' ,'mx-2' ,'my-3');
    task.classList.add('list-group-item');
    task.innerHTML = `<h1>${tasks[tasks.length - 1].taskName}</h1>
    <h4>${tasks[tasks.length - 1].taskType}</h4>`;
    task.append(completeBtn);
    task.append(removeBtn);
    taskList.append(task);
    // green button action //
    completeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.parentElement.classList.remove('list-group-item');
        e.target.parentElement.classList.add('alert' , 'alert-success');
        })
    // red button action //
    removeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.parentElement.remove();
        })
}
