const btn = document.getElementById("btn-todo");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".todo-list");
const btnDelete = document.getElementById("btn-delete");
const removeToast = document.querySelector(".toaster-btn");
const modalUpdate = document.querySelector(".update-todo");
const updateInput = document.getElementById("todo-update");
const btnCloseModal = document.getElementById("close-modal");
const btnTeste = document.getElementById("teste");

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

// function callToaster() {
//   const toaster = document.querySelector(".toaster");
//   toaster.classList.add("active");
//   toaster.classList.remove("remove");

//   setTimeout(() => {
//     toaster.classList.add("remove");
//   }, 2000);
// }

// function callToasterTodo() {
//   const toaster = document.querySelector(".toaster-todo");
//   toaster.classList.add("active");
//   toaster.classList.remove("remove");

//   setTimeout(() => {
//     toaster.classList.add("remove");
//   }, 5000);
// }

// function openModal() {
//   modalUpdate.classList.add("active");
// }

// function closeModal() {
//   modalUpdate.classList.remove("active");
// }

// document.addEventListener("click", (e) => {
//   if (e.target === modalUpdate || e.target === btnCloseModal) {
//     modalUpdate.classList.remove("active");
//   }
// });

// document.addEventListener("DOMContentLoaded", getFromLocalStorage || []);
