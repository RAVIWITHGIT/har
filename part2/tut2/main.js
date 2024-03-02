// -------------------------- Closures in Javascript----------------------------------------

// ---> closure gives you access to an outer function's scope from an inner function

// function printFullName(firstName,lastName){
//     function printName(){
//         console.log(firstName,lastName)
//     }
//     return printName;
// }

// const ans = printFullName('ravi','lakshakar')
// ans()

// ------------

// function hello(x){
//     const a = "varA"
//     const b = "varB"
//     return function(){
//         console.log(a,b,x)
//     }
// }

// const ans = hello("arg")
// ans();

// ------------------
// function myFunction(power){
//     return function(number){
//         return number**power
//     }
// }

// const cube = myFunction(3)
// const ans = cube(3);
// console.log(ans)

// -------- try to short the function using arrow function
// const myFunction = power=> number=> number**power

// const cube = myFunction(3)
// const ans = cube(3);
// console.log(ans)


// --------------------
function fun(){
    let a = true
    return function (){
        if(a){
            console.log("call the function")
            a = false
        }
        else{
            console.log('you already call the function upper')
        }

    }
}

let getfun = fun()
// getfun()
// getfun()

let getfun2 = fun()
// getfun2()
// getfun2()