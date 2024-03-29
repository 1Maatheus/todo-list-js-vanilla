let todos = [];

// Function to save the todos in the local storage and render them on the screen when the page is refreshed
const setLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos")) ?? [];
};

//Function to create a new todo
function createTodo() {
  const todoInput = document.getElementById("todo-input");
  let todoInputValue = todoInput.value.trim();

  if (todos.some((todo) => todo.content === todoInputValue)) {
    callToasterTodo();
    return;
  }

  let todo = {
    id: todos.length + 1,
    content: todoInputValue,
    complete: false,
  };

  if (todoInputValue === "") {
    callToasterEmpty();
  } else {
    todos.push(todo);
    renderTodo();
    setLocalStorage(todos);
    todoInput.value = "";
  }
}

//Function to read the todos from the local storage
function readTodos() {
  return getFromLocalStorage();
}

//Function to delete a todo
function deleteTodo(id) {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  todos.splice(todoIndex, 1);
  renderTodo();
  setLocalStorage(id);
}

//Function to toggle the todo as complete or not complete
function toggleTodoComplete(id) {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  todos[todoIndex].complete = !todos[todoIndex].complete;
  renderTodo();
  setLocalStorage(todos);
}

//Function to render the todos on the screen
function renderTodo() {
  const todoList = document.querySelector(".todos-items");

  todoList.innerHTML = `
  ${todos
    .map(
      (todo) =>
        ` <li class="todo-item">
            <div class="left-item">
            <input type="checkbox"  id="todo-checkbox-${
              todo.id
            }" onchange="toggleTodoComplete(${todo.id})" ${
          todo.complete ? "checked" : ""
        } />
              <span class="todo-title">${todo.content}</span>
            </div>
            <div class="right-item">
              <button id="delete-todo" onclick="deleteTodo()">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </li>`
    )
    .join("")}
`;

  if (todos.length === 0) {
    const divTodo = document.querySelector(".todos-created");
    divTodo.classList.remove("active");
  } else {
    const divTodo = document.querySelector(".todos-created");
    divTodo.classList.add("active");
  }
}

// Function to call toaster if the input is empty or if the todo already exists
function callToasterEmpty() {
  const toasterEmpty = document.querySelector(".toaster-empty");
  toasterEmpty.classList.add("active");
  toasterEmpty.classList.remove("remove");

  setTimeout(() => {
    toasterEmpty.classList.add("remove");
  }, 2000);
}

function callToasterTodo() {
  const toasterTodo = document.querySelector(".toaster-todo-exists");
  toasterTodo.classList.add("active");
  toasterTodo.classList.remove("remove");

  setTimeout(() => {
    toasterTodo.classList.add("remove");
  }, 2000);
}

//Load the todos and the theme from the local storage when the page is refreshed
document.addEventListener("DOMContentLoaded", () => {
  todos = readTodos();
  renderTodo();
});
