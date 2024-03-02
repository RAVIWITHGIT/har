// ----------------------------- getter and setters ------------------------------------------------

// -----------*************** getter method

/*
1. if we make a method in class and call method of class then we call method like this 
    --> methodName()

2. using getter method we not require parentheses () using call method
3. mean we can call method like property    
*/


// -------- without using getter we call class method

// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age;
//     }
//     fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }

// }

// const Person1 = new Person('ravi','lakshakar',21)
// console.log(Person1.fullName())



// -------- with using getter we call class method like proerties , but we can not call method using parenthese

// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }

// }

// const Person1 = new Person('ravi','lakshakar',21)
// console.log(Person1.fullName)



// ---------------************** change properties of class

// --- first way

// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }

//     changeName(first,last){
//         this.firstName = first
//         this.lastName = last
//     }

// }

// const Person1 = new Person('ravi','lakshakar',21)
// console.log(Person1.firstName)
// console.log(Person1.lastName)
// Person1.changeName('shiv','lakshakar')
// console.log(Person1.firstName)
// console.log(Person1.lastName)


// --------- second way
// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }


// }

// const Person1 = new Person('ravi','lakshakar',21)
// console.log(Person1.firstName)
// console.log(Person1.lastName)
// Person1.firstName = 'ranu'
// Person1.lastName = 'lakshakar'
// console.log(Person1.firstName)
// console.log(Person1.lastName)


// ---------------**************** setter method

/*
1. upper we see change properties two way 
2 . here we change class properties using setter method
*/
class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set setName(getvalue){
        const [firstName,lastName] = getvalue.split(" ")
        this.firstName = firstName
        this.lastName = lastName

    }


}

const Person1 = new Person('ravi','lakshakar',21)
// console.log(Person1.firstName)
// console.log(Person1.lastName)

// note----> here setName is method of class and we here use method as properties using set keyword

// Person1.setName = 'shiv lakshakar'
// console.log(Person1.firstName)
// console.log(Person1.lastName)
