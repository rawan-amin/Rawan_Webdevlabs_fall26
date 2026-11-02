"use strict";
let todos = [
    { id: 1, text: 'See Lecture', completed: false },
    { id: 2, text: 'Solve assignment', completed: false }
];
let currentFilter = 'all';
// DOM Elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const itemsLeft = document.getElementById('itemsLeft');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
function addTodo() {
    const text = todoInput.value.trim();
    if (text === '')
        return;
    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    todos.push(newTodo);
    todoInput.value = '';
    render();
}
function toggleTodo(id) {
    todos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    render();
}
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    render();
}
function render() {
    todoList.innerHTML = '';
    const filteredTodos = todos.filter(todo => {
        if (currentFilter === 'active')
            return !todo.completed;
        if (currentFilter === 'completed')
            return todo.completed;
        return true;
    });
    filteredTodos.forEach(todo => {
        const li = document.createElement('li');
        if (todo.completed)
            li.classList.add('completed');
        const leftDiv = document.createElement('div');
        leftDiv.className = 'todo-left';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => toggleTodo(todo.id));
        const span = document.createElement('span');
        span.textContent = todo.text;
        leftDiv.appendChild(checkbox);
        leftDiv.appendChild(span);
        const delBtn = document.createElement('button');
        delBtn.className = 'delete-btn';
        delBtn.innerHTML = '🗑';
        delBtn.addEventListener('click', () => deleteTodo(todo.id));
        li.appendChild(leftDiv);
        li.appendChild(delBtn);
        todoList.appendChild(li);
    });
    const activeCount = todos.filter(t => !t.completed).length;
    itemsLeft.textContent = `${activeCount} item${activeCount === 1 ? '' : 's'} left`;
}
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter')
        addTodo();
});
clearCompletedBtn.addEventListener('click', () => {
    todos = todos.filter(todo => !todo.completed);
    render();
});
clearAllBtn.addEventListener('click', () => {
    todos = [];
    render();
});
render();
