const addTaskBtn = document.getElementById('add-task')
const todoBlock = document.getElementById('todo-block');
const deleteAllBtn = document.getElementById('delete-all');

const renderNewTask = (task) => {
    const liElem = document.createElement('li');

    liElem.className = 'list-group-item d-flex justify-content-around';
    liElem.textContent = task;

    const delBtn = document.createElement('button');

    delBtn.className = 'btn btn-dark p-3';
    delBtn.textContent = 'Delete';

    const successBtn = document.createElement('button');

    successBtn.className = 'btn btn-success p-3';
    successBtn.textContent = 'Success';

    liElem.appendChild(delBtn);
    liElem.appendChild(successBtn);
    todoBlock.appendChild(liElem);

    delBtn.addEventListener('click', () => {
        todoBlock.removeChild(liElem);
    });

    successBtn.addEventListener('click', () => {
        liElem.classList.toggle('active');

        if(successBtn.textContent === 'Success') {
            successBtn.textContent = 'Unsuccess';
        } else {
            successBtn.textContent = 'Success';
        }
    });
}

addTaskBtn.addEventListener('click', () => {
    const userTaskInput = document.getElementById('todo-input');
    
    if(userTaskInput.value.trim() === '') {
        alert('Для начала введите текст в поле!');
        return;
    };

    renderNewTask(userTaskInput.value);
    userTaskInput.value = '';
});

deleteAllBtn.addEventListener('click', () => {
    while (todoBlock.firstChild) {
        todoBlock.removeChild(todoBlock.firstChild)
    };
});