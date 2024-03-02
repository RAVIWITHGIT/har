// ------------------------------- hasOwnProperty in javascript --------------------------------

/* 
1. new keyword make a object , we can access all value using key 
2. function constructor make a blank object and we add key using prototype and we also access prototype key 
3. hasOwn Property does it help in doing that The key which we access is own object or Prototype object key


*/

function MultiObj3(firstName,lastName,age,city,hobbie) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
    this.hobbie = hobbie
    
}
MultiObj3.prototype.gender = 'male'
MultiObj3.prototype.about = function(){
    return `${this.firstName} is ${this.age} year old`;
}
MultiObj3.prototype.is18 =  function(){
    return this.age >= 18;
}

MultiObj3.prototype.wish = function(){
    return `wish you happy birthday ${this.firstName}`
}


let us2 = new MultiObj3('ranu','lakshakar',23,'bassi','study')

// ---------- access all key of object
// for(let key in us2){
//     console.log(key)

// }

// ----------- checke key is prototype key or original object key
// for(let key in us2){
//     if(us2.hasOwnProperty(key)){
//         console.log(key)

//     }

// }


// ----------------------------------------see array prototype and array method-------------------

//-------------******************* we can create array in two ways.

// ----- first type
// let arr = [1,2,3,4,5]
// console.log(arr)

// ------ second type
// let arr1 = new Array(1,2,3,4,5)
// console.log(arr1)


// ----------------*************** see array method
/*
1. when make array - let arr = [1,2,3,4,5] ,
2.  indirectly javascript make array using this --> let arr = new Array(1,2,3,4,5)
3.  in the case of array, the new keyword create a prototype of array. using the prototype we can access the metods of array becasue array method present in array prototype

*/


let arr = new Array(1,2,3,4,5)
// see array method in browser
console.log(Array.prototype)


// second type we see array prototype
let arr2 = [1,2,3,4,5]
console.log(Object.getPrototypeOf(arr2))



