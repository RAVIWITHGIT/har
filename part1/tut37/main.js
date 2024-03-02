//----------------------------------- Clone Using Object--------------------------------------------

/* 
1. if we make a object and we want same object then we clone object for create same object
2. we can clone object 2 type 
   I. spread oprator
   II. Object.assign(Name cloning object)

*/


// ---------********* before use upper method for clone object , we try self to clone object

// this is wrong way create clone object because both varaible same memory address so if we chage any one object then both object change but we can not want this both object change , only one object change
// let myobj = {
//     name:'ravi',
//     age:21
// }
// let myobj2 = myobj
// console.log(myobj)
// console.log(myobj2)

// ----*****

// let myobj = {
//     name:'ravi',
//     age:21
// }
// let myobj2 = myobj

// myobj.gender = 'male'

// console.log(myobj)
// console.log(myobj2)


// ----------------************ use spread oprator for clone object
// let myobj = {
//     name:'ravi',
//     age:21
// }

// let myobj2 = {...myobj}
// myobj.gender = 'male'
// console.log(myobj)
// console.log(myobj2)


//---------------************ use Object.assing for clone object
// let myobj = {
//     name:'ravi',
//     age:21
// }

// let myobj2 = Object.assign({},myobj)
// myobj.gender = 'male'
// console.log(myobj)
// console.log(myobj2)


//---------------------------------------- Optional Chaining-----------------------------------------

/*
1. if we try console.log any propertis of nested  object  which is not exist then give error
2. but in future add nested object  then we use optionl chaining
3. optional chaining if any one not exist then give undefind not give error 
4. genrally option chaining use in nested object
*/


// ------***** before use optional chaining we try console.log code which not exist

// let myobj = {
//     name:'ravi',
//     age:21
// }

// console.log(myobj.address.houseNumber)


// -------************** use optional chaining , symbol is -> ?

// ----**** note --> optional chaining symbol (?) mean this code is exist or not if this code not exist then  does not check forward code and print undefined and if code is exist then move forward code
// let myobj = {
//     name:'ravi',
//     age:21
// }

// console.log(myobj.address?.houseNumber)

// let myobj;
// console.log(myobj.address)
// console.log(myobj?.address)



