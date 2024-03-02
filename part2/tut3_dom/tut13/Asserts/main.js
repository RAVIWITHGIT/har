let form_todo = document.querySelector(".form_todo")
let todo_input = document.querySelector(".form_todo input[type='text']")
let todo_list = document.querySelector(".todo_list")

form_todo.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newTodoText = todo_input.value;
    const newli = document.createElement("li")
    todo_input.value = "";
    const newLiInnerHtml = `
    <span>${newTodoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>
    `
    newli.innerHTML = newLiInnerHtml;
    todo_list.append(newli)
})


// ------------------- Here use Event Delegation
todo_list.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove")){
        const targetli = e.target.parentNode.parentNode
        targetli.remove();
    }
    if(e.target.classList.contains("done")){
        const lispan = e.target.parentNode.previousElementSibling;
        lispan.style.textDecoration = "line-through";
    }
})