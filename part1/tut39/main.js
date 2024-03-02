// ----------------------------- call , apply , bind method of function --------------------------

// ---******* before understand call method see why use call method
/*
1. if we make one object and write one method and we want make same method in second object then we again write method in second object 
*/

// let myobj = {
//     firstName:'ravi',
//     age:21,
//     info:function(){
//         console.log(`name is ${this.firstName} and age is ${this.age}`)
//     }
// }
// myobj.info()

// let secondObj = {
//     firstName:'shiv',
//     age:22,
//     info:function(){
//         console.log(`name is ${this.firstName} and age is ${this.age}`)
//     }

// }

// secondObj.info()

// ------------------*************** use call() method
/*
1. if we make one object and write one method and we want make same method in second object then we again write method in second object 
2. using call() method we can not again write same method in second obj 
*/

// let myobj = {
//     firstName:'ravi',
//     age:21,
//     info:function(){
//         console.log(`name is ${this.firstName} and age is ${this.age}`)
//     }
// }

// let secondObj = {
//     firstName:'shiv',
//     age:22

// }

// myobj.info.call(secondObj)


// ----- with parameter

// let myobj = {
//     firstName:'ravi',
//     age:21,
//     info:function(city,hobbie){
//         console.log(`name is ${this.firstName} and age is ${this.age} from ${city} and hobbie ${hobbie}`)
//     }
// }

// let secondObj = {
//     firstName:'shiv',
//     age:22

// }

// myobj.info.call(myobj,'bassi','coding')
// myobj.info.call(secondObj,'bassi','study')

// ------- make function in outer of object

// function info(city,hobbie){
//     console.log(`name is ${this.firstName} and age is ${this.age} from ${city} and hobbie ${hobbie}`)
// }

// let myobj = {
//     firstName:'ravi',
//     age:21,
    
// }

// let secondObj = {
//     firstName:'ranu',
//     age:23

// }

// info.call(myobj,'bassi','coding')
// info.call(secondObj,'bassi','study')


// -----------------------------********************* apply() method

/*
1. apply() method same as call method but little diffrence is when we pass argumetent then we not write argumetn separately by using comma , rather we write all argumetn in square breaket []
*/

// let myobj ={
//     firstName:'ravi',
//     age:21,
//     info:function () {
//         console.log(`name is ${this.firstName} and age is ${this.age}`)
        
//     }

// }
// let secondObj ={
//     firstName:'shiv',
//     age:22,
    

// }
// myobj.info.call(secondObj)


// ----- use argumetn
// let myobj ={
//     firstName:'ravi',
//     age:21,
//     info:function (city,hobbies) {
//         console.log(`name is ${this.firstName} , age is ${this.age} from ${city} hobbie ${hobbies} `)
        
//     }

// }
// let secondObj ={
//     firstName:'shiv',
//     age:22,
    

// }
// myobj.info.apply(secondObj,["bassi","study"])


// ----------------------********************* bind() method

/* 
1. when we refer method in varaible and use This keyword then "This" keyword represent to global object not local object , but
2. using bind method "This " keyword refer to local object when use "This" keyword in object litteral
*/

// let myobj ={
//     firstName:'ravi',
//     age:21,
//     info:function () {
//         console.log(this.firstName)
        
//     }

// }

// let getfun = myobj.info
// getfun()

// ----- SEE THIS CODE IN BROWSER

// let myobj2 ={
//     firstName:'ravi',
//     age:21,
//     info:function () {
//         console.log(this)
        
//     }

// }

// let getfun2 = myobj2.info
// getfun2()



/*
1. if "This" keyword use in object litteral and we want method refere in varaible, using bind() method "This" keyword refer to object litteral
2. bind() method return function , we store return function in varaible and call varaible
*/

// let myobj ={
//     firstName:'ravi',
//     age:21,
//     info:function () {
//         console.log(this)
        
//     }

// }

// let getfun = myobj.info.bind(myobj)
// getfun()

//-----------------------------------

// let myobj ={
//     firstName:'ravi',
//     age:21,
//     info:function (city,hobbies) {
//         console.log(`name is ${this.firstName} , age is ${this.age} from ${city} hobbie ${hobbies} `)
        
//     }

// }
// let secondObj ={
//     firstName:'shiv',
//     age:22,
    

// }
// let getfun = myobj.info.bind(secondObj,'bassi','study')
// getfun()
