// SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoContainer = document.querySelector('.todo-container');
const todoList = document.querySelector('.todo-list');
const todoItem = document.querySelector('.todo-item');

// EVENT LISTENERS 
todoBtn.addEventListener('click', addTodo);
todoBtn.addEventListener('keyup', addTodoEnter);

todoList.addEventListener('click', deleteItem);

// FUNCTIONS
function addTodo(event) {
    console.log(event);
    // Prevent form from submitting
    event.preventDefault();

    // Add Guard Clause
    if(!todoInput.value) {
        return;
    }
    // Create Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create LI
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    // Add Check Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check-square"></i>';
    completedButton.classList.add('complete-button');
    todoDiv.appendChild(completedButton);

    // Add Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);

    // Append To List
    todoList.appendChild(todoDiv);

    // Clear Input Field
    todoInput.value = '';

    // Focus Back On Input
    todoInput.focus();
}

function addTodoEnter(event) {
    if(event.keycode === 13) {
        addTodo(event);
    }
}

function deleteItem(event) {
    const item = event.target;

    // Delete
    if(item.classList[0] === 'trash-button') {
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        })
    }

    // Complete
    if(item.classList[0] === 'complete-button') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}