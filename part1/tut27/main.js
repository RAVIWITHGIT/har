// ------------------------------ hosting -------------------------------------------

// ************ we can call function before declear , this is only work on declartion function
// myfun()

// function myfun(){
//     console.log('hay ravi how are you')
// }

//************** if we try call function before initialisation of express function and arrow function then give error
// myfun1()

// let myfun1 = function (){
//     console.log('hay ravi')
// }

//************** if we try call function before initialisation of arrow function and arrow function then give error
// myfun2()

// let myfun2 = ()=>{
//     console.log('hello ravi')
// }


// ------------------------------ console.log varaible before initialisation-------------

// ****** we can console.log before initialisation in var varaible but print is undefind , not give error
// console.log(a)

// var a = 'ravi'


// **** but let and const case give error if we try console.log before initialisation
// console.log(a)

// let a = 'ravi'
// const a = 'hay ravi'
