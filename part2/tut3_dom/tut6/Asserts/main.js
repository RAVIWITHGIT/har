// ------------------------------------------- static list vs live list -----------------------------


/*
1. querySelectorAll hameid static list degi
2. when we add any element using javascript and after add we see all element in console using querySelectorAll  then we see only html file element show in console when we use querySelectorAll
3. mean querySelectorAll give only static list

*/
// let todo_list = document.querySelector(".todo_list")
// let allLi = document.querySelectorAll(".todo_list li")

// let sixli = document.createElement("li")
// sixli.textContent = "item 6 create by javascript"
// todo_list.append(sixli)
// console.log(allLi)

// -----------------------------

/*
1. getElementsBysomethis give live list

*/
// let todo_list = document.querySelector(".todo_list")
// let allli = todo_list.getElementsByTagName("li")

// let sixli = document.createElement("li")
// sixli.textContent = "item 6 create by javascript"
// todo_list.append(sixli)
// console.log(allli)