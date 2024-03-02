// ---------------------------- function inside function ----------------------------------------
// function app(){
//     const myfun = ()=>{
//         console.log('hello from myfunc')
//     }
//     const addtwo = (num1,num2)=>{
//         return num1 + num2
//     }

//     const mul = (num1,num2) => num1*num2

//     console.log(addtwo(5,4))
//     console.log('inside app')
//     myfun()

// }

// app()



// ------------------------- LEXICAL SCOPE IN JAVASCRIPT-----------------------------------

// lexical scope mean --> if a variable is not found in the inner function then it tries to find it in the outer function. this is called lexical scope

// function myapp(){
//     const value = 'my value so high'
//     function myfun(){
//         console.log('inside fun',value)
//     }
//     console.log('outer function')
//     myfun()
// }

// myapp()


// -------------------

// const value = 'my value so high'
// function myapp(){
//     function myfun(){
//         console.log('inside fun',value)
//     }
//     console.log('outer function')
//     myfun()
// }

// myapp()


//---------------------
// let value = 'my value so high'
// function myapp(){
//     function myfun(){
//         let value = 'hay'
//         function inn(){
//             console.log('inside fun',value)

//         }
//         inn()
//     }
//     console.log('outer function')
//     myfun()
// }

// myapp()


