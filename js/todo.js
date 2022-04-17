const todoForm = document.getElementById('todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.getElementById('todo-list');
const TODOS_KEY = 'todos';

const todos = [];

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentNode;
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.innerText = newTodo;

  const button = document.createElement('button');
  button.innerText = '❌';
  button.onclick = deleteTodo;

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  todos.push(newTodo);
  paintTodo(newTodo);
  saveTodos();
}

todoForm.addEventListener('submit', handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach((item) => {
    console.log('hello', item);
  });
}
