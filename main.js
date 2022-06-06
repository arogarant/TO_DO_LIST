// this code only start working once windows will be loaded
window.addEventListener('load', () => {

    // Common Variables Declared here
    let form = document.getElementById('taskForm')
    let newTask = document.getElementById("newTask");
    let addTaskBtn = document.getElementById("addTaskBtn");
    let main = document.getElementById('main')
    // adding event listener in form so action implies on click
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const task = newTask.value;
        if (!task) {
            alert('Please fill your task')
            return
            // if task is empty code will stop here
        }
        let headingText = document.getElementById('headingText').innerText = 'TODAYS GOAL';
       
        // Creation of elements started here
        let taskDiv = document.createElement('div');
        // Creating div element for task to show
            main.appendChild(taskDiv)
                taskDiv.classList.add('tasks');
                    console.log(taskDiv);

        // Creating input element for task to show
        let taskInput = document.createElement('input');
            taskDiv.appendChild(taskInput);
            taskInput.setAttribute('readonly','true')
                taskInput.classList.add('inputDiv');
                   console.log(taskInput);
                     taskInput.value = task;
                     
        // Creating button element for task to edit task
        let editBtn = document.createElement('button');
             editBtn.classList.add('btn')
                 editBtn.innerHTML = 'Edit'
                     taskDiv.appendChild(editBtn);
                        console.log(editBtn);
                        editBtn.addEventListener('click',EditBtn)

        // Creating button element for task to delete task
        let delBtn = document.createElement('button');
             delBtn.classList.add('btnDelete')
                delBtn.innerHTML = 'Delete'
                    taskDiv.appendChild(delBtn);
                        console.log(delBtn);
                        delBtn.addEventListener('click',delelteBtn)


function EditBtn(){
    if(editBtn.innerHTML=='Edit'){
        taskInput.removeAttribute('readonly','true');
        editBtn.innerHTML='Save'
    }
    else{
        taskInput.setAttribute('readonly','true');
        editBtn.innerHTML='Edit'
    }
    }

                            
 function delelteBtn(){
        main.removeChild(taskDiv);
        taskDiv.removeChild(taskInput);    
        taskDiv.removeChild(editBtn);               
        taskDiv.removeChild(delBtn);               
    }

})})