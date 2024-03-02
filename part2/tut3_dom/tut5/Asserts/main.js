// --------------------------- Add Html Element using javascript ------------------------------------

// -------------------------------

/*
1. innerHTML not good way add another html in privious html
2 . you can only use innerHTML when privious html to new html only , not use add
*/
// let todolist = document.querySelector('.todo_list')
// todolist.innerHTML += "<li>add todo using javascript</li>"
// todolist.innerHTML += "<li>add anoter todo using javascript</li>"


// ------------------------------

/*
1. we use createElement for add html element 
2. maximum devloper using this way
3. use createElement we can three work
   I.append       ->> add after privious element
   II. prepend    ->> add before privious element
   III. remove    ->> remove element

4. we can add before and after of parent element 
  I. before
  II. after
*/

// I.createElement with append and prepend

// let todolist = document.querySelector('.todo_list')
// let newTodoitem = document.createElement("li")
// newTodoitem.textContent = "add after privious todolist using append method"
// todolist.append(newTodoitem)
// let newTodoitem2 = document.createElement("li")
// newTodoitem2.textContent = "add before privious todolist using prepend"
// todolist.prepend(newTodoitem2)

// III. 

// let getli = document.querySelector('.todo_list li')
// getli.remove()

// 4. before and after

// let todolist = document.querySelector('.todo_list')
// let newTodoitem = document.createElement("li")
// newTodoitem.textContent = "before parent element"
// todolist.before(newTodoitem)
// let newTodoitem2 = document.createElement("li")
// newTodoitem2.textContent = "after parent element"
// todolist.after(newTodoitem2)


// -------------------------------------------
/*
1. we can also use this for add element ---> insertAdjacentHtml(where,html)

2. where --> you can related upper code for understand this
    I. beforebegin  --> just like before
    II. afterbegin  --> just like prepend
    III. beforeend  --> just like append
    IV. afterend    --> work like after
  
3. but most devloper use upper code    
*/

// let todo_list = document.querySelector(".todo_list")
// todo_list.insertAdjacentHTML("afterbegin","<li>add todo using insertAdjacentHtml </li>")


// ------------------------------------ Clone Element -------------------------------------------
// let todo_list = document.querySelector(".todo_list")
// let li = document.createElement("li")
// li.textContent = "this is li"
// todo_list.append(li) 

// let li2 = li.cloneNode();
// li2.textContent = "this is clone todo"
// todo_list.prepend(li2)


// ----------------------------------- Some Old Method -------------------------------------------

/*
1. many new method which see in upper, not support internet explore
  exa--> append , prepend , remove etc

2. some old  methods to support poor internet explore
    I. appendchild
    II. insertbefore;
    III. replacechild
    iV. removechild
*/

// -- appendChild

// let todo_list = document.querySelector(".todo_list")
// let newtod = document.createElement("li")
// newtod.textContent = "create by ravi"
// todo_list.appendChild(newtod)

// --- insertbefore

// let todo_list = document.querySelector(".todo_list")
// let newtod = document.createElement("li")
// newtod.textContent = "create by ravi"
// let reference_li = document.querySelector(".reference_li")
// todo_list.insertBefore(newtod, reference_li)


// --- replacechild

// let todo_list = document.querySelector(".todo_list")
// let newtod = document.createElement("li")
// newtod.textContent = "create by ravi"
// let reference_li = document.querySelector(".reference_li")
// todo_list.replaceChild(newtod,reference_li)


// --- removechild

// let todo_list = document.querySelector(".todo_list")
// let reference_li = document.querySelector(".reference_li")
// todo_list.removeChild(reference_li)



