// ---------------------------------- SEE THIS CODE IN BROWSER TERMINAL


//------------------------------ Arrow function with "This" keyword----------------------------



// -------------********** Arrow method without using "This" keyword
// let myObj = {
//     Name:'ravi',
//     age:21,
//     wish:()=>{
//         console.log('Happy Birthday ')

//     }
// }
// myObj.wish()


// -----------*********** Arrow method with "This" keyword
/*
1. when we use "This" keyword in Arrow method then "This" keyword represent in global object not object literal

*/
// let myObj = {
//     Name:'ravi',
//     age:21,
//     wish:()=>{
//         console.log(this)

//     }
// }
// myObj.wish()

// ------ so when we try ObjectName.Name then code find Name key in global object which is not present , so give output is undefined

// let myObj2 = {
//     Name:'ravi',
//     age:21,
//     wish:()=>{
//         console.log(this.Name)

//     }
// }
// myObj2.wish()


// function myfun(){
//     console.log('hello ravi')
// }
// console.log(this.myfun())


// ------------------******************* short syntex of method
// let myobj = {
//     Name:'ravi',
//     age:21,
//     inf0(){
//         console.log('hay ravi how are you')
//     }
// }
// myobj.inf0()