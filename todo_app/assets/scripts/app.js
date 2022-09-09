const todoInput = document.getElementById('todo'); // Поле ввода
const addTodoBtn = document.getElementById('add-todo'); // Кнопка + 

const todoList = [] // Список тудушек

const clearTodoInput = () => {
    // Очищает поле ввода 

    todoInput.value = ''
};

const deleteTodo = (todoId) => {
    let todoIndex = 0;

    for (const todo of todoList) {
        if (todo.id === todoId) {
            break;
        }
        todoIndex++;
    }

    console.log(todoIndex);
    todoList.splice(todoIndex, 1);

    const todoBlock = document.getElementById('todo-block');
    todoBlock.children[todoIndex].remove();
};

const successTodo = (todoId) => {};

const renderNewTodoElem = (id, task) => {
    const newTodoElem = document.createElement('li');
    
    newTodoElem.className = 'list-group-item d-flex justify-content-around'
    newTodoElem.innerHTML = `
        <p>${task}</p>
        <button type="button" class="btn btn-dark p-3" id='delete-btn'>Delete</button>
        <button type="button" class="btn btn-success p-3" id='success-btn'>Success</button>
    `;

    const todoBlock = document.getElementById('todo-block');
    todoBlock.appendChild(newTodoElem);

    const deleteBtn = document.getElementById('delete-btn')
    const successBtn = document.getElementById('success-btn')

    deleteBtn.addEventListener('click', deleteTodo.bind(null, id));
    successBtn.addEventListener('click', successTodo.bind(null, id));

};

const addTodoHandler = () => {
    const task = todoInput.value;

    if (task.trim() === '') {
        alert('Для начала введите задачу!')
        return
    };

    const newTodoObj = {
        id: Math.random().toString(),
        task: task
    };

    todoList.push(newTodoObj);
    
    renderNewTodoElem(newTodoObj.id, newTodoObj.task);
    clearTodoInput();
};

addTodoBtn.addEventListener('click', addTodoHandler);