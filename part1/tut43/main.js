// -------------- SEE CODE IN BROWSER

// ----------------************ function properties  *************** ---------------------------

/*
1. function combination of function and object

2. why we say function is object becasue we add properties in function like we used to add key in the object

3. function also has its own name properties that we can assess to use what is name of function 

4 . we can see properites of function using console.log(window) or console.log(this)

*/

// ---- use name properties of function
// function myfun() {
//     console.log('hello ravi')
    
// }

// myfun()
// console.log('function name is', myfun.name)


// ----- add own properties which see using console.log(this) or console.log(window)
// function myfun() {
//     console.log('hello ravi')
    
// }
// myfun.addOwnproperties = 'this is my own proerties'
// myfun.addSecondproperties = 'this is my second proerties'
// console.log(window)
// console.log(myfun.addOwnproperties)
// console.log(myfun.addSecondproperties)


// ----------------------************** prototype of function ***********--------------------------

/*
1. when we create a function , the function provides us with an empty object and it is called prototype
2 . prototype is avaialbe only in function and __proto__ present in object

3 . function provides a blank object , so we can add key value pair in blank object of function , and blank object is prototype

*/

// ------- see prototype or blank object

// function myfun() {
//     console.log('hello ravi')
    
// }
// console.log(myfun.prototype)


// --------**** add own key value pair
// function myfun() {
//     console.log('hello ravi')
    
// }
// myfun.prototype.name = 'ravi'
// myfun.prototype.age = 21
// myfun.prototype.wish = function (){
//     return 'happy birthday'
// }
// console.log(myfun.prototype)
// console.log(myfun.prototype.name)
// console.log(myfun.prototype.wish())


// ----------************* SEE REAL LIFE EXAMPLE USING TUT42 CODE

// -- without using prototype

// let userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} year old`;
//     },
//     is18: function(){
//         return this.age >= 18;
//     },
//     wish:function(){
//         return `wish you happy birthday ${this.firstName}`
//     }
// }

// function multiObj2(firstName,lastName,age,city,hobbie) {
//     let user = Object.create(userMethods)  //atteched userMethod so we not make method in user object

//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.age = age;
//     user.city = city;
//     user.hobbie = hobbie
//     return user
    
// }

// let us1 = multiObj2('ranu','lakshakar',23,'bassi','study')
// console.log(us1)
// console.log(us1.about())
// console.log(us1.is18())
// console.log(us1.wish())


// ---- using prototype of function


function multiObj2(firstName,lastName,age,city,hobbie) {
    let user = Object.create(multiObj2.prototype)  //atteched function prototype

    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.city = city;
    user.hobbie = hobbie
    return user
    
}
multiObj2.prototype.about = function(){
    return `${this.firstName} is ${this.age} year old`;
}
multiObj2.prototype.is18 =  function(){
    return this.age >= 18;
}

multiObj2.prototype.wish = function(){
    return `wish you happy birthday ${this.firstName}`
}

console.log(multiObj2.prototype)

let us1 = multiObj2('ranu','lakshakar',23,'bassi','study')
console.log(us1)
console.log(us1.about())
console.log(us1.is18())
console.log(us1.wish())
console.log(window)



