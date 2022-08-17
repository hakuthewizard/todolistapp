const todoInput = document.querySelector(".input-todo");
const add_button = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");
const todoContainer = document.querySelector(".todo-container")


add_button.addEventListener("click", addToDo);
document.addEventListener('DOMContentLoaded',getSavedTodos)

function addToDo(event) {
   
    event.preventDefault();
    if (document.querySelector(".input-todo").value.length === 0){
        alert ("please add a to-do");
    } else {
const to_Do_Div = document.createElement("div");
to_Do_Div.classList.add("todo");

const new_To_Do_Item = document.createElement("li");
new_To_Do_Item.classList.add("todo");

new_To_Do_Item.innerText=todoInput.value;

to_Do_Div.appendChild(new_To_Do_Item);

saveTodos(todoInput.value)


todoList.appendChild(to_Do_Div);



const doneButton = document.createElement("button");
doneButton.classList.add("done-button");
to_Do_Div.appendChild(doneButton);
doneButton.addEventListener("click", doneToDo);
doneButton.innerHTML='done';
function doneToDo(event) {
    event.preventDefault();
    new_To_Do_Item.style.backgroundColor ="rgb(161, 129, 235)";
  
}
const deleteButton = document.createElement("button");
deleteButton.classList.add("delete-button");
to_Do_Div.appendChild(deleteButton);
deleteButton.addEventListener("click", deleteToDo);
deleteButton.innerHTML='delete';
function deleteToDo(event) {
    event.preventDefault();
    new_To_Do_Item.remove();
    deleteButton.remove();
    doneButton.remove();

    todoInput.value="";
}
}}

    
function saveTodos(todo){
let todos;
if(localStorage.getItem('todos')===null){
    todos=[];
}else{
    todos=JSON.parse(localStorage.getItem('todos'))
}
todos.push(todo);
localStorage.setItem("todos", JSON.stringify(todos));
}

function getSavedTodos(){
    let todos;
if(localStorage.getItem('todos')===null){
    todos=[];
}else{
    todos=JSON.parse(localStorage.getItem('todos'))
}
todos.forEach(todo => {
    const to_Do_Div = document.createElement("div");
to_Do_Div.classList.add("todo");

const new_To_Do_Item = document.createElement("li");

new_To_Do_Item.innerText=todo;
new_To_Do_Item.classList.add("todo");

to_Do_Div.appendChild(new_To_Do_Item);

todoList.appendChild(to_Do_Div);

const doneButton = document.createElement("button");
doneButton.classList.add("done-button");
to_Do_Div.appendChild(doneButton);
doneButton.addEventListener("click", doneToDo);
doneButton.innerHTML='done';
function doneToDo(event) {
    event.preventDefault();
    new_To_Do_Item.style.backgroundColor ="rgb(161, 129, 235)";
  
}
const deleteButton = document.createElement("button");
deleteButton.classList.add("delete-button");
to_Do_Div.appendChild(deleteButton);
deleteButton.addEventListener("click", deleteToDo);
deleteButton.innerHTML='delete';
function deleteToDo(event) {
    event.preventDefault();
    new_To_Do_Item.remove();
    deleteButton.remove();
    doneButton.remove();
}})}