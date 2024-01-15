// Seleção de elementos
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const editForm = document.querySelector("#edit-form");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const removeBtn = document.querySelector(".remove-task");

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

    if(targetElement.classList.contains("finish-task")) {
        parentElement.classList.toggle("done");
    }

    if(targetElement.classList.contains("remove-task")) {
        parentElement.remove();
    }
})