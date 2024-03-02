// -----------------------************* new keyword ******************-------------------------------

/*
1. new keyword create a  object which is this , mean object name is this

*/


// ---********* we can call this function is => constructor function

function createUser(firstName,age){
    //note --> here we can say "this" is {} object and add key value pair in "this" object 
    this.firstName = firstName  
    this.age = age
    console.log(this)
}

// new keyword make "this" object
let user1 = new createUser('ravi',21)


// ------********* constructor function return automatic return "this" object so we not mandatory write retur "this"

function createUser2(firstName,age){
    this.firstName = firstName  
    this.age = age
}

let user2 = new createUser2('ravi',21)


/* --------**************************************
1. new keyword automatic add function prototype in  __proto__ of "this" object
2. so we can not write Object.create(creteUser3.prototype) in "this" object
*/
function createUser3(firstName,age){
    this.firstName = firstName  
    this.age = age
}
createUser3.prototype.wish = function(){
    return 'happy birthday'
}

let user3 = new createUser3('ravi',21)
// console.log(user3.age)
// console.log(user3.wish())


// ---------------------*************** SEE REAL LIFE EXAMPLE USING TUT43 CODE


function multiObj2(firstName,lastName,age,city,hobbie) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
    this.hobbie = hobbie
    
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


let us1 = new multiObj2('ranu','lakshakar',23,'bassi','study')
console.log(us1)
console.log(us1.about())
console.log(us1.is18())
console.log(us1.wish())



// note -- > how devloper know that this function will be called using new keyword, so if we create a function which has to use the "new" keyword while calling it then we have to capitalize the first letter of the function

function MultiObj3(firstName,lastName,age,city,hobbie) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
    this.hobbie = hobbie
    
}
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
// console.log(us2)
// console.log(us2.about())