// Seleção de elementos
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const editForm = document.querySelector("#edit-form");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const removeBtn = document.querySelector(".remove-task");
const editInput = document.querySelector("#edit-input");
const editBtn = document.querySelector("#edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#remove-btn");
const filterBtn = document.querySelector("#filter-select");

let oldInputValue;

// Funções
const saveTask = (TaskTitle) => {
     const task = document.createElement('div');
     task.classList.add("task");
     
     const title = document.createElement('h3');
     title.innerText = TaskTitle;

     task.appendChild(title);

     const finishBtn = document.createElement('button');
     finishBtn.classList.add("finish-task");
     finishBtn.innerHTML = '<i class="fa-solid fa-check"></i>'

     task.appendChild(finishBtn);

     const editBtn = document.createElement('button');
     editBtn.classList.add("edit-task");
     editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'

     task.appendChild(editBtn);

     const removeBtn = document.createElement('button');
     removeBtn.classList.add("remove-task");
     removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'

     task.appendChild(removeBtn);

     taskList.appendChild(task);

     taskInput.value = "";
     taskInput.focus();
}

const toggleForms = () => {
    taskForm.classList.toggle("hide");
    editForm.classList.toggle("hide");
    taskList.classList.toggle("hide");
}

const updateTask = (TaskTitle) => {
    const tasks = document.querySelectorAll(".task");

    tasks.forEach((task) => {
        let taskTitle = task.querySelector("h3");

        if(taskTitle.innerText === oldInputValue) {
            taskTitle.innerText = TaskTitle;
        }
    })
}

// Eventos
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = taskInput.value;

    if(inputValue) {
        // Salvar a tarefa
        saveTask(inputValue);
    }
})

document.addEventListener("click", (e) => {
    const targetElement = e.target;
    const parentElement = targetElement.closest("div");
    let taskTitle;

    if(parentElement && parentElement.querySelector("h3")) {
        taskTitle = parentElement.querySelector("h3").innerText;
    }

    if(targetElement.classList.contains("finish-task")) { parentElement.classList.toggle("done"); }

    if(targetElement.classList.contains("remove-task")) { parentElement.remove(); }

    if(targetElement.classList.contains("edit-task")) { 
        toggleForms();
        editInput.value = taskTitle;
        oldInputValue = taskTitle;
    }
})

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms();
})

editBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const newEditInput = editInput.value;

    if(newEditInput) {
        // Atualizar
        updateTask(newEditInput);
    }

    toggleForms();
})