//how to get the dimension of element

const sectionTodo = document.querySelector('.todo_section')
const info = sectionTodo.getBoundingClientRect();
console.log(info)
console.log(info.bottom)
console.log(info.top)
console.log(info.width)