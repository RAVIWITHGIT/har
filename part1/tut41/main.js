// --------------***************** CREATE MULTIPLE OBJECT USING FUNCTION *****************----------

function multiObj(firstName,lastName,age,city,hobbie) {
    let user = {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.city = city;
    user.hobbie = hobbie
    user.about = function(){
        return `${this.firstName} is ${this.age} year old`;
    }
    user.is18 = function(){
        return this.age >= 18;
    }
    return user
    
}
let user1 = multiObj('ravi','lakshakar',21,'bassi','codding')
// console.log(user1)
// console.log(user1.about())


let user2 = multiObj('shiv','lakshakar',22,'bassi','study')
// console.log(user2)
// console.log(user2.about())


// ----------------------********************** Good way make multiple object with method using function

/*
1.  upper  is not good way make multiple object 
2. becasue when we make diffrent object using function call then store method in diffrent varaible and varaible sotre in diffrent memory , so memory is increase but good devloper want less of use memory
3. so we will give a referece to the method so that the memory does not increase.

*/

let userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} year old`;
    },
    is18: function(){
        return this.age >= 18;
    }
}

function multiObj2(firstName,lastName,age,city,hobbie) {
    let user = {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.city = city;
    user.hobbie = hobbie
    user.about = userMethods.about
    user.is18 = userMethods.is18
    return user
    
}

let us1 = multiObj2('ranu','lakshakar',23,'bassi','study')
// console.log(us1)
// console.log(us1.about())
// console.log(us1.is18())