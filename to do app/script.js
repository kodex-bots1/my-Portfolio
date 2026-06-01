const todoInput = document.querySelector('.todo-input input');
const todoList = document.querySelector('.todo-app');

function addTodo(){
    if(todoInput.value.trim() === ''){
    alert('Please enter a task');
}
else{
    let li = document.createElement('li');
    li.textContent = todoInput.value;
    todoList.appendChild(li);
}
}


