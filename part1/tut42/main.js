// ----------************ SEE THIS CODE IN BROWSER TERMINAL

// ------*************** UNDERDSTAND ABOUT OBJECT.CREAT() , __PROTO__ , IMPROVE TUT41 CODE ***------


// -------- before understand Object.creat() , see some code

// if we want make multiple object and we use same code in multiple object ,this way make this but this is wrong and long way

// let myobj1 = {
//     firstName:'ravi',
//     age:21
// }

// let myobj2 = {
//     firstName:'ravi',
//     age:21,
//     from:'bassi'
// }


// -----------------*************** OBJECT.CREATE()
/*
1. if some key value pair same in multiple object ,then we make only one object with same key value pair and atteched with other object use Object.create() method

2. if any key value pair not present in object then Object.create() method help to find key in attached object

3. we can also create on key value pair in child object
*/


// there was no key named firstName in myobj2, still we accessed it from myobj2 using Object.create() method
// let myobj1 = {
//     firstName:'ravi',
//     age:21
// }

// let myobj2 = Object.create(myobj1)
// myobj2.from = 'bassi'
// console.log(myobj2)
// console.log(myobj2.from)
// console.log(myobj2.firstName)


// -----------******************* __proto__

/*
1. when make two object myobj1 and myobj2 , myobj2 atteched with myobj1 using Object.create() method

2. myobj1 is store in __proto__  of myobj2 and if any key not found in myobj2 then find key in __proto__ properties of myobj2 
3. myobj1 store in __proto__ of myobj2 , so find key 

4. we can see myobj1 in __proto__ in console

5. we can access myobj1 using myobj2.__proto__

6. __proto__ and [[Prototype]] both are same

*/

// let myobj1 = {
//     firstName:'ravi',
//     age:21
// }

// let myobj2 = Object.create(myobj1)
// myobj2.from = 'bassi'
// console.log(myobj2)
// console.log(myobj2.__proto__)


// -------------************ improve tut41 code using Object.creat()



let userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} year old`;
    },
    is18: function(){
        return this.age >= 18;
    },
    wish:function(){
        return `wish you happy birthday ${this.firstName}`
    }
}

function multiObj2(firstName,lastName,age,city,hobbie) {
    let user = Object.create(userMethods)  //atteched userMethod so we not make method in user object

    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.city = city;
    user.hobbie = hobbie
    return user
    
}

let us1 = multiObj2('ranu','lakshakar',23,'bassi','study')
console.log(us1)
console.log(us1.about())
console.log(us1.is18())
console.log(us1.wish())

