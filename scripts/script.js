// let todos = [];

// function createTodo() {
//   let novaTodo = todoInput.value.trim();
//   if (todos.some((todo) => todo.conteudo === novaTodo)) {
//     callToasterTodo();
//     return;
//   }

//   let todo = {
//     id: todos.length + 1,
//     conteudo: novaTodo,
//     complete: false,
//   };

//   if (novaTodo === "") {
//     callToaster();
//   } else {
//     todos.push(todo);
//     renderTodo();
//     setLocalStorage(todos);
//     todoInput.value = "";
//   }
// }

// function readTodos() {
//   return getFromLocalStorage();
// }

// function renderTodo() {
//   todoList.innerHTML = `
//       ${todos
//         .map(
//           (todo) =>
//             `<li class="todo-item">
//           <div class="left-item">
//             <input type="checkbox" /> <span>${todo.conteudo}</span>
//           </div>
//           <div class="right-item">
//             <button onclick="openModal(${todo.id}, '${todo.conteudo}')" title="Atualizar Tarefa" id="btn-update">
//               <i class="fa-solid fa-pencil"></i>
//             </button>
//             <button onclick="deleteTodo()" title="Excluir Tarefa" id="btn-delete">
//               <i class="fa-solid fa-trash"></i>
//             </button>
//           </div>
//         </li>`
//         )
//         .join("")}
//   `;

//   if (todos.length === 0) {
//     const todoDiv = document.querySelector(".todos");
//     todoDiv.classList.remove("active");
//   } else {
//     const todoDiv = document.querySelector(".todos");
//     todoDiv.classList.add("active");
//   }
// }

// function deleteTodo(id) {
//   const todoIndex = todos.findIndex((todo) => todo.id === id);
//   todos.splice(todoIndex, 1);
//   renderTodo();
//   setLocalStorage(id);

//   if (todos.length === 0) {
//     const todoDiv = document.querySelector(".todos");
//     todoDiv.classList.remove("active");
//   }
// }

// function updateTodo(id) {
//   const teste = todos[id].conteudo;
//   console.log(teste);
//   // setLocalStorage();
// }

// function setLocalStorage(todos) {
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// function getFromLocalStorage() {
//   JSON.parse(localStorage.getItem("todos")) ?? [];
//   renderTodo();
// }

// document.addEventListener("DOMContentLoaded", getFromLocalStorage ||

let todos = [];

// Function to save the todos in the local storage and render them on the screen when the page is refreshed
const setLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("todos")) ?? [];

//Function to create a new todo
function createTodo() {
  const todoInput = document.getElementById("todo-input").value.trim();

  if (todos.some((todo) => todo.content === todoInput)) {
    callToasterTodo();
    return;
  }

  let todo = {
    id: todos.length + 1,
    content: todoInput,
    complete: false,
  };

  if (todoInput === "") {
    callToasterEmpty();
  } else {
    todos.push(todo);
    renderTodo();
    setLocalStorage(todos);
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

//Function to render the todos on the screen
function renderTodo() {
  const todoList = document.querySelector(".todos-items");

  todoList.innerHTML = `
  ${todos
    .map(
      (todo) =>
        ` <li class="todo-item">
            <div class="left-item">
              <input type="checkbox" id="todo-checkbox" />
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

//Function to load the todos from the local storage when the page is refreshed
document.addEventListener("DOMContentLoaded", () => {
  todos = readTodos();
  renderTodo();
});
