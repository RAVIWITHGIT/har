// --------------------------- Static Method and Properties--------------------------------------

/*
1. when make Properties and method in class then we can only access using instance of class, mean we can only access using object of class
2. we can access method and Properties without make object and directly use class Name for access method and Properties
*/


class CreateUser{
    constructor(firstName,lastName,email,age,address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address
    }
    static dsc = 'this is Static Properties with use only className'

    static myStatic(){
        return "this is Static method with only call with className"
    }
    about(){
        return `${this.firstName} is ${this.age} year old`
    }
    is18(){
        return this.age >=18;
    }
    sing(){
        return "la la la la"
    }
}

let user1 = new CreateUser('ravi','lakshakar','myemail',21,'bassi')
console.log(user1.about())
console.log(CreateUser.myStatic())
console.log(user1.firstName)
console.log(CreateUser.dsc)